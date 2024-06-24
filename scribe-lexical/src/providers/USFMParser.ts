import { USFMParser } from 'sj-usfm-grammar';

let usfmParserPromise: Promise<any> | null = null;

const initializeParser = async (): Promise<any> => {
  await USFMParser.init();
  return new USFMParser();
};

const getUsfmParser = (): Promise<any> => {
  if (!usfmParserPromise) {
    usfmParserPromise = initializeParser();
  }
  return usfmParserPromise;
};

export default getUsfmParser;

