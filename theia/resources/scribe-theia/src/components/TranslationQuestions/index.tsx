import React, { useState } from "react";
import { Badge } from "../ui/Badge";
import Button from "../Button";
import {
  VSCodePanels,
  VSCodePanelView,
} from "@vscode/webview-ui-toolkit/react";

const TranslationQuestions = ({
  translationQuestions,
}: {
  translationQuestions: Record<string, string>[];
}) => {
  const [questionIndex, setQuestionIndex] = useState(0);

  const incrementQuestionIndex = () =>
    setQuestionIndex((prevIndex) =>
      prevIndex < translationQuestions.length - 1 ? prevIndex + 1 : prevIndex
    );
  const decrementQuestionIndex = () =>
    setQuestionIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );

  const currentTranslationQuestion = translationQuestions[questionIndex];

  return (
    <main>
      <section className="translation-questions-view">
        <div className="flex items-center border-b py-2.5 px-2 dark:border-zinc-900 border-zinc-200 justify-between">
          <Badge variant="destructive">
            {questionIndex + 1} of {translationQuestions.length}
          </Badge>
          <div className="flex items-center gap-[5px]">
            <Button
              icon={
                <span className="arrow-button codicon codicon-chevron-left"></span>
              }
              onClick={decrementQuestionIndex}
              disabled={questionIndex === 0}
            />
            <Button
              icon={
                <span className="arrow-button codicon codicon-chevron-right"></span>
              }
              onClick={incrementQuestionIndex}
              disabled={questionIndex === translationQuestions.length - 1}
            />
          </div>
        </div>
        <VSCodePanels activeid="tab-verse" aria-label="note-type-tab">
          <VSCodePanelView id="view-verse">
            <div className="mt-2.5 font-normal space-y-2 mx-auto max-w-md">
              <article className="dark:text-zinc-50 text-zinc-700 leading-5   text-xs tracking-wide text-center whitespace-pre-line">
                <div
                  id="note-container prose"
                  className="col-span-6 w-full space-y-4"
                >
                  <div className="font-semibold text-lg">
                    {currentTranslationQuestion?.Question}
                  </div>
                  <div className="text-base">
                    {currentTranslationQuestion?.Response}
                  </div>
                </div>
              </article>
            </div>
          </VSCodePanelView>
        </VSCodePanels>
      </section>
    </main>
  );
};

export default TranslationQuestions;
