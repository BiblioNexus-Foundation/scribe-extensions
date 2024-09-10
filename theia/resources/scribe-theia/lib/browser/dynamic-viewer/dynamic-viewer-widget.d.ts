import { ReactWidget } from "@theia/core/lib/browser";
import { ReactNode } from "@theia/core/shared/react";
import { FileService } from "@theia/filesystem/lib/browser/file-service";
export declare class DynamicViewerWidget extends ReactWidget {
    static FACTORY_ID: string;
    id: string;
    resourceId: string;
    constructor(resourceId: string);
    protected readonly fs: FileService;
    protected onUpdateRequest(msg: any): void;
    protected init(): void;
    render(): ReactNode;
}
//# sourceMappingURL=dynamic-viewer-widget.d.ts.map