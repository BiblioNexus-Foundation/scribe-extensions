import { useState, useEffect } from "react";
import {
  VSCodePanels,
  VSCodePanelTab,
  VSCodePanelView,
} from "@vscode/webview-ui-toolkit/react";

import React from "@theia/core/shared/react";

import TranslationNoteScroller from "./TranslationNoteScroller";
import { Badge } from "../ui/Badge";
import Button from "../Button";
import TranslationNote from "./TranslationNote";

type CommandToFunctionMap = Record<string, (data: any) => void>;

export type TnTSV = {
  [chapter: number]: {
    [verse: number]: any;
  };
};

type VerseRefGlobalState = {
  verseRef: string;
};

export const extractBookChapterVerse = (
  refString: string
): { bookID: string; chapter: number; verse: number } => {
  const match = refString.match(/([A-Za-z0-9]{3}) (\d+):(\d+)/);

  return match
    ? {
        bookID: match[1],
        chapter: parseInt(match[2], 10),
        verse: parseInt(match[3], 10),
      }
    : { bookID: "GEN", chapter: 1, verse: 1 };
};

function TranslationNotesView({
  tnTsv: translationNotesObj,
  ref,
}: {
  tnTsv: TnTSV;
  ref: VerseRefGlobalState;
}) {
  const [chapter, setChapter] = useState<number>(1);
  const [verse, setVerse] = useState<number>(1);
  const [noteIndex, setNoteIndex] = useState<number>(0);

  const changeChapterVerse = (ref: VerseRefGlobalState): void => {
    const { verseRef } = ref;
    const { chapter: newChapter, verse: newVerse } =
      extractBookChapterVerse(verseRef);

    setChapter(newChapter);
    setVerse(newVerse);
    setNoteIndex(0);
  };

  const handleMessage = (event: MessageEvent) => {
    const { command, data } = event.data;
    1;

    const commandToFunctionMapping: CommandToFunctionMap = {
      ["changeRef"]: (data: VerseRefGlobalState) => changeChapterVerse(data),
    };

    commandToFunctionMapping[command](data);
  };

  const incrementNoteIndex = () =>
    setNoteIndex((prevIndex) =>
      prevIndex < translationNotesObj[chapter][verse].length - 1
        ? prevIndex + 1
        : prevIndex
    );
  const decrementNoteIndex = () =>
    setNoteIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));

  const notes = translationNotesObj?.[chapter]?.[verse] || [];

  return (
    <main>
      <section className="translation-note-view">
        <div className="flex items-center border-b py-2.5 px-2 dark:border-zinc-900 border-zinc-200 justify-between">
          <Badge variant="destructive">
            {noteIndex + 1} of {notes.length}
          </Badge>
          <div className="flex items-center gap-[5px]">
            <Button
              icon={
                <span className="arrow-button codicon codicon-chevron-left"></span>
              }
              onClick={decrementNoteIndex}
            />
            <Button
              icon={
                <span className="arrow-button codicon codicon-chevron-right"></span>
              }
              onClick={incrementNoteIndex}
            />
          </div>
        </div>
        <VSCodePanels activeid="tab-verse" aria-label="note-type-tab">
          <VSCodePanelView id="view-verse">
            <div className="mt-2.5 font-normal space-y-2 mx-auto max-w-md">
              <article className="dark:text-zinc-50 text-zinc-700 leading-5   text-xs tracking-wide text-center whitespace-pre-line">
                {<TranslationNote note={notes[noteIndex]} />}
              </article>
            </div>
          </VSCodePanelView>
        </VSCodePanels>
      </section>
    </main>
  );
}

export default TranslationNotesView;
