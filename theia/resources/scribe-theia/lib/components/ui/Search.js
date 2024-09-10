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
exports.default = Search;
const icons_react_1 = require("@tabler/icons-react");
const React = __importStar(require("@theia/core/shared/react"));
const clsx_1 = require("../../utils/clsx");
function Search({ className }) {
    return (React.createElement("div", { className: "relative dark:text-zinc-50 text-zinc-700 text-xs" },
        " ",
        React.createElement("span", { className: "pointer-events-none absolute inset-y-0 left-[38%] flex items-center" },
            React.createElement(icons_react_1.IconSearch, { size: 16, stroke: 1.5, strokeLinejoin: "miter" })),
        React.createElement("input", { placeholder: "Search", className: (0, clsx_1.cn)(className, "rounded-full bg-zinc-50 dark:bg-zinc-900  h-10 text-center border focus:border-transparent focus:outline-none focus:ring-[.5px] dark:focus:ring-zinc-700 focus:ring-zinc-400 border-zinc-300 dark:border-zinc-800") })));
}
//# sourceMappingURL=Search.js.map