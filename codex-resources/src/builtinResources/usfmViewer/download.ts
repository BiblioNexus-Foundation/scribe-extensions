import { CodexResource, ConfigResourceValues } from "../../types/codexResource";
import {
  BibleResource,
  BibleResourceMetadata,
  IngredientFnBaseParams,
} from "./types";
import TextTemplate from "./burritoTextTemplate.json";
import LanguageCodes from "./LanguageCodes.json";
import moment from "moment";
import { Uri, window } from "vscode";
import JSZip from "jszip";
import { directoryExists, fileExists } from "../../utilities";

import md5 from "md5";

import CUSTOM_LICENSE from "./customLicense.md";

import path from "path";

export const downloadBibleResource: CodexResource<BibleResource>["downloadResource"] =
  async (fullResource, { resourceFolderUri: resourcesFolderUri, fs }) => {
    const currentResourceFolder = Uri.joinPath(
      resourcesFolderUri,
      `${fullResource.name}_${fullResource.id}`
    );
    const resourceMetadataRequest = await fetch(fullResource.metadata_json_url);
    const resourceMetadata =
      (await resourceMetadataRequest.json()) as BibleResourceMetadata;

    const resourceBurritoFile = createdStandardBurrito(
      resourceMetadata,
      fullResource
    );

    resourceBurritoFile.resourceMeta = fullResource;
    resourceBurritoFile.resourceMeta.lastUpdatedAg = moment().format();
    const currentProjectName = `${fullResource.name}_${
      Object.keys(resourceBurritoFile.identification.primary.scribe)[0]
    }`;

    const zipResponse = await fetch(fullResource.zipball_url);
    const zipBuffer = await zipResponse.arrayBuffer();

    const zipFileUri = Uri.joinPath(
      currentResourceFolder,
      `${currentProjectName}.zip`
    );
    await fs.writeFile(zipFileUri, Buffer.from(zipBuffer));
    const contents = await JSZip.loadAsync(zipBuffer);
    const zipKeys = Object.keys(contents.files);
    let licenseFileFound = false;
    let parentDir = "";
    for (const key of zipKeys) {
      const item = contents.files[key];
      if (item.dir) {
        parentDir = item.name;
      } else {
        const bufferContent = Buffer.from(await item.async("arraybuffer"));
        await fs.writeFile(
          Uri.joinPath(currentResourceFolder, item.name.replace(parentDir, "")),
          bufferContent
        );
      }
      if (key.toLowerCase().includes("license")) {
        licenseFileFound = true;
        if (await fileExists(Uri.joinPath(currentResourceFolder, key))) {
          const licenseContent = await fs.readFile(
            Uri.joinPath(currentResourceFolder, key)
          );
          const checksum = md5(licenseContent);
          const stats = await fs.stat(Uri.joinPath(currentResourceFolder, key));
          resourceBurritoFile.ingredients[key.replace(fullResource.name, ".")] =
            {
              checksum: { md5: checksum },
              mimeType: "text/md",
              size: stats.size,
              role: "x-license",
            };
        }
      }
    }

    const finalBurritoFile = await generateResourceIngredientsTextTranslation({
      resourceFolderUri: currentResourceFolder,
      resourceMetadata,
      resourceBurrito: { ...resourceBurritoFile },
      fs,
    });

    const customLicenseContent = CUSTOM_LICENSE;
    if (!licenseFileFound) {
      if (await directoryExists(currentResourceFolder)) {
        const mdUri = Uri.joinPath(currentResourceFolder, "LICENSE.md");
        await fs.writeFile(mdUri, Buffer.from(customLicenseContent));
        const stats = await fs.stat(mdUri);
        finalBurritoFile.ingredients["./LICENSE.md"] = {
          checksum: { md5: md5(customLicenseContent) },
          mimeType: "text/md",
          size: stats.size,
          role: "x-license",
        };
      }
    }

    const settings = generateAgSettings({
      resourceMetadata,
      resourceBurrito: finalBurritoFile,
    });
    const settingsUri = Uri.joinPath(
      currentResourceFolder,
      "scribe-settings.json"
    );
    await fs.writeFile(settingsUri, Buffer.from(JSON.stringify(settings)));

    const checksum = md5(JSON.stringify(settings));
    const settingsStats = await fs.stat(settingsUri);
    finalBurritoFile.ingredients["./scribe-settings.json"] = {
      checksum: { md5: checksum },
      mimeType: "application/json",
      size: settingsStats.size,
      role: "x-scribe",
    };
    // added new section to avoid ingredients issue in meta some times (new user)
    const ymlPath = resourceMetadata?.projects[0]?.path.replace("./", "");
    const renames = Object.keys(finalBurritoFile.ingredients);
    const regex = new RegExp(`(\\.\\/)|(${ymlPath}[\\/\\\\])`, "g");
    renames?.forEach((rename) => {
      if (!rename.match(regex)) {
        delete finalBurritoFile.ingredients[rename];
      }
    });
    const metadataUri = Uri.joinPath(currentResourceFolder, "metadata.json");
    await fs.writeFile(
      metadataUri,
      Buffer.from(JSON.stringify(finalBurritoFile))
    );
    await fs.delete(zipFileUri);
    window.showInformationMessage(
      `Resource ${fullResource.name} downloaded successfully`
    );

    const localPath = currentResourceFolder.path;
    const downloadedResource: ConfigResourceValues = {
      name: fullResource.name ?? "",
      id: String(fullResource.id) ?? "",
      localPath: localPath,
      type: "codex.bible",
      remoteUrl: fullResource?.url ?? "",
      version: fullResource.release.tag_name,
    };
    return downloadedResource;
  };

