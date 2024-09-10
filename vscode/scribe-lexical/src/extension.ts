import * as vscode from "vscode";
import { Worker } from "worker_threads";
import * as path from "path";
import { USFMEditorProvider } from "./providers/USFMEditor";
import { isProjectUSFM } from "./utilities/usfm";
import { getCacheMapFromFile } from "./handlers/cacheUtils";

export async function activate(context: vscode.ExtensionContext) {
  console.log("Scribe Lexical Editor is now active!");
  context.subscriptions.push(USFMEditorProvider.register(context));

  const currentProjectURI = vscode.workspace.workspaceFolders?.[0].uri;
  const storageUri = context.storageUri;

  if (!currentProjectURI) {
    vscode.window.showWarningMessage("No workspace opened");
  }

  const metadataFileUri = currentProjectURI?.with({
    path: vscode.Uri.joinPath(currentProjectURI, "metadata.json").path,
  });

  (async () => {
    const isCurrentProject = await isProjectUSFM(metadataFileUri);
    if (!isCurrentProject) {
      vscode.window.showWarningMessage(
        "Current project isn't a text translation"
      );
      return;
    }
    const files = await vscode.workspace.findFiles("ingredients/*.usfm");
    if (currentProjectURI && storageUri) {
      const cacheFolder = vscode.Uri.joinPath(
        currentProjectURI,
        ".vscode",
        "usj_cache"
      ).path;
      const fileCacheMap = getCacheMapFromFile(context);

      const chunkSize = Math.ceil(files.length / 4); // based on the number of threads you want to run
      for (let i = 0; i < files.length; i += chunkSize) {
        const chunk = files.slice(i, i + chunkSize).map((file) => file.fsPath);
        runWorker(chunk, cacheFolder, fileCacheMap, storageUri, context);
      }

      function runWorker(
        filesChunk: string[],
        cacheFolder: string,
        fileCacheMap: any,
        storageUri: vscode.Uri,
        context: vscode.ExtensionContext
      ) {
        const worker = new Worker(
          new URL(
            context.asAbsolutePath(path.join("dist", "worker.js")),
            import.meta.url
          )
        ); //in this format since webpack 5 doesn't support worker_threads otherwise

        worker.on("message", (results) => {
          vscode.window.showInformationMessage(
            `Successfully loaded  USFM files in the project!`
          );
          console.log({ results });
          worker.terminate();
        });

        worker.postMessage({
          files: filesChunk,
          cacheFolder,
          fileCacheMap,
          storageUri: storageUri.path,
        });
      }
    }
  })();
}

export function deactivate() {}
