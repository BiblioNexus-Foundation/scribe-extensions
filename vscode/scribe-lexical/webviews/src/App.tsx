import { useState, useMemo, SyntheticEvent, useRef, useEffect } from "react";
import { Editor, EditorRef } from "@biblionexus-foundation/scribe-editor";
import { type Usj } from "@biblionexus-foundation/scribe-editor";
import { getViewOptions } from "@biblionexus-foundation/scribe-editor";
import { DEFAULT_VIEW_MODE } from "@biblionexus-foundation/scribe-editor";
import { UsjNodeOptions } from "@biblionexus-foundation/scribe-editor";
import { immutableNoteCallerNodeName } from "@biblionexus-foundation/scribe-editor";
import { debounce } from "lodash";
import { vscode } from "./vscode";
import { MessageType } from "../../src/providers/messageTypes.js";

const defaultUsj: Usj = {
  type: "USJ",
  version: "0.2.1",
  content: [],
};
function App() {
  // const usj = document && useUsfm2Usj({ usfm: document });
  const [usj, setUsj] = useState<Usj | undefined>();
  const [initialRender, setInitialRender] = useState(true);
  // const [editedUsfm, setEditedUsfm] = useState<string>();
  // const usj = useUsfm2Usj();

  const editorRef = useRef<EditorRef>(null!);
  const previousUsjRef = useRef<Usj | null>(null);

  useEffect(() => {
    vscode.setMessageListeners((event) => {
      switch (event.data.type) {
        case "update": {
          console.log(
            `received message from extension :${event.data.type}`,
            event.data
          );
          setUsj(event.data.payload.usj);
          break;
        }
        case "fileOpened":
          console.log(`received message from extension :${event.data.type}`);
          break;
      }
    });
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      usj && editorRef.current?.setUsj(usj);
    }, 0);
    return () => clearTimeout(timeoutId);
  }, [usj]);

  const [viewMode] = useState(DEFAULT_VIEW_MODE);
  const nodeOptions: UsjNodeOptions = {
    [immutableNoteCallerNodeName]: {
      onClick: (e: SyntheticEvent) => {
        console.log({ e });
      },
    },
  };
  const viewOptions = useMemo(() => getViewOptions(viewMode), [viewMode]);
  // const noteViewOptions = useMemo(() => getViewOptions(noteViepnpm i @types/lodash.debouncewMode), [noteViewMode]);

  const onChange = async (usj: Usj) => {
    if (initialRender) {
      setInitialRender(false);
      return;
    }
    vscode.postMessage({
      type: MessageType.updateDocument,
      payload: { usj },
    });
  };

  const debouncedOnChange = debounce(onChange, 1000);

  const handleInputChange = (usj: Usj) => {
    if (previousUsjRef.current !== usj && usj !== defaultUsj) {
      debouncedOnChange(usj);
      previousUsjRef.current = usj;
    }
  };

  return (
    // <div className="flex-center m-2 flex h-editor   justify-center p-8">
    //   <div className="relative w-2/3 overflow-hidden rounded-md border-2 border-secondary">
    //     <div className="left-0 right-0 top-0 z-10 flex items-center justify-between bg-gray-200 px-4 py-2">
    //       <span className="text-lg xfont-semibold">Editor</span>
    //       <button
    //         className="rounded bg-primary px-2 py-1 text-sm font-bold text-white hover:bg-white hover:text-primary"
    //         // onClick={() => setStateX(true)}
    //       >
    //         Graft Editor
    //       </button>
    //     </div>

    <div>
      <Editor
        usjInput={defaultUsj}
        ref={editorRef}
        onChange={handleInputChange}
        viewOptions={viewOptions}
        nodeOptions={nodeOptions}
      />
    </div>
    //   </div>
    // </div>
  );
}
export default App;
