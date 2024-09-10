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
const React = __importStar(require("@theia/core/shared/react"));
const tsv_1 = require("../../utils/tsv");
const TranslationWordRenderer = ({ content }) => {
    var _a;
    if (content === null) {
        return (React.createElement("div", { className: "prose-base" },
            React.createElement("i", null,
                React.createElement("h2", null, "Select a translation word to view its content."))));
    }
    return (React.createElement("div", { dangerouslySetInnerHTML: { __html: (_a = (0, tsv_1.markdownToHTML)(content)) !== null && _a !== void 0 ? _a : "" }, className: "prose prose-sm" }));
};
exports.default = TranslationWordRenderer;
//# sourceMappingURL=TranslationWordRenderer.js.map