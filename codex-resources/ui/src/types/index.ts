export enum MessageType {
  showDialog = "showDialog",
  save = "save",
  openFile = "openFile",
  OPEN_RESOURCE = "openResource",
  createProject = "createProject",
  createObsProject = "createObsProject",
  openStory = "openStory",
  DOWNLOAD_RESOURCE = "downloadResource",
  SYNC_DOWNLOADED_RESOURCES = "syncDownloadedResources",
  TEST_MESSAGE = "testMessage",
  SEARCH_QUERY = "searchQuery",
  SEARCH_RESULTS = "searchResults",
  SEARCH_TW = "search_tw",
  GET_TW_CONTENT = "get-tw-content",
  SYNC_TA_CONTENT = "sync-ta-content",
  SYNC_TA_FOLDERS = "syncTaFolders",
  SYNC_TA_FOLDER_CONTENT = "sync-ta-folder-content",
  GET_TA_FOLDER_CONTENT = "get-ta-FolderContent",
  GET_TA_CONTENT = "get-ta-content",
  SET_CURRENT_RESOURCE_TYPE = "set-current-resource-type",
  GET_OFFLINE_RESOURCE_IMPORT_URI = "get-offline-resource-import-uri",
  SET_OFFLINE_RESOURCE_IMPORT_URI = "set-offline-resource-import-uri",
  ADD_OFFLINE_RESOURCE = "add-offline-resource",
  INIT_DATA = "initialize-data",
}

export type Language = {
  lc: string;
  code?: string;
  ld: string;
  alt: string[];
  hc: string;
  ln: string;
  ang: string;
  lr: string;
  pk: number;
  gw: boolean;
  cc: string[];
};

export type Copyright = {
  title: string;
  id: string;
  licence: string;
  locked: boolean;
};

export type DownloadedResource = {
  name: string;
  id: string;
  type: "obs" | "bible" | "tn" | "tw" | "ta" | "tq";
  localPath: string;
  remoteUrl: string;
  version: string;
  // uri: Record<string, any>;
};

export type TranslationWord = {
  name: string;
  path: string;
  ref: string;
};
