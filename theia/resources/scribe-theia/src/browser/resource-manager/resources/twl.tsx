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

    // const linkedResource = await getLinkedTwResource(fullResource);

    // let linkedDownloadResponse = null;

    // if (linkedResource) {
    //   linkedDownloadResponse = await twHandler.downloadResource(
    //     linkedResource.fullResource,
    //     {
    //       resourceFolderUri: resourceFolderUri,
    //       fs: fs,
    //     }
    //   );
    //   vscode.window.showInformationMessage(
    //     "Linked resource for Translation Words List downloaded successfully"
    //   );
    // } else {
    //   vscode.window.showErrorMessage(
    //     "Unable to download linked resource for Translation Words List"
    //   );
    // }

    const resourceReturn = {
      resource: fullResource,
      folder: downloadResourceFolder,
      type: resourceInfo.id,
    };

    const localPath: string = resourceReturn?.folder.path.toString();

    const downloadedResource: ConfigResourceValues = {
      name: resourceReturn?.resource.name ?? "",
      id: String(resourceReturn?.resource.id) ?? "",
      localPath: localPath,
      type: resourceReturn?.type ?? "",
      remoteUrl: resourceReturn?.resource.url ?? "",
      version: resourceReturn?.resource.release.tag_name,
      //   linkedTw: linkedDownloadResponse && {
      //     ...linkedDownloadResponse,
      //     localPath: linkedDownloadResponse.localPath.includes(
      //       currentFolderURI.path
      //     )
      //       ? linkedDownloadResponse.localPath.replace(currentFolderURI.path, "")
      //       : linkedDownloadResponse.localPath,
      //   },
    };

    return downloadedResource;
  },

  openHandlers: {
    async readResourceData(uri, fs) {
      return {};
    },
    render(data) {
      return <div>Translation Words List</div>;
    },
  },
};
