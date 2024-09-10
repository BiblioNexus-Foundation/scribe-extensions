"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolbarDefaultsOverride = void 0;
const toolbar_interfaces_1 = require("@theia/toolbar/lib/browser/toolbar-interfaces");
const ToolbarDefaultsOverride = () => ({
    items: {
        [toolbar_interfaces_1.ToolbarAlignment.LEFT]: [
            [
                {
                    id: "textEditor.commands.go.back",
                    command: "textEditor.commands.go.back",
                    icon: "codicon codicon-add",
                },
                {
                    id: "textEditor.commands.go.forward",
                    command: "textEditor.commands.go.forward",
                    icon: "codicon codicon-arrow-right",
                },
            ],
        ],
        [toolbar_interfaces_1.ToolbarAlignment.CENTER]: [
            [
                {
                    id: "workbench.action.splitEditorRight",
                    command: "workbench.action.splitEditor",
                    icon: "codicon codicon-split-horizontal",
                },
            ],
        ],
        [toolbar_interfaces_1.ToolbarAlignment.RIGHT]: [
            [
                {
                    id: "scribe-theia-layout-toolbar-contribution",
                    group: "contributed",
                },
                {
                    id: "workbench.action.showCommands",
                    command: "workbench.action.showCommands",
                    icon: "codicon codicon-terminal",
                    tooltip: "Command Palette",
                },
            ],
        ],
    },
});
exports.ToolbarDefaultsOverride = ToolbarDefaultsOverride;
//# sourceMappingURL=toolbar-defaults-override.js.map