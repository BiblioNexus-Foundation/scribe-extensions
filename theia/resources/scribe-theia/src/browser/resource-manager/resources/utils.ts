import { unzip } from "unzipit";
import {
  ConfigResourceValues,
  Door43ApiResponse,
  Door43RepoResponse,
  type ChapterVerseRef,
  type TwlTsvRow,
} from "./types";
import { URI } from "@theia/core";
import { BinaryBuffer } from "@theia/core/lib/common/buffer";
import moment from "moment";
import { FileService } from "@theia/filesystem/lib/browser/file-service";

export const downloadDoor43Resource = async (
  resourceHandlerId: string,
  resourceInfo: Record<string, any>,
  { fs, resourceFolderUri }: { fs: FileService; resourceFolderUri: URI }
) => {
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

    if (!item.isDirectory) {
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

  const resourceReturn = {
    resource: fullResource,
    folder: downloadResourceFolder,
    type: resourceHandlerId,
  };

  const localPath: string = resourceReturn?.folder.path.toString();

  const downloadedResource: ConfigResourceValues = {
    name: resourceReturn?.resource.name ?? "",
    id: String(resourceReturn?.resource.id) ?? "",
    localPath: localPath,
    type: resourceReturn.type,
    remoteUrl: resourceReturn?.resource.url ?? "",
    version: resourceReturn?.resource.release.tag_name,
  };

  return downloadedResource;
};

export const fetchDoor43ResourceDisplayData = async (
  resourceTypeId: string,
  params: {
    [x: string]: string;
    subject: string;
    metadataType: string;
  }
) => {
  const urlParams = new URLSearchParams(params);

  const resourceUrl = `https://git.door43.org/api/v1/catalog/search?${urlParams.toString()}`;

  const response = await fetch(resourceUrl);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch resources from Door43 API. Status: ${response.status}`
    );
  }
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
      resourceType: resourceTypeId,
    }));
  }
};

export function sanitizeUSFM(usfm: string): string {
  // Regex to match \c or \s# tags followed by any content until the first \v tag
  const regex: RegExp = /(\\c \d+|\\s\d+)((?:.(?!\\c \d+|\\s\d+))*?)(\\v)/gs;

  // Replacement function to insert \p tag if not present
  function insertPTagIfNeeded(
    match: string,
    tag: string,
    middleContent: string,
    vTag: string
  ): string {
    // Check for a \p tag in the middle content
    if (!/\\p/.test(middleContent)) {
      // If \p tag is missing, insert it before the \v tag
      return `${tag}\n\\p\n${vTag}`;
    }
    // If \p tag is present, return the original match
    return match;
  }

  // Apply the replacement to the USFM string
  let correctedUSFM: string = usfm.replace(regex, insertPTagIfNeeded);

  // Handle cases where \c or \s# are followed immediately by each other before a \v tag
  // This regex captures sequences of \c followed by \s# (or vice versa) without an intervening \v, to ensure only one \p is inserted
  const complexCaseRegex: RegExp =
    /(\\c \d+\n\\s\d+|\\s\d+\n\\c \d+)((?:.(?!\\c \d+|\\s\d+|\\v))*?)(\\v)/gs;
  correctedUSFM = correctedUSFM.replace(complexCaseRegex, insertPTagIfNeeded);

  return correctedUSFM;
}

export function getFileName(abbreviation: string): string {
  const bookName = bookNamestoFilename[abbreviation];
  if (bookName) {
    return bookName;
  } else {
    return "Abbreviation not found.";
  }
}

interface BookNamestoFiles {
  [key: string]: string;
}

export const bookNamestoFilename: BookNamestoFiles = {
  GEN: "01-GEN",
  EXO: "02-EXO",
  LEV: "03-LEV",
  NUM: "04-NUM",
  DEU: "05-DEU",
  JOS: "06-JOS",
  JDG: "07-JDG",
  RUT: "08-RUT",
  "1SA": "09-1SA",
  "2SA": "10-2SA",
  "1KI": "11-1KI",
  "2KI": "12-2KI",
  "1CH": "13-1CH",
  "2CH": "14-2CH",
  EZR: "15-EZR",
  NEH: "16-NEH",
  EST: "17-EST",
  JOB: "18-JOB",
  PSA: "19-PSA",
  PRO: "20-PRO",
  ECC: "21-ECC",
  SNG: "22-SNG",
  ISA: "23-ISA",
  JER: "24-JER",
  LAM: "25-LAM",
  EZK: "26-EZK",
  DAN: "27-DAN",
  HOS: "28-HOS",
  JOL: "29-JOL",
  AMO: "30-AMO",
  OBA: "31-OBA",
  JON: "32-JON",
  MIC: "33-MIC",
  NAM: "34-NAM",
  HAB: "35-HAB",
  ZEP: "36-ZEP",
  HAG: "37-HAG",
  ZEC: "38-ZEC",
  MAL: "39-MAL",
  MAT: "41-MAT",
  MRK: "42-MRK",
  LUK: "43-LUK",
  JHN: "44-JHN",
  ACT: "45-ACT",
  ROM: "46-ROM",
  "1CO": "47-1CO",
  "2CO": "48-2CO",
  GAL: "49-GAL",
  EPH: "50-EPH",
  PHP: "51-PHP",
  COL: "52-COL",
  "1TH": "53-1TH",
  "2TH": "54-2TH",
  "1TI": "55-1TI",
  "2TI": "56-2TI",
  TIT: "57-TIT",
  PHM: "58-PHM",
  HEB: "59-HEB",
  JAS: "60-JAS",
  "1PE": "61-1PE",
  "2PE": "62-2PE",
  "1JN": "63-1JN",
  "2JN": "64-2JN",
  "3JN": "65-3JN",
  JUD: "66-JUD",
  REV: "67-REV",
};

export const extractBookChapterVerse = (
  refString: string
): { bookID: string; chapter: number; verse: number } => {
  const match = refString.match(/([A-Za-z0-9]{3}) (\d+):(\d+)/);

  return match
    ? {
        bookID: match[1],
        chapter: parseInt(match[2], 10),
        verse: parseInt(match[3], 10),
      }
    : { bookID: "GEN", chapter: 1, verse: 1 };
};

export const parseTwlTsv = (tsv: string) => {
  const lines = tsv.split("\n");
  const headers = lines[0].split("\t");
  const data = lines.slice(1).map((line) => line.split("\t"));
  const parsedTsv = data.map((line) => {
    return headers.reduce((acc, header, i) => {
      acc[header] = line[i];
      return acc;
    }, {} as Record<string, string>);
  }) as TwlTsvRow[];

  return parsedTsv;
};

export const tsvToChapterVerseRef = (twlTsv: TwlTsvRow[]) => {
  const chapterVerseRef: ChapterVerseRef = {};
  twlTsv.forEach((row) => {
    const ref = row.Reference;
    const [chapter, verse] = ref.split(":");
    if (!chapterVerseRef[chapter]) {
      chapterVerseRef[chapter] = {};
    }

    // check if a verse is a range
    if (verse?.includes("-")) {
      const [startVerse, endVerse] = verse.split("-").map(Number);
      for (let i = startVerse; i <= endVerse; i++) {
        if (!chapterVerseRef[chapter][i]) {
          chapterVerseRef[chapter][i] = [];
        }
        chapterVerseRef[chapter][i].push(row);
      }
      return;
    }

    if (!chapterVerseRef[chapter][verse]) {
      chapterVerseRef[chapter][verse] = [];
    }

    chapterVerseRef[chapter][verse].push(row);
  });
  return chapterVerseRef;
};
