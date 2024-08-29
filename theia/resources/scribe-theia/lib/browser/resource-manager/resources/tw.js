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
exports.twResource = void 0;
const React = __importStar(require("@theia/core/shared/react"));
const utils_1 = require("./utils");
const TranslationWords_1 = __importDefault(require("../../../components/TranslationWords"));
exports.twResource = {
    id: "codex.tw",
    displayLabel: "Translation Word",
    getTableDisplayData: async () => {
        try {
            const data = await (0, utils_1.fetchDoor43ResourceDisplayData)(exports.twResource.id, {
                subject: "Translation Words",
                metadataType: "rc",
            });
            return data !== null && data !== void 0 ? data : [];
        }
        catch (error) {
            return [];
        }
    },
    downloadResource: async (resourceInfo, { fs, resourceFolderUri }) => (0, utils_1.downloadDoor43Resource)(exports.twResource.id, resourceInfo, {
        fs,
        resourceFolderUri,
    }),
    openHandlers: {
        async readResourceData(uri, fs) {
            var _a, _b, _c, _d, _e, _f;
            const resourceBibleDirUri = uri.withPath(uri.path.join(`bible`));
            if (!(await fs.exists(resourceBibleDirUri))) {
                console.log(`The selected resource does not exist or it's invalid directory.`);
                return [];
            }
            const ktPath = resourceBibleDirUri.withPath(resourceBibleDirUri.path.join(`./kt`));
            const namesPath = resourceBibleDirUri.withPath(resourceBibleDirUri.path.join(`./names`));
            const otherPath = resourceBibleDirUri.withPath(resourceBibleDirUri.path.join(`./other`));
            const ktWordDir = await fs.resolve(ktPath);
            const ktWords = (_b = (_a = ktWordDir.children) === null || _a === void 0 ? void 0 : _a.map(({ name }) => ({
                name: name.split(".")[0],
                path: ktPath.path.join(`./${name}`).toString(),
                ref: "kt",
            }))) !== null && _b !== void 0 ? _b : [];
            const namesWordsDir = await fs.resolve(namesPath);
            const namesWords = (_d = (_c = namesWordsDir.children) === null || _c === void 0 ? void 0 : _c.map(({ name: fileName }) => ({
                name: fileName.split(".")[0],
                path: namesPath.path.join(`./${fileName}`).toString(),
                ref: "names",
            }))) !== null && _d !== void 0 ? _d : [];
            const otherWordsDir = await fs.resolve(otherPath);
            const otherWords = (_f = (_e = otherWordsDir.children) === null || _e === void 0 ? void 0 : _e.map(({ name: fileName }) => ({
                name: fileName.split(".")[0],
                path: otherPath === null || otherPath === void 0 ? void 0 : otherPath.path.join(`./${fileName}`).toString(),
                ref: "other",
            }))) !== null && _f !== void 0 ? _f : [];
            const allWords = [...ktWords, ...namesWords, ...otherWords].sort((a, b) => a.name.localeCompare(b.name));
            return allWords;
        },
        render(data, ctx) {
            if (!ctx) {
                return "Err: Context is required to render Translation Academy";
            }
            const searchTranslationWord = async (category, query) => {
                if (!query || query.length === 0) {
                    return data.filter((word) => category === "all" || word.ref === category);
                }
                const words = data.filter((word) => word.name.toLowerCase().includes(query.toLowerCase()) &&
                    (category === "all" || word.ref === category));
                return words;
            };
            const getTwContent = async (word) => {
                const fileUri = ctx.resourceUri.withPath(word.path);
                const fileContents = await ctx.fs.readFile(fileUri);
                const md = fileContents.value.toString();
                return md;
            };
            return (React.createElement(TranslationWords_1.default, { getTwContent: getTwContent, initialTranslationWords: data, searchTranslationWords: searchTranslationWord }));
        },
    },
};
//# sourceMappingURL=tw.js.map