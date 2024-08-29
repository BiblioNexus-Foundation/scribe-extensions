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
var ResourceManagerUtils_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceManagerUtils = void 0;
const browser_1 = require("@theia/workspace/lib/browser");
const inversify_1 = require("@theia/core/shared/inversify");
const core_1 = require("@theia/core");
const file_service_1 = require("@theia/filesystem/lib/browser/file-service");
let ResourceManagerUtils = ResourceManagerUtils_1 = class ResourceManagerUtils {
    constructor() {
        this.addDownloadedResourceToProjectConfig = async (resource) => {
            var _a;
            const roots = await this.workspaceService.roots;
            const projectURI = roots[0].resource;
            if (!projectURI) {
                this.messageService.error;
            }
            const configFileUri = projectURI === null || projectURI === void 0 ? void 0 : projectURI.withPath(projectURI.path.join(ResourceManagerUtils_1.CONFIG_FILE_NAME));
            if (!configFileUri) {
                console.error("No workspace opened");
                return;
            }
            let config = {};
            const configFileExists = await this.fileService.exists(configFileUri);
            if (configFileExists) {
                const configFile = await this.fileService.readFile(configFileUri);
                config = JSON.parse(new TextDecoder().decode(configFile.value.buffer));
            }
            const configDownloadedResources = (_a = config.resources) !== null && _a !== void 0 ? _a : [];
            if (configDownloadedResources.some((r) => r.id === resource.id)) {
                this.messageService.info(`Resource ${resource.name} already exists in the project!`);
                return;
            }
            const newConfigDownloadedResources = [
                ...configDownloadedResources,
                resource,
            ];
            config.resources = newConfigDownloadedResources;
            await this.fileService.write(configFileUri, JSON.stringify(config, null, 2));
        };
        this.getDownloadedResourcesFromProjectConfig = async () => {
            var _a;
            const roots = await this.workspaceService.roots;
            const projectURI = roots[0].resource;
            if (!projectURI) {
                this.messageService.error;
            }
            const configFileUri = projectURI === null || projectURI === void 0 ? void 0 : projectURI.withPath(projectURI.path.join(ResourceManagerUtils_1.CONFIG_FILE_NAME));
            if (!configFileUri) {
                console.error("No workspace opened");
                return;
            }
            let config = {};
            const configFileExists = await this.fileService.exists(configFileUri);
            if (configFileExists) {
                const configFile = await this.fileService.readFile(configFileUri);
                config = JSON.parse(new TextDecoder().decode(configFile.value.buffer));
            }
            return ((_a = config.resources) !== null && _a !== void 0 ? _a : []);
        };
    }
};
exports.ResourceManagerUtils = ResourceManagerUtils;
ResourceManagerUtils.CONFIG_FILE_NAME = "scribe.config.json";
__decorate([
    (0, inversify_1.inject)(browser_1.WorkspaceService),
    __metadata("design:type", browser_1.WorkspaceService)
], ResourceManagerUtils.prototype, "workspaceService", void 0);
__decorate([
    (0, inversify_1.inject)(core_1.MessageService),
    __metadata("design:type", core_1.MessageService)
], ResourceManagerUtils.prototype, "messageService", void 0);
__decorate([
    (0, inversify_1.inject)(file_service_1.FileService),
    __metadata("design:type", file_service_1.FileService)
], ResourceManagerUtils.prototype, "fileService", void 0);
exports.ResourceManagerUtils = ResourceManagerUtils = ResourceManagerUtils_1 = __decorate([
    (0, inversify_1.injectable)()
], ResourceManagerUtils);
//# sourceMappingURL=utils.js.map