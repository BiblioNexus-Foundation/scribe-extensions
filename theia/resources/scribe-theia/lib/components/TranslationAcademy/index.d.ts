import * as React from "@theia/core/shared/react";
export declare const TranslationAcademy: ({ taDirectories, getTaFolderContent, getTaContent, }: {
    taDirectories: string[];
    getTaFolderContent: (directory: string) => Promise<string[]>;
    getTaContent: ({ directory, subDirectory, }: {
        directory: string;
        subDirectory: string;
    }) => Promise<string>;
}) => React.JSX.Element;
//# sourceMappingURL=index.d.ts.map