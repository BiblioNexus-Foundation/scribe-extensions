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
var ResourcesViewerWidget_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourcesViewerWidget = void 0;
const React = __importStar(require("@theia/core/shared/react"));
const browser_1 = require("@theia/core/lib/browser");
const inversify_1 = require("@theia/core/shared/inversify");
const core_1 = require("@theia/core");
const ResourcesTable_1 = __importDefault(require("../../components/ResourcesManager/ResourcesTable"));
const resources_1 = require("./resources");
const workspace_service_1 = require("@theia/workspace/lib/browser/workspace-service");
const file_service_1 = require("@theia/filesystem/lib/browser/file-service");
const utils_1 = require("./utils");
const MainEditorLeft_1 = require("../widgets/MainEditorLeft");
const BottomEditorLeft_1 = require("../widgets/BottomEditorLeft");
const resource_viewer_opener_1 = require("./resource-viewer/resource-viewer-opener");
const ta_1 = require("./resources/ta");
const tw_1 = require("./resources/tw");
let ResourcesViewerWidget = ResourcesViewerWidget_1 = class ResourcesViewerWidget extends browser_1.ReactWidget {
    constructor() {
        super(...arguments);
        this.downloadedResources = [];
        this.registeredResources = [
            resources_1.tnResource,
            resources_1.twlResource,
            ta_1.taResource,
            tw_1.twResource,
        ];
    }
    init() {
        this.id = ResourcesViewerWidget_1.ID;
        this.title.label = ResourcesViewerWidget_1.LABEL;
        this.title.caption = ResourcesViewerWidget_1.LABEL;
        this.title.closable = false;
        this.title.iconClass = (0, browser_1.codicon)("flame");
        this.node.tabIndex = 0;
    }
    onAfterAttach(msg) {
        super.onAfterAttach(msg);
        this.resourcesManagerUtils
            .getDownloadedResourcesFromProjectConfig()
            .then((resources) => {
            this.downloadedResources = resources !== null && resources !== void 0 ? resources : [];
            this.update();
        });
    }
    onUpdateRequest(msg) {
        this.resourcesManagerUtils
            .getDownloadedResourcesFromProjectConfig()
            .then((resources) => {
            this.downloadedResources = resources !== null && resources !== void 0 ? resources : [];
            super.onUpdateRequest(msg);
        });
    }
    render() {
        const resourcesTypes = this.registeredResources.map((resource) => ({
            value: resource.id,
            label: resource.displayLabel,
            getTableDisplayData: resource.getTableDisplayData,
            downloadHandler: (resourceInfo) => this._downloadResource(resourceInfo, resource.downloadResource),
        }));
        const openHandler = async (resourceInfo) => {
            const resourceType = this.registeredResources.find((resource) => resource.id === resourceInfo.type);
            if (!resourceType) {
                await this.messageService.error("Resource type not found");
                return;
            }
            await this.resourceViewerOpener.open(resourceInfo, resourceType.openHandlers);
        };
        return (React.createElement("div", { className: "flex flex-col mx-4" },
            React.createElement(ResourcesTable_1.default, { resourcesTypes: resourcesTypes, downloadedResources: this.downloadedResources, openResource: openHandler })));
    }
    async _downloadResource(resourceInfo, downloadHandler) {
        var _a;
        try {
            const currentFolderURI = (_a = (await this.workspaceService.roots)) === null || _a === void 0 ? void 0 : _a[0].resource;
            if (!currentFolderURI) {
                await this.messageService.error("Please open a workspace folder to download resources");
                return;
            }
            const fs = this.fs;
            const resourceFolderUri = currentFolderURI.withPath(currentFolderURI.path.join(".project", "resources"));
            const prog = await this.messageService.showProgress({
                text: "Downloading resource ...",
            });
            const downloadedResource = await downloadHandler(resourceInfo, {
                fs,
                resourceFolderUri,
            });
            prog.report({ message: "Updating the configuration" });
            const updatedDownloadedResourcePath = Object.assign(Object.assign({}, downloadedResource), { localPath: downloadedResource.localPath.includes(currentFolderURI.path.fsPath())
                    ? downloadedResource.localPath.replace(currentFolderURI.path.fsPath(), "")
                    : downloadedResource.localPath });
            await this.resourcesManagerUtils.addDownloadedResourceToProjectConfig(updatedDownloadedResourcePath);
            this.update();
            prog.cancel();
            this.messageService.info("Resource downloaded successfully");
        }
        catch (error) {
            console.error(error);
            await this.messageService.error("Unable to download resource ...");
        }
    }
    async openResourceWidget() { }
};
exports.ResourcesViewerWidget = ResourcesViewerWidget;
ResourcesViewerWidget.ID = "resources-viewer";
ResourcesViewerWidget.LABEL = core_1.nls.localizeByDefault("Resources Viewer");
__decorate([
    (0, inversify_1.inject)(file_service_1.FileService),
    __metadata("design:type", file_service_1.FileService)
], ResourcesViewerWidget.prototype, "fs", void 0);
__decorate([
    (0, inversify_1.inject)(workspace_service_1.WorkspaceService),
    __metadata("design:type", workspace_service_1.WorkspaceService)
], ResourcesViewerWidget.prototype, "workspaceService", void 0);
__decorate([
    (0, inversify_1.inject)(core_1.MessageService),
    __metadata("design:type", core_1.MessageService)
], ResourcesViewerWidget.prototype, "messageService", void 0);
__decorate([
    (0, inversify_1.inject)(utils_1.ResourceManagerUtils),
    __metadata("design:type", utils_1.ResourceManagerUtils)
], ResourcesViewerWidget.prototype, "resourcesManagerUtils", void 0);
__decorate([
    (0, inversify_1.inject)(browser_1.WidgetManager),
    __metadata("design:type", browser_1.WidgetManager)
], ResourcesViewerWidget.prototype, "widgetManager", void 0);
__decorate([
    (0, inversify_1.inject)(MainEditorLeft_1.MainEditorLeftContribution),
    __metadata("design:type", MainEditorLeft_1.MainEditorLeftContribution)
], ResourcesViewerWidget.prototype, "mainEditorLeftContribution", void 0);
__decorate([
    (0, inversify_1.inject)(BottomEditorLeft_1.BottomEditorLeftContribution),
    __metadata("design:type", BottomEditorLeft_1.BottomEditorLeftContribution)
], ResourcesViewerWidget.prototype, "bottomEditorLeftContribution", void 0);
__decorate([
    (0, inversify_1.inject)(browser_1.StorageService),
    __metadata("design:type", Object)
], ResourcesViewerWidget.prototype, "memory", void 0);
__decorate([
    (0, inversify_1.inject)(resource_viewer_opener_1.ResourceViewerOpener),
    __metadata("design:type", resource_viewer_opener_1.ResourceViewerOpener)
], ResourcesViewerWidget.prototype, "resourceViewerOpener", void 0);
__decorate([
    (0, inversify_1.postConstruct)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ResourcesViewerWidget.prototype, "init", null);
exports.ResourcesViewerWidget = ResourcesViewerWidget = ResourcesViewerWidget_1 = __decorate([
    (0, inversify_1.injectable)()
], ResourcesViewerWidget);
//# sourceMappingURL=resources-viewer-widget.js.map