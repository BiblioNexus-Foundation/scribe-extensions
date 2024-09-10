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
var MainEditorLeftWidget_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainEditorLeftContribution = exports.MainEditorLeftWidget = void 0;
const browser_1 = require("@theia/core/lib/browser");
const React = __importStar(require("@theia/core/shared/react"));
const inversify_1 = require("@theia/core/shared/inversify");
const browser_2 = require("@theia/core/lib/browser");
const frontend_application_state_1 = require("@theia/core/lib/browser/frontend-application-state");
const browser_3 = require("@theia/workspace/lib/browser");
const ChapterReading_1 = __importDefault(require("../../components/ChapterReading"));
let MainEditorLeftWidget = MainEditorLeftWidget_1 = class MainEditorLeftWidget extends browser_1.ReactWidget {
    init() {
        this.doInit();
    }
    async doInit() {
        this.id = MainEditorLeftWidget_1.ID;
        this.title.label = MainEditorLeftWidget_1.LABEL;
        this.title.caption = MainEditorLeftWidget_1.LABEL;
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
        return (React.createElement(ChapterReading_1.default, { version: "NTV", chapterName: "Marcos", verse: "1", scripture: 'Marcos 1 Juan el Bautista prepara el camino \' Esta es la Buena Noticia acerca de Jes\u00FAs el Mes\u00EDas, el Hijo de Dios. Comenz\u00F3 2 tal como el profeta Isa\u00EDas hab\u00EDa escrito: \u00ABMira, envio a mi mensajero delante de ti, y \u00E9l preparar\u00E1 tu camino. 3 Es una voz que clama en el desierto: "\u00A1Preparen el camino para la venida del Se\u00F1or! \u00A1\u00C1branle camino!"\u00BB. 4 Ese mensajero era Juan el Bautista. Estaba en el desierto y predicaba que la gente deb\u00EDa ser bautizada para demostrar que se hab\u00EDa arrepentido de sus pecados y vuelto a Dios para ser perdonada. 5 Toda la gente de Judea, incluidos los habitantes de Jerusal\u00E9n, sal\u00EDan para ver y o\u00EDr a Juan; y cuando confesaban sus pecados, \u00E9l los bautizaba en el r\u00EDo Jord\u00E1n.' }));
    }
};
exports.MainEditorLeftWidget = MainEditorLeftWidget;
MainEditorLeftWidget.ID = "scribe.editor.main.left";
MainEditorLeftWidget.LABEL = "Editor Main Left";
__decorate([
    (0, inversify_1.postConstruct)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MainEditorLeftWidget.prototype, "init", null);
exports.MainEditorLeftWidget = MainEditorLeftWidget = MainEditorLeftWidget_1 = __decorate([
    (0, inversify_1.injectable)()
], MainEditorLeftWidget);
let MainEditorLeftContribution = class MainEditorLeftContribution extends browser_2.AbstractViewContribution {
    constructor() {
        super({
            widgetId: MainEditorLeftWidget.ID,
            widgetName: MainEditorLeftWidget.LABEL,
            defaultWidgetOptions: {
                area: "main",
            },
        });
    }
    async onStart(app) {
        this.stateService
            .reachedState("ready")
            .then(() => this.openView({ reveal: true, area: "main" }));
    }
};
exports.MainEditorLeftContribution = MainEditorLeftContribution;
__decorate([
    (0, inversify_1.inject)(frontend_application_state_1.FrontendApplicationStateService),
    __metadata("design:type", frontend_application_state_1.FrontendApplicationStateService)
], MainEditorLeftContribution.prototype, "stateService", void 0);
__decorate([
    (0, inversify_1.inject)(browser_3.WorkspaceService),
    __metadata("design:type", browser_3.WorkspaceService)
], MainEditorLeftContribution.prototype, "workspaceService", void 0);
exports.MainEditorLeftContribution = MainEditorLeftContribution = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], MainEditorLeftContribution);
//# sourceMappingURL=MainEditorLeft.js.map