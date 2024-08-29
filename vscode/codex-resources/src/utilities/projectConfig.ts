import * as vscode from "vscode";
import { ConfigResourceValues } from "../types/codexResource";
import { fileExists } from ".";

const CONFIG_FILE_NAME = "scribe.config.json";

export const addDownloadedResourceToProjectConfig = async (
  resource: ConfigResourceValues
) => {
  const projectURI = vscode.workspace.workspaceFolders?.[0].uri;

  const configFileUri = projectURI?.with({
    path: vscode.Uri.joinPath(projectURI, CONFIG_FILE_NAME).path,
  });

  if (!configFileUri) {
    console.error("No workspace opened");
    return;
  }

  let config: Record<string, any> = {};
  const configFileExists = await fileExists(configFileUri);

  if (configFileExists) {
    const configFile = await vscode.workspace.fs.readFile(configFileUri);
    config = JSON.parse(new TextDecoder().decode(configFile));
  }

  const configDownloadedResources = config.resources ?? [];

  if (configDownloadedResources.some((r: any) => r.id === resource.id)) {
    vscode.window.showInformationMessage(
      `Resource ${resource.name} already exists in the project!`
    );
    return;
  }

  const newConfigDownloadedResources = [...configDownloadedResources, resource];

  config.resources = newConfigDownloadedResources;

  await vscode.workspace.fs.writeFile(
    configFileUri,
    Buffer.from(JSON.stringify(config, null, 2))
  );
};

export const getDownloadedResourcesFromProjectConfig = async () => {
  const projectURI = vscode.workspace.workspaceFolders?.[0].uri;

  const configFileUri = projectURI?.with({
    path: vscode.Uri.joinPath(projectURI, CONFIG_FILE_NAME).path,
  });

  if (!configFileUri) {
    console.error("No workspace opened");
    return;
  }

  let config: Record<string, any> = {};
  const configFileExists = await fileExists(configFileUri);

  if (configFileExists) {
    const configFile = await vscode.workspace.fs.readFile(configFileUri);
    config = JSON.parse(new TextDecoder().decode(configFile));
  }

  return (config.resources ?? []) as ConfigResourceValues[];
};
