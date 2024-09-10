"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const tsv_1 = require("../../utils/tsv");
/**
 * @component
 * @description
 * `TranslationNote` renders a translation note which includes a heading (Quote) and the note's content (Note).
 * The note content is converted from Markdown to HTML for rendering. The component expects a `note` object
 * as a prop, conforming to the `TranslationNoteType` interface.
 *
 * The `Quote` is displayed as the heading of the note. If `Quote` is not provided or is an empty string,
 * "General Verse Note" is used as a fallback. The `Note` content is processed through `markdownToHTML`
 * function to convert Markdown formatted text into HTML.
 */
const TranslationNote = ({ note: { ID, Quote, Note }, }) => {
    const effectiveQuote = Quote || "General Verse Note";
    return (react_1.default.createElement("div", { id: `note_${ID}` },
        react_1.default.createElement("h3", null, effectiveQuote),
        react_1.default.createElement("div", { dangerouslySetInnerHTML: { __html: (0, tsv_1.markdownToHTML)(Note) } })));
};
exports.default = TranslationNote;
//# sourceMappingURL=TranslationNote.js.map