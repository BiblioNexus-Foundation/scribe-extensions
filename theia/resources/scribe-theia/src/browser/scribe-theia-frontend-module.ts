/**
 * Generated using theia-extension-generator
 */
import { ContainerModule } from "@theia/core/shared/inversify";
import { ScribeTheiaContribution } from "./scribe-theia-contribution";
import { ToolbarDefaultsFactory } from "@theia/toolbar/lib/browser/toolbar-defaults";

import "../../src/browser/styles/scribe-theia.css";
import "../../lib/browser/output-tailwind.css";

import { ToolbarDefaultsOverride } from "./toolbar-defaults-override";
import { bindAllToolbarContributions } from "./toolbar-contributions";
import { bindAllWidgetsContributions } from "./widgets";
import { ResourceManagerFactory } from "./resource-manager/resources-manager-factory";
import {
  RemoteConnectionProvider,
  WidgetFactory,
  type ServiceConnectionProvider,
} from "@theia/core/lib/browser";
import { bindAllResourceManagerContributions } from "./resource-manager/bind";
import { HelloService } from "./hello-task-contribution";
import {
  HelloTaskService,
  type IHelloTaskService,
} from "../common/hello-task-protocol";

export default new ContainerModule(
  (
    bind,
    unbind,
    isBound,
    rebind,
    unbindAsync,
    onActivation,
    onDeactivation
  ) => {
    // Replace this line with the desired binding, e.g. "bind(CommandContribution).to(ScribeTheiaContribution)
    bind(ScribeTheiaContribution).toSelf();
    rebind(ToolbarDefaultsFactory).toConstantValue(ToolbarDefaultsOverride);
    bindAllToolbarContributions(bind);
    bindAllWidgetsContributions(bind);
    bindAllResourceManagerContributions(bind);

    bind(HelloService).toSelf().inSingletonScope();
    bind(HelloTaskService)
      .toDynamicValue((ctx) => {
        const connection = ctx.container.get<ServiceConnectionProvider>(
          RemoteConnectionProvider
        );
        return connection.createProxy<IHelloTaskService>(
          "/services/hello-task-service"
        );
      })
      .inSingletonScope();
  }
);
