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
const React = __importStar(require("@theia/core/shared/react"));
const TranslationWordsDropdown_1 = __importDefault(require("./TranslationWordsDropdown"));
const TranslationWordRenderer_1 = __importDefault(require("./TranslationWordRenderer"));
const { useState } = React;
const TranslationWords = ({ getTwContent, initialTranslationWords, searchTranslationWords, }) => {
    const [translationWord, setTranslationWord] = useState(null);
    const [twContent, setTwContent] = useState(null);
    React.useEffect(() => {
        if (translationWord) {
            getTwContent(translationWord).then((content) => {
                setTwContent(content);
            });
        }
    }, [translationWord]);
    return (React.createElement("div", { className: "flex flex-col" },
        React.createElement(TranslationWordsDropdown_1.default, { setTranslationWord: setTranslationWord, selectedTranslationWord: translationWord, initialTranslationWords: initialTranslationWords, searchTranslationWords: searchTranslationWords }),
        React.createElement(TranslationWordRenderer_1.default, { content: twContent })));
};
exports.default = TranslationWords;
//# sourceMappingURL=index.js.map