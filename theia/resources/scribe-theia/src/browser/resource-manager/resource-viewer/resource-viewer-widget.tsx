import * as React from "@theia/core/shared/react";

import { ReactWidget } from "@theia/core/lib/browser";

import { ReactNode } from "@theia/core/shared/react";
import { ConfigResourceValues } from "../resources/types";
import { URI } from "@theia/core";
import { FileService } from "@theia/filesystem/lib/browser/file-service";
import { inject } from "@theia/core/shared/inversify";
import { WorkspaceService } from "@theia/workspace/lib/browser/workspace-service";
import _ from "lodash";

export type Context = {
  fs: FileService;
  resourceUri: URI;
};
export type ResourceViewerWidgetHandlers<T extends {}> = {
  readResourceData: (uri: URI, fs: FileService) => Promise<T>;
  render: (data: T, ctx?: Context) => ReactNode | ReactNode[];
};

export class ResourceViewerWidget<TData extends {}> extends ReactWidget {
  static FACTORY_ID = "resource-viewer";
  id: string;

  resource: ConfigResourceValues;

  data: TData | null = null;

  handlers: ResourceViewerWidgetHandlers<TData>;

  workspaceUri: URI | null = null;

  resourceUri: URI | null = null;

  constructor(
    private readonly fs: FileService,
    protected readonly workspaceService: WorkspaceService,
    resource: ConfigResourceValues,
    handlers: ResourceViewerWidgetHandlers<TData>
  ) {
    super();
    this.id =
      ResourceViewerWidget.FACTORY_ID + ":" + resource.type + ":" + resource.id;
    this.title.label = `${resource.type}: ${resource.name}`;
    this.resource = resource;
    this.handlers = handlers;
    this.workspaceService.roots
      .then((data) => {
        this.workspaceUri = data?.[0].resource;
        this.resourceUri = this.workspaceUri?.withPath(
          this.workspaceUri.path.join(resource.localPath)
        );
      })
      .catch((err) => {
        console.error("Error getting workspace roots: ", err);
      });
  }

  protected onUpdateRequest(msg: any): void {
    if (!this.resourceUri) {
      console.error("Resource URI not found");
      return;
    }

    this.resourceUri = this.resourceUri;

    if (!this.data) {
      this.handlers
        .readResourceData(this.resourceUri, this.fs)
        .then((data) => {
          if (_.isEqual(this.data, data)) {
            return;
          }
          this.data = data;
          super.onUpdateRequest(msg);
        })
        .catch((err) => {
          console.error("Error reading resource data: ", err);
        });
    } else {
      super.onUpdateRequest(msg);
    }
  }

  render(): ReactNode {
    if (!this.resourceUri) {
      return <div>Resource URI not found</div>;
    }
    if (this.data === null) {
      return <div>Loading...</div>;
    }

    const ctx = {
      fs: this.fs,
      resourceUri: this.resourceUri,
    };
    return this.handlers.render(this.data, ctx);
  }
}
