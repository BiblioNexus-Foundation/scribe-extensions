import React, { useEffect, useMemo, useState } from "@theia/core/shared/react";
import { VSCodeButton } from "@vscode/webview-ui-toolkit/react";
import TranslationWordRenderer from "../TranslationWords/TranslationWordRenderer";

const TranslationWordsList = ({
  translationWordsList,
  diskTwl,
  getTranslationWordContent,
}: {
  translationWordsList: any;
  diskTwl: any;
  getTranslationWordContent: (path: string) => Promise<string>;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [currentTranslationWordContent, setCurrentTranslationWord] = useState<
    string | null
  >(null);

  const currentTranslationWord = useMemo(
    () =>
      diskTwl?.[currentIndex]
        ? {
            path: diskTwl?.[currentIndex]?.twUriPath ?? null,
          }
        : null,
    [currentIndex, diskTwl]
  );

  useEffect(() => {
    if (currentTranslationWord?.path) {
      getTranslationWordContent(currentTranslationWord.path).then(
        setCurrentTranslationWord
      );
    }
  }, [currentTranslationWord?.path]);

  if (translationWordsList.length === 0) {
    return (
      <div className="prose-base">
        <h1>
          <i>No Translation Words Found</i>
        </h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <VSCodeButton
          onClick={() =>
            setCurrentIndex((prev) => (prev === 0 ? prev : prev - 1))
          }
          appearance="secondary"
          aria-label="left"
          className=""
          disabled={currentIndex === 0}
        >
          <i className="codicon codicon-chevron-left"></i>
        </VSCodeButton>

        <span className="w-fit">
          {currentIndex + 1} / {diskTwl.length}
        </span>
        <VSCodeButton
          onClick={() =>
            setCurrentIndex((prev) =>
              prev === diskTwl.length - 1 ? prev : prev + 1
            )
          }
          appearance="secondary"
          aria-label="right"
          className=""
          disabled={currentIndex === diskTwl.length - 1}
        >
          <i className="codicon codicon-chevron-right"></i>
        </VSCodeButton>
      </div>
      <div id="note-container" className="col-span-6">
        <TranslationWordRenderer content={currentTranslationWordContent} />
      </div>
    </div>
  );
};

export default TranslationWordsList;
