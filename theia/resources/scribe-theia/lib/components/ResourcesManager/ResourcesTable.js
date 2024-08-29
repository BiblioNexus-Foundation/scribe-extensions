"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("@theia/core/shared/react"));
const react_1 = require("@vscode/webview-ui-toolkit/react");
const { useEffect, useRef, useState } = React;
const ResourcesTable = ({ resourcesTypes, downloadedResources, openResource, }) => {
    var _a, _b;
    const initRef = useRef(false);
    const [selectedResourceType, setSelectedResourceType] = useState((_b = (_a = resourcesTypes[0]) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : "");
    const [resourceTableData, setResourceTableData] = useState([]);
    useEffect(() => {
        if (!selectedResourceType || resourcesTypes.length === 0) {
            return;
        }
        const selectedResourceTypeData = resourcesTypes.find((type) => type.value === selectedResourceType);
        if (selectedResourceTypeData) {
            selectedResourceTypeData.getTableDisplayData().then((data) => {
                setResourceTableData(data);
            });
        }
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
    const handleDownload = (resource) => {
        const selectedResourceTypeData = resourcesTypes.find((type) => type.value === selectedResourceType);
        if (selectedResourceTypeData) {
            selectedResourceTypeData.downloadHandler(resource);
        }
    };
    const { importedOfflineResource, handleImportResource, handleAddResource } = useImportOfflineResource();
    return (React.createElement("div", null,
        React.createElement("div", { className: "flex justify-between w-full" },
            "Filter Resources",
            React.createElement(react_1.VSCodeDropdown, { className: "w-1/2", onInput: (e) => {
                    setSelectedResourceType(e.target.value);
                } }, resourcesTypes.map((type) => (React.createElement(react_1.VSCodeOption, { onClick: () => setSelectedResourceType(type.value) }, type.label))))),
        importedOfflineResource ? (React.createElement("div", { className: "flex flex-col" },
            React.createElement("h1", null, "Selected Resource:"),
            React.createElement("div", { className: "flex flex-col" },
                React.createElement("p", null,
                    "Name: ",
                    importedOfflineResource.metadata.name),
                React.createElement("p", null,
                    "ID: ",
                    importedOfflineResource.metadata.id),
                React.createElement("p", null,
                    "Version: ",
                    importedOfflineResource.metadata.version),
                React.createElement("p", null,
                    "Path: ",
                    importedOfflineResource.path),
                React.createElement(react_1.VSCodeButton, { onClick: () => handleAddResource(selectedResourceType) },
                    React.createElement("i", { className: "codicon codicon-cloud-upload" }))))) : (React.createElement("div", { className: "flex justify-between mt-2" },
            React.createElement("div", { className: "min-w-2" }, "Import Resources"),
            React.createElement(react_1.VSCodeButton, { onClick: () => {
                    handleImportResource({ selectedResourceType });
                }, className: "min-w-28" },
                React.createElement("i", { className: "codicon codicon-cloud-upload" })))),
        React.createElement("table", { className: "table-auto w-full" },
            React.createElement("thead", { className: "font-semibold" },
                React.createElement("tr", null,
                    React.createElement("td", null, "Resource"),
                    React.createElement("td", null, "Owner"),
                    React.createElement("td", null, "Version"),
                    React.createElement("td", null))),
            React.createElement("tbody", { className: "gap-3" }, resourceTableData === null || resourceTableData === void 0 ? void 0 : resourceTableData.map((resource) => (React.createElement("tr", null,
                React.createElement("td", null, resource.name),
                React.createElement("td", null, resource.owner.avatarUrl ? (React.createElement("img", { src: resource.owner.avatarUrl, alt: resource.owner.name, className: "w-8 h-8 rounded-lg object-contain" })) : (resource.owner.name)),
                React.createElement("td", { title: `Released on : ${new Date(resource.version.releaseDate).toLocaleDateString()}` }, resource.version.tag),
                React.createElement("td", { className: "flex items-center justify-center px-2" }, !downloadedResources.find((item) => item.id === resource.id) ? (React.createElement(react_1.VSCodeButton, { title: "Download Resource", appearance: "secondary", className: "w-full", onClick: () => handleDownload(resource) },
                    React.createElement("i", { className: "codicon codicon-cloud-download" }))) : (React.createElement(react_1.VSCodeButton, { title: "Open Resource", appearance: "primary", className: "w-full", onClick: () => openResource(downloadedResources.find((item) => item.id === resource.id)) },
                    React.createElement("i", { className: "codicon codicon-eye" })))))))))));
};
const useResourcesTypes = () => {
    const [resourcesTypes, setResourcesTypes] = useState([]);
    useEffect(() => {
        // setMessageListeners((event) => {
        //   switch (event.data.type) {
        //     case "SET_RESOURCES_TYPES":
        //       setResourcesTypes(event.data.payload.resourcesTypes ?? []);
        //       break;
        //   }
        // });
        // postMessage({ type: MessageType.INIT_DATA, payload: {} });
    }, []);
    return { resourcesTypes, setResourcesTypes };
};
const useResourceTableData = () => {
    const [resourceTableData, setResourceTableData] = useState([]);
    useEffect(() => {
        // setMessageListeners((event) => {
        //   switch (event.data.type) {
        //     case "SET_RESOURCE_TABLE_DATA":
        //       setResourceTableData(event.data.payload.tableData ?? []);
        //       break;
        //   }
        // });
    }, []);
    return { resourceTableData };
};
const useDownloadedResources = () => {
    const [downloadedResources, setDownloadedResources] = useState([]);
    useEffect(() => {
        // setMessageListeners((event) => {
        //   switch (event.data.type) {
        //     case "SET_DOWNLOADED_RESOURCES":
        //       setDownloadedResources(event.data.payload.downloadedResources ?? []);
        //       break;
        //   }
        // });
    }, []);
    return { downloadedResources };
};
const useImportOfflineResource = () => {
    const [importedOfflineResource, setImportedOfflineResource] = useState(null);
    const handleImportResource = ({ selectedResourceType, }) => {
        // postMessage({
        //   type: MessageType.GET_OFFLINE_RESOURCE_IMPORT_URI,
        //   payload: {
        //     selectedResourceType,
        //   },
        // });
    };
    const handleAddResource = (selectedResourceType) => {
        // postMessage({
        //   type: MessageType.ADD_OFFLINE_RESOURCE,
        //   payload: {
        //     path: importedOfflineResource?.path,
        //     fsPath: importedOfflineResource?.fsPath,
        //     metadata: importedOfflineResource?.metadata,
        //     selectedResourceType: selectedResourceType,
        //   },
        // });
        setImportedOfflineResource(null);
    };
    useEffect(() => {
        // setMessageListeners((event) => {
        //   switch (event.data.type) {
        //     case MessageType.SET_OFFLINE_RESOURCE_IMPORT_URI:
        //       setImportedOfflineResource(event.data.payload ?? null);
        //       break;
        //   }
        // });
    }, []);
    return { importedOfflineResource, handleImportResource, handleAddResource };
};
exports.default = ResourcesTable;
//# sourceMappingURL=ResourcesTable.js.map