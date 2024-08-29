import { ViewContainer, ViewContainerTitleOptions, WidgetFactory, WidgetManager } from "@theia/core/lib/browser";
export declare const RESOURCE_MANAGER_ID = "resource-manager-view-container";
export declare const RESOURCE_MANAGER_VIEW_CONTAINER_TITLE_OPTIONS: ViewContainerTitleOptions;
export declare class ResourceManagerFactory implements WidgetFactory {
    readonly id = "resource-manager-view-container";
    protected resourceViewerWidgetOptions: ViewContainer.Factory.WidgetOptions;
    protected readonly viewContainerFactory: ViewContainer.Factory;
    protected readonly widgetManager: WidgetManager;
    createWidget(): Promise<ViewContainer>;
}
//# sourceMappingURL=resources-manager-factory.d.ts.map