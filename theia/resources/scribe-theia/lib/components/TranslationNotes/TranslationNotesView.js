"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractBookChapterVerse = void 0;
const react_1 = require("react");
const react_2 = require("@vscode/webview-ui-toolkit/react");
const react_3 = __importDefault(require("@theia/core/shared/react"));
const TranslationNoteScroller_1 = __importDefault(require("./TranslationNoteScroller"));
const extractBookChapterVerse = (refString) => {
    const match = refString.match(/([A-Za-z0-9]{3}) (\d+):(\d+)/);
    return match
        ? {
            bookID: match[1],
            chapter: parseInt(match[2], 10),
            verse: parseInt(match[3], 10),
        }
        : { bookID: "GEN", chapter: 1, verse: 1 };
};
exports.extractBookChapterVerse = extractBookChapterVerse;
function TranslationNotesView({ tnTsv: translationNotesObj, ref, }) {
    var _a;
    const [chapter, setChapter] = (0, react_1.useState)(1);
    const [verse, setVerse] = (0, react_1.useState)(1);
    const [noteIndex, setNoteIndex] = (0, react_1.useState)(0);
    const changeChapterVerse = (ref) => {
        const { verseRef } = ref;
        const { chapter: newChapter, verse: newVerse } = (0, exports.extractBookChapterVerse)(verseRef);
        setChapter(newChapter);
        setVerse(newVerse);
        setNoteIndex(0);
    };
    const handleMessage = (event) => {
        const { command, data } = event.data;
        1;
        const commandToFunctionMapping = {
            ["changeRef"]: (data) => changeChapterVerse(data),
        };
        commandToFunctionMapping[command](data);
    };
    const incrementNoteIndex = () => setNoteIndex((prevIndex) => prevIndex < translationNotesObj[chapter][verse].length - 1
        ? prevIndex + 1
        : prevIndex);
    const decrementNoteIndex = () => setNoteIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    const content = ((_a = translationNotesObj === null || translationNotesObj === void 0 ? void 0 : translationNotesObj[chapter]) === null || _a === void 0 ? void 0 : _a[verse]) ? (react_3.default.createElement(TranslationNoteScroller_1.default, { notes: translationNotesObj[chapter][verse] || {}, currentIndex: noteIndex, incrementIndex: incrementNoteIndex, decrementIndex: decrementNoteIndex })) : ("No translation notes available for this verse.");
    return (react_3.default.createElement("main", null,
        react_3.default.createElement("section", { className: "translation-note-view" },
            react_3.default.createElement(react_2.VSCodePanels, { activeid: "tab-verse", "aria-label": "note-type-tab" },
                react_3.default.createElement(react_2.VSCodePanelTab, { id: "tab-verse" }, "VERSE NOTES"),
                react_3.default.createElement(react_2.VSCodePanelView, { id: "view-verse" }, content)))));
}
exports.default = TranslationNotesView;
//# sourceMappingURL=TranslationNotesView.js.map