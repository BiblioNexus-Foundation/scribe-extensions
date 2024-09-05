import { injectable } from "@theia/core/shared/inversify";
import type { IHelloTaskService } from "../common/hello-task-protocol";

@injectable()
export class HelloTaskService implements IHelloTaskService {
  sayHello(name: string): Promise<string> {
    console.log(`Server says: Hello, ${name}!`);
    return Promise.resolve(`Hello, ${name}!`);
  }

  testBinary(data: Uint8Array): Promise<{
    success: boolean;
  }> {
    console.log(`node: `, {
      bytelen: data.byteLength,
      data: Buffer.from(data).toString("base64"),
    });

    return Promise.resolve({
      success: true,
    });
  }
}
