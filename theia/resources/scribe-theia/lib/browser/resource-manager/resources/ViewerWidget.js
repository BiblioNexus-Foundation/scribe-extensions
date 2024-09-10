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
var ViewerWidget_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewerWidgetFrontendContribution = exports.ViewerWidget = void 0;
const browser_1 = require("@theia/core/lib/browser");
const inversify_1 = require("@theia/core/shared/inversify");
const react_1 = __importDefault(require("@theia/core/shared/react"));
let ViewerWidget = ViewerWidget_1 = class ViewerWidget extends browser_1.ReactWidget {
    constructor() {
        super();
        this.id = ViewerWidget_1.ID;
        this.title.label = "Runtime Widget";
        this.title.closable = true;
        this.update();
    }
    onUpdateRequest(msg) {
        super.onUpdateRequest(msg);
    }
    render() {
        return react_1.default.createElement("div", null, "Runtime widget");
    }
};
exports.ViewerWidget = ViewerWidget;
ViewerWidget.ID = "resource-viewer-widget";
exports.ViewerWidget = ViewerWidget = ViewerWidget_1 = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], ViewerWidget);
let ViewerWidgetFrontendContribution = class ViewerWidgetFrontendContribution extends browser_1.AbstractViewContribution {
    constructor() {
        super({
            widgetId: ViewerWidget.ID,
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
exports.ViewerWidgetFrontendContribution = ViewerWidgetFrontendContribution;
__decorate([
    (0, inversify_1.postConstruct)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ViewerWidgetFrontendContribution.prototype, "init", null);
exports.ViewerWidgetFrontendContribution = ViewerWidgetFrontendContribution = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], ViewerWidgetFrontendContribution);
//# sourceMappingURL=ViewerWidget.js.map