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
const React = __importStar(require("react"));
const react_1 = require("@vscode/webview-ui-toolkit/react");
const react_virtualized_1 = require("react-virtualized");
const react_2 = require("react");
const Popover = __importStar(require("@radix-ui/react-popover"));
const lucide_react_1 = require("lucide-react");
const TranslationWordsDropdown = ({ setTranslationWord, selectedTranslationWord, initialTranslationWords, searchTranslationWords, }) => {
    var _a, _b, _c;
    const [searchOpen, setSearchOpen] = (0, react_2.useState)(false);
    const [twCategory, setTwCategory] = (0, react_2.useState)("all");
    const [query, setQuery] = (0, react_2.useState)("");
    const [translationWords, setTranslationWords] = (0, react_2.useState)(initialTranslationWords);
    (0, react_2.useEffect)(() => {
        setTranslationWords(initialTranslationWords);
    }, [initialTranslationWords]);
    const textFieldRef = (0, react_2.useRef)(null);
    const [textFieldWidth, setTextFieldWidth] = (0, react_2.useState)((_b = (_a = textFieldRef.current) === null || _a === void 0 ? void 0 : _a.offsetWidth) !== null && _b !== void 0 ? _b : 300);
    (0, react_2.useEffect)(() => {
        if (textFieldRef.current) {
            window.addEventListener("resize", handleResize);
            handleResize(); // Initial calculation of the width of the text field
        }
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [(_c = textFieldRef.current) === null || _c === void 0 ? void 0 : _c.offsetWidth]);
    const onFocus = () => {
        handleResize(); // Initial calculation of the width of the text field
    };
    const handleResize = () => {
        var _a, _b;
        setTextFieldWidth((_b = (_a = textFieldRef === null || textFieldRef === void 0 ? void 0 : textFieldRef.current) === null || _a === void 0 ? void 0 : _a.offsetWidth) !== null && _b !== void 0 ? _b : 300);
    };
    (0, react_2.useEffect)(() => {
        searchTranslationWords(twCategory, query).then((tws) => {
            setTranslationWords(tws);
        });
    }, [query, searchTranslationWords, twCategory]);
    const handleCloseSearch = (open) => {
        setQuery("");
        searchTranslationWords(twCategory, "").then((tws) => {
            setTranslationWords(tws);
        });
        setSearchOpen(open);
        setTwCategory("all");
    };
    return (React.createElement(Popover.Root, { open: searchOpen, onOpenChange: handleCloseSearch },
        React.createElement("div", { className: "w-full" },
            React.createElement("label", { htmlFor: "target_language" }, "Translation Word"),
            React.createElement(Popover.Trigger, { asChild: true },
                React.createElement("div", { role: "combobox", "aria-expanded": searchOpen, className: "flex items-center justify-between rounded-sm transition-colors focus-visible:outline-none =focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background color-[--vscode-input-foreground] bg-[--vscode-input-background] border border-[--vscode-input-border] focus-visible:border-ring px-2 py-1 max-w-xl", 
                    // getting the right types requires installation of a library which is useless if that library is not being used
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    ref: textFieldRef, onFocus: onFocus },
                    React.createElement("span", null, selectedTranslationWord
                        ? `${selectedTranslationWord === null || selectedTranslationWord === void 0 ? void 0 : selectedTranslationWord.name}`
                        : "Select translation word"),
                    React.createElement(lucide_react_1.ChevronDown, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })))),
        React.createElement(Popover.Portal, null,
            React.createElement(Popover.Content, { asChild: true },
                React.createElement("div", { className: "bg-[--dropdown-background]" },
                    React.createElement("div", null,
                        React.createElement("div", { className: "flex justify-between items-center px-2 py-1" },
                            React.createElement("div", null, "Categories: "),
                            React.createElement("div", null,
                                React.createElement(react_1.VSCodeButton, { onClick: () => setTwCategory("all"), appearance: twCategory === "all" ? "primary" : "secondary" }, "All"),
                                React.createElement(react_1.VSCodeButton, { onClick: () => setTwCategory("kt"), appearance: twCategory === "kt" ? "primary" : "secondary" }, "KT"),
                                React.createElement(react_1.VSCodeButton, { onClick: () => setTwCategory("names"), appearance: twCategory === "names" ? "primary" : "secondary" }, "Names"),
                                React.createElement(react_1.VSCodeButton, { onClick: () => setTwCategory("other"), appearance: twCategory === "other" ? "primary" : "secondary" }, "Other")))),
                    React.createElement("div", { className: "w-full" },
                        React.createElement(react_1.VSCodeTextField, { placeholder: `Search translation word ...`, value: query, onInput: (e) => setQuery(e.target.value), className: "rounded text-sm w-full" })),
                    React.createElement(react_virtualized_1.List, { className: "rounded-md bg-[--panel-view-background] outline-0", width: textFieldWidth, height: 300, rowCount: translationWords.length, rowHeight: 30, rowRenderer: ({ index, key, style }) => {
                            const translationWord = translationWords[index];
                            return (React.createElement(Popover.Close, { asChild: true },
                                React.createElement("div", { className: "cursor-pointer pl-2", key: key, style: style, onClick: (e) => {
                                        e.stopPropagation();
                                        setTranslationWord(translationWord);
                                    } }, translationWord === null || translationWord === void 0 ? void 0 : translationWord.name)));
                        } }))))));
};
exports.default = TranslationWordsDropdown;
//# sourceMappingURL=TranslationWordsDropdown.js.map