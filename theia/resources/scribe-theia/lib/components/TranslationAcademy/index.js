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
exports.TranslationAcademy = void 0;
const react_1 = require("@vscode/webview-ui-toolkit/react");
const React = __importStar(require("@theia/core/shared/react"));
const tsv_1 = require("../../utils/tsv");
const { useState } = React;
const TranslationAcademy = ({ taDirectories, getTaFolderContent, getTaContent, }) => {
    var _a, _b;
    const [taSubDirectories, setTaSubDirectories] = useState([]);
    const [taContent, setTaContent] = useState(null);
    const [selectedDirectory, setSelectedDirectory] = useState((_a = taDirectories[0]) !== null && _a !== void 0 ? _a : "");
    const [selectedSubDirectory, setSelectedSubDirectory] = useState((_b = taSubDirectories[0]) !== null && _b !== void 0 ? _b : "");
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "flex items-center gap-4 mb-6 justify-center" },
            React.createElement(react_1.VSCodeDropdown, { value: selectedDirectory, onChange: async (e) => {
                    var _a, _b;
                    setSelectedDirectory((_a = e.target) === null || _a === void 0 ? void 0 : _a.value);
                    const directoryContent = await getTaFolderContent((_b = e.target) === null || _b === void 0 ? void 0 : _b.value);
                    setTaSubDirectories(directoryContent);
                }, className: "w-fit" }, taDirectories.map((directory) => (React.createElement(react_1.VSCodeOption, { className: "w-full", key: directory }, directory)))),
            React.createElement(react_1.VSCodeDropdown, { onChange: (e) => {
                    var _a;
                    setSelectedSubDirectory((_a = e.target) === null || _a === void 0 ? void 0 : _a.value);
                }, value: selectedSubDirectory, className: "w-fit" }, taSubDirectories.map((subDirectory) => (React.createElement(react_1.VSCodeOption, { key: subDirectory, className: "w-full" }, subDirectory)))),
            React.createElement(react_1.VSCodeButton, { appearance: "primary", onClick: async () => {
                    const content = await getTaContent({
                        directory: selectedDirectory,
                        subDirectory: selectedSubDirectory,
                    });
                    setTaContent(content);
                } }, "View")),
        React.createElement("div", { className: "prose-base", dangerouslySetInnerHTML: {
                __html: (0, tsv_1.markdownToHTML)(taContent !== null && taContent !== void 0 ? taContent : ""),
            } })));
};
exports.TranslationAcademy = TranslationAcademy;
//# sourceMappingURL=index.js.map