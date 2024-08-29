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
exports.default = Navbar;
const React = __importStar(require("@theia/core/shared/react"));
// import WhiteLogo from "../../src/icons/white-logo.svg";
// import BlackLogo from "../../src/icons/black-logo.svg";
const Button_1 = __importDefault(require("./Button"));
const icons_react_1 = require("@tabler/icons-react");
const Badge_1 = require("./ui/Badge");
function Navbar({ isCustom }) {
    const [colorMode, setColorMode] = React.useState("light");
    return (React.createElement("nav", { className: "Nav fixed top-0 z-30  flex h-[3.75rem] dark:border-zinc-900 border-zinc-200  px-5 border-b w-full items-center justify-between" },
        React.createElement("div", { className: "flex items-center gap-x-2.5" },
            React.createElement(Button_1.default, { label: "Import", icon: React.createElement(icons_react_1.IconUpload, { size: 14, stroke: 2, strokeLinejoin: "miter" }) }),
            isCustom && (React.createElement(React.Fragment, null,
                React.createElement(Button_1.default, { label: "Save", icon: React.createElement(icons_react_1.IconCloudUpload, { size: 14, stroke: 2, strokeLinejoin: "miter" }) }),
                React.createElement(Button_1.default, { label: "Layout", icon: React.createElement(icons_react_1.IconLayout, { size: 14, stroke: 2, strokeLinejoin: "miter" }) }),
                React.createElement(Button_1.default, { label: "Font Size", icon: React.createElement(icons_react_1.IconLetterCase, { size: 14, stroke: 2, strokeLinejoin: "miter" }) }),
                React.createElement(Button_1.default, { className: "dark:bg-cyan-500 bg-cyan-400 hover:bg-cyan-500 dark:hover:bg-cyan-400 text-zinc-800 dark:text-black  dark:border-cyan-700", icon: React.createElement(icons_react_1.IconLock, { size: 14, stroke: 2, strokeLinejoin: "miter" }) }))),
            React.createElement(Button_1.default, { label: "Sync", icon: React.createElement(icons_react_1.IconArrowsDownUp, { size: 14, stroke: 2, strokeLinejoin: "miter" }) }),
            isCustom && (React.createElement("div", { className: "relative" },
                React.createElement(Button_1.default, { icon: React.createElement(icons_react_1.IconBell, { size: 14, stroke: 2, strokeLinejoin: "miter" }) }),
                React.createElement(Badge_1.Badge, { variant: "secondary", className: "absolute -top-1 -right-1 " }, "4"))),
            React.createElement(Button_1.default, { icon: React.createElement(icons_react_1.IconExclamationCircle, { size: 14, stroke: 2, strokeLinejoin: "miter" }) }),
            React.createElement("p", { className: "font-normal dark:text-zinc-50 text-zinc-700  tracking-wide text-sm" },
                "Hey,",
                " "),
            React.createElement("span", { className: "flex min-h-7 min-w-7 items-center justify-center rounded-full" },
                React.createElement("picture", null,
                    React.createElement("img", { crossOrigin: "anonymous", src: "/images/avatar.png", alt: "avatar", className: "h-7 w-7 rounded-full object-cover" }),
                    " ")),
            React.createElement("p", { className: "font-semibold dark:text-zinc-50 text-zinc-700 tracking-wide text-sm" }, "John"),
            React.createElement(Button_1.default, { onClick: () => setColorMode(colorMode === "light" ? "dark" : "light"), icon: colorMode == "dark" ? (React.createElement(icons_react_1.IconSun, { size: 14, stroke: 2, strokeLinejoin: "miter" })) : (React.createElement(icons_react_1.IconMoon, { size: 14, stroke: 1.5, strokeLinejoin: "miter" })) }))));
}
//# sourceMappingURL=Navbar.js.map