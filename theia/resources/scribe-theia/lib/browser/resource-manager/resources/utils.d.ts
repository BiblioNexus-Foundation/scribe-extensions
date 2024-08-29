import { ConfigResourceValues, Door43RepoResponse } from "./types";
import { URI } from "@theia/core";
import { FileService } from "@theia/filesystem/lib/browser/file-service";
export declare const downloadDoor43Resource: (resourceHandlerId: string, resourceInfo: Record<string, any>, { fs, resourceFolderUri }: {
    fs: FileService;
    resourceFolderUri: URI;
}) => Promise<ConfigResourceValues>;
export declare const fetchDoor43ResourceDisplayData: (resourceTypeId: string, params: {
    [x: string]: string;
    subject: string;
    metadataType: string;
}) => Promise<{
    id: string;
    name: string;
    owner: {
        name: string;
        url: string;
        avatarUrl: string;
    };
    version: {
        tag: string;
        releaseDate: Date;
    };
    fullResource: Door43RepoResponse;
    resourceType: string;
}[] | undefined>;
//# sourceMappingURL=utils.d.ts.map