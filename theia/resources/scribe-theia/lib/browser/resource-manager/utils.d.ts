import { WorkspaceService } from "@theia/workspace/lib/browser";
import { ConfigResourceValues } from "./resources/types";
import { MessageService } from "@theia/core";
import { FileService } from "@theia/filesystem/lib/browser/file-service";
export declare class ResourceManagerUtils {
    static CONFIG_FILE_NAME: string;
    protected readonly workspaceService: WorkspaceService;
    protected readonly messageService: MessageService;
    protected readonly fileService: FileService;
    addDownloadedResourceToProjectConfig: (resource: ConfigResourceValues) => Promise<void>;
    getDownloadedResourcesFromProjectConfig: () => Promise<ConfigResourceValues[] | undefined>;
}
//# sourceMappingURL=utils.d.ts.map