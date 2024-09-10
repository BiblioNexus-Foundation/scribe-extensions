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
exports.ResourceViewerFactory = void 0;
const browser_1 = require("@theia/workspace/lib/browser");
const inversify_1 = require("@theia/core/shared/inversify");
const resource_viewer_widget_1 = require("./resource-viewer-widget");
const file_service_1 = require("@theia/filesystem/lib/browser/file-service");
let ResourceViewerFactory = class ResourceViewerFactory {
    constructor() {
        this.id = resource_viewer_widget_1.ResourceViewerWidget.FACTORY_ID;
    }
    createWidget(options) {
        const widget = new resource_viewer_widget_1.ResourceViewerWidget(this.fs, this.workspaceService, options.resource, options.handlers);
        widget.title.closable = true;
        widget.render();
        return widget;
    }
};
exports.ResourceViewerFactory = ResourceViewerFactory;
__decorate([
    (0, inversify_1.inject)(file_service_1.FileService),
    __metadata("design:type", file_service_1.FileService)
], ResourceViewerFactory.prototype, "fs", void 0);
__decorate([
    (0, inversify_1.inject)(browser_1.WorkspaceService),
    __metadata("design:type", browser_1.WorkspaceService)
], ResourceViewerFactory.prototype, "workspaceService", void 0);
exports.ResourceViewerFactory = ResourceViewerFactory = __decorate([
    (0, inversify_1.injectable)()
], ResourceViewerFactory);
//# sourceMappingURL=resource-viewer-factory.js.map