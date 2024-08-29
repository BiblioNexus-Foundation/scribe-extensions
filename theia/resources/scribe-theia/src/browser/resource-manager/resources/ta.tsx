import * as React from "@theia/core/shared/react";
import { ScribeResource, Door43ApiResponse, Door43RepoResponse } from "./types";
import {
  downloadDoor43Resource,
  fetchDoor43ResourceDisplayData,
} from "./utils";
import { Context } from "../resource-viewer/resource-viewer-widget";
import { TranslationAcademy } from "../../../components/TranslationAcademy";

export const taResource: ScribeResource<Door43RepoResponse, string[]> = {
  id: "codex.ta",
  displayLabel: "Translation Academy",

  getTableDisplayData: async () => {
    try {
      const data = await fetchDoor43ResourceDisplayData(taResource.id, {
        subject: "Translation Academy",
        metadataType: "rc",
      });
      return data ?? [];
    } catch (error) {
      return [];
    }
  },

  downloadResource: async (resourceInfo, { fs, resourceFolderUri }) =>
    downloadDoor43Resource(taResource.id, resourceInfo, {
      fs,
      resourceFolderUri,
    }),
  openHandlers: {
    async readResourceData(uri, fs) {
      const resourceStat = await fs.resolve(uri);
      if (resourceStat?.children) {
        return resourceStat.children
          .filter((child) => child.isDirectory)
          .map((child) => child.name);
      }
      return [];
    },

    render(data, ctx) {
      if (!ctx) {
        return "Err: Context is required to render Translation Academy";
      }
      return (
        <TranslationAcademy
          getTaContent={async (params) => await getTaContent(params, ctx)}
          getTaFolderContent={async (directory) =>
            (await getTaFolderContent(directory, ctx)) ?? []
          }
          taDirectories={data}
        />
      );
    },
  },
};

const getTaFolderContent = async (directory: string, ctx: Context) => {
  const folderUri = ctx.resourceUri.withPath(
    ctx.resourceUri.path.join(directory)
  );

  const folderInfo = await ctx.fs.resolve(folderUri);
  const content = folderInfo?.children
    ?.filter((child) => child.isDirectory)
    .map((child) => child.name);

  return content;
};

const getTaContent = async (
  {
    directory,
    subDirectory,
  }: {
    directory: string;
    subDirectory: string;
  },
  ctx: Context
) => {
  const fileUri = ctx.resourceUri.withPath(
    ctx.resourceUri.path.join(directory, subDirectory, "01.md")
  );

  const fileContents = await ctx.fs.readFile(fileUri);

  const md = fileContents.value.toString();

  return md;
};
