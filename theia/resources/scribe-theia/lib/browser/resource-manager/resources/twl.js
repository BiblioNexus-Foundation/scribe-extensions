"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.twlResource = void 0;
const core_1 = require("@theia/core");
const buffer_1 = require("@theia/core/lib/common/buffer");
const moment_1 = __importDefault(require("moment"));
const unzipit_1 = require("unzipit");
const React = __importStar(require("@theia/core/shared/react"));
exports.twlResource = {
    id: "codex.twl",
    displayLabel: "Translation Words List",
    getTableDisplayData: async () => {
        const resourceUrl = `https://git.door43.org/api/v1/catalog/search?subject=TSV Translation Words Links&metadataType=rc`;
        const response = await fetch(resourceUrl);
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
                resourceType: exports.twlResource.id,
            }));
        }
        return [];
    },
    async downloadResource(resourceInfo, { fs, resourceFolderUri }) {
        var _a, _b, _c, _d, _e;
        const fullResource = resourceInfo["fullResource"];
        const downloadProjectName = `${fullResource === null || fullResource === void 0 ? void 0 : fullResource.name}`;
        const downloadResourceFolder = resourceFolderUri.withPath(resourceFolderUri.path.join(downloadProjectName));
        await fs.createFolder(downloadResourceFolder);
        const result = await (0, unzipit_1.unzip)(fullResource.zipball_url);
        const keys = Object.keys(result.entries);
        for (const key of keys) {
            const item = result.entries[key];
            if (item.isDirectory) {
                await fs.createFolder(core_1.URI.fromFilePath(downloadResourceFolder.path.join(item.name).toString()));
            }
            else {
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
        // vscode.window.showInformationMessage(
        //   "Downloading linked resource for Translation Words List"
        // );
        // const linkedResource = await getLinkedTwResource(fullResource);
        // let linkedDownloadResponse = null;
        // if (linkedResource) {
        //   linkedDownloadResponse = await twHandler.downloadResource(
        //     linkedResource.fullResource,
        //     {
        //       resourceFolderUri: resourceFolderUri,
        //       fs: fs,
        //     }
        //   );
        //   vscode.window.showInformationMessage(
        //     "Linked resource for Translation Words List downloaded successfully"
        //   );
        // } else {
        //   vscode.window.showErrorMessage(
        //     "Unable to download linked resource for Translation Words List"
        //   );
        // }
        const resourceReturn = {
            resource: fullResource,
            folder: downloadResourceFolder,
            type: resourceInfo.id,
        };
        const localPath = resourceReturn === null || resourceReturn === void 0 ? void 0 : resourceReturn.folder.path.toString();
        const downloadedResource = {
            name: (_b = resourceReturn === null || resourceReturn === void 0 ? void 0 : resourceReturn.resource.name) !== null && _b !== void 0 ? _b : "",
            id: (_c = String(resourceReturn === null || resourceReturn === void 0 ? void 0 : resourceReturn.resource.id)) !== null && _c !== void 0 ? _c : "",
            localPath: localPath,
            type: (_d = resourceReturn === null || resourceReturn === void 0 ? void 0 : resourceReturn.type) !== null && _d !== void 0 ? _d : "",
            remoteUrl: (_e = resourceReturn === null || resourceReturn === void 0 ? void 0 : resourceReturn.resource.url) !== null && _e !== void 0 ? _e : "",
            version: resourceReturn === null || resourceReturn === void 0 ? void 0 : resourceReturn.resource.release.tag_name,
            //   linkedTw: linkedDownloadResponse && {
            //     ...linkedDownloadResponse,
            //     localPath: linkedDownloadResponse.localPath.includes(
            //       currentFolderURI.path
            //     )
            //       ? linkedDownloadResponse.localPath.replace(currentFolderURI.path, "")
            //       : linkedDownloadResponse.localPath,
            //   },
        };
        return downloadedResource;
    },
    openHandlers: {
        async readResourceData(uri, fs) {
            return {};
        },
        render(data) {
            return React.createElement("div", null, "Translation Words List");
        },
    },
};
//# sourceMappingURL=twl.js.map