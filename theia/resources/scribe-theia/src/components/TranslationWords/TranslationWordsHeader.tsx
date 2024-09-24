import React, { useEffect, useRef, useState } from "@theia/core/shared/react";
import { Badge } from "../ui/Badge";
import type { TranslationWord } from "../../browser/resource-manager/resources/types";
import { VirtualizedCombobox } from "../ui/VirtualizedCombobox";

type TWCategory = "all" | "kt" | "names" | "other";

const TranslationWordsHeader = ({
  words,
  setTranslationWord,
  category,
  setCategory,
}: {
  words: TranslationWord[];
  setTranslationWord: (word: TranslationWord) => void;
  category: TWCategory;
  setCategory: (category: TWCategory) => void;
  selectedWord: TranslationWord | null;
}) => {
  const panelRef = useRef<HTMLDivElement>(null);

  const { listWidth, handleResize } = useListWidth(panelRef);

  return (
    <div
      className="flex items-center border-b py-2.5 px-2 dark:border-zinc-900 border-zinc-200 justify-between"
      ref={panelRef}
    >
      <div className="flex items-center gap-2">
        <Badge
          variant={category === "all" ? "destructive" : "destructive-clear-bg"}
        >
          <button className="outline-none" onClick={() => setCategory("all")}>
            All
          </button>
        </Badge>
        <Badge
          variant={category === "kt" ? "destructive" : "destructive-clear-bg"}
        >
          <button className="outline-none" onClick={() => setCategory("kt")}>
            KT
          </button>
        </Badge>
        <Badge
          variant={
            category === "names" ? "destructive" : "destructive-clear-bg"
          }
        >
          <button className="outline-none" onClick={() => setCategory("names")}>
            NAMES
          </button>
        </Badge>
        <Badge
          variant={
            category === "other" ? "destructive" : "destructive-clear-bg"
          }
        >
          <button className="outline-none" onClick={() => setCategory("other")}>
            OTHER
          </button>
        </Badge>
      </div>
      <div className="flex items-center gap-[5px]">
        <TranslationWordSearch
          listWidth={listWidth}
          words={words}
          setTranslationWord={setTranslationWord}
          fieldProps={{
            onFocus: handleResize,
          }}
        />
      </div>
    </div>
  );
};

export default TranslationWordsHeader;

const TranslationWordSearch = ({
  listWidth,
  words,
  setTranslationWord,
  fieldProps,
}: {
  listWidth: number;
  words: TranslationWord[];
  setTranslationWord: (word: TranslationWord) => void;
  fieldProps?: {
    onFocus?: React.FocusEventHandler<HTMLElement>;
  };
}) => {
  const options = (words ?? []).map((word) => ({
    label: word.name,
    value: word.name,
  }));

  const handleSelect = (selected: { value: string; label: string }) => {
    const word = words.find((word) => word.name === selected.value);
    if (word) {
      setTranslationWord(word);
    }
  };

  return (
    <VirtualizedCombobox
      options={options}
      searchPlaceholder="Search Translation Word"
      onSelectOption={handleSelect}
    />
  );
};

const useListWidth = (panelRef: React.RefObject<HTMLDivElement>) => {
  const [listWidth, setListWidth] = useState<number>(
    panelRef.current?.offsetWidth ?? 300
  );

  useEffect(() => {
    if (panelRef.current) {
      window.addEventListener("resize", handleResize);
      handleResize(); // Initial calculation of the width of the text field
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [panelRef.current?.offsetWidth]);

  const handleResize = () => {
    setListWidth(panelRef?.current?.offsetWidth ?? 300);
  };

  return {
    listWidth,
    handleResize,
    panelRef,
  };
};
