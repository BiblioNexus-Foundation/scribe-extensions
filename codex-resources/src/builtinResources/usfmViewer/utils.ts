import { Uri } from "vscode";

import * as vscode from "vscode";
import { ConfigResourceValues } from "../../types/codexResource";

interface USFMDocument {
  bookUri: Uri;
  usfmString: string;
  chapter: number;
  verse: number;
}

export const getUSFMDocument = async (
  resource: ConfigResourceValues,
  verseRef: string
) => {
  const { bookID, chapter, verse } = extractBookChapterVerse(verseRef);
  const bookName = getFileName(bookID);
  if (!vscode.workspace.workspaceFolders?.[0]) {
    vscode.window.showErrorMessage(
      "No workspace is open. Please open a workspace."
    );
    return;
  }
  const resourceDirUri = vscode.Uri.joinPath(
    vscode.workspace.workspaceFolders?.[0].uri as vscode.Uri,
    resource.localPath
  );
  const bookUri = vscode.Uri.joinPath(resourceDirUri, `${bookName}.usfm`);
  const bookContent = await vscode.workspace.fs.readFile(bookUri);
  const sanitizedContent = sanitizeUSFM(bookContent.toString());
  return { bookUri, usfmString: sanitizedContent, chapter, verse, bookID };
};

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
function getFileName(abbreviation: string): string {
  const bookName = bookNamestoFilename[abbreviation];
  if (bookName) {
    return bookName;
  } else {
    return "Abbreviation not found.";
  }
}

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
