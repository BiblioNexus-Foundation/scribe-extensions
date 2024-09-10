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
Object.defineProperty(exports, "__esModule", { value: true });
exports.taResource = void 0;
const React = __importStar(require("@theia/core/shared/react"));
const utils_1 = require("./utils");
const TranslationAcademy_1 = require("../../../components/TranslationAcademy");
exports.taResource = {
    id: "codex.ta",
    displayLabel: "Translation Academy",
    getTableDisplayData: async () => {
        try {
            const data = await (0, utils_1.fetchDoor43ResourceDisplayData)(exports.taResource.id, {
                subject: "Translation Academy",
                metadataType: "rc",
            });
            return data !== null && data !== void 0 ? data : [];
        }
        catch (error) {
            return [];
        }
    },
    downloadResource: async (resourceInfo, { fs, resourceFolderUri }) => (0, utils_1.downloadDoor43Resource)(exports.taResource.id, resourceInfo, {
        fs,
        resourceFolderUri,
    }),
    openHandlers: {
        async readResourceData(uri, fs) {
            const resourceStat = await fs.resolve(uri);
            if (resourceStat === null || resourceStat === void 0 ? void 0 : resourceStat.children) {
                return resourceStat.children
                    .filter((child) => child.isDirectory)
                    .map((child) => child.name);
            }
            return [];
        },
        render(data, ctx) {
            if (!ctx) {
                return "Err: Context is required to render Translation Academy";
            }
            return (React.createElement(TranslationAcademy_1.TranslationAcademy, { getTaContent: async (params) => await getTaContent(params, ctx), getTaFolderContent: async (directory) => { var _a; return (_a = (await getTaFolderContent(directory, ctx))) !== null && _a !== void 0 ? _a : []; }, taDirectories: data }));
        },
    },
};
const getTaFolderContent = async (directory, ctx) => {
    var _a;
    const folderUri = ctx.resourceUri.withPath(ctx.resourceUri.path.join(directory));
    const folderInfo = await ctx.fs.resolve(folderUri);
    const content = (_a = folderInfo === null || folderInfo === void 0 ? void 0 : folderInfo.children) === null || _a === void 0 ? void 0 : _a.filter((child) => child.isDirectory).map((child) => child.name);
    return content;
};
const getTaContent = async ({ directory, subDirectory, }, ctx) => {
    const fileUri = ctx.resourceUri.withPath(ctx.resourceUri.path.join(directory, subDirectory, "01.md"));
    const fileContents = await ctx.fs.readFile(fileUri);
    const md = fileContents.value.toString();
    return md;
};
//# sourceMappingURL=ta.js.map