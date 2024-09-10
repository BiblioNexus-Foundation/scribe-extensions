import { WidgetFactory } from "@theia/core/lib/browser";
import { DynamicViewerWidget } from "./dynamic-viewer-widget";
export declare class DynamicViewerWidgetFactory implements WidgetFactory {
    readonly id: string;
    createWidget(options: {
        resourceId: string;
    }): DynamicViewerWidget;
}
//# sourceMappingURL=dynamic-viewer-widget-factory.d.ts.map