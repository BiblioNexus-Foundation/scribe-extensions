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
exports.buttonVariants = exports.Buttons = void 0;
const React = __importStar(require("react"));
const react_slot_1 = require("@radix-ui/react-slot");
const class_variance_authority_1 = require("class-variance-authority");
const clsx_1 = require("../../utils/clsx");
const buttonVariants = (0, class_variance_authority_1.cva)("inline-flex items-center rounded-lg dark:text-zinc-50 text-zinc-700  text-xs justify-center whitespace-nowrap rounded-md font-normal transition-colors focus:outline-none gap-[5px]   disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-primary  hover:bg-primary/90",
            destructive: "bg-destructive hover:bg-destructive/90",
            outline: "border dark:border-zinc-800  border-zinc-200 hover:bg-zinc-100 bg-zinc-50 dark:bg-zinc-900",
            secondary: "bg-secondary hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "underline-offset-4 hover:underline",
        },
        size: {
            default: "h-8 px-2 py-2.5",
            sm: "h-7 rounded-md px-3",
            lg: "h-9 rounded-md px-8",
            icon: "px-[5px] py-1",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});
exports.buttonVariants = buttonVariants;
const Buttons = React.forwardRef((_a, ref) => {
    var { className, variant, size, asChild = false } = _a, props = __rest(_a, ["className", "variant", "size", "asChild"]);
    const Comp = asChild ? react_slot_1.Slot : "button";
    return (React.createElement(Comp, Object.assign({ className: (0, clsx_1.cn)(buttonVariants({ variant, size, className })), ref: ref }, props)));
});
exports.Buttons = Buttons;
Buttons.displayName = "Buttons";
//# sourceMappingURL=Button.js.map