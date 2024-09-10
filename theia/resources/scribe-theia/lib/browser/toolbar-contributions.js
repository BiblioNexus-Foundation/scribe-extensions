"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var LayoutsToolbarContribution_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutsToolbarContribution = exports.bindAllToolbarContributions = exports.NOTIFICATION_COMMAND = exports.LOCK_COMMAND = exports.OPEN_COMMAND = exports.SAVE_COMMAND = exports.LAYOUT_COMMAND = void 0;
const core_1 = require("@theia/core");
const inversify_1 = require("@theia/core/shared/inversify");
const React = __importStar(require("@theia/core/shared/react"));
const browser_1 = require("@theia/workspace/lib/browser");
const abstract_toolbar_contribution_1 = require("@theia/toolbar/lib/browser/abstract-toolbar-contribution");
const toolbar_interfaces_1 = require("@theia/toolbar/lib/browser/toolbar-interfaces");
exports.LAYOUT_COMMAND = {
    id: "scribe.layout.view",
    category: "Layout",
    label: "Change Layout",
};
exports.SAVE_COMMAND = {
    id: "scribe.save.file",
    category: "File",
    label: "Save File",
};
exports.OPEN_COMMAND = {
    id: "scribe.open.file",
    category: "File",
    label: "Open File",
};
exports.LOCK_COMMAND = {
    id: "scribe.lock",
    category: "Lock",
    label: "Lock file",
};
exports.NOTIFICATION_COMMAND = {
    id: "scribe.notifications",
    category: "Notifications",
    label: "Show Notifications",
};
const bindAllToolbarContributions = (bind) => {
    bind(LayoutsToolbarContribution).toSelf().inSingletonScope();
    bind(toolbar_interfaces_1.ToolbarContribution).to(LayoutsToolbarContribution);
    bind(core_1.CommandContribution).to(LayoutsToolbarContribution);
};
exports.bindAllToolbarContributions = bindAllToolbarContributions;
let LayoutsToolbarContribution = LayoutsToolbarContribution_1 = class LayoutsToolbarContribution extends abstract_toolbar_contribution_1.AbstractToolbarContribution {
    constructor() {
        super(...arguments);
        this.id = LayoutsToolbarContribution_1.ID;
        this.handleLayoutClick = (e) => this.doHandleLayoutClick(e);
        this.handleSaveClick = (e) => this.doHandleSaveClick(e);
        this.handleOpenClick = (e) => this.doHandleOpenClick(e);
        this.handleNotificationClick = (e) => this.doHandleNotificationClick(e);
        this.handleLockClick = (e) => this.doHandleNotificationClick(e);
    }
    doHandleLayoutClick(e) {
        e.stopPropagation();
        this.commandService.executeCommand(exports.LAYOUT_COMMAND.id);
    }
    doHandleSaveClick(e) {
        e.stopPropagation();
        this.commandService.executeCommand(exports.SAVE_COMMAND.id);
    }
    doHandleLockClick(e) {
        e.stopPropagation();
        this.commandService.executeCommand(exports.SAVE_COMMAND.id);
    }
    doHandleOpenClick(e) {
        e.stopPropagation();
        this.commandService.executeCommand(exports.OPEN_COMMAND.id);
    }
    doHandleNotificationClick(e) {
        e.stopPropagation();
        this.commandService.executeCommand(exports.NOTIFICATION_COMMAND.id);
    }
    render() {
        return (React.createElement("div", { className: "toolbar-wrapper" },
            React.createElement("div", { role: "button", tabIndex: 0, className: "item enabled toolbar-item action-label", id: "easy-save-item-icon", onClick: this.handleSaveClick, title: "Save File" },
                React.createElement("div", { className: "codicon codicon-cloud-upload" }),
                React.createElement("span", null, "Save")),
            React.createElement("div", { role: "button", tabIndex: 0, className: "item enabled toolbar-item action-label", id: "easy-layout-item-icon", onClick: this.handleLayoutClick, title: "Change Layout" },
                React.createElement("div", { className: "codicon codicon-layout" }),
                React.createElement("span", null, "Layout")),
            React.createElement("div", { role: "button", tabIndex: 0, className: "item enabled toolbar-item action-label", id: "easy-open-item-icon", onClick: this.handleOpenClick, title: "Change Font" },
                React.createElement("div", { className: "codicon codicon-text-size" }),
                React.createElement("span", null, "Font Size")),
            React.createElement("div", { role: "button", tabIndex: 0, className: "item enabled toolbar-item action-label", id: "easy-open-item-icon", onClick: this.handleLockClick, title: "Lock File" },
                React.createElement("div", { className: "codicon codicon-lock" })),
            React.createElement("div", { role: "button", tabIndex: 0, className: "item enabled toolbar-item action-label", id: "easy-open-item-icon", onClick: this.handleNotificationClick, title: "Notifications" },
                React.createElement("div", { className: "codicon codicon-bell" }))));
    }
    registerCommands(registry) {
        registry.registerCommand(exports.LAYOUT_COMMAND, {
            execute: async () => {
                this.messageService.info("Change Layout - to be implemented, in command contribution");
            },
        });
        registry.registerCommand(exports.SAVE_COMMAND, {
            execute: async () => {
                this.messageService.info("Save File - to be implemented, in command contribution");
            },
        });
        registry.registerCommand(exports.OPEN_COMMAND, {
            execute: async () => {
                this.messageService.info("Open File - to be implemented, in command contribution");
            },
        });
        registry.registerCommand(exports.NOTIFICATION_COMMAND, {
            execute: async () => {
                this.messageService.info("Notifications - to be implemented, in command contribution");
            },
        });
        registry.registerCommand(exports.LOCK_COMMAND, {
            execute: async () => {
                this.messageService.info("Lock file - to be implemented, in command contribution");
            },
        });
    }
};
exports.LayoutsToolbarContribution = LayoutsToolbarContribution;
LayoutsToolbarContribution.ID = "scribe-theia-layout-toolbar-contribution";
__decorate([
    (0, inversify_1.inject)(browser_1.WorkspaceService),
    __metadata("design:type", browser_1.WorkspaceService)
], LayoutsToolbarContribution.prototype, "workspaceService", void 0);
__decorate([
    (0, inversify_1.inject)(core_1.MessageService),
    __metadata("design:type", core_1.MessageService)
], LayoutsToolbarContribution.prototype, "messageService", void 0);
exports.LayoutsToolbarContribution = LayoutsToolbarContribution = LayoutsToolbarContribution_1 = __decorate([
    (0, inversify_1.injectable)()
], LayoutsToolbarContribution);
//# sourceMappingURL=toolbar-contributions.js.map