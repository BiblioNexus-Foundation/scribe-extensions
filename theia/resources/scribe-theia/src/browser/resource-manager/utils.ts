import { WorkspaceService } from "@theia/workspace/lib/browser";
import { inject, injectable } from "@theia/core/shared/inversify";
import { ConfigResourceValues } from "./resources/types";
import { MessageService } from "@theia/core";
import { FileService } from "@theia/filesystem/lib/browser/file-service";

@injectable()
export class ResourceManagerUtils {
  static CONFIG_FILE_NAME = "scribe.config.json";

  @inject(WorkspaceService)
  protected readonly workspaceService: WorkspaceService;

  @inject(MessageService)
  protected readonly messageService: MessageService;

  @inject(FileService)
  protected readonly fileService: FileService;

  addDownloadedResourceToProjectConfig = async (
    resource: ConfigResourceValues
  ) => {
    const roots = await this.workspaceService.roots;

    const projectURI = roots[0].resource;

    if (!projectURI) {
      this.messageService.error;
    }

    const configFileUri = projectURI?.withPath(
      projectURI.path.join(ResourceManagerUtils.CONFIG_FILE_NAME)
    );

    if (!configFileUri) {
      console.error("No workspace opened");
      return;
    }

    let config: Record<string, any> = {};
    const configFileExists = await this.fileService.exists(configFileUri);

    if (configFileExists) {
      const configFile = await this.fileService.readFile(configFileUri);
      config = JSON.parse(new TextDecoder().decode(configFile.value.buffer));
    }

    const configDownloadedResources = config.resources ?? [];

    if (configDownloadedResources.some((r: any) => r.id === resource.id)) {
      this.messageService.info(
        `Resource ${resource.name} already exists in the project!`
      );
      return;
    }

    const newConfigDownloadedResources = [
      ...configDownloadedResources,
      resource,
    ];

    config.resources = newConfigDownloadedResources;

    await this.fileService.write(
      configFileUri,
      JSON.stringify(config, null, 2)
    );
  };

  getDownloadedResourcesFromProjectConfig = async () => {
    const roots = await this.workspaceService.roots;

    const projectURI = roots[0].resource;

    if (!projectURI) {
      this.messageService.error;
    }

    const configFileUri = projectURI?.withPath(
      projectURI.path.join(ResourceManagerUtils.CONFIG_FILE_NAME)
    );

    if (!configFileUri) {
      console.error("No workspace opened");
      return;
    }

    let config: Record<string, any> = {};
    const configFileExists = await this.fileService.exists(configFileUri);

    if (configFileExists) {
      const configFile = await this.fileService.readFile(configFileUri);
      config = JSON.parse(new TextDecoder().decode(configFile.value.buffer));
    }

    return (config.resources ?? []) as ConfigResourceValues[];
  };
}
