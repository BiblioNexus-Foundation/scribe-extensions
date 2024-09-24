import * as React from "@theia/core/shared/react";

import { ReactWidget, type StatefulWidget } from "@theia/core/lib/browser";

import { ReactNode } from "@theia/core/shared/react";
import { ConfigResourceValues } from "../resources/types";
import { URI } from "@theia/core";
import { FileService } from "@theia/filesystem/lib/browser/file-service";
import { inject } from "@theia/core/shared/inversify";
import { WorkspaceService } from "@theia/workspace/lib/browser/workspace-service";
import _ from "lodash";
import { registeredResources } from "../resources";

export type Context = {
  fs: FileService;
  resourceUri: URI;
};

type ReadResourceDataCtx = {
  resource: ConfigResourceValues;
  resourcesRootUri: URI;
};
export type ResourceViewerWidgetHandlers<T extends {}> = {
  readResourceData: (
    uri: URI,
    fs: FileService,
    ctx: ReadResourceDataCtx
  ) => Promise<T>;
  render: (data: T, ctx?: Context) => ReactNode | ReactNode[];
  id: string;
};

export class ResourceViewerWidget<TData extends {}>
  extends ReactWidget
  implements StatefulWidget
{
  static FACTORY_ID = "resource-viewer";
  id: string;

  resource: ConfigResourceValues;

  data: TData | null = null;

  handler: ResourceViewerWidgetHandlers<TData>;

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
    this.title.label = `${resource.name}`;
    this.resource = resource;
    this.handler = handlers;
    this.workspaceService.roots
      .then((data) => {
        this.workspaceUri = data?.[0].resource;
        this.resourceUri = this.workspaceUri?.withPath(
          this.workspaceUri.path.join(resource.localPath.replace(/^\//, ""))
        );
      })
      .catch((err) => {
        console.error("Error getting workspace roots: ", err);
      });
  }
  storeState(): object | undefined {
    return {
      data: this.data,
      handlerId: this.handler.id,
    };
  }

  registeredResources = registeredResources;

  restoreState(oldState: object): void {
    this.data = (oldState as any).data as TData;
    const handlerId = (oldState as any).handlerId as string;
    const handler = this.registeredResources.find(
      (resource) => resource.id === handlerId
    )?.openHandlers;

    if (!handler) {
      console.error("Handler not found");
      return;
    }

    this.handler = {
      ...handler,
      id: handlerId,
    } as ResourceViewerWidgetHandlers<TData>;
    this.update();
  }

  protected onUpdateRequest(msg: any): void {
    if (!this.resourceUri) {
      console.error("Resource URI not found");
      return;
    }

    this.resourceUri = this.resourceUri;

    if (!this.data) {
      this.handler
        .readResourceData(this.resourceUri, this.fs, {
          resource: this.resource,
          resourcesRootUri: URI.fromComponents({
            path: this.workspaceUri!.path.join(
              ".project",
              "resources"
            ).toString(),
            scheme: this.workspaceUri!.scheme,
            authority: this.workspaceUri!.authority,
            query: this.workspaceUri!.query,
            fragment: this.workspaceUri!.fragment,
          }),
        })
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
    return (
      this.handler?.render?.(this.data, ctx) ?? (
        <div>
          Unable to find the handler method of the resource
          {void console.log("handlers: ", this.handler)}
        </div>
      )
    );
  }
}
