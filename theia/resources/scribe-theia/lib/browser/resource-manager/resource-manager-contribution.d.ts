import { AbstractViewContribution, ColorTheme, CssStyleCollector, FrontendApplication, FrontendApplicationContribution, StylingParticipant } from "@theia/core/lib/browser";
import { ResourcesViewerWidget } from "./resources-viewer-widget";
import { CommandRegistry } from "@theia/core";
export declare const TOGGLE_RESOURCE_MANAGER: {
    id: string;
};
export declare class ResourceManagerFrontendContribution extends AbstractViewContribution<ResourcesViewerWidget> implements FrontendApplicationContribution, StylingParticipant {
    constructor();
    protected init(): void;
    initializeLayout(app: FrontendApplication): Promise<void>;
    registerThemeStyle(theme: ColorTheme, collector: CssStyleCollector): void;
    registerCommands(commands: CommandRegistry): Promise<void>;
}
//# sourceMappingURL=resource-manager-contribution.d.ts.map