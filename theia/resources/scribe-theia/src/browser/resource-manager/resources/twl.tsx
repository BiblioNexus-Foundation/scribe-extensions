import { URI } from "@theia/core";
import {
  ScribeResource,
  ConfigResourceValues,
  Door43ApiResponse,
  Door43RepoResponse,
} from "./types";
import { BinaryBuffer } from "@theia/core/lib/common/buffer";
import moment from "moment";
import { unzip } from "unzipit";

import * as React from "@theia/core/shared/react";
import { twResource } from "./tw";
import { parseTwlTsv, tsvToChapterVerseRef } from "./utils";
import type { FileService } from "@theia/filesystem/lib/browser/file-service";
import TranslationWordsList from "../../../components/TranslationWordsList";

export const twlResource: ScribeResource<Door43RepoResponse> = {
  id: "codex.twl",
  displayLabel: "Translation Words List",

  getTableDisplayData: async () => {
    const resourceUrl = `https://git.door43.org/api/v1/catalog/search?subject=TSV Translation Words Links&metadataType=rc`;
    const response = await fetch(resourceUrl);
    const responseJson = (await response.json()) as Door43ApiResponse;
    if (responseJson?.data) {
      return responseJson.data.map((resource) => ({
        id: resource.id.toString(),
        name: resource.name,
        owner: {
          name: resource.repo.owner.full_name,
          url: resource.repo.owner.website,
          avatarUrl: resource.repo.owner.avatar_url,
        },
        version: {
          tag: resource.release.tag_name,
          releaseDate: new Date(resource.released),
        },
        fullResource: resource,
        resourceType: twlResource.id,
      }));
    }
    return [];
  },

  async downloadResource(resourceInfo, { fs, resourceFolderUri }) {
    const fullResource = resourceInfo["fullResource"] as Door43RepoResponse;
    const downloadProjectName = `${fullResource?.name}`;
    const downloadResourceFolder = resourceFolderUri.withPath(
      resourceFolderUri.path.join(downloadProjectName)
    );

    await fs.createFolder(downloadResourceFolder);

    const result = await unzip(fullResource.zipball_url);
    const keys = Object.keys(result.entries);
    for (const key of keys) {
      const item = result.entries[key];

      if (item.isDirectory) {
        await fs.createFolder(
          URI.fromFilePath(
            downloadResourceFolder.path.join(item.name).toString()
          )
        );
      } else {
        const bufferContent = Buffer.from(await item.arrayBuffer());
        const path = [...item?.name?.split("/")];
        path.shift();
        const fileUri = URI.fromFilePath(
          downloadResourceFolder.path.join(path.join("/")).toString()
        );
        await fs.writeFile(fileUri, BinaryBuffer.wrap(bufferContent));
      }
    }

    const metadataRes = await fetch(fullResource.metadata_json_url);
    const data = (await metadataRes.json()) as Record<string, any>;
    data.agOffline = true;
    data.meta = fullResource;
    data.lastUpdatedAg = moment().format();
    await fs.writeFile(
      URI.fromFilePath(
        downloadResourceFolder.path.join("metadata.json").toString()
      ),
      BinaryBuffer.fromString(JSON.stringify(data))
    );

    // vscode.window.showInformationMessage(
    //   "Downloading linked resource for Translation Words List"
    // );

    console.log("Downloading linked resource for Translation Words List");

    const linkedResource = await getLinkedTwResource(fullResource);

    let linkedDownloadResponse = null;

    if (linkedResource) {
      linkedDownloadResponse = await twResource.downloadResource(
        linkedResource,
        {
          resourceFolderUri: resourceFolderUri,
          fs: fs,
        }
      );
      // vscode.window.showInformationMessage(
      //   "Linked resource for Translation Words List downloaded successfully"
      // );

      console.log(
        "Linked resource for Translation Words List downloaded successfully"
      );
    } else {
      console.log(
        "Unable to download linked resource for Translation Words List"
      );
    }

    const resourceReturn = {
      resource: fullResource,
      folder: downloadResourceFolder,
    };

    const localPath: string = resourceReturn?.folder.path.toString();

    const downloadedResource: ConfigResourceValues = {
      name: resourceReturn?.resource.name ?? "",
      id: String(resourceReturn?.resource.id) ?? "",
      localPath: localPath,
      type: twlResource.id,
      remoteUrl: resourceReturn?.resource.url ?? "",
      version: resourceReturn?.resource.release.tag_name,
      linkedTw: linkedDownloadResponse && {
        ...linkedDownloadResponse,
        localPath: linkedDownloadResponse.localPath.includes(
          resourceFolderUri.path.toString()
        )
          ? linkedDownloadResponse.localPath.replace(
              resourceFolderUri.path.toString(),
              ""
            )
          : linkedDownloadResponse.localPath,
      },
    };

    return downloadedResource;
  },

  openHandlers: {
    async readResourceData(uri, fs, ctx) {
      // const { bookID, chapter, verse } = extractBookChapterVerse(verseRef);

      const bookID = "GEN";
      const chapter = 1;
      const verse = 1;

      const bookUri = uri.withPath(uri.path.join(`twl_${bookID}.tsv`));
      const bookContent = await fs.readFile(bookUri);

      const bookContentString = bookContent.value.toString();

      const tsvData = parseTwlTsv(bookContentString);

      const tsvDataWithTwUriPromises = await Promise.allSettled(
        tsvData.map(async (row) => ({
          ...row,
          twUriPath: (
            await convertTwlRCUriToScribeResourceUri({
              resource: ctx.resource,
              path: row.TWLink,
              resourceUri: uri,
              fs: fs,
              resourcesRootUri: ctx.resourcesRootUri,
            })
          ).path.toString(),
        }))
      );

      const TsvDataWithTwUri = tsvDataWithTwUriPromises
        .map((p) => (p.status === "fulfilled" ? p.value : null))
        .filter(Boolean);

      const chapterVerseRef = tsvToChapterVerseRef(
        TsvDataWithTwUri as NonNullable<(typeof TsvDataWithTwUri)[number]>[]
      );

      // Removing the ones which don't have files on the disk
      const wordsWithExistsOnDisk = await Promise.all(
        chapterVerseRef?.[chapter]?.[verse]?.map(async (word) => ({
          ...word,
          existsOnDisk: await fs.exists(URI.fromFilePath(word.twUriPath)),
        })) ?? []
      );

      return wordsWithExistsOnDisk ?? [];
    },
    render(data, ctx) {
      console.log("data: ", data);

      const getTranslationWordContent = async (path: string) => {
        const file = await ctx?.fs.readFile(URI.fromFilePath(path));
        return file?.value?.toString() ?? "";
      };

      return (
        <TranslationWordsList
          diskTwl={data}
          translationWordsList={data}
          getTranslationWordContent={getTranslationWordContent}
        />
      );
    },
  },
};

