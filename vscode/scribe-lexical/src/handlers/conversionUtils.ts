import USFMParser from "sj-usfm-grammar";

let usfmParserInstance: any;
let usfmParserInitialized: Promise<void>;

export async function initializeParser() {
  if (!usfmParserInstance) {
    if (!usfmParserInitialized) {
      usfmParserInitialized = await USFMParser.init();
    }
    await usfmParserInitialized;
    usfmParserInstance = new USFMParser();
  }
  return usfmParserInstance;
}

export async function convertUsfmToUsj(usfm: string) {
  if (!usfmParserInstance) {
    usfmParserInstance = await initializeParser();
  }
  try {
    const usj = usfmParserInstance.usfmToUsj(usfm);
    return { usj };
  } catch (e) {
    return { usj: { content: [] }, error: e };
  }
}

initializeParser()
  .then(() => {
    console.log("USFM Parser initialized successfully");
  })
  .catch((err) => {
    console.error("Error initializing USFM Parser:", err);
  });
