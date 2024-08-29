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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamicViewerWidget = void 0;
const React = __importStar(require("@theia/core/shared/react"));
const browser_1 = require("@theia/core/lib/browser");
const inversify_1 = require("@theia/core/shared/inversify");
const file_service_1 = require("@theia/filesystem/lib/browser/file-service");
class DynamicViewerWidget extends browser_1.ReactWidget {
    constructor(resourceId) {
        super();
        this.id = DynamicViewerWidget.FACTORY_ID + ":" + resourceId;
        this.title.label = `Dynamic Viewer - ${resourceId}`;
        this.resourceId = resourceId;
        this.update();
    }
    onUpdateRequest(msg) {
        super.onUpdateRequest(msg);
    }
    init() {
        this.id = DynamicViewerWidget.FACTORY_ID + ":" + this.id;
        this.title.label = "Dynamic Viewer";
        this.nodeRoot.render = this.render.bind(this);
    }
    render() {
        console.log("Rendering Dynamic Viewer");
        return (React.createElement("div", { className: "" },
            React.createElement("h1", null, "Dynamic Viewer"),
            React.createElement("p", null,
                "Resource ID: ",
                this.resourceId)));
    }
}
exports.DynamicViewerWidget = DynamicViewerWidget;
DynamicViewerWidget.FACTORY_ID = "dynamic-viewer";
__decorate([
    (0, inversify_1.inject)(file_service_1.FileService),
    __metadata("design:type", file_service_1.FileService)
], DynamicViewerWidget.prototype, "fs", void 0);
//# sourceMappingURL=dynamic-viewer-widget.js.map