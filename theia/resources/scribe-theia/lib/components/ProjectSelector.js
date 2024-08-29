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
exports.default = ProjectSelector;
const React = __importStar(require("@theia/core/shared/react"));
const Badge_1 = require("./ui/Badge");
function ProjectSelector({ title, icon, }) {
    return (React.createElement("div", { className: "rounded-3xl border cursor-pointer text-zinc-700 dark:text-zinc-50 group hover:border-cyan-500 transition-all duration-200 hover:text-cyan-500 w-full uppercase font-semibold  dark:border-zinc-800 border-zinc-300 h-40 dark:bg-zinc-900 bg-zinc-50 flex flex-col items-center justify-center gap-5" },
        React.createElement("span", { className: "tracking-wide leading-4  text-xs" }, title),
        React.createElement("span", { className: "dark:bg-zinc-800 bg-zinc-200 h-12 rounded-full w-12 flex items-center justify-center group-hover:stroke-cyan-500 stroke-zinc-500 dark:stroke-zinc-50" }, icon),
        title === "Open project" && (React.createElement(Badge_1.Badge, { className: "mr-auto ml-[14px]" }, "12 projects"))));
}
//# sourceMappingURL=ProjectSelector.js.map