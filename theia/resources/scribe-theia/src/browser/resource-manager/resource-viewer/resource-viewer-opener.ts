import { ApplicationShell, WidgetManager } from "@theia/core/lib/browser";
import { inject, injectable } from "@theia/core/shared/inversify";
import {
  ResourceViewerWidget,
  ResourceViewerWidgetHandlers,
} from "./resource-viewer-widget";
import { ConfigResourceValues } from "../resources/types";

@injectable()
export class ResourceViewerOpener {
  @inject(ApplicationShell)
  shell: ApplicationShell;

  @inject(WidgetManager)
  widgetManager: WidgetManager;

  async open<TData extends {}>(
    resource: ConfigResourceValues,
    handlers: ResourceViewerWidgetHandlers<TData>
  ): Promise<void> {
    const widget = await this.widgetManager.getOrCreateWidget(
      ResourceViewerWidget.FACTORY_ID,
      { resource, handlers }
    );

    await this.shell.addWidget(widget, {
      area: "main",
      rank: 200,
      mode: "tab-after",
    });

    widget.update();

    const tab = this.shell.getTabBarFor(widget);
  }
}
