import {
  VSCodeButton,
  VSCodeDropdown,
  VSCodeOption,
} from "@vscode/webview-ui-toolkit/react";
import { useEffect, useRef, useState } from "react";
import { vscode } from "../utilities/vscode";
import { renderToPage } from "../utilities/main-vscode";
import { ResourceDisplay } from "../../../src/types/shared";
import { DownloadedResource, MessageType } from "../types";

declare module "react" {
  interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
    webkitdirectory?: boolean;
  }
}

const ResourcesTable = () => {
  const { resourcesTypes } = useResourcesTypes();
  const initRef = useRef(false);
  const [selectedResourceType, setSelectedResourceType] = useState<string>(
    resourcesTypes[0]?.value ?? ""
  );

  const { resourceTableData } = useResourceTableData();

  const { downloadedResources } = useDownloadedResources();

  useEffect(() => {
    vscode.postMessage({
      type: MessageType.SET_CURRENT_RESOURCE_TYPE,
      payload: { resourceType: selectedResourceType },
    });
  }, [selectedResourceType]);

  useEffect(() => {
    if (resourcesTypes.length === 0) {
      return;
    }

    if (!initRef.current) {
      initRef.current = true;
      setSelectedResourceType(resourcesTypes[0].value);
      return;
    }
  }, [resourcesTypes]);

  const handleDownload = (
    resource: ResourceDisplay<Record<string, unknown>>,
    resourceType: string
  ) => {
    vscode.postMessage({
      type: MessageType.DOWNLOAD_RESOURCE,
      payload: {
        fullResource: resource.fullResource,
        resourceType: resourceType,
      },
    });
  };

  const handleOpenResource = (resource: DownloadedResource | undefined) => {
    if (!resource) {
      return;
    }

    vscode.postMessage({
      type: MessageType.OPEN_RESOURCE,
      payload: {
        resource: resource,
      },
    });
  };

  const { importedOfflineResource, handleImportResource, handleAddResource } =
    useImportOfflineResource();

  return (
    <div>
      <div className="flex justify-between w-full">
        Filter Resources
        <VSCodeDropdown
          className="w-1/2"
          onInput={(e) => {
            setSelectedResourceType(
              (
                e.target as unknown as {
                  value: string;
                }
              ).value
            );
          }}
        >
          {resourcesTypes.map((type) => (
            <VSCodeOption onClick={() => setSelectedResourceType(type.value)}>
              {type.label}
            </VSCodeOption>
          ))}
        </VSCodeDropdown>
      </div>
      {importedOfflineResource ? (
        <div className="flex flex-col">
          <h1>Selected Resource:</h1>
          <div className="flex flex-col">
            <p>Name: {importedOfflineResource.metadata.name}</p>
            <p>ID: {importedOfflineResource.metadata.id}</p>
            <p>Version: {importedOfflineResource.metadata.version}</p>
            <p>Path: {importedOfflineResource.path}</p>
            <VSCodeButton
              onClick={() => handleAddResource(selectedResourceType)}
            >
              <i className="codicon codicon-cloud-upload"></i>
            </VSCodeButton>
          </div>
        </div>
      ) : (
        <div className="flex justify-between mt-2">
          <div className="min-w-2">Import Resources</div>
          <VSCodeButton
            onClick={() => {
              handleImportResource({ selectedResourceType });
            }}
            className="min-w-28"
          >
            <i className="codicon codicon-cloud-upload"></i>
          </VSCodeButton>
        </div>
      )}
      <table className="table-auto w-full">
        <thead className="font-semibold">
          <tr>
            <td>Resource</td>
            <td>Owner</td>
            <td>Version</td>
            <td></td>
          </tr>
        </thead>

        <tbody className="gap-3">
          {resourceTableData?.map((resource) => (
            <tr>
              <td>{resource.name}</td>

              <td>
                {resource.owner.avatarUrl ? (
                  <img
                    src={resource.owner.avatarUrl}
                    alt={resource.owner.name}
                    className="w-8 h-8 rounded-lg object-contain"
                  />
                ) : (
                  resource.owner.name
                )}
              </td>
              <td
                title={`Released on : ${new Date(
                  resource.version.releaseDate
                ).toLocaleDateString()}`}
              >
                {resource.version.tag}
              </td>
              <td className="flex items-center justify-center px-2">
                {!downloadedResources.find(
                  (item) => item.id === resource.id
                ) ? (
                  <VSCodeButton
                    title="Download Resource"
                    appearance="secondary"
                    className="w-full"
                    onClick={() =>
                      handleDownload(resource, resource.resourceType)
                    }
                  >
                    <i className="codicon codicon-cloud-download"></i>
                  </VSCodeButton>
                ) : (
                  <VSCodeButton
                    title="Open Resource"
                    appearance="primary"
                    className="w-full"
                    onClick={() =>
                      handleOpenResource(
                        downloadedResources.find(
                          (item) => item.id === resource.id
                        )
                      )
                    }
                  >
                    <i className="codicon codicon-eye"></i>
                  </VSCodeButton>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

renderToPage(<ResourcesTable />);

const useResourcesTypes = () => {
  const [resourcesTypes, setResourcesTypes] = useState<
    {
      value: string;
      label: string;
    }[]
  >([]);

  useEffect(() => {
    vscode.setMessageListeners((event) => {
      switch (event.data.type) {
        case "SET_RESOURCES_TYPES":
          setResourcesTypes(event.data.payload.resourcesTypes ?? []);
          break;
      }
    });
    vscode.postMessage({ type: MessageType.INIT_DATA, payload: {} });
  }, []);

  return { resourcesTypes, setResourcesTypes };
};

const useResourceTableData = () => {
  const [resourceTableData, setResourceTableData] = useState<
    ResourceDisplay<Record<string, unknown>>[] // FIXME: type fullResource
  >([]);

  useEffect(() => {
    vscode.setMessageListeners((event) => {
      switch (event.data.type) {
        case "SET_RESOURCE_TABLE_DATA":
          setResourceTableData(event.data.payload.tableData ?? []);
          break;
      }
    });
  }, []);

  return { resourceTableData };
};

const useDownloadedResources = () => {
  const [downloadedResources, setDownloadedResources] = useState<
    DownloadedResource[]
  >([]);

  useEffect(() => {
    vscode.setMessageListeners((event) => {
      switch (event.data.type) {
        case "SET_DOWNLOADED_RESOURCES":
          setDownloadedResources(event.data.payload.downloadedResources ?? []);
          break;
      }
    });
  }, []);

  return { downloadedResources };
};

const useImportOfflineResource = () => {
  const [importedOfflineResource, setImportedOfflineResource] = useState<{
    path: string;
    fsPath: string;
    metadata: {
      name: string;
      id: string;
      version: string;
      [x: string]: unknown;
    };
  } | null>(null);

  const handleImportResource = ({
    selectedResourceType,
  }: {
    selectedResourceType: string;
  }) => {
    vscode.postMessage({
      type: MessageType.GET_OFFLINE_RESOURCE_IMPORT_URI,
      payload: {
        selectedResourceType,
      },
    });
  };

  const handleAddResource = (selectedResourceType: string) => {
    vscode.postMessage({
      type: MessageType.ADD_OFFLINE_RESOURCE,
      payload: {
        path: importedOfflineResource?.path,
        fsPath: importedOfflineResource?.fsPath,
        metadata: importedOfflineResource?.metadata,
        selectedResourceType: selectedResourceType,
      },
    });
    setImportedOfflineResource(null);
  };

  useEffect(() => {
    vscode.setMessageListeners((event) => {
      switch (event.data.type) {
        case MessageType.SET_OFFLINE_RESOURCE_IMPORT_URI:
          setImportedOfflineResource(event.data.payload ?? null);
          break;
      }
    });
  }, []);

  return { importedOfflineResource, handleImportResource, handleAddResource };
};
