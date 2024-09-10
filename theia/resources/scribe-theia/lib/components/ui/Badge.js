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
exports.badgeVariants = void 0;
exports.Badge = Badge;
const React = __importStar(require("react"));
const class_variance_authority_1 = require("class-variance-authority");
const clsx_1 = require("../../utils/clsx");
const badgeVariants = (0, class_variance_authority_1.cva)("inline-flex items-center justify-center   tracking-wider font-bold transition-colors focus:outline-none ", {
    variants: {
        variant: {
            default: "border-transparent border rounded-full px-2 py-[5px] uppercase text-[8px] dark:bg-cyan-500 bg-cyan-400 text-zinc-800 dark:text-zinc-950",
            secondary: "h-4 w-4 text-[8px]  rounded-full tracking-wider bg-cyan-400 text-zinc-800 dark:text-zinc-950",
            destructive: "dark:border-cyan-900 bg-cyan-100 dark:bg-cyan-950 border border-cyan-300 text-cyan-700 rounded-lg px-[6px] py-1 text-[10px]",
            outline: "text-foreground border",
            rounded: "h-[22px] w-[22px] dark:border-cyan-900 bg-cyan-100 dark:bg-cyan-950 border border-cyan-300 text-cyan-700 rounded-full",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
exports.badgeVariants = badgeVariants;
function Badge(_a) {
    var { className, variant } = _a, props = __rest(_a, ["className", "variant"]);
    return (React.createElement("div", Object.assign({ className: (0, clsx_1.cn)(badgeVariants({ variant }), className) }, props)));
}
//# sourceMappingURL=Badge.js.map