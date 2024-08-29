"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var TnViewerWidget_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TnViewerWidgetFrontendContribution = exports.TnViewerWidget = void 0;
const browser_1 = require("@theia/core/lib/browser");
const inversify_1 = require("@theia/core/shared/inversify");
const react_1 = __importDefault(require("@theia/core/shared/react"));
const TranslationNotesView_1 = __importDefault(require("../../../components/TranslationNotes/TranslationNotesView"));
const translationNotes_1 = require("../../../utils/translationNotes");
const file_service_1 = require("@theia/filesystem/lib/browser/file-service");
let TnViewerWidget = TnViewerWidget_1 = class TnViewerWidget extends browser_1.ReactWidget {
    constructor() {
        super();
        this.uri = null;
        this.tnTsv = {};
        this.id = TnViewerWidget_1.ID;
        this.title.label = "Translation Notes";
        this.title.closable = true;
        this.update();
    }
    onUpdateRequest(msg) {
        super.onUpdateRequest(msg);
    }
    setUri(uri) {
        (0, translationNotes_1.getDocumentAsScriptureTSV)("ACT 1:1", uri, this.fs).then((tnTsv) => {
            this.tnTsv = tnTsv;
            this.update();
        });
    }
    render() {
        console.log("Rendering Translation Notes");
        console.log("URI: ", this.uri);
        console.log("TN TSV: ", this.tnTsv);
        return (react_1.default.createElement(TranslationNotesView_1.default, { tnTsv: this.tnTsv, ref: { verseRef: "GEN 1:1" } }));
    }
};
exports.TnViewerWidget = TnViewerWidget;
TnViewerWidget.ID = "tn-viewer-widget";
__decorate([
    (0, inversify_1.inject)(file_service_1.FileService),
    __metadata("design:type", file_service_1.FileService)
], TnViewerWidget.prototype, "fs", void 0);
exports.TnViewerWidget = TnViewerWidget = TnViewerWidget_1 = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], TnViewerWidget);
let TnViewerWidgetFrontendContribution = class TnViewerWidgetFrontendContribution extends browser_1.AbstractViewContribution {
    constructor() {
        super({
            widgetId: TnViewerWidget.ID,
            widgetName: "Resource Widget",
            defaultWidgetOptions: {
                area: "main",
                rank: 200,
            },
        });
    }
    init() { }
    async initializeLayout() {
        // await this.openView({ reveal: true });
    }
};
exports.TnViewerWidgetFrontendContribution = TnViewerWidgetFrontendContribution;
__decorate([
    (0, inversify_1.postConstruct)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TnViewerWidgetFrontendContribution.prototype, "init", null);
exports.TnViewerWidgetFrontendContribution = TnViewerWidgetFrontendContribution = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], TnViewerWidgetFrontendContribution);
//# sourceMappingURL=tn-viewer-widget.js.map