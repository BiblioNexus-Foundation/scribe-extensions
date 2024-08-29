import { WorkspaceService } from "@theia/workspace/lib/browser";
import { WidgetFactory } from "@theia/core/lib/browser";
import { inject, injectable } from "@theia/core/shared/inversify";
import {
  ResourceViewerWidget,
  ResourceViewerWidgetHandlers,
} from "./resource-viewer-widget";
import { FileService } from "@theia/filesystem/lib/browser/file-service";
import { ConfigResourceValues } from "../resources/types";

@injectable()
export class ResourceViewerFactory implements WidgetFactory {
  readonly id = ResourceViewerWidget.FACTORY_ID;

  @inject(FileService)
  protected readonly fs: FileService;

  @inject(WorkspaceService)
  protected readonly workspaceService: WorkspaceService;

  createWidget(options: {
    resource: ConfigResourceValues;
    handlers: ResourceViewerWidgetHandlers<any>;
  }) {
    const widget = new ResourceViewerWidget(
      this.fs,
      this.workspaceService,
      options.resource,
      options.handlers
    );

    widget.title.closable = true;

    widget.render();

    return widget;
  }
}
