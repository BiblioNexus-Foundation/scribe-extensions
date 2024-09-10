import * as React from "@theia/core/shared/react";
import { ScribeResource, Door43RepoResponse, TranslationWord } from "./types";
import {
  downloadDoor43Resource,
  fetchDoor43ResourceDisplayData,
} from "./utils";
import TranslationWords from "../../../components/TranslationWords";

export const twResource: ScribeResource<Door43RepoResponse, TranslationWord[]> =
  {
    id: "codex.tw",
    displayLabel: "Translation Word",

    getTableDisplayData: async () => {
      try {
        const data = await fetchDoor43ResourceDisplayData(twResource.id, {
          subject: "Translation Words",
          metadataType: "rc",
        });
        return data ?? [];
      } catch (error) {
        return [];
      }
    },

    downloadResource: async (resourceInfo, { fs, resourceFolderUri }) =>
      downloadDoor43Resource(twResource.id, resourceInfo, {
        fs,
        resourceFolderUri,
      }),
    openHandlers: {
      async readResourceData(uri, fs) {
        const resourceBibleDirUri = uri.withPath(uri.path.join(`bible`));

        if (!(await fs.exists(resourceBibleDirUri))) {
          console.log(
            `The selected resource does not exist or it's invalid directory.`
          );
          return [];
        }

        const ktPath = resourceBibleDirUri.withPath(
          resourceBibleDirUri.path.join(`./kt`)
        );
        const namesPath = resourceBibleDirUri.withPath(
          resourceBibleDirUri.path.join(`./names`)
        );
        const otherPath = resourceBibleDirUri.withPath(
          resourceBibleDirUri.path.join(`./other`)
        );

        const ktWordDir = await fs.resolve(ktPath);

        const ktWords =
          ktWordDir.children?.map(({ name }) => ({
            name: name.split(".")[0],
            path: ktPath.path.join(`./${name}`).toString(),
            ref: "kt" as const,
          })) ?? [];

        const namesWordsDir = await fs.resolve(namesPath);

        const namesWords =
          namesWordsDir.children?.map(({ name: fileName }) => ({
            name: fileName.split(".")[0],
            path: namesPath.path.join(`./${fileName}`).toString(),
            ref: "names" as const,
          })) ?? [];

        const otherWordsDir = await fs.resolve(otherPath);

        const otherWords =
          otherWordsDir.children?.map(({ name: fileName }) => ({
            name: fileName.split(".")[0],
            path: otherPath?.path.join(`./${fileName}`).toString(),
            ref: "other" as const,
          })) ?? [];

        const allWords = [...ktWords, ...namesWords, ...otherWords].sort(
          (a, b) => a.name.localeCompare(b.name)
        );
        return allWords;
      },

      render(data, ctx) {
        if (!ctx) {
          return "Err: Context is required to render Translation Academy";
        }

        const searchTranslationWord = async (
          category?: string,
          query?: string
        ) => {
          if (!query || query.length === 0) {
            return data.filter(
              (word) => category === "all" || word.ref === category
            );
          }

          const words = data.filter(
            (word) =>
              word.name.toLowerCase().includes(query.toLowerCase()) &&
              (category === "all" || word.ref === category)
          );

          return words;
        };

        const getTwContent = async (word: TranslationWord) => {
          const fileUri = ctx.resourceUri.withPath(word.path);

          const fileContents = await ctx.fs.readFile(fileUri);

          const md = fileContents.value.toString();

          return md;
        };

        return (
          <TranslationWords
            getTwContent={getTwContent}
            initialTranslationWords={data}
            searchTranslationWords={searchTranslationWord}
          />
        );
      },
    },
  };
