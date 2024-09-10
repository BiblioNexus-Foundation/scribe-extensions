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
exports.default = QuestionCard;
const icons_react_1 = require("@tabler/icons-react");
const React = __importStar(require("@theia/core/shared/react"));
// import IconWaveForm from "../../src/icons/wave-form.svg";
// import IconVolume from "../../src/icons/volume.svg";
const Badge_1 = require("../components/ui/Badge");
function QuestionCard({ isAudio, isImage, }) {
    return (React.createElement(React.Fragment, null, isAudio ? (React.createElement("div", { className: "rounded-3xl space-y-3  relative  dark:bg-zinc-900 bg-zinc-100 py-3 px-5 font-normal" },
        React.createElement(Badge_1.Badge, { variant: "rounded", className: "absolute  -top-2 -left-4 z-5" },
            React.createElement(icons_react_1.IconMessage, { size: 12, stroke: 1.5, strokeLinejoin: "miter" })),
        React.createElement("div", { className: "flex items-center text-zinc-400 dark:text-zinc-500 text-sm  font-normal justify-between" },
            React.createElement("span", { className: "h-8 w-8 flex items-center cursor-pointer rounded-full text-zinc-800 dark:text-black bg-cyan-400 dark:bg-cyan-500 justify-center" },
                React.createElement(icons_react_1.IconPlayerPlayFilled, { size: 18, stroke: 2, strokeLinejoin: "miter" })),
            React.createElement("span", { className: "leading-4 tracking-wide" }, "0:05")),
        React.createElement("p", { className: "text-[10px] leading-[14px] text-zinc-400 dark:text-zinc-50 tracking-wide" },
            "Varius tellus fermentum blandit purus ornare magna. Vel pulvinar non felis pellentesque sit. Convallis mi habitant id risus tellus at.",
            " "))) : isImage ? (React.createElement("div", { className: "rounded-3xl  relative gap-2.5 w-full  flex  dark:bg-zinc-900 bg-zinc-100 py-3 px-5 font-normal" },
        React.createElement(Badge_1.Badge, { variant: "rounded", className: "absolute  -top-2 -left-4 z-5" },
            React.createElement(icons_react_1.IconMessage, { size: 12, stroke: 1.5, strokeLinejoin: "miter" })),
        React.createElement("span", { className: "flex min-h-7 min-w-7   rounded-full" },
            React.createElement("img", { crossOrigin: "anonymous", src: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250", alt: "avatar", className: "h-7 w-7 rounded-full object-cover" }),
            " "),
        React.createElement("div", { className: "space-y-1 w-full  dark:text-zinc-500 text-zinc-400 text-[10px]  font-normal " },
            React.createElement("span", { className: "flex uppercase leading-3 font-medium w-full justify-between " },
                React.createElement("span", null, "Steve David"),
                React.createElement("span", { className: "ml-auto" }, "Mark 1:23")),
            React.createElement("div", { className: "question-image relative h-20  w-[20vw]]" },
                React.createElement("img", { src: "https://s3-alpha-sig.figma.com/img/7816/da5f/683281031f78c391503a0d387f6cc257?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B50fDu5LHtplgGEHgjVgTgHCQzqT-PJoBIT-HiGdovD8vSar9sJiizBE5a79rX-PIPS0Iok-w8tV9VVkB3G1FnFLr22Z8FH~VnPfAdBd7X3mqWRCUFOl8WwpjMA7ifBVtddH~GRaOg5wcFAbKYeftwxTCfSPpM3qCI5oatLykui~BvUdh~LHwCRec48V1T~tpDdaVOt2U4mVkKuh-H4pDRnoRSKRFIQdIcQUdjyNk1f7BAWyhBhAucUOHrlJcCiQyo91KeEIEKNLhvYS8h5qyGjopvFqQ~MM~FxQgRdM-sd1abjptQsATe7K~WFAK52H~t-PcEQKq1Be1jZDnYRHYQ__", alt: "org Image", className: "rounded-[10px] object-cover h-full w-full" })),
            React.createElement("p", { className: "font-normal tracking-wide leading-[14px] text-[10px] text-zinc-700 dark:text-zinc-50" }, "Example of picture")))) : (React.createElement("div", { className: "rounded-3xl  gap-2.5  w-full relative  flex  dark:bg-zinc-900 bg-zinc-100 py-3 px-5 font-normal" },
        React.createElement(Badge_1.Badge, { variant: "rounded", className: "absolute  -top-2 -left-4 z-5" },
            React.createElement(icons_react_1.IconMessage, { size: 12, stroke: 1.5, strokeLinejoin: "miter" })),
        React.createElement("span", { className: "flex min-h-7 min-w-7   rounded-full" },
            React.createElement("img", { crossOrigin: "anonymous", src: "https://s3-alpha-sig.figma.com/img/3c9c/ccbe/cfad2b1fe9b00018a8247cefd2d118d1?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KmqDdEGr5flM0JFYAMQKOFxA31lT633z7JDTmgum9wrfedjycPqqUPZL6ba7rIJxIC6sKCQPdRTVSwqw~Lje~wwzfATDkBMtti9c8mS37VgihuWTp~7N9YouRZa1FpofcSRHyMcfjgkpl4~r~b45W8CwYPplSvVqoJMHGY3KJLLc-wKJeCpYoo6CVjqbNZ2O8Y819Ciu-fJzo~gbYXdjUX886tdoH98kDrQ6c5WiT44Z7wvn7Wfg01Yk0fLka9WIwVr8flv9ZdDMSjUvByl1JpYuZXmgFdltHjelNcXFNFArwzbUTSqrqJWBHZIjxao0JDxGG5fJACLTEHBo~3PWMw__", alt: "avatar", className: "h-7 w-7 rounded-full object-cover" }),
            " "),
        React.createElement("div", { className: "space-y-1 w-full text-zinc-400 dark:text-zinc-500 text-[10px]  font-normal " },
            React.createElement("span", { className: "flex uppercase leading-3 font-medium w-full justify-between " },
                React.createElement("span", null, "Brian Ineza"),
                React.createElement("span", { className: "ml-auto" }, "Mark 1:23")),
            React.createElement("p", { className: "font-normal tracking-wide leading-[14px] text-[10px] text-zinc-700 dark:text-zinc-50" },
                "Varius tellus fermentum blandit purus ornare magna. Vel pulvinar non felis pellentesque sit. Convallis mi habitant id risus tellus at.",
                " "))))));
}
//# sourceMappingURL=QuestionCard.js.map