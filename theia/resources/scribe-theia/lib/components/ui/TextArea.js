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
exports.Textarea = void 0;
const React = __importStar(require("react"));
const clsx_1 = require("../../utils/clsx");
const Textarea = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement("textarea", Object.assign({ className: (0, clsx_1.cn)("flex min-h-[80px] w-full rounded-[20px] border dark:border-zinc-900 border-zinc-200 bg-zinc-50 dark:text-zinc-50 text-zinc-700 dark:bg-zinc-900 px-4 py-3 text-xs ring-offset-background dark:placeholder:text-zinc-50 placeholder:text-zinc-600 focus-visible:outline-none focus:border-cyan-500 focus-visible:ring focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className), ref: ref }, props)));
});
exports.Textarea = Textarea;
Textarea.displayName = "Textarea";
//# sourceMappingURL=TextArea.js.map