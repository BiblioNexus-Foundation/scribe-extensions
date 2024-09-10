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
exports.ResourceManagerFrontendContribution = exports.TOGGLE_RESOURCE_MANAGER = void 0;
const browser_1 = require("@theia/core/lib/browser");
const resources_viewer_widget_1 = require("./resources-viewer-widget");
const resources_manager_factory_1 = require("./resources-manager-factory");
const inversify_1 = require("@theia/core/shared/inversify");
const theme_1 = require("@theia/core/lib/common/theme");
exports.TOGGLE_RESOURCE_MANAGER = {
    id: "resource-manager.toggle",
};
let ResourceManagerFrontendContribution = class ResourceManagerFrontendContribution extends browser_1.AbstractViewContribution {
    constructor() {
        super({
            viewContainerId: resources_manager_factory_1.RESOURCE_MANAGER_ID,
            widgetId: resources_viewer_widget_1.ResourcesViewerWidget.ID,
            widgetName: resources_viewer_widget_1.ResourcesViewerWidget.LABEL,
            defaultWidgetOptions: {
                area: "left",
                rank: 200,
            },
            toggleCommandId: exports.TOGGLE_RESOURCE_MANAGER.id,
        });
    }
    init() { }
    async initializeLayout(app) {
        await this.openView({ reveal: true });
    }
    registerThemeStyle(theme, collector) {
        const contrastBorder = theme.getColor("contrastBorder");
        if (contrastBorder && (0, theme_1.isHighContrast)(theme.type)) {
            //   collector.addRule(`
            //             .t-siw-search-container .searchHeader .search-field-container {
            //                 border-color: ${contrastBorder};
            //             }
            //         `);
        }
    }
    async registerCommands(commands) {
        super.registerCommands(commands);
        commands.registerCommand(exports.TOGGLE_RESOURCE_MANAGER, {
            execute: () => this.openView({ reveal: true, activate: true }),
        });
    }
};
exports.ResourceManagerFrontendContribution = ResourceManagerFrontendContribution;
__decorate([
    (0, inversify_1.postConstruct)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ResourceManagerFrontendContribution.prototype, "init", null);
exports.ResourceManagerFrontendContribution = ResourceManagerFrontendContribution = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], ResourceManagerFrontendContribution);
//# sourceMappingURL=resource-manager-contribution.js.map