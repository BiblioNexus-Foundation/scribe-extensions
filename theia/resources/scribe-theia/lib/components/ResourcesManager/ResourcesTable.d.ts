import * as React from "@theia/core/shared/react";
import { ConfigResourceValues } from "../../browser/resource-manager/resources/types";
declare module "react" {
    interface InputHTMLAttributes<T> extends React.HTMLAttributes<T> {
        webkitdirectory?: boolean;
    }
}
declare const ResourcesTable: ({ resourcesTypes, downloadedResources, openResource, }: {
    resourcesTypes: {
        value: string;
        label: string;
        getTableDisplayData: () => Promise<any[]>;
        downloadHandler: (resource: any) => void;
    }[];
    downloadedResources: ConfigResourceValues[];
    openResource: (resource?: ConfigResourceValues) => void;
}) => React.JSX.Element;
export default ResourcesTable;
//# sourceMappingURL=ResourcesTable.d.ts.map