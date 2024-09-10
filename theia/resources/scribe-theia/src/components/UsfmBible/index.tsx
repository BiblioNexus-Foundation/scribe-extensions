import React from "@theia/core/shared/react";

import Scribex from "./components/Scribex";
import { ScribexContextProvider } from "./context/ScribexContext";
import { ReferenceContextProvider } from "./context/ReferenceContext";

import "./App.css";

export default function UsfmBible(props: {
  usfm: string;
  chapter: number;
  verse: number;
  bookId: string;
}) {
  return (
    <div className="App">
      <ScribexContextProvider>
        <ReferenceContextProvider>
          <Scribex {...props} />
        </ReferenceContextProvider>
      </ScribexContextProvider>
    </div>
  );
}
