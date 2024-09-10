import {
  codicon,
  ViewContainer,
  ViewContainerTitleOptions,
  WidgetFactory,
  WidgetManager,
} from "@theia/core/lib/browser";
import { nls } from "@theia/core/lib/common/nls";
import { inject, injectable } from "@theia/core/shared/inversify";
import { ResourcesViewerWidget } from "./resources-viewer-widget";

export const RESOURCE_MANAGER_ID = "resource-manager-view-container";
export const RESOURCE_MANAGER_VIEW_CONTAINER_TITLE_OPTIONS: ViewContainerTitleOptions =
  {
    label: nls.localizeByDefault("Resource Manager"),
    iconClass: codicon("flame"),
    closeable: true,
  };

@injectable()
export class ResourceManagerFactory implements WidgetFactory {
  readonly id = RESOURCE_MANAGER_ID;

  protected resourceViewerWidgetOptions: ViewContainer.Factory.WidgetOptions = {
    canHide: false,
    initiallyCollapsed: true,
  };

  @inject(ViewContainer.Factory)
  protected readonly viewContainerFactory: ViewContainer.Factory;
  @inject(WidgetManager) protected readonly widgetManager: WidgetManager;

  async createWidget(): Promise<ViewContainer> {
    const viewContainer = this.viewContainerFactory({
      id: RESOURCE_MANAGER_ID,
      progressLocationId: "Resource Manager",
    });
    viewContainer.setTitleOptions(
      RESOURCE_MANAGER_VIEW_CONTAINER_TITLE_OPTIONS
    );
    const widget = await this.widgetManager.getOrCreateWidget(
      ResourcesViewerWidget.ID
    );
    viewContainer.addWidget(widget, this.resourceViewerWidgetOptions);
    return viewContainer;
  }
}


