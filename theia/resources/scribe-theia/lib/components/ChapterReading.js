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
exports.default = ChapterReading;
const React = __importStar(require("@theia/core/shared/react"));
const Badge_1 = require("../components/ui/Badge");
const icons_react_1 = require("@tabler/icons-react");
const Button_1 = __importDefault(require("../components/Button"));
function ChapterReading({ version, chapterName, verse, scripture, }) {
    return (React.createElement("div", null,
        React.createElement("div", { className: "flex items-center border-b py-2.5 px-2 dark:border-zinc-900 border-zinc-200 justify-between" },
            React.createElement(Badge_1.Badge, { variant: "destructive" }, version),
            React.createElement("div", { className: "flex items-center gap-[5px]" },
                React.createElement(Button_1.default, { label: chapterName }),
                React.createElement(Button_1.default, { label: verse }),
                React.createElement(Button_1.default, { icon: React.createElement(icons_react_1.IconSettings, { size: 14, stroke: 2, strokeLinejoin: "miter" }) })),
            " "),
        React.createElement("div", { className: "mt-2.5 font-normal space-y-2 mx-auto max-w-md" },
            React.createElement("h2", { className: "text-cyan-500 leading-5 text-center text-xl tracking-wide" }, `${chapterName} ${verse}`),
            React.createElement("article", { className: "dark:text-zinc-50 text-zinc-700 leading-5   text-xs tracking-wide text-center whitespace-pre-line" }, scripture))));
}
//# sourceMappingURL=ChapterReading.js.map