import { Message, ReactWidget } from "@theia/core/lib/browser";
import * as React from "@theia/core/shared/react";
import { CommandRegistry, MenuModelRegistry } from "@theia/core/lib/common";
import { AbstractViewContribution, FrontendApplicationContribution, FrontendApplication } from "@theia/core/lib/browser";
import { FrontendApplicationStateService } from "@theia/core/lib/browser/frontend-application-state";
import { WorkspaceService } from "@theia/workspace/lib/browser";
export declare class AiSidebar extends ReactWidget {
    static readonly ID = "scribe.ai-sidebar";
    static readonly LABEL = "AI Sidebar";
    protected init(): void;
    protected doInit(): Promise<void>;
    protected onActivateRequest(msg: Message): void;
    protected render(): React.ReactNode;
}
/**
 * Triggers opening the `AiSidebar`.
 */
export declare const AiSidebarCommand: {
    id: string;
    label: string;
};
export declare class AiSidebarContribution extends AbstractViewContribution<AiSidebar> implements FrontendApplicationContribution {
    protected readonly stateService: FrontendApplicationStateService;
    protected readonly workspaceService: WorkspaceService;
    constructor();
    onStart(app: FrontendApplication): Promise<void>;
    registerCommands(registry: CommandRegistry): void;
    registerMenus(menus: MenuModelRegistry): void;
}
//# sourceMappingURL=AiSidebar.d.ts.map