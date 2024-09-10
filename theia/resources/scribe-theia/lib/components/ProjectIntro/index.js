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
exports.default = ProjectIntroLayout;
const React = __importStar(require("@theia/core/shared/react"));
function ProjectIntroLayout({ question, children, }) {
    return (React.createElement("main", { className: "pt-14 w-[45%] mx-auto " },
        React.createElement("p", { className: "font-bold text-center text-5xl" },
            React.createElement("span", { className: "dark:text-zinc-50 text-zinc-700 " }, "Welcome to "),
            React.createElement("span", { className: "text-cyan-500" }, "Scribe 3.0")),
        React.createElement("p", { className: "text-cyan-300 text-center mt-5 tracking-wide text-xl leading-6 font-normal" }, "Scripture editing made simple"),
        React.createElement("div", { className: "space-y-8 flex flex-col w-full items-center justify-center" },
            React.createElement("p", { className: "font-normal mt-20 dark:text-zinc-50 text-zinc-600 tracking-wide text-sm text-center leading-4" }, question),
            React.createElement(React.Fragment, null, children))));
}
//# sourceMappingURL=index.js.map