import React from "@theia/core/shared/react";
export type TnTSV = {
    [chapter: number]: {
        [verse: number]: any;
    };
};
type VerseRefGlobalState = {
    verseRef: string;
};
export declare const extractBookChapterVerse: (refString: string) => {
    bookID: string;
    chapter: number;
    verse: number;
};
declare function TranslationNotesView({ tnTsv: translationNotesObj, ref, }: {
    tnTsv: TnTSV;
    ref: VerseRefGlobalState;
}): React.JSX.Element;
export default TranslationNotesView;
//# sourceMappingURL=TranslationNotesView.d.ts.map