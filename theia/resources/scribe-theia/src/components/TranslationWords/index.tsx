import * as React from "@theia/core/shared/react";

import TranslationWordRenderer from "./TranslationWordRenderer";
import { TranslationWord } from "../../browser/resource-manager/resources/types";
import TranslationWordsHeader from "./TranslationWordsHeader";

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
  const {
    setTranslationWord,
    category,
    setCategory,
    twContent,
    translationWord,
    translationWords,
  } = useTranslationWords({
    getTwContent,
    initialTranslationWords,
    searchTranslationWords,
  });

  return (
    <div className="flex flex-col">
      <TranslationWordsHeader
        words={translationWords}
        setTranslationWord={setTranslationWord}
        category={category}
        setCategory={setCategory}
        selectedWord={translationWord}
      />
      <TranslationWordRenderer content={twContent} />
    </div>
  );
};

export default TranslationWords;

const useTranslationWords = ({
  getTwContent,
  searchTranslationWords,
  initialTranslationWords,
}: {
  getTwContent: (tw: TranslationWord) => Promise<string | null>;
  initialTranslationWords: TranslationWord[];
  searchTranslationWords: (
    category: "all" | "kt" | "names" | "other",
    query: string
  ) => Promise<TranslationWord[]>;
}) => {
  const [translationWords, setTranslationWords] = React.useState<
    TranslationWord[]
  >(initialTranslationWords);
  const [translationWord, setTranslationWord] =
    React.useState<TranslationWord | null>(null);
  const [category, setCategory] = React.useState<
    "all" | "kt" | "names" | "other"
  >("all");
  const [twContent, setTwContent] = React.useState<string | null>(null);

  React.useEffect(() => {
    console.log("GETTING TW CONTENT");
    if (translationWord) {
      getTwContent(translationWord).then((content) => {
        setTwContent(content);
      });
    }
  }, [translationWord]);

  React.useEffect(() => {
    console.log("SEARCHING TW WORDS: & RETURING WORDS");
    searchTranslationWords(category, "").then((words) => {
      setTranslationWords(words);
    });
  }, [category]);

  return {
    setTranslationWord,
    category,
    setCategory,
    twContent,
    translationWord,
    translationWords,
  };
};
