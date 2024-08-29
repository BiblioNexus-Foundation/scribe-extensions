import { ReactWidget } from "@theia/core/lib/browser";
import { ReactNode } from "@theia/core/shared/react";
import { ConfigResourceValues } from "../resources/types";
import { URI } from "@theia/core";
import { FileService } from "@theia/filesystem/lib/browser/file-service";
import { WorkspaceService } from "@theia/workspace/lib/browser/workspace-service";
export type Context = {
    fs: FileService;
    resourceUri: URI;
};
export type ResourceViewerWidgetHandlers<T extends {}> = {
    readResourceData: (uri: URI, fs: FileService) => Promise<T>;
    render: (data: T, ctx?: Context) => ReactNode | ReactNode[];
};
export declare class ResourceViewerWidget<TData extends {}> extends ReactWidget {
    private readonly fs;
    protected readonly workspaceService: WorkspaceService;
    static FACTORY_ID: string;
    id: string;
    resource: ConfigResourceValues;
    data: TData | null;
    handlers: ResourceViewerWidgetHandlers<TData>;
    workspaceUri: URI | null;
    resourceUri: URI | null;
    constructor(fs: FileService, workspaceService: WorkspaceService, resource: ConfigResourceValues, handlers: ResourceViewerWidgetHandlers<TData>);
    protected onUpdateRequest(msg: any): void;
    render(): ReactNode;
}
//# sourceMappingURL=resource-viewer-widget.d.ts.map