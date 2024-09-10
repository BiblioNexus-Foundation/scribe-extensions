import * as React from "@theia/core/shared/react";
import { markdownToHTML } from "../../utils/tsv";

const TranslationWordRenderer = ({ content }: { content: string | null }) => {
  if (content === null) {
    return (
      <div className="prose-base">
        <i>
          <h2>Select a translation word to view its content.</h2>
        </i>
      </div>
    );
  }

  return (
    <div
      dangerouslySetInnerHTML={{ __html: markdownToHTML(content) ?? "" }}
      className="prose prose-sm"
    />
  );
};

export default TranslationWordRenderer;
