"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Generated using theia-extension-generator
 */
const inversify_1 = require("@theia/core/shared/inversify");
const scribe_theia_contribution_1 = require("./scribe-theia-contribution");
const toolbar_defaults_1 = require("@theia/toolbar/lib/browser/toolbar-defaults");
require("../../src/browser/styles/scribe-theia.css");
require("../../lib/browser/output-tailwind.css");
const toolbar_defaults_override_1 = require("./toolbar-defaults-override");
const toolbar_contributions_1 = require("./toolbar-contributions");
const widgets_1 = require("./widgets");
const bind_1 = require("./resource-manager/bind");
exports.default = new inversify_1.ContainerModule((bind, unbind, isBound, rebind, unbindAsync, onActivation, onDeactivation) => {
    // Replace this line with the desired binding, e.g. "bind(CommandContribution).to(ScribeTheiaContribution)
    bind(scribe_theia_contribution_1.ScribeTheiaContribution).toSelf();
    rebind(toolbar_defaults_1.ToolbarDefaultsFactory).toConstantValue(toolbar_defaults_override_1.ToolbarDefaultsOverride);
    (0, toolbar_contributions_1.bindAllToolbarContributions)(bind);
    (0, widgets_1.bindAllWidgetsContributions)(bind);
    (0, bind_1.bindAllResourceManagerContributions)(bind);
});
//# sourceMappingURL=scribe-theia-frontend-module.js.map