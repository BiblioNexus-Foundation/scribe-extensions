import * as vscode from "vscode";

export const directoryExists = async (uri: vscode.Uri) => {
  try {
    await vscode.workspace.fs.readDirectory(uri);
    return true;
  } catch (error) {
    return false;
  }
};

export const fileExists = async (uri: vscode.Uri) => {
  try {
    await vscode.workspace.fs.readFile(uri);
    return true;
  } catch (error) {
    return false;
  }
};

export const isProjectUSFM = async (metadataFileUri: vscode.Uri | undefined) => {
  if (!metadataFileUri) {
    return false;
  }

  if (!(await fileExists(metadataFileUri))) {
    return false;
  }

  const metadataFile = await vscode.workspace.fs.readFile(metadataFileUri);
  const metadata = JSON.parse(metadataFile.toString());

  if (!metadata) {
    return false;
  }

  const flavorName = metadata?.type?.flavorType?.flavor?.name;

  if (!flavorName) {
    return false;
  }

  if (flavorName !== "textTranslation") {
    return false;
  }

  return true;
};
