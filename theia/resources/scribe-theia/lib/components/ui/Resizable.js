"use client";
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResizableHandle = exports.ResizablePanel = exports.ResizablePanelGroup = void 0;
const React = __importStar(require("react"));
const lucide_react_1 = require("lucide-react");
const ResizablePrimitive = __importStar(require("react-resizable-panels"));
const clsx_1 = require("../../utils/clsx");
const ResizablePanelGroup = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(ResizablePrimitive.PanelGroup, Object.assign({ className: (0, clsx_1.cn)("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", className) }, props)));
};
exports.ResizablePanelGroup = ResizablePanelGroup;
const ResizablePanel = ResizablePrimitive.Panel;
exports.ResizablePanel = ResizablePanel;
const ResizableHandle = (_a) => {
    var { withHandle, className } = _a, props = __rest(_a, ["withHandle", "className"]);
    return (React.createElement(ResizablePrimitive.PanelResizeHandle, Object.assign({ className: (0, clsx_1.cn)("relative flex w-px items-center justify-center bg-border border border-zinc-100 dark:border-zinc-900 after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90", className) }, props), withHandle && (React.createElement("div", { className: "z-10 flex py-[6px] text-zinc-700 dark:text-zinc-50  px-1 items-center justify-center rounded-lg border dark:border-zinc-800 border-zinc-300 bg-zinc-50 dark:bg-zinc-900" },
        React.createElement(lucide_react_1.GripVertical, { className: "h-4 w-4" })))));
};
exports.ResizableHandle = ResizableHandle;
//# sourceMappingURL=Resizable.js.map