export type ResourceDisplay<FullResource> = {
  id: string;
  name: string;
  version: {
    tag: string;
    releaseDate: Date;
  };
  owner: {
    name: string;
    url: string;
    avatarUrl: string;
  };
  fullResource: FullResource;
  resourceType: string;
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