type TextTemplateType = typeof TextTemplate;

type AnyObject = Record<string, any>;

const findCode = (list: AnyObject[], id: string) => {
  let code = "";
  list.forEach((obj) => {
    if (obj.name.toLowerCase() === id.toLowerCase()) {
      code = obj.lang_code;
    }
  });
  return code;
};

const createdStandardBurrito = (
  metadata: BibleResourceMetadata,
  resource: BibleResource
) => {
  const template: AnyObject = TextTemplate;

  const id = "id-placeholder"; // TODO: Fix the id generation
  template.meta.generator.userName = "scribe-current-user-placeholder"; // TODO: talk to Ryder about where the uname is stored
  template.meta.generator.softwareName = "name-placeholder"; // TODO: replace software name
  template.meta.generator.softwareVersion = "version-placeholder"; // TODO: get version from package.template
  template.meta.dateCreated = moment().format();
  template.idAuthorities = {
    dcs: {
      id: new URL(resource.url).hostname,
      name: {
        en: resource.owner,
      },
    },
  };
  template.identification.primary = {
    scribe: {
      [id]: {
        revision: "1",
        timestamp: moment().format(),
      },
    },
  };
  template.identification.upstream = {
    dcs: [
      {
        [`${resource.owner}:${resource.name}`]: {
          revision: resource.release.tag_name,
          timestamp: resource.released,
        },
      },
    ],
  };

  template.identification.name.en = resource.name;
  template.identification.abbreviation.en = "";

  if (metadata.dublin_core.language.identifier) {
    template.languages[0].tag = metadata.dublin_core.language.identifier;
  } else if (metadata.dublin_core.language.title) {
    const code = findCode(LanguageCodes, metadata.dublin_core.language.title);
    if (code) {
      template.languages[0].tag = code;
    } else {
      template.languages[0].tag = metadata.dublin_core.language.title.substring(
        0,
        3
      );
    }
  }

  template.languages[0].name.en = resource.language_title;

  template.copyright.shortStatements = [
    {
      statement: metadata?.dublin_core?.rights,
    },
  ];
  template.copyright.licenses[0].ingredient = "LICENSE.md";
  const localizedNames: Record<string, string> = {};
  metadata.projects.forEach(({ identifier: scope }: { identifier: string }) => {
    template.type.flavorType.currentScope[scope.toUpperCase()] = [];
    localizedNames[scope.toUpperCase()] =
      template.localizedNames[scope.toUpperCase()];
  });
  template.localizedNames = localizedNames;

  return template;
};

export const generateResourceIngredientsTextTranslation = async ({
  resourceMetadata,
  resourceFolderUri,
  resourceBurrito,
  fs,
}: IngredientFnBaseParams) => {
  // generating ingredients content in metadata
  resourceMetadata?.projects.forEach(async (project: any) => {
    const fileUri = resourceFolderUri.with({
      path: path.join(resourceFolderUri.path, project.path),
    });
    if (await fileExists(fileUri)) {
      const fileContents = await fs.readFile(fileUri);
      // find checksum & size by read the file
      const checksum = md5(fileContents);
      const stats = await fs.stat(fileUri);
      resourceBurrito.ingredients[project.path] = {
        checksum: { md5: checksum },
        mimeType: resourceMetadata.dublin_core.format,
        size: stats.size,
        scope: { [project?.identifier.toUpperCase()]: [] },
      };
    } else {
      throw new Error(`File not Exist in project Directory:  ${project.path}`);
    }
  });
  return resourceBurrito;
};

export const generateAgSettings = ({
  resourceBurrito,
  resourceMetadata,
}: {
  resourceBurrito: AnyObject;
  resourceMetadata: AnyObject;
}) => {
  const settings: Record<string, any> = {
    version: "1.0.0",
    project: {
      [resourceBurrito.type.flavorType.flavor.name]: {
        scriptDirection: resourceMetadata?.dublin_core?.language?.direction,
        starred: false,
        description: resourceMetadata?.dublin_core?.description,
        copyright: resourceMetadata?.dublin_core?.rights,
        lastSeen: moment().format(),
        refResources: [],
        bookMarks: [],
        font: "",
      },
    },
    sync: { services: { door43: [] } },
  };
  settings.versification = "ENG";
  return settings;
};
