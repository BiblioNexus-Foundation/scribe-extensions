import {
  CommandContribution,
  CommandRegistry,
  MessageService,
} from "@theia/core";
import { inject, injectable, interfaces } from "@theia/core/shared/inversify";
import * as React from "@theia/core/shared/react";
import { WorkspaceService } from "@theia/workspace/lib/browser";
import { AbstractToolbarContribution } from "@theia/toolbar/lib/browser/abstract-toolbar-contribution";
import { ReactInteraction } from "@theia/toolbar/lib/browser/toolbar-constants";
import { ToolbarContribution } from "@theia/toolbar/lib/browser/toolbar-interfaces";

export const LAYOUT_COMMAND = {
  id: "scribe.layout.view",
  category: "Layout",
  label: "Change Layout",
};

export const SAVE_COMMAND = {
  id: "scribe.save.file",
  category: "File",
  label: "Save File",
};

export const OPEN_COMMAND = {
  id: "scribe.open.file",
  category: "File",
  label: "Open File",
};
export const LOCK_COMMAND = {
  id: "scribe.lock",
  category: "Lock",
  label: "Lock file",
};
export const NOTIFICATION_COMMAND = {
  id: "scribe.notifications",
  category: "Notifications",
  label: "Show Notifications",
};

export const bindAllToolbarContributions = (bind: interfaces.Bind) => {
  bind(LayoutsToolbarContribution).toSelf().inSingletonScope();
  bind(ToolbarContribution).to(LayoutsToolbarContribution);
  bind(CommandContribution).to(LayoutsToolbarContribution);
};

@injectable()
export class LayoutsToolbarContribution
  extends AbstractToolbarContribution
  implements CommandContribution
{
  @inject(WorkspaceService)
  protected readonly workspaceService: WorkspaceService;

  @inject(MessageService)
  protected readonly messageService: MessageService;

  static ID = "scribe-theia-layout-toolbar-contribution";
  id = LayoutsToolbarContribution.ID;

  protected handleLayoutClick = (e: ReactInteraction<HTMLSpanElement>): void =>
    this.doHandleLayoutClick(e);
  protected handleSaveClick = (e: ReactInteraction<HTMLSpanElement>): void =>
    this.doHandleSaveClick(e);
  protected handleOpenClick = (e: ReactInteraction<HTMLSpanElement>): void =>
    this.doHandleOpenClick(e);
  protected handleNotificationClick = (
    e: ReactInteraction<HTMLSpanElement>
  ): void => this.doHandleNotificationClick(e);
  protected handleLockClick = (e: ReactInteraction<HTMLSpanElement>): void =>
    this.doHandleNotificationClick(e);
  protected doHandleLayoutClick(e: ReactInteraction<HTMLSpanElement>): void {
    e.stopPropagation();
    this.commandService.executeCommand(LAYOUT_COMMAND.id);
  }

  protected doHandleSaveClick(e: ReactInteraction<HTMLSpanElement>): void {
    e.stopPropagation();
    this.commandService.executeCommand(SAVE_COMMAND.id);
  }
  protected doHandleLockClick(e: ReactInteraction<HTMLSpanElement>): void {
    e.stopPropagation();
    this.commandService.executeCommand(SAVE_COMMAND.id);
  }
  protected doHandleOpenClick(e: ReactInteraction<HTMLSpanElement>): void {
    e.stopPropagation();
    this.commandService.executeCommand(OPEN_COMMAND.id);
  }
  protected doHandleNotificationClick(
    e: ReactInteraction<HTMLSpanElement>
  ): void {
    e.stopPropagation();
    this.commandService.executeCommand(NOTIFICATION_COMMAND.id);
  }
  render(): React.ReactNode {
    return (
      <div className="toolbar-wrapper">
        <div
          role="button"
          tabIndex={0}
          className="item enabled toolbar-item action-label"
          id="easy-save-item-icon"
          onClick={this.handleSaveClick}
          title="Save File"
        >
          <div className="codicon codicon-cloud-upload" />
          <span>Save</span>
        </div>
        <div
          role="button"
          tabIndex={0}
          className="item enabled toolbar-item action-label"
          id="easy-layout-item-icon"
          onClick={this.handleLayoutClick}
          title="Change Layout"
        >
          <div className="codicon codicon-layout" />
          <span>Layout</span>
        </div>

        <div
          role="button"
          tabIndex={0}
          className="item enabled toolbar-item action-label"
          id="easy-open-item-icon"
          onClick={this.handleOpenClick}
          title="Change Font"
        >
          <div className="codicon codicon-text-size" />
          <span>Font Size</span>
        </div>
        <div
          role="button"
          tabIndex={0}
          className="item enabled toolbar-item action-label"
          id="easy-open-item-icon"
          onClick={this.handleLockClick}
          title="Lock File"
        >
          <div className="codicon codicon-lock" />
        </div>
        <div
          role="button"
          tabIndex={0}
          className="item enabled toolbar-item action-label"
          id="easy-open-item-icon"
          onClick={this.handleNotificationClick}
          title="Notifications"
        >
          <div className="codicon codicon-bell" />
        </div>
      </div>
    );
  }

  registerCommands(registry: CommandRegistry): void {
    registry.registerCommand(LAYOUT_COMMAND, {
      execute: async () => {
        this.messageService.info(
          "Change Layout - to be implemented, in command contribution"
        );
      },
    });

    registry.registerCommand(SAVE_COMMAND, {
      execute: async () => {
        this.messageService.info(
          "Save File - to be implemented, in command contribution"
        );
      },
    });

    registry.registerCommand(OPEN_COMMAND, {
      execute: async () => {
        this.messageService.info(
          "Open File - to be implemented, in command contribution"
        );
      },
    });
    registry.registerCommand(NOTIFICATION_COMMAND, {
      execute: async () => {
        this.messageService.info(
          "Notifications - to be implemented, in command contribution"
        );
      },
    });
    registry.registerCommand(LOCK_COMMAND, {
      execute: async () => {
        this.messageService.info(
          "Lock file - to be implemented, in command contribution"
        );
      },
    });
  }
}
