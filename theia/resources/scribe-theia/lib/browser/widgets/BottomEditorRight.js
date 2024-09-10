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
var BottomEditorRightWidget_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BottomEditorRightContribution = exports.BottomEditorRightWidget = void 0;
const browser_1 = require("@theia/core/lib/browser");
const React = __importStar(require("@theia/core/shared/react"));
const inversify_1 = require("@theia/core/shared/inversify");
const browser_2 = require("@theia/core/lib/browser");
const frontend_application_state_1 = require("@theia/core/lib/browser/frontend-application-state");
const browser_3 = require("@theia/workspace/lib/browser");
const Button_1 = __importDefault(require("../../components/Button"));
let BottomEditorRightWidget = BottomEditorRightWidget_1 = class BottomEditorRightWidget extends browser_1.ReactWidget {
    init() {
        this.doInit();
    }
    async doInit() {
        this.id = BottomEditorRightWidget_1.ID;
        this.title.label = BottomEditorRightWidget_1.LABEL;
        this.title.caption = BottomEditorRightWidget_1.LABEL;
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
        return (React.createElement(React.Fragment, null,
            React.createElement("p", { className: "font-semibold text-xs text-center tracking-wide leading-4 dark:text-zinc-50 text-zinc-700" }, "Tsv translation notes english"),
            React.createElement("div", { className: "mt-2.5 rounded-lg flex items-center justify-between gap-[5px] dark:bg-zinc-900 bg-zinc-200  p-[5px]" },
                React.createElement(Button_1.default, { label: "Book", className: "dark:bg-zinc-800 bg-zinc-50 hover:bg-zinc-100 dark:text-zinc-50 text-zinc-700 w-1/3 uppercase font-semibold" }),
                React.createElement(Button_1.default, { label: "Chapter", className: "dark:bg-zinc-800 bg-zinc-50 hover:bg-zinc-100 dark:text-zinc-50 text-zinc-700 w-1/3 uppercase font-semibold" }),
                React.createElement(Button_1.default, { label: "Verse", className: "dark:bg-zinc-800 bg-zinc-50 hover:bg-zinc-100 dark:text-zinc-50 text-zinc-700 w-1/3 uppercase font-semibold" })),
            React.createElement("article", { className: "dark:text-zinc-50 px-2 text-zinc-700 leading-[18px] mt-2.5   text-xs tracking-wide text-center whitespace-pre-line" }, "1:9b and was baptized by John in the Jordan. and [then] John baptized Jesus/him in the Jordan [River]. -OR- \u2022 [When he arrived at the place where John was preaching,| John baptized him in the Jordan [River]."),
            React.createElement("div", null)));
    }
};
exports.BottomEditorRightWidget = BottomEditorRightWidget;
BottomEditorRightWidget.ID = "scribe.editor.bottom.right";
BottomEditorRightWidget.LABEL = "Editor Bottom Right";
__decorate([
    (0, inversify_1.postConstruct)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BottomEditorRightWidget.prototype, "init", null);
exports.BottomEditorRightWidget = BottomEditorRightWidget = BottomEditorRightWidget_1 = __decorate([
    (0, inversify_1.injectable)()
], BottomEditorRightWidget);
let BottomEditorRightContribution = class BottomEditorRightContribution extends browser_2.AbstractViewContribution {
    constructor() {
        super({
            widgetId: BottomEditorRightWidget.ID,
            widgetName: BottomEditorRightWidget.LABEL,
            defaultWidgetOptions: {
                area: "main",
                mode: "split-right",
            },
        });
    }
    async onStart(app) {
        this.stateService
            .reachedState("ready")
            .then(() => this.openView({ reveal: true, area: "bottom", mode: "split-right" }));
    }
};
exports.BottomEditorRightContribution = BottomEditorRightContribution;
__decorate([
    (0, inversify_1.inject)(frontend_application_state_1.FrontendApplicationStateService),
    __metadata("design:type", frontend_application_state_1.FrontendApplicationStateService)
], BottomEditorRightContribution.prototype, "stateService", void 0);
__decorate([
    (0, inversify_1.inject)(browser_3.WorkspaceService),
    __metadata("design:type", browser_3.WorkspaceService)
], BottomEditorRightContribution.prototype, "workspaceService", void 0);
exports.BottomEditorRightContribution = BottomEditorRightContribution = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], BottomEditorRightContribution);
//# sourceMappingURL=BottomEditorRight.js.map