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
var BottomEditorLeft_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BottomEditorLeftContribution = exports.BottomEditorLeft = void 0;
const browser_1 = require("@theia/core/lib/browser");
const React = __importStar(require("@theia/core/shared/react"));
const inversify_1 = require("@theia/core/shared/inversify");
const browser_2 = require("@theia/core/lib/browser");
const frontend_application_state_1 = require("@theia/core/lib/browser/frontend-application-state");
const browser_3 = require("@theia/workspace/lib/browser");
const Resizable_1 = require("../../components/ui/Resizable");
const Badge_1 = require("../../components/ui/Badge");
let BottomEditorLeft = BottomEditorLeft_1 = class BottomEditorLeft extends browser_1.ReactWidget {
    init() {
        this.doInit();
    }
    async doInit() {
        this.id = BottomEditorLeft_1.ID;
        this.title.label = BottomEditorLeft_1.LABEL;
        this.title.caption = BottomEditorLeft_1.LABEL;
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
        return (React.createElement(Resizable_1.ResizablePanelGroup, { direction: "vertical", className: "w-full" },
            React.createElement(Resizable_1.ResizablePanel, { defaultSize: 50 },
                React.createElement("div", { className: "px-5 py-2.5 space-y-5" },
                    React.createElement("div", { className: "flex items-center gap-2" },
                        React.createElement(Badge_1.Badge, { variant: "destructive" }, "Mark 1:9"),
                        React.createElement("p", { className: "tracking-wide text-xs font-semibold text-zinc-300 dark:text-zinc-700" }, "Alignment")),
                    React.createElement("p", { className: "dark:text-zinc-50 text-zinc-700 text-sm  font-medium tracking-wide leading-4" }, "Cierto dia, Jes\u00FAs lleg\u00F3 de Nazaret de Galilea, y Juan lo bautiz\u00F3 en el rio Jord\u00E1n."))),
            React.createElement(Resizable_1.ResizableHandle, null),
            React.createElement(Resizable_1.ResizablePanel, { className: "p-5", defaultSize: 50 },
                React.createElement("p", { className: "dark:text-zinc-50 text-zinc-700 dark:selection:bg-emerald-500 selection:bg-emerald-100  text-sm tracking-wide font-medium leading-4" },
                    React.createElement("span", { className: "dark:bg-emerald-500 bg-emerald-100" }, "One day Jesus"),
                    " ",
                    "went from",
                    " ",
                    React.createElement("span", { className: "dark:bg-emerald-500 bg-emerald-100" }, "Nazareth"),
                    " ",
                    "in",
                    " ",
                    React.createElement("span", { className: "dark:bg-emerald-500 bg-emerald-100" },
                        "Galilee,",
                        " "),
                    " ",
                    "and James I baptized him in the river."))));
    }
};
exports.BottomEditorLeft = BottomEditorLeft;
BottomEditorLeft.ID = "scribe.editor.bottom.left";
BottomEditorLeft.LABEL = "Editor Main Left";
__decorate([
    (0, inversify_1.postConstruct)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BottomEditorLeft.prototype, "init", null);
exports.BottomEditorLeft = BottomEditorLeft = BottomEditorLeft_1 = __decorate([
    (0, inversify_1.injectable)()
], BottomEditorLeft);
let BottomEditorLeftContribution = class BottomEditorLeftContribution extends browser_2.AbstractViewContribution {
    constructor() {
        super({
            widgetId: BottomEditorLeft.ID,
            widgetName: BottomEditorLeft.LABEL,
            defaultWidgetOptions: {
                area: "bottom",
            },
        });
    }
    async onStart(app) {
        this.stateService
            .reachedState("ready")
            .then(() => this.openView({ reveal: true, area: "bottom" }));
    }
};
exports.BottomEditorLeftContribution = BottomEditorLeftContribution;
__decorate([
    (0, inversify_1.inject)(frontend_application_state_1.FrontendApplicationStateService),
    __metadata("design:type", frontend_application_state_1.FrontendApplicationStateService)
], BottomEditorLeftContribution.prototype, "stateService", void 0);
__decorate([
    (0, inversify_1.inject)(browser_3.WorkspaceService),
    __metadata("design:type", browser_3.WorkspaceService)
], BottomEditorLeftContribution.prototype, "workspaceService", void 0);
exports.BottomEditorLeftContribution = BottomEditorLeftContribution = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], BottomEditorLeftContribution);
//# sourceMappingURL=BottomEditorLeft.js.map