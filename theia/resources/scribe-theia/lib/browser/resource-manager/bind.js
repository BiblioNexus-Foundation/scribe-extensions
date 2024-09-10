"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bindAllResourceManagerContributions = void 0;
const browser_1 = require("@theia/core/lib/browser");
const resources_manager_factory_1 = require("./resources-manager-factory");
const resources_viewer_widget_1 = require("./resources-viewer-widget");
const resource_manager_contribution_1 = require("./resource-manager-contribution");
const utils_1 = require("./utils");
const resource_viewer_factory_1 = require("./resource-viewer/resource-viewer-factory");
const resource_viewer_opener_1 = require("./resource-viewer/resource-viewer-opener");
const bindAllResourceManagerContributions = (bind) => {
    bind(resources_viewer_widget_1.ResourcesViewerWidget).toSelf();
    bind(browser_1.WidgetFactory).toDynamicValue((ctx) => ({
        id: resources_viewer_widget_1.ResourcesViewerWidget.ID,
        createWidget: () => ctx.container.get(resources_viewer_widget_1.ResourcesViewerWidget),
    }));
    bind(resources_manager_factory_1.ResourceManagerFactory).toSelf().inSingletonScope();
    bind(browser_1.WidgetFactory).toService(resources_manager_factory_1.ResourceManagerFactory);
    bind(browser_1.FrontendApplicationContribution).toService(resource_manager_contribution_1.ResourceManagerFrontendContribution);
    (0, browser_1.bindViewContribution)(bind, resource_manager_contribution_1.ResourceManagerFrontendContribution);
    bind(browser_1.StylingParticipant).toService(resource_manager_contribution_1.ResourceManagerFrontendContribution);
    bind(utils_1.ResourceManagerUtils).toSelf().inSingletonScope();
    bind(resource_viewer_factory_1.ResourceViewerFactory).toSelf().inSingletonScope();
    bind(browser_1.WidgetFactory).toService(resource_viewer_factory_1.ResourceViewerFactory);
    bind(resource_viewer_opener_1.ResourceViewerOpener).toSelf().inSingletonScope();
};
exports.bindAllResourceManagerContributions = bindAllResourceManagerContributions;
//# sourceMappingURL=bind.js.map