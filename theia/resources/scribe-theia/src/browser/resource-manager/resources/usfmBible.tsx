import * as React from "@theia/core/shared/react";
import { ScribeResource, Door43RepoResponse, TranslationWord } from "./types";
import {
  downloadDoor43Resource,
  fetchDoor43ResourceDisplayData,
  getFileName,
  sanitizeUSFM,
} from "./utils";
import TranslationWords from "../../../components/TranslationWords";
import { extractBookChapterVerse } from "../../../utils/tsv";
import { URI } from "@theia/core";

type UsfmBibleValue = {
  bookUri: URI;
  usfm: string;
  chapter: number;
  verse: number;
  bookID: string;
};

export const usfmBibleResource: ScribeResource<
  Door43RepoResponse,
  UsfmBibleValue
> = {
  id: "codex.usfm-bible",
  displayLabel: "Bible",

  getTableDisplayData: async () => {
    try {
      const data = await fetchDoor43ResourceDisplayData(usfmBibleResource.id, {
        subject: "Bible",
        metadataType: "rc",
      });
      return data ?? [];
    } catch (error) {
      return [];
    }
  },

  downloadResource: async (resourceInfo, { fs, resourceFolderUri }) =>
    downloadDoor43Resource(usfmBibleResource.id, resourceInfo, {
      fs,
      resourceFolderUri,
    }),
  openHandlers: {
    async readResourceData(uri, fs) {
      const { bookID, chapter, verse } = extractBookChapterVerse("GEN 1:1"); // TODO: get verseRef from uri
      const bookName = getFileName(bookID);

      const bookUri = uri.withPath(uri.path.join(`${bookName}.usfm`));
      const bookContent = await fs.readFile(bookUri);
      const sanitizedContent = sanitizeUSFM(bookContent.value.toString());

      const returnValue = {
        bookUri,
        usfm: sanitizedContent,
        chapter,
        verse,
        bookID,
      };

      return returnValue;
    },

    render(data, ctx) {
      if (!ctx) {
        return "Err: Context is required to render Bible USFM";
      }
      return null;
    },
  },
};
