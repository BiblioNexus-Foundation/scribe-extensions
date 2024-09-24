import * as React from "@theia/core/shared/react";

import { createStore, useStore } from "zustand";
import { createContext, useContext } from "react";
import type { TranslationWord } from "../../browser/resource-manager/resources/types";

export type TWCategory = "all" | "kt" | "names" | "other";

export interface TranslationWordStoreState {
  search: {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
  };
  category: TWCategory;
  setCategory: (category: TWCategory) => void;
  translationWords: TranslationWord[];
  searchTranslationWords: (
    category: string,
    query: string
  ) => Promise<TranslationWord[]>;

  selectedWord: TranslationWord | null;
  setSelectedWord: (word: TranslationWord | null) => void;
}

const createTranslationWordStore = ({
  translationWords,
  searchTranslationWords,
}: {
  translationWords: TranslationWord[];
  searchTranslationWords: (
    category: TWCategory,
    query: string
  ) => Promise<TranslationWord[]>;
}) =>
  createStore<TranslationWordStoreState>()((set) => ({
    search: {
      searchQuery: "",
      setSearchQuery: (query: string) =>
        set((state) => ({ search: { ...state.search, searchQuery: query } })),
    },
    category: "all",
    setCategory: (category: TWCategory) => set({ category: category }),
    translationWords,
    searchTranslationWords: searchTranslationWords,
    selectedWord: null,
    setSelectedWord: (word: TranslationWord | null) =>
      set({ selectedWord: word }),
  }));

type TranslationWordStore = ReturnType<typeof createTranslationWordStore>;

const TranslationWordStoreContext = createContext<
  ReturnType<typeof createTranslationWordStore> | undefined
>(undefined);

export const useTranslationWordStore = <S,>(
  selector: S
): S extends (store: TranslationWordStoreState) => infer Data
  ? Data
  : S extends undefined
  ? TranslationWordStoreState
  : never => {
  const store = useContext(TranslationWordStoreContext);
  if (!store) {
    throw new Error(
      "useTranslationWordStore must be used within a TranslationWordStoreProvider"
    );
  }

  const slice = useStore(
    store,
    selector as (store: TranslationWordStoreState) => unknown
  );

  return slice as S extends (store: TranslationWordStoreState) => infer Data
    ? Data
    : S extends undefined
    ? TranslationWordStoreState
    : never;
};

export const TranslationWordStoreProvider = ({
  children,
  translationWords,
  searchTranslationWords,
}: {
  children: React.ReactNode;
  translationWords: TranslationWord[];
  searchTranslationWords: (
    category: TWCategory,
    query: string
  ) => Promise<TranslationWord[]>;
}) => {
  const translationWordStore = createTranslationWordStore({
    translationWords,
    searchTranslationWords,
  });
  return (
    <TranslationWordStoreContext.Provider value={translationWordStore}>
      {children}
    </TranslationWordStoreContext.Provider>
  );
};
