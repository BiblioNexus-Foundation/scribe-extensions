import { ApplicationShell, WidgetManager } from "@theia/core/lib/browser";
import { ResourceViewerWidgetHandlers } from "./resource-viewer-widget";
import { ConfigResourceValues } from "../resources/types";
export declare class ResourceViewerOpener {
    shell: ApplicationShell;
    widgetManager: WidgetManager;
    open<TData extends {}>(resource: ConfigResourceValues, handlers: ResourceViewerWidgetHandlers<TData>): Promise<void>;
}
//# sourceMappingURL=resource-viewer-opener.d.ts.map