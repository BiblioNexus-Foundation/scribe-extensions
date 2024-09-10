import * as React from "@theia/core/shared/react";
import { Message, ReactWidget, StorageService, WidgetManager } from "@theia/core/lib/browser";
import { MessageService } from "@theia/core";
import { ConfigResourceValues, DownloadResourceUtils, ScribeResource } from "./resources/types";
import { WorkspaceService } from "@theia/workspace/lib/browser/workspace-service";
import { FileService } from "@theia/filesystem/lib/browser/file-service";
import { ResourceManagerUtils } from "./utils";
import { MainEditorLeftContribution } from "../widgets/MainEditorLeft";
import { BottomEditorLeftContribution } from "../widgets/BottomEditorLeft";
import { ResourceViewerOpener } from "./resource-viewer/resource-viewer-opener";
export declare class ResourcesViewerWidget extends ReactWidget {
    static ID: string;
    static LABEL: string;
    protected readonly fs: FileService;
    protected readonly workspaceService: WorkspaceService;
    protected readonly messageService: MessageService;
    protected readonly resourcesManagerUtils: ResourceManagerUtils;
    protected readonly widgetManager: WidgetManager;
    protected readonly mainEditorLeftContribution: MainEditorLeftContribution;
    protected readonly bottomEditorLeftContribution: BottomEditorLeftContribution;
    protected readonly memory: StorageService;
    protected readonly resourceViewerOpener: ResourceViewerOpener;
    private downloadedResources;
    protected init(): void;
    protected onAfterAttach(msg: Message): void;
    protected onUpdateRequest(msg: Message): void;
    protected registeredResources: ScribeResource[];
    render(): React.JSX.Element;
    _downloadResource<TResourceInfo>(resourceInfo: TResourceInfo, downloadHandler: (resourceInfo: TResourceInfo, { fs, resourceFolderUri }: DownloadResourceUtils) => Promise<ConfigResourceValues>): Promise<void>;
    openResourceWidget(): Promise<void>;
}
//# sourceMappingURL=resources-viewer-widget.d.ts.map