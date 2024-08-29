"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.markdownToHTML = exports.tsvFlatArrayToScriptureTSV = exports.tsvStringToFlatArray = exports.tsvStringToScriptureTSV = exports.extractBookChapterVerse = void 0;
const bible_reference_range_1 = require("bible-reference-range");
const dompurify_1 = __importDefault(require("dompurify"));
const marked_1 = require("marked");
const extractBookChapterVerse = (refString) => {
    const match = refString.match(/([A-Za-z0-9]{3}) (\d+):(\d+)/);
    return match
        ? {
            bookID: match[1],
            chapter: parseInt(match[2], 10),
            verse: parseInt(match[3], 10),
        }
        : { bookID: "GEN", chapter: 1, verse: 1 };
};
exports.extractBookChapterVerse = extractBookChapterVerse;
/**
 * Converts a TSV string into a ScriptureTSV object.
 * @param tsv The TSV string to convert.
 * @returns A ScriptureTSV object.
 */
const tsvStringToScriptureTSV = (tsv) => (0, exports.tsvFlatArrayToScriptureTSV)((0, exports.tsvStringToFlatArray)(tsv));
exports.tsvStringToScriptureTSV = tsvStringToScriptureTSV;
/**
 * Converts a TSV string to an array of TsvObject, with each object representing a row.
 * @param tsv The TSV string to convert.
 * @returns An array of TsvObject.
 */
const tsvStringToFlatArray = (tsv) => {
    if (!tsv) {
        return [];
    }
    const lines = tsv.trim().split("\n");
    const [headerLine, ...dataLines] = lines;
    const headers = headerLine.split("\t");
    return dataLines.map((line) => {
        const values = line.split("\t");
        return headers.reduce((obj, header, index) => {
            var _a;
            return (Object.assign(Object.assign({}, obj), { [header]: (_a = values[index]) !== null && _a !== void 0 ? _a : "" }));
        }, {});
    });
};
exports.tsvStringToFlatArray = tsvStringToFlatArray;
/**
 * Converts a flat array of TSV rows into a structured ScriptureTSV object.
 * @param flatTsvArray The array of TSV rows to convert.
 * @returns A ScriptureTSV object.
 */
const tsvFlatArrayToScriptureTSV = (flatTsvArray) => {
    const tsvItems = Array.isArray(flatTsvArray) ? flatTsvArray : [];
    return tsvItems.reduce((scriptureTsv, note) => {
        const referenceList = note.Reference
            ? (0, bible_reference_range_1.parseReferenceToList)(note.Reference)
            : [{ chapter: note.Chapter || "", verse: note.Verse || "" }];
        return referenceList.reduce((acc, refChunk) => {
            return mapNoteToChaptersVerses(note, refChunk, acc);
        }, scriptureTsv);
    }, {});
};
exports.tsvFlatArrayToScriptureTSV = tsvFlatArrayToScriptureTSV;
/**
 * Maps a TSV row to its corresponding chapters and verses within the ScriptureTSV object.
 * @param note The TSV row to map.
 * @param refChunk The reference chunk indicating chapter and verse(s).
 * @param scriptureTsv The ScriptureTSV object being constructed.
 * @returns The updated ScriptureTSV object with the note mapped.
 */
function mapNoteToChaptersVerses(note, refChunk, scriptureTsv) {
    const { chapter, verse: startVerse, endVerse = startVerse } = refChunk;
    const verses = range(startVerse, endVerse);
    const updatedScriptureTsv = Object.assign({}, scriptureTsv);
    verses.forEach((verse) => {
        const verseStr = verse.toString();
        if (!updatedScriptureTsv[chapter]) {
            updatedScriptureTsv[chapter] = {};
        }
        if (!updatedScriptureTsv[chapter][verseStr]) {
            updatedScriptureTsv[chapter][verseStr] = [];
        }
        updatedScriptureTsv[chapter][verseStr].push(note);
    });
    return updatedScriptureTsv;
}
/**
 * Generates an array of numbers between two bounds, inclusive.
 * @param start The start of the range.
 * @param end The end of the range.
 * @returns An array of numbers from start to end, inclusive.
 */
function range(start, end) {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}
const markdownToHTML = (markdown) => dompurify_1.default.sanitize(marked_1.marked.parse(markdown));
exports.markdownToHTML = markdownToHTML;
//# sourceMappingURL=tsv.js.map