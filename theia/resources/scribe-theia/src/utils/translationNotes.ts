import { URI } from "@theia/core";
import { ScriptureTSV } from "./types";
import { FileService } from "@theia/filesystem/lib/browser/file-service";
import { extractBookChapterVerse, tsvStringToScriptureTSV } from "./tsv";

export const getDocumentAsScriptureTSV = async (
  verseRef: string,
  resourceUri: URI,
  fs: FileService
): Promise<ScriptureTSV> => {
  const { bookID } = extractBookChapterVerse(verseRef);

  const docUri = resourceUri.withPath(
    resourceUri.path.join(`tn_${bookID}.tsv`)
  );

  const doc = await fs.readFile(docUri);

  const text = doc.value.toString();

  if (text.trim().length === 0) {
    return {};
  }

  try {
    return tsvStringToScriptureTSV(text);
  } catch {
    throw new Error(
      "Could not get document as json. Content is not valid scripture TSV"
    );
  }
};
