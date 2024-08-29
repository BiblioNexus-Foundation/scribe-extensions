import { useState, useEffect } from "react";
import {
  VSCodePanels,
  VSCodePanelTab,
  VSCodePanelView,
} from "@vscode/webview-ui-toolkit/react";

import TranslationNoteScroller from "./components/TranslationNoteScroller";
import { vscode } from "../../utilities/vscode";

type CommandToFunctionMap = Record<string, (data: any) => void>;

type TnTSV = {
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

function TranslationNotesView() {
  const [chapter, setChapter] = useState<number>(1);
  const [verse, setVerse] = useState<number>(1);
  const [noteIndex, setNoteIndex] = useState<number>(0);
  const [translationNotesObj, setTranslationNotesObj] = useState<TnTSV>({});

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
      ["update"]: (data: TnTSV) => setTranslationNotesObj(data),
      ["changeRef"]: (data: VerseRefGlobalState) => changeChapterVerse(data),
    };

    commandToFunctionMapping[command](data);
  };

  function sendFirstLoadMessage() {
    vscode.postMessage({
      command: "loaded",
      text: "Webview first load success",
    });
  }

  useEffect(() => {
    window.addEventListener("message", handleMessage);
    sendFirstLoadMessage();

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  const incrementNoteIndex = () =>
    setNoteIndex((prevIndex) =>
      prevIndex < translationNotesObj[chapter][verse].length - 1
        ? prevIndex + 1
        : prevIndex
    );
  const decrementNoteIndex = () =>
    setNoteIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));

  const content = translationNotesObj?.[chapter]?.[verse] ? (
    <TranslationNoteScroller
      notes={translationNotesObj[chapter][verse] || {}}
      currentIndex={noteIndex}
      incrementIndex={incrementNoteIndex}
      decrementIndex={decrementNoteIndex}
    />
  ) : (
    "No translation notes available for this verse."
  );

  return (
    <main>
      <section className="translation-note-view">
        <VSCodePanels activeid="tab-verse" aria-label="note-type-tab">
          <VSCodePanelTab id="tab-verse">VERSE NOTES</VSCodePanelTab>
          <VSCodePanelView id="view-verse">{content}</VSCodePanelView>
        </VSCodePanels>
      </section>
    </main>
  );
}

export default TranslationNotesView;
