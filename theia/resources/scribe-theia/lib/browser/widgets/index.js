"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bindAllWidgetsContributions = void 0;
const browser_1 = require("@theia/core/lib/browser");
const AiSidebar_1 = require("./AiSidebar");
const MainEditorLeft_1 = require("./MainEditorLeft");
const MainEditorRight_1 = require("./MainEditorRight");
const BottomEditorLeft_1 = require("./BottomEditorLeft");
const BottomEditorRight_1 = require("./BottomEditorRight");
const bindAllWidgetsContributions = (bind) => {
    // sidebar widget binds
    (0, browser_1.bindViewContribution)(bind, AiSidebar_1.AiSidebarContribution);
    bind(browser_1.FrontendApplicationContribution).toService(AiSidebar_1.AiSidebarContribution);
    bind(AiSidebar_1.AiSidebar).toSelf();
    bind(browser_1.WidgetFactory)
        .toDynamicValue((context) => ({
        id: AiSidebar_1.AiSidebar.ID,
        createWidget: () => context.container.get(AiSidebar_1.AiSidebar),
    }))
        .inSingletonScope();
    // left editor widget binds
    (0, browser_1.bindViewContribution)(bind, MainEditorLeft_1.MainEditorLeftContribution);
    bind(browser_1.FrontendApplicationContribution).toService(MainEditorLeft_1.MainEditorLeftContribution);
    bind(MainEditorLeft_1.MainEditorLeftWidget).toSelf();
    bind(browser_1.WidgetFactory)
        .toDynamicValue((context) => ({
        id: MainEditorLeft_1.MainEditorLeftWidget.ID,
        createWidget: () => context.container.get(MainEditorLeft_1.MainEditorLeftWidget),
    }))
        .inSingletonScope();
    // right editor widget binds
    (0, browser_1.bindViewContribution)(bind, MainEditorRight_1.MainEditorRightContribution);
    bind(browser_1.FrontendApplicationContribution).toService(MainEditorRight_1.MainEditorRightContribution);
    bind(MainEditorRight_1.MainEditorRightWidget).toSelf();
    bind(browser_1.WidgetFactory)
        .toDynamicValue((context) => ({
        id: MainEditorRight_1.MainEditorRightWidget.ID,
        createWidget: () => context.container.get(MainEditorRight_1.MainEditorRightWidget),
    }))
        .inSingletonScope();
    // Bottom Editor Left
    (0, browser_1.bindViewContribution)(bind, BottomEditorLeft_1.BottomEditorLeftContribution);
    bind(browser_1.FrontendApplicationContribution).toService(BottomEditorLeft_1.BottomEditorLeftContribution);
    bind(BottomEditorLeft_1.BottomEditorLeft).toSelf();
    bind(browser_1.WidgetFactory)
        .toDynamicValue((context) => ({
        id: BottomEditorLeft_1.BottomEditorLeft.ID,
        createWidget: () => context.container.get(BottomEditorLeft_1.BottomEditorLeft),
    }))
        .inSingletonScope();
    // Bottom Editor Right
    (0, browser_1.bindViewContribution)(bind, BottomEditorRight_1.BottomEditorRightContribution);
    bind(browser_1.FrontendApplicationContribution).toService(BottomEditorRight_1.BottomEditorRightContribution);
    bind(BottomEditorRight_1.BottomEditorRightWidget).toSelf();
    bind(browser_1.WidgetFactory)
        .toDynamicValue((context) => ({
        id: BottomEditorRight_1.BottomEditorRightWidget.ID,
        createWidget: () => context.container.get(BottomEditorRight_1.BottomEditorRightWidget),
    }))
        .inSingletonScope();
};
exports.bindAllWidgetsContributions = bindAllWidgetsContributions;
//# sourceMappingURL=index.js.map