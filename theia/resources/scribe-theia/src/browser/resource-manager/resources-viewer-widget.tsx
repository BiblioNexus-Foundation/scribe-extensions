import * as React from "@theia/core/shared/react";
import {
  Message,
  ReactWidget,
  StorageService,
  WidgetManager,
  codicon,
} from "@theia/core/lib/browser";
import {
  inject,
  injectable,
  postConstruct,
} from "@theia/core/shared/inversify";
import { MessageService, URI, nls } from "@theia/core";
import ResourcesTable from "../../components/ResourcesManager/ResourcesTable";
import {
  ConfigResourceValues,
  DownloadResourceUtils,
  ScribeResource,
} from "./resources/types";
import { tnResource, twlResource } from "./resources";
import { WorkspaceService } from "@theia/workspace/lib/browser/workspace-service";
import { FileService } from "@theia/filesystem/lib/browser/file-service";

import { ResourceManagerUtils } from "./utils";
import { MainEditorLeftContribution } from "../widgets/MainEditorLeft";
import { BottomEditorLeftContribution } from "../widgets/BottomEditorLeft";
import { ResourceViewerOpener } from "./resource-viewer/resource-viewer-opener";
import { taResource } from "./resources/ta";
import { twResource } from "./resources/tw";

@injectable()
export class ResourcesViewerWidget extends ReactWidget {
  static ID = "resources-viewer";
  static LABEL = nls.localizeByDefault("Resources Viewer");

  @inject(FileService)
  protected readonly fs: FileService;

  @inject(WorkspaceService)
  protected readonly workspaceService: WorkspaceService;

  @inject(MessageService)
  protected readonly messageService: MessageService;

  @inject(ResourceManagerUtils)
  protected readonly resourcesManagerUtils: ResourceManagerUtils;

  @inject(WidgetManager)
  protected readonly widgetManager: WidgetManager;

  @inject(MainEditorLeftContribution)
  protected readonly mainEditorLeftContribution: MainEditorLeftContribution;

  @inject(BottomEditorLeftContribution)
  protected readonly bottomEditorLeftContribution: BottomEditorLeftContribution;

  @inject(StorageService)
  protected readonly memory: StorageService;

  @inject(ResourceViewerOpener)
  protected readonly resourceViewerOpener: ResourceViewerOpener;

  private downloadedResources: ConfigResourceValues[] = [];

  @postConstruct()
  protected init() {
    this.id = ResourcesViewerWidget.ID;
    this.title.label = ResourcesViewerWidget.LABEL;
    this.title.caption = ResourcesViewerWidget.LABEL;
    this.title.closable = false;
    this.title.iconClass = codicon("flame");
    this.node.tabIndex = 0;
  }

  protected onAfterAttach(msg: Message): void {
    super.onAfterAttach(msg);
    this.resourcesManagerUtils
      .getDownloadedResourcesFromProjectConfig()
      .then((resources) => {
        this.downloadedResources = resources ?? [];
        this.update();
      });
  }

  protected onUpdateRequest(msg: Message): void {
    this.resourcesManagerUtils
      .getDownloadedResourcesFromProjectConfig()
      .then((resources) => {
        this.downloadedResources = resources ?? [];
        super.onUpdateRequest(msg);
      });
  }

  protected registeredResources: ScribeResource[] = [
    tnResource,
    twlResource,
    taResource,
    twResource,
  ];

  render() {
    const resourcesTypes = this.registeredResources.map((resource) => ({
      value: resource.id,
      label: resource.displayLabel,
      getTableDisplayData: resource.getTableDisplayData,
      downloadHandler: <ResourceInfo extends {}>(resourceInfo: ResourceInfo) =>
        this._downloadResource(resourceInfo, resource.downloadResource),
    }));

    const openHandler = async (resourceInfo: ConfigResourceValues) => {
      const resourceType = this.registeredResources.find(
        (resource) => resource.id === resourceInfo.type
      );

      if (!resourceType) {
        await this.messageService.error("Resource type not found");
        return;
      }

      await this.resourceViewerOpener.open(
        resourceInfo,
        resourceType.openHandlers
      );
    };

    return (
      <div className="flex flex-col mx-4">
        <ResourcesTable
          resourcesTypes={resourcesTypes}
          downloadedResources={this.downloadedResources}
          openResource={openHandler}
        />
      </div>
    );
  }

  async _downloadResource<TResourceInfo>(
    resourceInfo: TResourceInfo,
    downloadHandler: (
      resourceInfo: TResourceInfo,
      { fs, resourceFolderUri }: DownloadResourceUtils
    ) => Promise<ConfigResourceValues>
  ) {
    try {
      const currentFolderURI = (await this.workspaceService.roots)?.[0]
        .resource;

      if (!currentFolderURI) {
        await this.messageService.error(
          "Please open a workspace folder to download resources"
        );
        return;
      }

      const fs = this.fs;

      const resourceFolderUri = currentFolderURI.withPath(
        currentFolderURI.path.join(".project", "resources")
      );

      const prog = await this.messageService.showProgress({
        text: "Downloading resource ...",
      });

      const downloadedResource = await downloadHandler(resourceInfo, {
        fs,
        resourceFolderUri,
      });

      prog.report({ message: "Updating the configuration" });

      const updatedDownloadedResourcePath = {
        ...downloadedResource,
        localPath: downloadedResource.localPath.includes(
          currentFolderURI.path.fsPath()
        )
          ? downloadedResource.localPath.replace(
              currentFolderURI.path.fsPath(),
              ""
            )
          : downloadedResource.localPath,
      };

      await this.resourcesManagerUtils.addDownloadedResourceToProjectConfig(
        updatedDownloadedResourcePath
      );

      this.update();
      prog.cancel();

      this.messageService.info("Resource downloaded successfully");
    } catch (error) {
      console.error(error);
      await this.messageService.error("Unable to download resource ...");
    }
  }

  async openResourceWidget() {}
}
