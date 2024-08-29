import {
  AbstractViewContribution,
  ColorTheme,
  CssStyleCollector,
  FrontendApplication,
  FrontendApplicationContribution,
  StylingParticipant,
} from "@theia/core/lib/browser";
import { ResourcesViewerWidget } from "./resources-viewer-widget";
import { RESOURCE_MANAGER_ID } from "./resources-manager-factory";
import { injectable, postConstruct } from "@theia/core/shared/inversify";
import { CommandRegistry, MaybePromise } from "@theia/core";
import { isHighContrast } from "@theia/core/lib/common/theme";

export const TOGGLE_RESOURCE_MANAGER = {
  id: "resource-manager.toggle",
};
@injectable()
export class ResourceManagerFrontendContribution
  extends AbstractViewContribution<ResourcesViewerWidget>
  implements FrontendApplicationContribution, StylingParticipant
{
  constructor() {
    super({
      viewContainerId: RESOURCE_MANAGER_ID,
      widgetId: ResourcesViewerWidget.ID,
      widgetName: ResourcesViewerWidget.LABEL,
      defaultWidgetOptions: {
        area: "left",
        rank: 200,
      },
      toggleCommandId: TOGGLE_RESOURCE_MANAGER.id,
    });
  }

  @postConstruct()
  protected init(): void {}

  async initializeLayout(app: FrontendApplication) {
    await this.openView({ reveal: true });
  }

  registerThemeStyle(theme: ColorTheme, collector: CssStyleCollector): void {
    const contrastBorder = theme.getColor("contrastBorder");
    if (contrastBorder && isHighContrast(theme.type)) {
      //   collector.addRule(`
      //             .t-siw-search-container .searchHeader .search-field-container {
      //                 border-color: ${contrastBorder};
      //             }
      //         `);
    }
  }
  override async registerCommands(commands: CommandRegistry) {
    super.registerCommands(commands);
    commands.registerCommand(TOGGLE_RESOURCE_MANAGER, {
      execute: () => this.openView({ reveal: true, activate: true }),
    });
  }
}
