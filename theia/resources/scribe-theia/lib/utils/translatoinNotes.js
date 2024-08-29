"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getDocumentAsScriptureTSV = async (verseRef, resourceUri, fs) => {
    const { bookID } = extractBookChapterVerse(verseRef);
    const docUri = resourceUri.withPath(resourceUri.path.join(`tn_${bookID}.tsv`));
    const doc = await fs.readFile(docUri);
    const text = doc.toString();
    if (text.trim().length === 0) {
        return {};
    }
    try {
        return tsvStringToScriptureTSV(text);
    }
    catch (_a) {
        throw new Error("Could not get document as json. Content is not valid scripture TSV");
    }
};
//# sourceMappingURL=translatoinNotes.js.map