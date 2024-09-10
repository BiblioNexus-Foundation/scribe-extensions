import { CommandContribution, CommandRegistry, MessageService } from "@theia/core";
import { interfaces } from "@theia/core/shared/inversify";
import * as React from "@theia/core/shared/react";
import { WorkspaceService } from "@theia/workspace/lib/browser";
import { AbstractToolbarContribution } from "@theia/toolbar/lib/browser/abstract-toolbar-contribution";
import { ReactInteraction } from "@theia/toolbar/lib/browser/toolbar-constants";
export declare const LAYOUT_COMMAND: {
    id: string;
    category: string;
    label: string;
};
export declare const SAVE_COMMAND: {
    id: string;
    category: string;
    label: string;
};
export declare const OPEN_COMMAND: {
    id: string;
    category: string;
    label: string;
};
export declare const LOCK_COMMAND: {
    id: string;
    category: string;
    label: string;
};
export declare const NOTIFICATION_COMMAND: {
    id: string;
    category: string;
    label: string;
};
export declare const bindAllToolbarContributions: (bind: interfaces.Bind) => void;
export declare class LayoutsToolbarContribution extends AbstractToolbarContribution implements CommandContribution {
    protected readonly workspaceService: WorkspaceService;
    protected readonly messageService: MessageService;
    static ID: string;
    id: string;
    protected handleLayoutClick: (e: ReactInteraction<HTMLSpanElement>) => void;
    protected handleSaveClick: (e: ReactInteraction<HTMLSpanElement>) => void;
    protected handleOpenClick: (e: ReactInteraction<HTMLSpanElement>) => void;
    protected handleNotificationClick: (e: ReactInteraction<HTMLSpanElement>) => void;
    protected handleLockClick: (e: ReactInteraction<HTMLSpanElement>) => void;
    protected doHandleLayoutClick(e: ReactInteraction<HTMLSpanElement>): void;
    protected doHandleSaveClick(e: ReactInteraction<HTMLSpanElement>): void;
    protected doHandleLockClick(e: ReactInteraction<HTMLSpanElement>): void;
    protected doHandleOpenClick(e: ReactInteraction<HTMLSpanElement>): void;
    protected doHandleNotificationClick(e: ReactInteraction<HTMLSpanElement>): void;
    render(): React.ReactNode;
    registerCommands(registry: CommandRegistry): void;
}
//# sourceMappingURL=toolbar-contributions.d.ts.map