"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDocumentAsScriptureTSV = void 0;
const tsv_1 = require("./tsv");
const getDocumentAsScriptureTSV = async (verseRef, resourceUri, fs) => {
    const { bookID } = (0, tsv_1.extractBookChapterVerse)(verseRef);
    const docUri = resourceUri.withPath(resourceUri.path.join(`tn_${bookID}.tsv`));
    const doc = await fs.readFile(docUri);
    const text = doc.value.toString();
    if (text.trim().length === 0) {
        return {};
    }
    try {
        return (0, tsv_1.tsvStringToScriptureTSV)(text);
    }
    catch (_a) {
        throw new Error("Could not get document as json. Content is not valid scripture TSV");
    }
};
exports.getDocumentAsScriptureTSV = getDocumentAsScriptureTSV;
//# sourceMappingURL=translationNotes.js.map