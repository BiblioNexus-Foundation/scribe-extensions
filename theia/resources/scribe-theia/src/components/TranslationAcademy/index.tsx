import {
  VSCodeButton,
  VSCodeDropdown,
  VSCodeOption,
} from "@vscode/webview-ui-toolkit/react";
import * as React from "@theia/core/shared/react";

import { markdownToHTML } from "../../utils/tsv";

const { useState } = React;

export const TranslationAcademy = ({
  taDirectories,
  getTaFolderContent,
  getTaContent,
}: {
  taDirectories: string[];
  getTaFolderContent: (directory: string) => Promise<string[]>;
  getTaContent: ({
    directory,
    subDirectory,
  }: {
    directory: string;
    subDirectory: string;
  }) => Promise<string>;
}) => {
  const [taSubDirectories, setTaSubDirectories] = useState<string[]>([]);
  const [taContent, setTaContent] = useState<string | null>(null);

  const [selectedDirectory, setSelectedDirectory] = useState<string>(
    taDirectories[0] ?? ""
  );
  const [selectedSubDirectory, setSelectedSubDirectory] = useState<string>(
    taSubDirectories[0] ?? ""
  );

  return (
    <>
      <div className="flex items-center gap-4 mb-6 justify-center">
        <VSCodeDropdown
          value={selectedDirectory}
          onChange={async (e) => {
            setSelectedDirectory((e.target as HTMLSelectElement)?.value);
            const directoryContent = await getTaFolderContent(
              (e.target as HTMLSelectElement)?.value
            );
            setTaSubDirectories(directoryContent);
          }}
          className="w-fit"
        >
          {taDirectories.map((directory) => (
            <VSCodeOption className="w-full" key={directory}>
              {directory}
            </VSCodeOption>
          ))}
        </VSCodeDropdown>
        <VSCodeDropdown
          onChange={(e) => {
            setSelectedSubDirectory((e.target as HTMLSelectElement)?.value);
          }}
          value={selectedSubDirectory}
          className="w-fit"
        >
          {taSubDirectories.map((subDirectory) => (
            <VSCodeOption key={subDirectory} className="w-full">
              {subDirectory}
            </VSCodeOption>
          ))}
        </VSCodeDropdown>
        <VSCodeButton
          appearance="primary"
          onClick={async () => {
            const content = await getTaContent({
              directory: selectedDirectory,
              subDirectory: selectedSubDirectory,
            });
            setTaContent(content);
          }}
        >
          View
        </VSCodeButton>
      </div>
      <div
        className="prose-base"
        dangerouslySetInnerHTML={{
          __html: markdownToHTML(taContent ?? ""),
        }}
      />
    </>
  );
};
