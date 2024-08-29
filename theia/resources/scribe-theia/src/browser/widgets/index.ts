import {
  FrontendApplicationContribution,
  WidgetFactory,
  bindViewContribution,
} from "@theia/core/lib/browser";
import { interfaces } from "@theia/core/shared/inversify";
import { AiSidebar, AiSidebarContribution } from "./AiSidebar";
import {
  MainEditorLeftContribution,
  MainEditorLeftWidget,
} from "./MainEditorLeft";
import {
  MainEditorRightContribution,
  MainEditorRightWidget,
} from "./MainEditorRight";
import {
  BottomEditorLeft,
  BottomEditorLeftContribution,
} from "./BottomEditorLeft";
import {
  BottomEditorRightContribution,
  BottomEditorRightWidget,
} from "./BottomEditorRight";

export const bindAllWidgetsContributions = (bind: interfaces.Bind) => {
  // sidebar widget binds
  bindViewContribution(bind, AiSidebarContribution);
  bind(FrontendApplicationContribution).toService(AiSidebarContribution);
  bind(AiSidebar).toSelf();
  bind(WidgetFactory)
    .toDynamicValue((context) => ({
      id: AiSidebar.ID,
      createWidget: () => context.container.get<AiSidebar>(AiSidebar),
    }))
    .inSingletonScope();

  // left editor widget binds
  bindViewContribution(bind, MainEditorLeftContribution);
  bind(FrontendApplicationContribution).toService(MainEditorLeftContribution);
  bind(MainEditorLeftWidget).toSelf();
  bind(WidgetFactory)
    .toDynamicValue((context) => ({
      id: MainEditorLeftWidget.ID,
      createWidget: () =>
        context.container.get<MainEditorLeftWidget>(MainEditorLeftWidget),
    }))
    .inSingletonScope();

  // right editor widget binds
  bindViewContribution(bind, MainEditorRightContribution);
  bind(FrontendApplicationContribution).toService(MainEditorRightContribution);
  bind(MainEditorRightWidget).toSelf();
  bind(WidgetFactory)
    .toDynamicValue((context) => ({
      id: MainEditorRightWidget.ID,
      createWidget: () =>
        context.container.get<MainEditorRightWidget>(MainEditorRightWidget),
    }))
    .inSingletonScope();
  // Bottom Editor Left
  bindViewContribution(bind, BottomEditorLeftContribution);
  bind(FrontendApplicationContribution).toService(BottomEditorLeftContribution);
  bind(BottomEditorLeft).toSelf();
  bind(WidgetFactory)
    .toDynamicValue((context) => ({
      id: BottomEditorLeft.ID,
      createWidget: () =>
        context.container.get<BottomEditorLeft>(BottomEditorLeft),
    }))
    .inSingletonScope();

  // Bottom Editor Right
  bindViewContribution(bind, BottomEditorRightContribution);
  bind(FrontendApplicationContribution).toService(
    BottomEditorRightContribution
  );
  bind(BottomEditorRightWidget).toSelf();
  bind(WidgetFactory)
    .toDynamicValue((context) => ({
      id: BottomEditorRightWidget.ID,
      createWidget: () =>
        context.container.get<BottomEditorRightWidget>(BottomEditorRightWidget),
    }))
    .inSingletonScope();
};
