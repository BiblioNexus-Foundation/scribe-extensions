import * as React from "@theia/core/shared/react";
import { TranslationWord } from "../../browser/resource-manager/resources/types";
declare const TranslationWords: ({ getTwContent, initialTranslationWords, searchTranslationWords, }: {
    getTwContent: (tw: TranslationWord) => Promise<string | null>;
    initialTranslationWords: TranslationWord[];
    searchTranslationWords: (category: "all" | "kt" | "names" | "other", query: string) => Promise<TranslationWord[]>;
}) => React.JSX.Element;
export default TranslationWords;
//# sourceMappingURL=index.d.ts.map