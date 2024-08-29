import { WorkspaceService } from "@theia/workspace/lib/browser";
import { WidgetFactory } from "@theia/core/lib/browser";
import { ResourceViewerWidget, ResourceViewerWidgetHandlers } from "./resource-viewer-widget";
import { FileService } from "@theia/filesystem/lib/browser/file-service";
import { ConfigResourceValues } from "../resources/types";
export declare class ResourceViewerFactory implements WidgetFactory {
    readonly id: string;
    protected readonly fs: FileService;
    protected readonly workspaceService: WorkspaceService;
    createWidget(options: {
        resource: ConfigResourceValues;
        handlers: ResourceViewerWidgetHandlers<any>;
    }): ResourceViewerWidget<any>;
}
//# sourceMappingURL=resource-viewer-factory.d.ts.map