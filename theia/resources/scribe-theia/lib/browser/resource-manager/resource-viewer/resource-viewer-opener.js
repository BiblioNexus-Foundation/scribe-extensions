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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceViewerOpener = void 0;
const browser_1 = require("@theia/core/lib/browser");
const inversify_1 = require("@theia/core/shared/inversify");
const resource_viewer_widget_1 = require("./resource-viewer-widget");
let ResourceViewerOpener = class ResourceViewerOpener {
    async open(resource, handlers) {
        const widget = await this.widgetManager.getOrCreateWidget(resource_viewer_widget_1.ResourceViewerWidget.FACTORY_ID, { resource, handlers });
        await this.shell.addWidget(widget, {
            area: "main",
            rank: 200,
            mode: "tab-after",
        });
        widget.update();
        const tab = this.shell.getTabBarFor(widget);
    }
};
exports.ResourceViewerOpener = ResourceViewerOpener;
__decorate([
    (0, inversify_1.inject)(browser_1.ApplicationShell),
    __metadata("design:type", browser_1.ApplicationShell)
], ResourceViewerOpener.prototype, "shell", void 0);
__decorate([
    (0, inversify_1.inject)(browser_1.WidgetManager),
    __metadata("design:type", browser_1.WidgetManager)
], ResourceViewerOpener.prototype, "widgetManager", void 0);
exports.ResourceViewerOpener = ResourceViewerOpener = __decorate([
    (0, inversify_1.injectable)()
], ResourceViewerOpener);
//# sourceMappingURL=resource-viewer-opener.js.map