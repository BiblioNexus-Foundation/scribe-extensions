import * as React from "react";
import { TranslationWord } from "../../browser/resource-manager/resources/types";
type TWCategory = "all" | "kt" | "names" | "other";
declare const TranslationWordsDropdown: ({ setTranslationWord, selectedTranslationWord, initialTranslationWords, searchTranslationWords, }: {
    initialTranslationWords: TranslationWord[];
    setTranslationWord: (language: TranslationWord) => void;
    selectedTranslationWord: TranslationWord | null;
    searchTranslationWords: (category: TWCategory, query: string) => Promise<TranslationWord[]>;
}) => React.JSX.Element;
export default TranslationWordsDropdown;
//# sourceMappingURL=TranslationWordsDropdown.d.ts.map