import React from "react";
type TranslationNoteType = {
    ID: string;
    Quote: string;
    Note: string;
};
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
declare const TranslationNote: React.FC<{
    note: TranslationNoteType;
}>;
export default TranslationNote;
//# sourceMappingURL=TranslationNote.d.ts.map