export const getLinkedTwResource = async (
  resourceMetadata: Door43RepoResponse
): Promise<{
  fullResource: any;
  resourceType: "codex.tw";
  display: any;
} | null> => {
  const lang = resourceMetadata.language;
  const owner = resourceMetadata.owner;

  const baseUrl = `https://git.door43.org/api/v1/catalog/search?metadataType=rc&`;
  const url = `${baseUrl}subject=Translation Words&lang=${lang}`;

  const fetchedData = await fetch(url);
  const fetchedJson = (await fetchedData.json()) as any;

  const resources = fetchedJson.data;

  if (resources.length === 0) {
    return null;
  }

  if (resources.length === 1) {
    return resources[0];
  }

  const linkedResource =
    resources.find((resource: any) => resource.owner === owner) ?? resources[0];

  return {
    fullResource: linkedResource,
    resourceType: "codex.tw",
    display: {
      id: linkedResource.id.toString(),
      name: linkedResource.name,
      owner: {
        name: linkedResource.repo.owner.full_name,
        url: linkedResource.repo.owner.website,
        avatarUrl: linkedResource.repo.owner.avatar_url,
      },
      version: {
        tag: linkedResource.release.tag_name,
        releaseDate: new Date(linkedResource.released),
      },
      fullResource: linkedResource,
      resourceType: "codex.tw",
    },
  };
};

export const convertTwlRCUriToScribeResourceUri = async ({
  path,
  resource,
  resourceUri,
  fs,
  resourcesRootUri,
}: {
  resourceUri: URI;
  resource: ConfigResourceValues;
  path: string;
  fs: FileService;
  resourcesRootUri: URI;
}): Promise<URI> => {
  try {
    const twlResourceMetaUri = resourceUri.withPath(
      resourceUri.path.join("metadata.json")
    );

    const twlResourceMetaFile = await fs.readFile(twlResourceMetaUri);

    const twlResourceLanguage = JSON.parse(twlResourceMetaFile.value.toString())
      ?.meta?.language;

    const twResourcesUri = URI.fromFilePath(
      resourcesRootUri.path.toString() + resource.linkedTw.localPath
    );

    const twPath = path.replace(
      "rc://*/tw/dict",
      twResourcesUri.path.toString()
    );

    const uri = URI.fromFilePath(`${twPath}.md`);

    return uri;
  } catch (error) {
    console.log("Error In convertTwlRCUriToScribeResourceUri: ", error);
    throw error;
  }
};
