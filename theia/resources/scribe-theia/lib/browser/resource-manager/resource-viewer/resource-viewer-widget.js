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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceViewerWidget = void 0;
const React = __importStar(require("@theia/core/shared/react"));
const browser_1 = require("@theia/core/lib/browser");
const lodash_1 = __importDefault(require("lodash"));
class ResourceViewerWidget extends browser_1.ReactWidget {
    constructor(fs, workspaceService, resource, handlers) {
        super();
        this.fs = fs;
        this.workspaceService = workspaceService;
        this.data = null;
        this.workspaceUri = null;
        this.resourceUri = null;
        this.id =
            ResourceViewerWidget.FACTORY_ID + ":" + resource.type + ":" + resource.id;
        this.title.label = `${resource.type}: ${resource.name}`;
        this.resource = resource;
        this.handlers = handlers;
        this.workspaceService.roots
            .then((data) => {
            var _a;
            this.workspaceUri = data === null || data === void 0 ? void 0 : data[0].resource;
            this.resourceUri = (_a = this.workspaceUri) === null || _a === void 0 ? void 0 : _a.withPath(this.workspaceUri.path.join(resource.localPath));
        })
            .catch((err) => {
            console.error("Error getting workspace roots: ", err);
        });
    }
    onUpdateRequest(msg) {
        if (!this.resourceUri) {
            console.error("Resource URI not found");
            return;
        }
        this.resourceUri = this.resourceUri;
        if (!this.data) {
            this.handlers
                .readResourceData(this.resourceUri, this.fs)
                .then((data) => {
                if (lodash_1.default.isEqual(this.data, data)) {
                    return;
                }
                this.data = data;
                super.onUpdateRequest(msg);
            })
                .catch((err) => {
                console.error("Error reading resource data: ", err);
            });
        }
        else {
            super.onUpdateRequest(msg);
        }
    }
    render() {
        if (!this.resourceUri) {
            return React.createElement("div", null, "Resource URI not found");
        }
        if (this.data === null) {
            return React.createElement("div", null, "Loading...");
        }
        const ctx = {
            fs: this.fs,
            resourceUri: this.resourceUri,
        };
        return this.handlers.render(this.data, ctx);
    }
}
exports.ResourceViewerWidget = ResourceViewerWidget;
ResourceViewerWidget.FACTORY_ID = "resource-viewer";
//# sourceMappingURL=resource-viewer-widget.js.map