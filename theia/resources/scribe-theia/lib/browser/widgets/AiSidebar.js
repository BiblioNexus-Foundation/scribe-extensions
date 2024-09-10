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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var AiSidebar_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiSidebarContribution = exports.AiSidebarCommand = exports.AiSidebar = void 0;
const browser_1 = require("@theia/core/lib/browser");
const React = __importStar(require("@theia/core/shared/react"));
const inversify_1 = require("@theia/core/shared/inversify");
const browser_2 = require("@theia/core/lib/browser");
const frontend_application_state_1 = require("@theia/core/lib/browser/frontend-application-state");
const browser_3 = require("@theia/workspace/lib/browser");
const ScrollArea_1 = require("../../components/ui/ScrollArea");
const Button_1 = __importDefault(require("../../components/Button"));
const icons_react_1 = require("@tabler/icons-react");
const TextArea_1 = require("../../components/ui/TextArea");
const QuestionCard_1 = __importDefault(require("../../components/QuestionCard"));
let AiSidebar = AiSidebar_1 = class AiSidebar extends browser_1.ReactWidget {
    init() {
        this.doInit();
    }
    async doInit() {
        this.id = AiSidebar_1.ID;
        this.title.label = AiSidebar_1.LABEL;
        this.title.caption = AiSidebar_1.LABEL;
        this.title.closable = false;
        this.update();
    }
    onActivateRequest(msg) {
        super.onActivateRequest(msg);
        const elArr = this.node.getElementsByTagName("a");
        if (elArr && elArr.length > 0) {
            elArr[0].focus();
        }
    }
    render() {
        return (React.createElement(ScrollArea_1.ScrollArea, { className: "w-full h-full overflow-y-auto pb-2" },
            React.createElement(ScrollArea_1.ScrollBar, { orientation: "vertical" }),
            React.createElement("div", { className: "flex items-center sticky dark:bg-zinc-950 bg-white  top-0 z-20 gap-[5px] border-b py-2.5 px-2 dark:border-zinc-900 border-zinc-200 justify-center" },
                React.createElement(Button_1.default, { label: "Discuss", className: "dark:border-cyan-900 bg-cyan-100 hover:bg-cyan-200 dark:bg-cyan-950  border-cyan-300 text-cyan-700" }),
                React.createElement(Button_1.default, { label: "Suggest" }),
                React.createElement(Button_1.default, { label: "Checks" })),
            React.createElement("div", { className: "space-y-2.5   px-5 py-2.5" },
                React.createElement(QuestionCard_1.default, { isAudio: true }),
                React.createElement(QuestionCard_1.default, { isImage: true }),
                React.createElement(QuestionCard_1.default, null),
                React.createElement(QuestionCard_1.default, null),
                React.createElement(QuestionCard_1.default, null),
                React.createElement("div", { className: " absolute bottom-0 pt-4 pb-[11px] bg-white dark:bg-zinc-950 w-full left-0 px-5" },
                    React.createElement("div", { className: "relative" },
                        React.createElement(TextArea_1.Textarea, { className: "h-20", placeholder: "Ask AI Bot some questions" }),
                        React.createElement("div", { className: "flex absolute bottom-2.5 right-2.5 items-center gap-2.5" },
                            React.createElement(Button_1.default, { size: "icon", className: "dark:bg-cyan-500 bg-cyan-400 hover:bg-cyan-500 dark:hover:bg-cyan-400 text-zinc-800 dark:text-black  dark:border-cyan-700", icon: React.createElement(icons_react_1.IconPhoto, { size: 12, stroke: 2, strokeLinejoin: "miter" }) }),
                            React.createElement(Button_1.default, { size: "icon", className: "dark:bg-cyan-500 bg-cyan-400 hover:bg-cyan-500 dark:hover:bg-cyan-400 text-zinc-800 dark:text-black  dark:border-cyan-700", icon: React.createElement(icons_react_1.IconMicrophone, { size: 12, stroke: 2, strokeLinejoin: "miter" }) }),
                            React.createElement(Button_1.default, { size: "icon", className: "dark:bg-cyan-500 bg-cyan-400 hover:bg-cyan-500 dark:hover:bg-cyan-400 text-zinc-800 dark:text-black  dark:border-cyan-700", icon: React.createElement(icons_react_1.IconPhoto, { size: 12, stroke: 2, strokeLinejoin: "miter" }) })))))));
    }
};
exports.AiSidebar = AiSidebar;
AiSidebar.ID = "scribe.ai-sidebar";
AiSidebar.LABEL = "AI Sidebar";
__decorate([
    (0, inversify_1.postConstruct)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AiSidebar.prototype, "init", null);
exports.AiSidebar = AiSidebar = AiSidebar_1 = __decorate([
    (0, inversify_1.injectable)()
], AiSidebar);
/**
 * Triggers opening the `AiSidebar`.
 */
exports.AiSidebarCommand = {
    id: AiSidebar.ID,
    label: AiSidebar.LABEL,
};
let AiSidebarContribution = class AiSidebarContribution extends browser_2.AbstractViewContribution {
    constructor() {
        super({
            widgetId: AiSidebar.ID,
            widgetName: AiSidebar.LABEL,
            defaultWidgetOptions: {
                area: "right",
            },
        });
    }
    async onStart(app) {
        this.stateService
            .reachedState("ready")
            .then(() => this.openView({ reveal: true }));
    }
    registerCommands(registry) {
        registry.registerCommand(exports.AiSidebarCommand, {
            execute: () => this.openView({ reveal: true }),
        });
    }
    registerMenus(menus) {
        menus.registerMenuAction(browser_2.CommonMenus.HELP, {
            commandId: exports.AiSidebarCommand.id,
            label: exports.AiSidebarCommand.label,
            order: "a10",
        });
    }
};
exports.AiSidebarContribution = AiSidebarContribution;
__decorate([
    (0, inversify_1.inject)(frontend_application_state_1.FrontendApplicationStateService),
    __metadata("design:type", frontend_application_state_1.FrontendApplicationStateService)
], AiSidebarContribution.prototype, "stateService", void 0);
__decorate([
    (0, inversify_1.inject)(browser_3.WorkspaceService),
    __metadata("design:type", browser_3.WorkspaceService)
], AiSidebarContribution.prototype, "workspaceService", void 0);
exports.AiSidebarContribution = AiSidebarContribution = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], AiSidebarContribution);
//# sourceMappingURL=AiSidebar.js.map