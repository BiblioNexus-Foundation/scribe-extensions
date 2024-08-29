"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchDoor43ResourceDisplayData = exports.downloadDoor43Resource = void 0;
const unzipit_1 = require("unzipit");
const core_1 = require("@theia/core");
const buffer_1 = require("@theia/core/lib/common/buffer");
const moment_1 = __importDefault(require("moment"));
const downloadDoor43Resource = async (resourceHandlerId, resourceInfo, { fs, resourceFolderUri }) => {
    var _a, _b, _c, _d;
    const fullResource = resourceInfo["fullResource"];
    const downloadProjectName = `${fullResource === null || fullResource === void 0 ? void 0 : fullResource.name}`;
    const downloadResourceFolder = resourceFolderUri.withPath(resourceFolderUri.path.join(downloadProjectName));
    await fs.createFolder(downloadResourceFolder);
    const result = await (0, unzipit_1.unzip)(fullResource.zipball_url);
    const keys = Object.keys(result.entries);
    for (const key of keys) {
        const item = result.entries[key];
        if (!item.isDirectory) {
            const bufferContent = Buffer.from(await item.arrayBuffer());
            const path = [...(_a = item === null || item === void 0 ? void 0 : item.name) === null || _a === void 0 ? void 0 : _a.split("/")];
            path.shift();
            const fileUri = core_1.URI.fromFilePath(downloadResourceFolder.path.join(path.join("/")).toString());
            await fs.writeFile(fileUri, buffer_1.BinaryBuffer.wrap(bufferContent));
        }
    }
    const metadataRes = await fetch(fullResource.metadata_json_url);
    const data = (await metadataRes.json());
    data.agOffline = true;
    data.meta = fullResource;
    data.lastUpdatedAg = (0, moment_1.default)().format();
    await fs.writeFile(core_1.URI.fromFilePath(downloadResourceFolder.path.join("metadata.json").toString()), buffer_1.BinaryBuffer.fromString(JSON.stringify(data)));
    const resourceReturn = {
        resource: fullResource,
        folder: downloadResourceFolder,
        type: resourceHandlerId,
    };
    const localPath = resourceReturn === null || resourceReturn === void 0 ? void 0 : resourceReturn.folder.path.toString();
    const downloadedResource = {
        name: (_b = resourceReturn === null || resourceReturn === void 0 ? void 0 : resourceReturn.resource.name) !== null && _b !== void 0 ? _b : "",
        id: (_c = String(resourceReturn === null || resourceReturn === void 0 ? void 0 : resourceReturn.resource.id)) !== null && _c !== void 0 ? _c : "",
        localPath: localPath,
        type: resourceReturn.type,
        remoteUrl: (_d = resourceReturn === null || resourceReturn === void 0 ? void 0 : resourceReturn.resource.url) !== null && _d !== void 0 ? _d : "",
        version: resourceReturn === null || resourceReturn === void 0 ? void 0 : resourceReturn.resource.release.tag_name,
    };
    return downloadedResource;
};
exports.downloadDoor43Resource = downloadDoor43Resource;
const fetchDoor43ResourceDisplayData = async (resourceTypeId, params) => {
    const urlParams = new URLSearchParams(params);
    const resourceUrl = `https://git.door43.org/api/v1/catalog/search?${urlParams.toString()}`;
    const response = await fetch(resourceUrl);
    if (!response.ok) {
        throw new Error(`Failed to fetch resources from Door43 API. Status: ${response.status}`);
    }
    const responseJson = (await response.json());
    if (responseJson === null || responseJson === void 0 ? void 0 : responseJson.data) {
        return responseJson.data.map((resource) => ({
            id: resource.id.toString(),
            name: resource.name,
            owner: {
                name: resource.repo.owner.full_name,
                url: resource.repo.owner.website,
                avatarUrl: resource.repo.owner.avatar_url,
            },
            version: {
                tag: resource.release.tag_name,
                releaseDate: new Date(resource.released),
            },
            fullResource: resource,
            resourceType: resourceTypeId,
        }));
    }
};
exports.fetchDoor43ResourceDisplayData = fetchDoor43ResourceDisplayData;
//# sourceMappingURL=utils.js.map