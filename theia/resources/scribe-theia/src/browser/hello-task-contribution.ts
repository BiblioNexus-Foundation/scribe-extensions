import { injectable, inject } from "@theia/core/shared/inversify";
import {
  HelloTaskService,
  type IHelloTaskService,
} from "../common/hello-task-protocol";

@injectable()
export class HelloService {
  @inject(HelloTaskService)
  protected readonly helloTaskService: IHelloTaskService;

  async greet(name: string): Promise<string> {
    return this.helloTaskService.sayHello(name);
  }

  async testBinary(data: Uint8Array): Promise<{
    success: boolean;
  }> {
    return this.helloTaskService.testBinary(data);
  }
}
