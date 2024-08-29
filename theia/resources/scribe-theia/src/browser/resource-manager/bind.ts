import {
  FrontendApplicationContribution,
  StylingParticipant,
  WidgetFactory,
  bindViewContribution,
} from "@theia/core/lib/browser";
import { ResourceManagerFactory } from "./resources-manager-factory";
import { interfaces } from "@theia/core/shared/inversify";
import { ResourcesViewerWidget } from "./resources-viewer-widget";
import { ResourceManagerFrontendContribution } from "./resource-manager-contribution";
import { ResourceManagerUtils } from "./utils";
import { ResourceViewerFactory } from "./resource-viewer/resource-viewer-factory";
import { ResourceViewerOpener } from "./resource-viewer/resource-viewer-opener";

export const bindAllResourceManagerContributions = (bind: interfaces.Bind) => {
  bind(ResourcesViewerWidget).toSelf();
  bind<WidgetFactory>(WidgetFactory).toDynamicValue((ctx) => ({
    id: ResourcesViewerWidget.ID,
    createWidget: () => ctx.container.get(ResourcesViewerWidget),
  }));
  bind(ResourceManagerFactory).toSelf().inSingletonScope();
  bind(WidgetFactory).toService(ResourceManagerFactory);
  bind(FrontendApplicationContribution).toService(
    ResourceManagerFrontendContribution
  );

  bindViewContribution(bind, ResourceManagerFrontendContribution);
  bind(StylingParticipant).toService(ResourceManagerFrontendContribution);

  bind(ResourceManagerUtils).toSelf().inSingletonScope();

  bind(ResourceViewerFactory).toSelf().inSingletonScope();
  bind(WidgetFactory).toService(ResourceViewerFactory);

  bind(ResourceViewerOpener).toSelf().inSingletonScope();
};
