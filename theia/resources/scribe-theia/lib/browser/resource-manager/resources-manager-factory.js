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
exports.ResourceManagerFactory = exports.RESOURCE_MANAGER_VIEW_CONTAINER_TITLE_OPTIONS = exports.RESOURCE_MANAGER_ID = void 0;
const browser_1 = require("@theia/core/lib/browser");
const nls_1 = require("@theia/core/lib/common/nls");
const inversify_1 = require("@theia/core/shared/inversify");
const resources_viewer_widget_1 = require("./resources-viewer-widget");
exports.RESOURCE_MANAGER_ID = "resource-manager-view-container";
exports.RESOURCE_MANAGER_VIEW_CONTAINER_TITLE_OPTIONS = {
    label: nls_1.nls.localizeByDefault("Resource Manager"),
    iconClass: (0, browser_1.codicon)("flame"),
    closeable: true,
};
let ResourceManagerFactory = class ResourceManagerFactory {
    constructor() {
        this.id = exports.RESOURCE_MANAGER_ID;
        this.resourceViewerWidgetOptions = {
            canHide: false,
            initiallyCollapsed: true,
        };
    }
    async createWidget() {
        const viewContainer = this.viewContainerFactory({
            id: exports.RESOURCE_MANAGER_ID,
            progressLocationId: "Resource Manager",
        });
        viewContainer.setTitleOptions(exports.RESOURCE_MANAGER_VIEW_CONTAINER_TITLE_OPTIONS);
        const widget = await this.widgetManager.getOrCreateWidget(resources_viewer_widget_1.ResourcesViewerWidget.ID);
        viewContainer.addWidget(widget, this.resourceViewerWidgetOptions);
        return viewContainer;
    }
};
exports.ResourceManagerFactory = ResourceManagerFactory;
__decorate([
    (0, inversify_1.inject)(browser_1.ViewContainer.Factory),
    __metadata("design:type", Function)
], ResourceManagerFactory.prototype, "viewContainerFactory", void 0);
__decorate([
    (0, inversify_1.inject)(browser_1.WidgetManager),
    __metadata("design:type", browser_1.WidgetManager)
], ResourceManagerFactory.prototype, "widgetManager", void 0);
exports.ResourceManagerFactory = ResourceManagerFactory = __decorate([
    (0, inversify_1.injectable)()
], ResourceManagerFactory);
//# sourceMappingURL=resources-manager-factory.js.map