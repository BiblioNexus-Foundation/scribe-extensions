import { Uri, window, FileSystem, workspace } from "vscode";
import { directoryExists } from "../../utilities";

type TranslationWordsForVerse = {
  verseRef: string;
  translationWords: {
    [x: string]: {
      dir: string;
      ref: string;
      content: string;
    };
  };
};

export type TranslationWord = {
  name: string;
  path: string;
  ref: string;
};

export const getAllTranslationWordsOfResource = async (
  currentResourceUri: Uri
) => {
  if (!workspace?.workspaceFolders?.[0]) {
    console.error("No resources found. Please open a project first.");
    return;
  }
  const resourcesDirUri = Uri.joinPath(
    workspace?.workspaceFolders?.[0].uri,
    `.project/resources`
  );

  const resourceBibleDirUri = Uri.joinPath(currentResourceUri, `bible`);

  if (!(await directoryExists(resourceBibleDirUri))) {
    window.showErrorMessage(
      `The selected resource does not exist or it's invalid directory.`
    );
    return;
  }

  const ktPath = Uri.joinPath(resourceBibleDirUri, `./kt`);
  const namesPath = Uri.joinPath(resourceBibleDirUri, `./names`);
  const otherPath = Uri.joinPath(resourceBibleDirUri, `./other`);

  const ktWordDir = await workspace.fs.readDirectory(ktPath);

  const ktWords = ktWordDir.map(([fileName]) => ({
    name: fileName.split(".")[0],
    path: Uri.joinPath(ktPath, `./${fileName}`).path,
    ref: "kt" as const,
  }));

  const namesWordsDir = await workspace.fs.readDirectory(namesPath);

  const namesWords = namesWordsDir.map(([fileName]) => ({
    name: fileName.split(".")[0],
    path: Uri.joinPath(namesPath, `./${fileName}`).path,
    ref: "names" as const,
  }));

  const otherWordsDir = await workspace.fs.readDirectory(otherPath);

  const otherWords = otherWordsDir.map(([fileName]) => ({
    name: fileName.split(".")[0],
    path: Uri.joinPath(otherPath, `./${fileName}`).path,
    ref: "other" as const,
  }));

  const allWords = [...ktWords, ...namesWords, ...otherWords];
  return allWords;
};
