import {
  DeflatedToolbarTree,
  ToolbarAlignment,
} from "@theia/toolbar/lib/browser/toolbar-interfaces";

export const ToolbarDefaultsOverride: () => DeflatedToolbarTree = () => ({
  items: {
    [ToolbarAlignment.LEFT]: [
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
    [ToolbarAlignment.CENTER]: [
      [
        {
          id: "workbench.action.splitEditorRight",
          command: "workbench.action.splitEditor",
          icon: "codicon codicon-split-horizontal",
        },
      ],
    ],
    [ToolbarAlignment.RIGHT]: [
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
