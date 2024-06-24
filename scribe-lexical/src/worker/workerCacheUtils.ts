import * as fs from "fs";
import * as path from "path";
import * as crypto from "crypto";

const CACHE_FILE_NAME = "fileCacheMap.json"; // File name to store the cache mapping
// Ensure cache directory exists


export function getMd5Hash(content: string): string {
  return crypto.createHash("md5").update(content).digest("hex");
}

export function getCacheFilePath(hash: string, cacheFolder: string): string {
  return path.join(cacheFolder, `${hash}.json`);
}

export function isCacheValid(hash: string, cacheFolder: string): boolean {
  const cacheFilePath = getCacheFilePath(hash, cacheFolder);
  return fs.existsSync(cacheFilePath);
}

export function readCache(hash: string, cacheFolder: string): any {
  const cacheFilePath = getCacheFilePath(hash, cacheFolder);
  return JSON.parse(fs.readFileSync(cacheFilePath, "utf8"));
}

export function writeCache(hash: string, data: any, cacheFolder: string): void {
  const cacheFilePath = getCacheFilePath(hash, cacheFolder);
  fs.writeFileSync(cacheFilePath, JSON.stringify(data), "utf8");
}

export function deleteOldCacheFile(hash: string, cacheFolder: string): void {
  const cacheFilePath = getCacheFilePath(hash, cacheFolder);
  if (fs.existsSync(cacheFilePath)) {
    fs.unlinkSync(cacheFilePath);
  }
}

export function getCacheMapFromFile(storageUri: string): {
  [key: string]: string;
} {
  const cacheFilePath = path.join(storageUri, CACHE_FILE_NAME);
  try {
    if (fs.existsSync(cacheFilePath)) {
      const fileContent = fs.readFileSync(cacheFilePath, "utf-8");
      return JSON.parse(fileContent);
    }
  } catch (error) {
    console.error("Error reading cache file:", error);
  }
  return {};
}

export function updateCacheMapToFile({
  storageUri,
  filePath,
  newHash,
}: {
  storageUri: string;
  filePath: string;
  newHash: string;
}): void {
  const cacheFilePath = path.join(storageUri, CACHE_FILE_NAME);
  const cacheMap = getCacheMapFromFile(storageUri);
  cacheMap[filePath] = newHash;
  try {
    fs.mkdirSync(path.dirname(cacheFilePath), { recursive: true });
    fs.writeFileSync(cacheFilePath, JSON.stringify(cacheMap));
  } catch (error) {
    console.error("Error writing cache file:", error);
  }
}
