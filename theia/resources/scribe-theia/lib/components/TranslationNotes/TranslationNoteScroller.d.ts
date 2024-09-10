import React from "react";
type TranslationNoteType = {
    ID: string;
    Quote: string;
    Note: string;
};
type NoteIndex = number;
declare const TranslationNoteScroller: ({ notes, currentIndex, incrementIndex, decrementIndex, }: {
    notes: TranslationNoteType[];
    currentIndex: NoteIndex;
    incrementIndex: () => void;
    decrementIndex: () => void;
}) => React.JSX.Element;
export default TranslationNoteScroller;
//# sourceMappingURL=TranslationNoteScroller.d.ts.map