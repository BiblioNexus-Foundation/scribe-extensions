import { parentPort, isMainThread } from "worker_threads";
import * as fs from "fs";
import {
  getMd5Hash,
  isCacheValid,
  readCache,
  writeCache,
  deleteOldCacheFile,
  getCacheMapFromFile,
  updateCacheMapToFile,
} from "./workerCacheUtils";
import { convertUsfmToUsj } from "../handlers/conversionUtils";

interface FilePath {
  path: string;
}

interface Data {
  files: string[];
  cacheFolder: string;
  fileCacheMap: { [key: string]: string };
  storageUri: string;
}

parentPort?.on("message", async (data: Data) => {
  const {
    files: usfmFiles,
    cacheFolder,
    fileCacheMap,
    storageUri,
  } = data;
  let loaded = 0;
  let errors = 0;

  await Promise.all(
    usfmFiles.map(async (filePath) => {
      const usfm = fs.readFileSync(filePath, "utf-8");
      const { usj, error } = await handleCache({
        filePath,
        usfmContent: usfm,
        fileCacheMap,
        storageUri,
        cacheFolder,
      });
      if (!error) {
        loaded++;
      }
    })
  );
  parentPort?.postMessage({ status: "done", loaded, errors });
});

async function handleCache({
  filePath,
  usfmContent,
  fileCacheMap,
  storageUri,
  cacheFolder,
}: {
  filePath: string;
  usfmContent: string;
  fileCacheMap: { [key: string]: string };
  storageUri: string;
  cacheFolder: string;
}): Promise<any> {
  if (!fs.existsSync(cacheFolder)) {
    console.log("Creating cache directory:", cacheFolder);
    fs.mkdirSync(cacheFolder, { recursive: true });
  }
  try {    
    const newHash = getMd5Hash(usfmContent);
    const oldHash = fileCacheMap[filePath];
    if (oldHash && isCacheValid(oldHash, cacheFolder) && oldHash === newHash) {
      // Cache hit with the old hash
      console.log("Initialize Worker Cache hit");
      return { usj: await readCache(oldHash, cacheFolder) };
    } else {
      // Cache miss or content changed
      console.log("Initialize Worker Cache miss");
      if (oldHash) {
        deleteOldCacheFile(oldHash, cacheFolder);
      }
      const { usj, error } = await convertUsfmToUsj(usfmContent);
      if (error) {
        console.error("Error parsing USFM", error);
        return { error };
      }
      writeCache(newHash, usj, cacheFolder);
      updateCacheMapToFile({ storageUri, filePath, newHash });
      return { usj };
    }
  } catch (error) {
    console.error(`Error handling cache for file ${filePath}: ${error}`);
    return { error };
  }
}
