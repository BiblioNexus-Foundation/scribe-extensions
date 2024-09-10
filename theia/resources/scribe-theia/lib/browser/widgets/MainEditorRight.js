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
var MainEditorRightWidget_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainEditorRightContribution = exports.MainEditorRightWidget = void 0;
const browser_1 = require("@theia/core/lib/browser");
const React = __importStar(require("@theia/core/shared/react"));
const inversify_1 = require("@theia/core/shared/inversify");
const browser_2 = require("@theia/core/lib/browser");
const frontend_application_state_1 = require("@theia/core/lib/browser/frontend-application-state");
const browser_3 = require("@theia/workspace/lib/browser");
const ChapterReading_1 = __importDefault(require("../../components/ChapterReading"));
let MainEditorRightWidget = MainEditorRightWidget_1 = class MainEditorRightWidget extends browser_1.ReactWidget {
    init() {
        this.doInit();
    }
    async doInit() {
        this.id = MainEditorRightWidget_1.ID;
        this.title.label = MainEditorRightWidget_1.LABEL;
        this.title.caption = MainEditorRightWidget_1.LABEL;
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
            React.createElement(ChapterReading_1.default, { version: "NLT", chapterName: "Mark", verse: "1", scripture: "John the Baptist Prepares the Way\n1 This is the Good News about Jesus the Messiah, the Son of God. It began 2\njust as the prophet Isaiah had written:\n\"Look, I am sending my messenger ahead of you,\nand he will prepare your way.\n3 He is a voice shouting in the wilderness,\n'Prepare the way for the Lord's coming!\nClear the road for him!\"\n4 This messenger was John the Baptist. He was in the wilderness and\npreached that people should be baptized to show that they had repented of\ntheir sins and turned to God to be forgiven. 5 All of Judea, including all the\npeople of Jerusalem, went out to see and hear John. And when they\nconfessed their sins, he baptized them in the Jordan River." })));
    }
};
exports.MainEditorRightWidget = MainEditorRightWidget;
MainEditorRightWidget.ID = "scribe.editor.main.right";
MainEditorRightWidget.LABEL = "Editor Main Right";
__decorate([
    (0, inversify_1.postConstruct)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MainEditorRightWidget.prototype, "init", null);
exports.MainEditorRightWidget = MainEditorRightWidget = MainEditorRightWidget_1 = __decorate([
    (0, inversify_1.injectable)()
], MainEditorRightWidget);
let MainEditorRightContribution = class MainEditorRightContribution extends browser_2.AbstractViewContribution {
    constructor() {
        super({
            widgetId: MainEditorRightWidget.ID,
            widgetName: MainEditorRightWidget.LABEL,
            defaultWidgetOptions: {
                area: "main",
                mode: "split-right",
            },
        });
    }
    async onStart(app) {
        this.stateService
            .reachedState("ready")
            .then(() => this.openView({ reveal: true, area: "main", mode: "split-right" }));
    }
};
exports.MainEditorRightContribution = MainEditorRightContribution;
__decorate([
    (0, inversify_1.inject)(frontend_application_state_1.FrontendApplicationStateService),
    __metadata("design:type", frontend_application_state_1.FrontendApplicationStateService)
], MainEditorRightContribution.prototype, "stateService", void 0);
__decorate([
    (0, inversify_1.inject)(browser_3.WorkspaceService),
    __metadata("design:type", browser_3.WorkspaceService)
], MainEditorRightContribution.prototype, "workspaceService", void 0);
exports.MainEditorRightContribution = MainEditorRightContribution = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], MainEditorRightContribution);
//# sourceMappingURL=MainEditorRight.js.map