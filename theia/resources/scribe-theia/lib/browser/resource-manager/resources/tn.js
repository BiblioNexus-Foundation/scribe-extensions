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
exports.tnResource = void 0;
const React = __importStar(require("@theia/core/shared/react"));
const TranslationNotesView_1 = __importDefault(require("../../../components/TranslationNotes/TranslationNotesView"));
const translationNotes_1 = require("../../../utils/translationNotes");
const utils_1 = require("./utils");
exports.tnResource = {
    id: "codex.tn",
    displayLabel: "Translation Notes",
    getTableDisplayData: async () => {
        try {
            const data = await (0, utils_1.fetchDoor43ResourceDisplayData)(exports.tnResource.id, {
                subject: "TSV Translation Notes",
                metadataType: "rc",
            });
            return data !== null && data !== void 0 ? data : [];
        }
        catch (error) {
            return [];
        }
    },
    downloadResource: async (resourceInfo, { fs, resourceFolderUri }) => (0, utils_1.downloadDoor43Resource)(exports.tnResource.id, resourceInfo, {
        fs,
        resourceFolderUri,
    }),
    openHandlers: {
        async readResourceData(uri, fs) {
            return await (0, translationNotes_1.getDocumentAsScriptureTSV)("ACT 1:1", uri, fs);
        },
        render(data) {
            return (React.createElement(TranslationNotesView_1.default, { tnTsv: data, ref: { verseRef: "GEN 1:1" } }));
        },
    },
};
//# sourceMappingURL=tn.js.map