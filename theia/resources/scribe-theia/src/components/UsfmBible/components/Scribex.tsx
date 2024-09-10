import React from "@theia/core/shared/react";

import { useDocument } from "../hooks/useDocument";
import Editor from "./Editor";
import { useDeepCompareEffect } from "use-deep-compare";
import { useEffect } from "react";
import { MessageType } from "../types/types";
import usePerf from "../hooks/usePerf2";
import { ScribexContextType } from "../ScribexContext";
import { ScribexContext } from "../context/ScribexContext";
import { Perf } from "../types/perfType";
import { usfm2perf } from "../hooks/useProskomma";
// import { ReferenceContext } from "@/context/ReferenceContext";

const { useContext, useMemo, useState } = React;

const scrollToChapter = (chapter: number, verse: number) => {
  const element = document.getElementById(`ch${chapter}v${verse}`);
  element?.scrollIntoView({ behavior: "smooth" });
};
export default function Scribex(props: {
  usfm: string;
  chapter: number;
  verse: number;
  bookId: string;
}) {
  const { bookId } = props;

  const { perf, docSetId } = useMemo(() => {
    const { perf, id, docSetId }: { perf: Perf; id: string; docSetId: string } =
      usfm2perf(props.usfm);

    return { perf, id, docSetId };
  }, [props.usfm]);

  const { state, actions } = useContext<ScribexContextType>(ScribexContext);

  const {
    htmlPerf,
    ready,
    state: perfState,
    actions: perfActions,
  } = usePerf({
    perf,
    bookId,
    docSetId,
  });

  // useEffect(() => {
  //   vscode.setMessageListeners((event) => {
  //     switch (event.data.type) {
  //       case MessageType.SCROLL_TO_CHAPTER:
  //         {
  //           const element = document.getElementById(
  //             `ch-${event.data.payload.chapter}`
  //           );
  //           element?.scrollIntoView({ behavior: "smooth" });
  //         }
  //         break;
  //     }
  //   });
  // }, [chapter]);

  useDeepCompareEffect(() => {
    if (htmlPerf && htmlPerf.mainSequenceId !== state.sequenceIds[0]) {
      actions.setSequenceIds([htmlPerf?.mainSequenceId]);
    }
  }, [htmlPerf, state.sequenceIds, bookId]);

  const _props = {
    ...state,
    ...perfState,
    ...actions,
    ...perfActions,
    htmlPerf,
    ready,
  };

  return (
    <div className="layout">
      <div className="flex m-3 gap-2">
        <Editor {..._props} />
      </div>
    </div>
  );
}
