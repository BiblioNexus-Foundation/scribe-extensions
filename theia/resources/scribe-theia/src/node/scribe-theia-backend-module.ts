import { ContainerModule } from "@theia/core/shared/inversify";
import {
  ConnectionHandler,
  RpcConnectionHandler,
} from "@theia/core/lib/common/messaging";
import { HelloTaskService } from "./hello-task-service";
import type { IHelloTaskService } from "../common/hello-task-protocol";

export default new ContainerModule((bind) => {
  bind(HelloTaskService).toSelf().inSingletonScope();
  bind(ConnectionHandler)
    .toDynamicValue(
      (ctx) =>
        new RpcConnectionHandler("/services/hello-task-service", () => {
          return ctx.container.get<IHelloTaskService>(HelloTaskService);
        })
    )
    .inSingletonScope();
});
