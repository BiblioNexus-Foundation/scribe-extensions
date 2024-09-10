import * as React from "@theia/core/shared/react";

import TranslationWordsDropdown from "./TranslationWordsDropdown";
import TranslationWordRenderer from "./TranslationWordRenderer";
import { TranslationWord } from "../../browser/resource-manager/resources/types";

const { useState } = React;

const TranslationWords = ({
  getTwContent,
  initialTranslationWords,
  searchTranslationWords,
}: {
  getTwContent: (tw: TranslationWord) => Promise<string | null>;
  initialTranslationWords: TranslationWord[];
  searchTranslationWords: (
    category: "all" | "kt" | "names" | "other",
    query: string
  ) => Promise<TranslationWord[]>;
}) => {
  const [translationWord, setTranslationWord] =
    useState<TranslationWord | null>(null);

  const [twContent, setTwContent] = useState<string | null>(null);

  React.useEffect(() => {
    if (translationWord) {
      getTwContent(translationWord).then((content) => {
        setTwContent(content);
      });
    }
  }, [translationWord]);

  return (
    <div className="flex flex-col">
      <TranslationWordsDropdown
        setTranslationWord={setTranslationWord}
        selectedTranslationWord={translationWord}
        initialTranslationWords={initialTranslationWords}
        searchTranslationWords={searchTranslationWords}
      />
      <TranslationWordRenderer content={twContent} />
    </div>
  );
};

export default TranslationWords;
