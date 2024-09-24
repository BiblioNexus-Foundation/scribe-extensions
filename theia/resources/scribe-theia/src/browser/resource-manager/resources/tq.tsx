import * as React from "@theia/core/shared/react";
import {
  ScribeResource,
  Door43RepoResponse,
  TranslationWord,
  type ConfigResourceValues,
} from "./types";
import {
  downloadDoor43Resource,
  fetchDoor43ResourceDisplayData,
  parseTwlTsv,
  tsvToChapterVerseRef,
} from "./utils";
import TranslationWords from "../../../components/TranslationWords";
import type { URI } from "@theia/core";
import type { FileService } from "@theia/filesystem/lib/browser/file-service";
import TranslationQuestions from "../../../components/TranslationQuestions";

export const tqResource: ScribeResource<
  Door43RepoResponse,
  Record<string, string>[]
> = {
  id: "codex.tq",
  displayLabel: "Translation Questions",

  getTableDisplayData: async () => {
    try {
      const data = await fetchDoor43ResourceDisplayData(tqResource.id, {
        subject: "tsv Translation Questions",
        metadataType: "rc",
      });
      return data ?? [];
    } catch (error) {
      return [];
    }
  },

  downloadResource: async (resourceInfo, { fs, resourceFolderUri }) =>
    downloadDoor43Resource(tqResource.id, resourceInfo, {
      fs,
      resourceFolderUri,
    }),
  openHandlers: {
    async readResourceData(uri, fs, ctx) {
      const questions = await getVerseTranslationQuestions(
        {
          resource: ctx.resource,
          verseRef: "GEN 1:1",
        },
        { fs, resourceDirUri: uri }
      );

      return questions;
    },

    render(data, ctx) {
      if (!ctx) {
        return "Err: Context is required to render Translation Academy";
      }

      return <TranslationQuestions translationQuestions={data} />;
    },
  },
};

export const getVerseTranslationQuestions = async (
  {
    resource,
    verseRef,
  }: {
    resource: ConfigResourceValues;
    verseRef: string;
  },
  { fs, resourceDirUri }: { fs: FileService; resourceDirUri: URI }
) => {
  // TODO: get bookID, chapter, and verse from verseRef
  const bookID = "ROM";
  const chapter = 1;
  const verse = 20;

  const bookUri = resourceDirUri.withPath(
    resourceDirUri.path.join(`tq_${bookID}.tsv`)
  );
  const bookContent = await fs.readFile(bookUri);

  const bookContentString = bookContent.value.toString();

  const tsvData = parseTwlTsv(bookContentString);
  const chapterVerseRef = tsvToChapterVerseRef(tsvData);
  const questions = chapterVerseRef[chapter]?.[verse];

  return questions ?? [];
};
