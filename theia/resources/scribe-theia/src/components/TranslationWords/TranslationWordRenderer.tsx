import * as React from "@theia/core/shared/react";
import { markdownToHTML } from "../../utils/tsv";

const TranslationWordRenderer = ({ content }: { content: string | null }) => {
  return (
    <div className="mt-2.5 font-normal space-y-2 mx-auto max-w-md">
      <article className="dark:text-zinc-50 text-zinc-700 leading-5 text-xs tracking-wide text-center whitespace-pre-line">
        {content ? (
          <div
            dangerouslySetInnerHTML={{ __html: markdownToHTML(content) ?? "" }}
            className="prose prose-sm"
          />
        ) : (
          "Select a translation word to view its content."
        )}
      </article>
    </div>
  );
};

export default TranslationWordRenderer;
