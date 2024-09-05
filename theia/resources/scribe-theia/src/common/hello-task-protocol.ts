export const HelloTaskService = Symbol("MyBackendService");

export interface IHelloTaskService {
  sayHello(name: string): Promise<string>;

  testBinary(data: Uint8Array): Promise<{
    success: boolean;
  }>;
}
