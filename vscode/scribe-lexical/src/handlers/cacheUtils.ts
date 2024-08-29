import * as fs from "fs";
import * as path from "path";
import * as vscode from "vscode";
import * as crypto from "crypto";

const CACHE_DIR = path.join(
  getWorkspaceFolderPath() || "",
  ".vscode",
  "usj_cache"
);

const CACHE_FILE_NAME = "fileCacheMap.json"; // File name to store the cache mapping
// Ensure cache directory exists
if (!fs.existsSync(CACHE_DIR)) {
  console.log("Creating cache directory:", CACHE_DIR);
  fs.mkdirSync(CACHE_DIR, { recursive: true });
}

export function getMd5Hash(content: string): string {
  return crypto.createHash("md5").update(content).digest("hex");
}

export function getCacheFilePath(hash: string): string {
  return path.join(CACHE_DIR, `${hash}.json`);
}

export function isCacheValid(hash: string): boolean {
  const cacheFilePath = getCacheFilePath(hash);
  return fs.existsSync(cacheFilePath);
}

export function readCache(hash: string): any {
  const cacheFilePath = getCacheFilePath(hash);
  return JSON.parse(fs.readFileSync(cacheFilePath, "utf8"));
}

export function writeCache(hash: string, data: any): void {
  const cacheFilePath = getCacheFilePath(hash);
  fs.writeFileSync(cacheFilePath, JSON.stringify(data), "utf8");
}

export function deleteOldCacheFile(hash: string): void {
  const cacheFilePath = getCacheFilePath(hash);
  if (fs.existsSync(cacheFilePath)) {
    fs.unlinkSync(cacheFilePath);
  }
}


function getWorkspaceFolderPath(): string | undefined {
  const workspaceFolders = vscode.workspace.workspaceFolders;
  return workspaceFolders ? workspaceFolders[0].uri.fsPath : undefined;
}

export function getCacheMapFromFile(context: vscode.ExtensionContext): {
  [key: string]: string;
} {
  const storageUri = context.storageUri;
  if (storageUri) {
    const cacheFilePath = path.join(storageUri.fsPath, CACHE_FILE_NAME);
    try {
        if (fs.existsSync(cacheFilePath)) {
            const fileContent = fs.readFileSync(cacheFilePath, 'utf-8');
            return JSON.parse(fileContent);
        }
    } catch (error) {
        console.error('Error reading cache file:', error);
    }
  }

  return {};
}

export function updateCacheMapToFile(
  context: vscode.ExtensionContext,
  filePath: string,
  hash: string
): void {
  const storageUri = context.storageUri;

  if (storageUri) {
    const cacheFilePath = path.join(storageUri.fsPath, CACHE_FILE_NAME);
    const cacheMap = getCacheMapFromFile(context);
    cacheMap[filePath] = hash;
    try {
      fs.mkdirSync(path.dirname(cacheFilePath), { recursive: true });
      fs.writeFileSync(cacheFilePath, JSON.stringify(cacheMap));
    } catch (error) {
      console.error("Error writing cache file:", error);
    }
  }
}
