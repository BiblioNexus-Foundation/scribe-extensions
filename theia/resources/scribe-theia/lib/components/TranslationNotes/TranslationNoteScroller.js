"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@vscode/webview-ui-toolkit/react");
const TranslationNote_1 = __importDefault(require("./TranslationNote"));
const TranslationNoteScroller = ({ notes, currentIndex, incrementIndex, decrementIndex, }) => {
    return (react_1.default.createElement("div", { className: "scroller-container" },
        react_1.default.createElement("div", { id: "note-position" },
            currentIndex + 1,
            " of ",
            notes.length),
        react_1.default.createElement("div", { className: "column-container" },
            react_1.default.createElement(react_2.VSCodeButton, { onClick: decrementIndex, appearance: "icon", "aria-label": "left" },
                react_1.default.createElement("span", { className: "arrow-button codicon codicon-chevron-left" })),
            react_1.default.createElement("div", { id: "note-container" },
                react_1.default.createElement(TranslationNote_1.default, { note: notes[currentIndex] })),
            react_1.default.createElement(react_2.VSCodeButton, { onClick: incrementIndex, appearance: "icon", "aria-label": "right" },
                react_1.default.createElement("span", { className: "arrow-button codicon codicon-chevron-right" })))));
};
exports.default = TranslationNoteScroller;
//# sourceMappingURL=TranslationNoteScroller.js.map