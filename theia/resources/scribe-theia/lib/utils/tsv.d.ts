import { ScriptureTSV, TSVRow } from "./types";
export declare const extractBookChapterVerse: (refString: string) => {
    bookID: string;
    chapter: number;
    verse: number;
};
type TsvObject = {
    [key: string]: string;
};
/**
 * Converts a TSV string into a ScriptureTSV object.
 * @param tsv The TSV string to convert.
 * @returns A ScriptureTSV object.
 */
export declare const tsvStringToScriptureTSV: (tsv: string) => ScriptureTSV;
/**
 * Converts a TSV string to an array of TsvObject, with each object representing a row.
 * @param tsv The TSV string to convert.
 * @returns An array of TsvObject.
 */
export declare const tsvStringToFlatArray: (tsv: string) => TsvObject[];
/**
 * Converts a flat array of TSV rows into a structured ScriptureTSV object.
 * @param flatTsvArray The array of TSV rows to convert.
 * @returns A ScriptureTSV object.
 */
export declare const tsvFlatArrayToScriptureTSV: (flatTsvArray: TSVRow[]) => ScriptureTSV;
/**
 * A string containing markdown content
 */
type MarkdownString = string;
export declare const markdownToHTML: (markdown: MarkdownString) => string;
export {};
//# sourceMappingURL=tsv.d.ts.map