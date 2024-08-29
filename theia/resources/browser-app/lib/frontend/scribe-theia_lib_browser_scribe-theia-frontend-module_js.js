(self["webpackChunkbrowser_app"] = self["webpackChunkbrowser_app"] || []).push([["scribe-theia_lib_browser_scribe-theia-frontend-module_js"],{

/***/ "../node_modules/css-loader/dist/cjs.js!../scribe-theia/lib/browser/output-tailwind.css":
/*!**********************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../scribe-theia/lib/browser/output-tailwind.css ***!
  \**********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
! tailwindcss v3.4.4 | MIT License | https://tailwindcss.com
*/

/*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box;
  /* 1 */
  border-width: 0;
  /* 2 */
  border-style: solid;
  /* 2 */
  border-color: #e5e7eb;
  /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5;
  /* 1 */
  -webkit-text-size-adjust: 100%;
  /* 2 */
  -moz-tab-size: 4;
  /* 3 */
  -o-tab-size: 4;
     tab-size: 4;
  /* 3 */
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  /* 4 */
  font-feature-settings: normal;
  /* 5 */
  font-variation-settings: normal;
  /* 6 */
  -webkit-tap-highlight-color: transparent;
  /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0;
  /* 1 */
  line-height: inherit;
  /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0;
  /* 1 */
  color: inherit;
  /* 2 */
  border-top-width: 1px;
  /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  /* 1 */
  font-feature-settings: normal;
  /* 2 */
  font-variation-settings: normal;
  /* 3 */
  font-size: 1em;
  /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0;
  /* 1 */
  border-color: inherit;
  /* 2 */
  border-collapse: collapse;
  /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  /* 1 */
  font-feature-settings: inherit;
  /* 1 */
  font-variation-settings: inherit;
  /* 1 */
  font-size: 100%;
  /* 1 */
  font-weight: inherit;
  /* 1 */
  line-height: inherit;
  /* 1 */
  letter-spacing: inherit;
  /* 1 */
  color: inherit;
  /* 1 */
  margin: 0;
  /* 2 */
  padding: 0;
  /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button;
  /* 1 */
  background-color: transparent;
  /* 2 */
  background-image: none;
  /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield;
  /* 1 */
  outline-offset: -2px;
  /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button;
  /* 1 */
  font: inherit;
  /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/

dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1;
  /* 1 */
  color: #9ca3af;
  /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1;
  /* 1 */
  color: #9ca3af;
  /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/

:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  /* 1 */
  vertical-align: middle;
  /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */

[hidden] {
  display: none;
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

.container {
  width: 100%;
}

@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}

@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}

@media (min-width: 1536px) {
  .container {
    max-width: 1536px;
  }
}

.pointer-events-none {
  pointer-events: none;
}

.collapse {
  visibility: collapse;
}

.static {
  position: static;
}

.fixed {
  position: fixed;
}

.absolute {
  position: absolute;
}

.relative {
  position: relative;
}

.sticky {
  position: sticky;
}

.inset-y-0 {
  top: 0px;
  bottom: 0px;
}

.-left-4 {
  left: -1rem;
}

.-right-1 {
  right: -0.25rem;
}

.-top-1 {
  top: -0.25rem;
}

.-top-2 {
  top: -0.5rem;
}

.bottom-0 {
  bottom: 0px;
}

.bottom-2 {
  bottom: 0.5rem;
}

.bottom-2\\.5 {
  bottom: 0.625rem;
}

.left-0 {
  left: 0px;
}

.left-\\[38\\%\\] {
  left: 38%;
}

.right-2 {
  right: 0.5rem;
}

.right-2\\.5 {
  right: 0.625rem;
}

.top-0 {
  top: 0px;
}

.z-10 {
  z-index: 10;
}

.z-20 {
  z-index: 20;
}

.z-30 {
  z-index: 30;
}

.mx-4 {
  margin-left: 1rem;
  margin-right: 1rem;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.ml-\\[14px\\] {
  margin-left: 14px;
}

.ml-auto {
  margin-left: auto;
}

.mr-auto {
  margin-right: auto;
}

.mt-2 {
  margin-top: 0.5rem;
}

.mt-2\\.5 {
  margin-top: 0.625rem;
}

.mt-20 {
  margin-top: 5rem;
}

.mt-5 {
  margin-top: 1.25rem;
}

.flex {
  display: flex;
}

.inline-flex {
  display: inline-flex;
}

.table {
  display: table;
}

.contents {
  display: contents;
}

.hidden {
  display: none;
}

.h-10 {
  height: 2.5rem;
}

.h-12 {
  height: 3rem;
}

.h-2 {
  height: 0.5rem;
}

.h-2\\.5 {
  height: 0.625rem;
}

.h-20 {
  height: 5rem;
}

.h-4 {
  height: 1rem;
}

.h-40 {
  height: 10rem;
}

.h-6 {
  height: 1.5rem;
}

.h-7 {
  height: 1.75rem;
}

.h-8 {
  height: 2rem;
}

.h-9 {
  height: 2.25rem;
}

.h-\\[22px\\] {
  height: 22px;
}

.h-\\[3\\.75rem\\] {
  height: 3.75rem;
}

.h-full {
  height: 100%;
}

.min-h-7 {
  min-height: 1.75rem;
}

.min-h-\\[80px\\] {
  min-height: 80px;
}

.w-1\\/2 {
  width: 50%;
}

.w-1\\/3 {
  width: 33.333333%;
}

.w-12 {
  width: 3rem;
}

.w-2 {
  width: 0.5rem;
}

.w-2\\.5 {
  width: 0.625rem;
}

.w-20 {
  width: 5rem;
}

.w-4 {
  width: 1rem;
}

.w-6 {
  width: 1.5rem;
}

.w-7 {
  width: 1.75rem;
}

.w-8 {
  width: 2rem;
}

.w-\\[20vw\\] {
  width: 20vw;
}

.w-\\[22px\\] {
  width: 22px;
}

.w-\\[45\\%\\] {
  width: 45%;
}

.w-full {
  width: 100%;
}

.w-px {
  width: 1px;
}

.min-w-2 {
  min-width: 0.5rem;
}

.min-w-28 {
  min-width: 7rem;
}

.min-w-7 {
  min-width: 1.75rem;
}

.max-w-md {
  max-width: 28rem;
}

.flex-1 {
  flex: 1 1 0%;
}

.table-auto {
  table-layout: auto;
}

.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.cursor-pointer {
  cursor: pointer;
}

.touch-none {
  touch-action: none;
}

.select-none {
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}

.flex-col {
  flex-direction: column;
}

.items-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.justify-between {
  justify-content: space-between;
}

.gap-2 {
  gap: 0.5rem;
}

.gap-2\\.5 {
  gap: 0.625rem;
}

.gap-3 {
  gap: 0.75rem;
}

.gap-5 {
  gap: 1.25rem;
}

.gap-\\[5px\\] {
  gap: 5px;
}

.gap-x-2 {
  -moz-column-gap: 0.5rem;
       column-gap: 0.5rem;
}

.gap-x-2\\.5 {
  -moz-column-gap: 0.625rem;
       column-gap: 0.625rem;
}

.space-y-1 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));
}

.space-y-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
}

.space-y-2\\.5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.625rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.625rem * var(--tw-space-y-reverse));
}

.space-y-3 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.75rem * var(--tw-space-y-reverse));
}

.space-y-5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1.25rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1.25rem * var(--tw-space-y-reverse));
}

.space-y-8 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(2rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(2rem * var(--tw-space-y-reverse));
}

.overflow-hidden {
  overflow: hidden;
}

.overflow-y-auto {
  overflow-y: auto;
}

.whitespace-nowrap {
  white-space: nowrap;
}

.whitespace-pre-line {
  white-space: pre-line;
}

.rounded {
  border-radius: 0.25rem;
}

.rounded-3xl {
  border-radius: 1.5rem;
}

.rounded-\\[10px\\] {
  border-radius: 10px;
}

.rounded-\\[20px\\] {
  border-radius: 20px;
}

.rounded-\\[inherit\\] {
  border-radius: inherit;
}

.rounded-full {
  border-radius: 9999px;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.rounded-md {
  border-radius: 0.375rem;
}

.border {
  border-width: 1px;
}

.border-b {
  border-bottom-width: 1px;
}

.border-l {
  border-left-width: 1px;
}

.border-t {
  border-top-width: 1px;
}

.border-cyan-300 {
  --tw-border-opacity: 1;
  border-color: rgb(103 232 249 / var(--tw-border-opacity));
}

.border-transparent {
  border-color: transparent;
}

.border-zinc-100 {
  --tw-border-opacity: 1;
  border-color: rgb(244 244 245 / var(--tw-border-opacity));
}

.border-zinc-200 {
  --tw-border-opacity: 1;
  border-color: rgb(228 228 231 / var(--tw-border-opacity));
}

.border-zinc-300 {
  --tw-border-opacity: 1;
  border-color: rgb(212 212 216 / var(--tw-border-opacity));
}

.border-l-transparent {
  border-left-color: transparent;
}

.border-t-transparent {
  border-top-color: transparent;
}

.bg-cyan-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(207 250 254 / var(--tw-bg-opacity));
}

.bg-cyan-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(34 211 238 / var(--tw-bg-opacity));
}

.bg-emerald-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(209 250 229 / var(--tw-bg-opacity));
}

.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}

.bg-zinc-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(244 244 245 / var(--tw-bg-opacity));
}

.bg-zinc-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(228 228 231 / var(--tw-bg-opacity));
}

.bg-zinc-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(250 250 250 / var(--tw-bg-opacity));
}

.fill-zinc-500 {
  fill: #71717a;
}

.stroke-zinc-500 {
  stroke: #71717a;
}

.object-contain {
  -o-object-fit: contain;
     object-fit: contain;
}

.object-cover {
  -o-object-fit: cover;
     object-fit: cover;
}

.p-5 {
  padding: 1.25rem;
}

.p-\\[1px\\] {
  padding: 1px;
}

.p-\\[5px\\] {
  padding: 5px;
}

.px-1 {
  padding-left: 0.25rem;
  padding-right: 0.25rem;
}

.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.px-5 {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}

.px-8 {
  padding-left: 2rem;
  padding-right: 2rem;
}

.px-\\[5px\\] {
  padding-left: 5px;
  padding-right: 5px;
}

.px-\\[6px\\] {
  padding-left: 6px;
  padding-right: 6px;
}

.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.py-2\\.5 {
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
}

.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

.py-\\[5px\\] {
  padding-top: 5px;
  padding-bottom: 5px;
}

.py-\\[6px\\] {
  padding-top: 6px;
  padding-bottom: 6px;
}

.pb-2 {
  padding-bottom: 0.5rem;
}

.pb-\\[11px\\] {
  padding-bottom: 11px;
}

.pt-14 {
  padding-top: 3.5rem;
}

.pt-4 {
  padding-top: 1rem;
}

.text-center {
  text-align: center;
}

.text-5xl {
  font-size: 3rem;
  line-height: 1;
}

.text-\\[10px\\] {
  font-size: 10px;
}

.text-\\[8px\\] {
  font-size: 8px;
}

.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}

.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}

.font-bold {
  font-weight: 700;
}

.font-medium {
  font-weight: 500;
}

.font-normal {
  font-weight: 400;
}

.font-semibold {
  font-weight: 600;
}

.uppercase {
  text-transform: uppercase;
}

.italic {
  font-style: italic;
}

.leading-3 {
  line-height: .75rem;
}

.leading-4 {
  line-height: 1rem;
}

.leading-5 {
  line-height: 1.25rem;
}

.leading-6 {
  line-height: 1.5rem;
}

.leading-\\[14px\\] {
  line-height: 14px;
}

.leading-\\[18px\\] {
  line-height: 18px;
}

.tracking-wide {
  letter-spacing: 0.025em;
}

.tracking-wider {
  letter-spacing: 0.05em;
}

.text-cyan-300 {
  --tw-text-opacity: 1;
  color: rgb(103 232 249 / var(--tw-text-opacity));
}

.text-cyan-500 {
  --tw-text-opacity: 1;
  color: rgb(6 182 212 / var(--tw-text-opacity));
}

.text-cyan-700 {
  --tw-text-opacity: 1;
  color: rgb(14 116 144 / var(--tw-text-opacity));
}

.text-zinc-300 {
  --tw-text-opacity: 1;
  color: rgb(212 212 216 / var(--tw-text-opacity));
}

.text-zinc-400 {
  --tw-text-opacity: 1;
  color: rgb(161 161 170 / var(--tw-text-opacity));
}

.text-zinc-600 {
  --tw-text-opacity: 1;
  color: rgb(82 82 91 / var(--tw-text-opacity));
}

.text-zinc-700 {
  --tw-text-opacity: 1;
  color: rgb(63 63 70 / var(--tw-text-opacity));
}

.text-zinc-800 {
  --tw-text-opacity: 1;
  color: rgb(39 39 42 / var(--tw-text-opacity));
}

.underline {
  text-decoration-line: underline;
}

.underline-offset-4 {
  text-underline-offset: 4px;
}

.outline {
  outline-style: solid;
}

.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-colors {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.duration-200 {
  transition-duration: 200ms;
}

:root {
  --foreground-rgb: 0, 0, 0;
  --background-start-rgb: 214, 219, 220;
  --background-end-rgb: 255, 255, 255;
}

@media (prefers-color-scheme: dark) {
  :root {
    --foreground-rgb: 255, 255, 255;
    --background-start-rgb: 0, 0, 0;
    --background-end-rgb: 0, 0, 0;
  }
}

body {
  color: rgb(var(--foreground-rgb));
  background: linear-gradient(
      to bottom,
      transparent,
      rgb(var(--background-end-rgb))
    )
    rgb(var(--background-start-rgb));
}

.selection\\:bg-emerald-100 *::-moz-selection {
  --tw-bg-opacity: 1;
  background-color: rgb(209 250 229 / var(--tw-bg-opacity));
}

.selection\\:bg-emerald-100 *::selection {
  --tw-bg-opacity: 1;
  background-color: rgb(209 250 229 / var(--tw-bg-opacity));
}

.selection\\:bg-emerald-100::-moz-selection {
  --tw-bg-opacity: 1;
  background-color: rgb(209 250 229 / var(--tw-bg-opacity));
}

.selection\\:bg-emerald-100::selection {
  --tw-bg-opacity: 1;
  background-color: rgb(209 250 229 / var(--tw-bg-opacity));
}

.placeholder\\:text-zinc-600::-moz-placeholder {
  --tw-text-opacity: 1;
  color: rgb(82 82 91 / var(--tw-text-opacity));
}

.placeholder\\:text-zinc-600::placeholder {
  --tw-text-opacity: 1;
  color: rgb(82 82 91 / var(--tw-text-opacity));
}

.after\\:absolute::after {
  content: var(--tw-content);
  position: absolute;
}

.after\\:inset-y-0::after {
  content: var(--tw-content);
  top: 0px;
  bottom: 0px;
}

.after\\:left-1\\/2::after {
  content: var(--tw-content);
  left: 50%;
}

.after\\:w-1::after {
  content: var(--tw-content);
  width: 0.25rem;
}

.after\\:-translate-x-1\\/2::after {
  content: var(--tw-content);
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.hover\\:border-cyan-500:hover {
  --tw-border-opacity: 1;
  border-color: rgb(6 182 212 / var(--tw-border-opacity));
}

.hover\\:bg-cyan-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(165 243 252 / var(--tw-bg-opacity));
}

.hover\\:bg-cyan-500:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(6 182 212 / var(--tw-bg-opacity));
}

.hover\\:bg-zinc-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(244 244 245 / var(--tw-bg-opacity));
}

.hover\\:text-cyan-500:hover {
  --tw-text-opacity: 1;
  color: rgb(6 182 212 / var(--tw-text-opacity));
}

.hover\\:underline:hover {
  text-decoration-line: underline;
}

.focus\\:border-cyan-500:focus {
  --tw-border-opacity: 1;
  border-color: rgb(6 182 212 / var(--tw-border-opacity));
}

.focus\\:border-transparent:focus {
  border-color: transparent;
}

.focus\\:outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.focus\\:ring-\\[\\.5px\\]:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(.5px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus\\:ring-zinc-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(161 161 170 / var(--tw-ring-opacity));
}

.focus-visible\\:outline-none:focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.focus-visible\\:ring:focus-visible {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus-visible\\:ring-1:focus-visible {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus-visible\\:ring-offset-1:focus-visible {
  --tw-ring-offset-width: 1px;
}

.disabled\\:pointer-events-none:disabled {
  pointer-events: none;
}

.disabled\\:cursor-not-allowed:disabled {
  cursor: not-allowed;
}

.disabled\\:opacity-50:disabled {
  opacity: 0.5;
}

.group:hover .group-hover\\:stroke-cyan-500 {
  stroke: #06b6d4;
}

.data-\\[panel-group-direction\\=vertical\\]\\:h-px[data-panel-group-direction=vertical] {
  height: 1px;
}

.data-\\[panel-group-direction\\=vertical\\]\\:w-full[data-panel-group-direction=vertical] {
  width: 100%;
}

.data-\\[panel-group-direction\\=vertical\\]\\:flex-col[data-panel-group-direction=vertical] {
  flex-direction: column;
}

.data-\\[panel-group-direction\\=vertical\\]\\:after\\:left-0[data-panel-group-direction=vertical]::after {
  content: var(--tw-content);
  left: 0px;
}

.data-\\[panel-group-direction\\=vertical\\]\\:after\\:h-1[data-panel-group-direction=vertical]::after {
  content: var(--tw-content);
  height: 0.25rem;
}

.data-\\[panel-group-direction\\=vertical\\]\\:after\\:w-full[data-panel-group-direction=vertical]::after {
  content: var(--tw-content);
  width: 100%;
}

.data-\\[panel-group-direction\\=vertical\\]\\:after\\:-translate-y-1\\/2[data-panel-group-direction=vertical]::after {
  content: var(--tw-content);
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\\[panel-group-direction\\=vertical\\]\\:after\\:translate-x-0[data-panel-group-direction=vertical]::after {
  content: var(--tw-content);
  --tw-translate-x: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.dark\\:border-cyan-700:is(.dark *) {
  --tw-border-opacity: 1;
  border-color: rgb(14 116 144 / var(--tw-border-opacity));
}

.dark\\:border-cyan-900:is(.dark *) {
  --tw-border-opacity: 1;
  border-color: rgb(22 78 99 / var(--tw-border-opacity));
}

.dark\\:border-zinc-800:is(.dark *) {
  --tw-border-opacity: 1;
  border-color: rgb(39 39 42 / var(--tw-border-opacity));
}

.dark\\:border-zinc-900:is(.dark *) {
  --tw-border-opacity: 1;
  border-color: rgb(24 24 27 / var(--tw-border-opacity));
}

.dark\\:bg-cyan-500:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(6 182 212 / var(--tw-bg-opacity));
}

.dark\\:bg-cyan-950:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(8 51 68 / var(--tw-bg-opacity));
}

.dark\\:bg-emerald-500:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(16 185 129 / var(--tw-bg-opacity));
}

.dark\\:bg-zinc-800:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(39 39 42 / var(--tw-bg-opacity));
}

.dark\\:bg-zinc-900:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(24 24 27 / var(--tw-bg-opacity));
}

.dark\\:bg-zinc-950:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(9 9 11 / var(--tw-bg-opacity));
}

.dark\\:stroke-zinc-50:is(.dark *) {
  stroke: #fafafa;
}

.dark\\:text-black:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
}

.dark\\:text-zinc-50:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(250 250 250 / var(--tw-text-opacity));
}

.dark\\:text-zinc-500:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(113 113 122 / var(--tw-text-opacity));
}

.dark\\:text-zinc-700:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(63 63 70 / var(--tw-text-opacity));
}

.dark\\:text-zinc-950:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(9 9 11 / var(--tw-text-opacity));
}

.dark\\:selection\\:bg-emerald-500 *:is(.dark *)::-moz-selection {
  --tw-bg-opacity: 1;
  background-color: rgb(16 185 129 / var(--tw-bg-opacity));
}

.dark\\:selection\\:bg-emerald-500 *:is(.dark *)::selection {
  --tw-bg-opacity: 1;
  background-color: rgb(16 185 129 / var(--tw-bg-opacity));
}

.dark\\:selection\\:bg-emerald-500:is(.dark *)::-moz-selection {
  --tw-bg-opacity: 1;
  background-color: rgb(16 185 129 / var(--tw-bg-opacity));
}

.dark\\:selection\\:bg-emerald-500:is(.dark *)::selection {
  --tw-bg-opacity: 1;
  background-color: rgb(16 185 129 / var(--tw-bg-opacity));
}

.dark\\:placeholder\\:text-zinc-50:is(.dark *)::-moz-placeholder {
  --tw-text-opacity: 1;
  color: rgb(250 250 250 / var(--tw-text-opacity));
}

.dark\\:placeholder\\:text-zinc-50:is(.dark *)::placeholder {
  --tw-text-opacity: 1;
  color: rgb(250 250 250 / var(--tw-text-opacity));
}

.dark\\:hover\\:bg-cyan-400:hover:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(34 211 238 / var(--tw-bg-opacity));
}

.dark\\:focus\\:ring-zinc-700:focus:is(.dark *) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(63 63 70 / var(--tw-ring-opacity));
}

.\\[\\&\\[data-panel-group-direction\\=vertical\\]\\>div\\]\\:rotate-90[data-panel-group-direction=vertical]>div {
  --tw-rotate: 90deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
`, "",{"version":3,"sources":["webpack://./../scribe-theia/lib/browser/output-tailwind.css"],"names":[],"mappings":"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","sourcesContent":["/*\n! tailwindcss v3.4.4 | MIT License | https://tailwindcss.com\n*/\n\n/*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n  /* 1 */\n  border-width: 0;\n  /* 2 */\n  border-style: solid;\n  /* 2 */\n  border-color: #e5e7eb;\n  /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n6. Use the user's configured `sans` font-variation-settings by default.\n7. Disable tap highlights on iOS\n*/\n\nhtml,\n:host {\n  line-height: 1.5;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n  -moz-tab-size: 4;\n  /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4;\n  /* 3 */\n  font-family: ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  /* 4 */\n  font-feature-settings: normal;\n  /* 5 */\n  font-variation-settings: normal;\n  /* 6 */\n  -webkit-tap-highlight-color: transparent;\n  /* 7 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0;\n  /* 1 */\n  line-height: inherit;\n  /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  border-top-width: 1px;\n  /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font-family by default.\n2. Use the user's configured `mono` font-feature-settings by default.\n3. Use the user's configured `mono` font-variation-settings by default.\n4. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n  /* 1 */\n  font-feature-settings: normal;\n  /* 2 */\n  font-variation-settings: normal;\n  /* 3 */\n  font-size: 1em;\n  /* 4 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0;\n  /* 1 */\n  border-color: inherit;\n  /* 2 */\n  border-collapse: collapse;\n  /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-feature-settings: inherit;\n  /* 1 */\n  font-variation-settings: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  font-weight: inherit;\n  /* 1 */\n  line-height: inherit;\n  /* 1 */\n  letter-spacing: inherit;\n  /* 1 */\n  color: inherit;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n  padding: 0;\n  /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\ninput:where([type='button']),\ninput:where([type='reset']),\ninput:where([type='submit']) {\n  -webkit-appearance: button;\n  /* 1 */\n  background-color: transparent;\n  /* 2 */\n  background-image: none;\n  /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nReset default styling for dialogs.\n*/\n\ndialog {\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  /* 1 */\n  color: #9ca3af;\n  /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  /* 1 */\n  color: #9ca3af;\n  /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block;\n  /* 1 */\n  vertical-align: middle;\n  /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}\n\n.container {\n  width: 100%;\n}\n\n@media (min-width: 640px) {\n  .container {\n    max-width: 640px;\n  }\n}\n\n@media (min-width: 768px) {\n  .container {\n    max-width: 768px;\n  }\n}\n\n@media (min-width: 1024px) {\n  .container {\n    max-width: 1024px;\n  }\n}\n\n@media (min-width: 1280px) {\n  .container {\n    max-width: 1280px;\n  }\n}\n\n@media (min-width: 1536px) {\n  .container {\n    max-width: 1536px;\n  }\n}\n\n.pointer-events-none {\n  pointer-events: none;\n}\n\n.collapse {\n  visibility: collapse;\n}\n\n.static {\n  position: static;\n}\n\n.fixed {\n  position: fixed;\n}\n\n.absolute {\n  position: absolute;\n}\n\n.relative {\n  position: relative;\n}\n\n.sticky {\n  position: sticky;\n}\n\n.inset-y-0 {\n  top: 0px;\n  bottom: 0px;\n}\n\n.-left-4 {\n  left: -1rem;\n}\n\n.-right-1 {\n  right: -0.25rem;\n}\n\n.-top-1 {\n  top: -0.25rem;\n}\n\n.-top-2 {\n  top: -0.5rem;\n}\n\n.bottom-0 {\n  bottom: 0px;\n}\n\n.bottom-2 {\n  bottom: 0.5rem;\n}\n\n.bottom-2\\.5 {\n  bottom: 0.625rem;\n}\n\n.left-0 {\n  left: 0px;\n}\n\n.left-\\[38\\%\\] {\n  left: 38%;\n}\n\n.right-2 {\n  right: 0.5rem;\n}\n\n.right-2\\.5 {\n  right: 0.625rem;\n}\n\n.top-0 {\n  top: 0px;\n}\n\n.z-10 {\n  z-index: 10;\n}\n\n.z-20 {\n  z-index: 20;\n}\n\n.z-30 {\n  z-index: 30;\n}\n\n.mx-4 {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\n\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.ml-\\[14px\\] {\n  margin-left: 14px;\n}\n\n.ml-auto {\n  margin-left: auto;\n}\n\n.mr-auto {\n  margin-right: auto;\n}\n\n.mt-2 {\n  margin-top: 0.5rem;\n}\n\n.mt-2\\.5 {\n  margin-top: 0.625rem;\n}\n\n.mt-20 {\n  margin-top: 5rem;\n}\n\n.mt-5 {\n  margin-top: 1.25rem;\n}\n\n.flex {\n  display: flex;\n}\n\n.inline-flex {\n  display: inline-flex;\n}\n\n.table {\n  display: table;\n}\n\n.contents {\n  display: contents;\n}\n\n.hidden {\n  display: none;\n}\n\n.h-10 {\n  height: 2.5rem;\n}\n\n.h-12 {\n  height: 3rem;\n}\n\n.h-2 {\n  height: 0.5rem;\n}\n\n.h-2\\.5 {\n  height: 0.625rem;\n}\n\n.h-20 {\n  height: 5rem;\n}\n\n.h-4 {\n  height: 1rem;\n}\n\n.h-40 {\n  height: 10rem;\n}\n\n.h-6 {\n  height: 1.5rem;\n}\n\n.h-7 {\n  height: 1.75rem;\n}\n\n.h-8 {\n  height: 2rem;\n}\n\n.h-9 {\n  height: 2.25rem;\n}\n\n.h-\\[22px\\] {\n  height: 22px;\n}\n\n.h-\\[3\\.75rem\\] {\n  height: 3.75rem;\n}\n\n.h-full {\n  height: 100%;\n}\n\n.min-h-7 {\n  min-height: 1.75rem;\n}\n\n.min-h-\\[80px\\] {\n  min-height: 80px;\n}\n\n.w-1\\/2 {\n  width: 50%;\n}\n\n.w-1\\/3 {\n  width: 33.333333%;\n}\n\n.w-12 {\n  width: 3rem;\n}\n\n.w-2 {\n  width: 0.5rem;\n}\n\n.w-2\\.5 {\n  width: 0.625rem;\n}\n\n.w-20 {\n  width: 5rem;\n}\n\n.w-4 {\n  width: 1rem;\n}\n\n.w-6 {\n  width: 1.5rem;\n}\n\n.w-7 {\n  width: 1.75rem;\n}\n\n.w-8 {\n  width: 2rem;\n}\n\n.w-\\[20vw\\] {\n  width: 20vw;\n}\n\n.w-\\[22px\\] {\n  width: 22px;\n}\n\n.w-\\[45\\%\\] {\n  width: 45%;\n}\n\n.w-full {\n  width: 100%;\n}\n\n.w-px {\n  width: 1px;\n}\n\n.min-w-2 {\n  min-width: 0.5rem;\n}\n\n.min-w-28 {\n  min-width: 7rem;\n}\n\n.min-w-7 {\n  min-width: 1.75rem;\n}\n\n.max-w-md {\n  max-width: 28rem;\n}\n\n.flex-1 {\n  flex: 1 1 0%;\n}\n\n.table-auto {\n  table-layout: auto;\n}\n\n.transform {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n\n.touch-none {\n  touch-action: none;\n}\n\n.select-none {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n\n.flex-col {\n  flex-direction: column;\n}\n\n.items-center {\n  align-items: center;\n}\n\n.justify-center {\n  justify-content: center;\n}\n\n.justify-between {\n  justify-content: space-between;\n}\n\n.gap-2 {\n  gap: 0.5rem;\n}\n\n.gap-2\\.5 {\n  gap: 0.625rem;\n}\n\n.gap-3 {\n  gap: 0.75rem;\n}\n\n.gap-5 {\n  gap: 1.25rem;\n}\n\n.gap-\\[5px\\] {\n  gap: 5px;\n}\n\n.gap-x-2 {\n  -moz-column-gap: 0.5rem;\n       column-gap: 0.5rem;\n}\n\n.gap-x-2\\.5 {\n  -moz-column-gap: 0.625rem;\n       column-gap: 0.625rem;\n}\n\n.space-y-1 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));\n}\n\n.space-y-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));\n}\n\n.space-y-2\\.5 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.625rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.625rem * var(--tw-space-y-reverse));\n}\n\n.space-y-3 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.75rem * var(--tw-space-y-reverse));\n}\n\n.space-y-5 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(1.25rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(1.25rem * var(--tw-space-y-reverse));\n}\n\n.space-y-8 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(2rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(2rem * var(--tw-space-y-reverse));\n}\n\n.overflow-hidden {\n  overflow: hidden;\n}\n\n.overflow-y-auto {\n  overflow-y: auto;\n}\n\n.whitespace-nowrap {\n  white-space: nowrap;\n}\n\n.whitespace-pre-line {\n  white-space: pre-line;\n}\n\n.rounded {\n  border-radius: 0.25rem;\n}\n\n.rounded-3xl {\n  border-radius: 1.5rem;\n}\n\n.rounded-\\[10px\\] {\n  border-radius: 10px;\n}\n\n.rounded-\\[20px\\] {\n  border-radius: 20px;\n}\n\n.rounded-\\[inherit\\] {\n  border-radius: inherit;\n}\n\n.rounded-full {\n  border-radius: 9999px;\n}\n\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n\n.rounded-md {\n  border-radius: 0.375rem;\n}\n\n.border {\n  border-width: 1px;\n}\n\n.border-b {\n  border-bottom-width: 1px;\n}\n\n.border-l {\n  border-left-width: 1px;\n}\n\n.border-t {\n  border-top-width: 1px;\n}\n\n.border-cyan-300 {\n  --tw-border-opacity: 1;\n  border-color: rgb(103 232 249 / var(--tw-border-opacity));\n}\n\n.border-transparent {\n  border-color: transparent;\n}\n\n.border-zinc-100 {\n  --tw-border-opacity: 1;\n  border-color: rgb(244 244 245 / var(--tw-border-opacity));\n}\n\n.border-zinc-200 {\n  --tw-border-opacity: 1;\n  border-color: rgb(228 228 231 / var(--tw-border-opacity));\n}\n\n.border-zinc-300 {\n  --tw-border-opacity: 1;\n  border-color: rgb(212 212 216 / var(--tw-border-opacity));\n}\n\n.border-l-transparent {\n  border-left-color: transparent;\n}\n\n.border-t-transparent {\n  border-top-color: transparent;\n}\n\n.bg-cyan-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(207 250 254 / var(--tw-bg-opacity));\n}\n\n.bg-cyan-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(34 211 238 / var(--tw-bg-opacity));\n}\n\n.bg-emerald-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(209 250 229 / var(--tw-bg-opacity));\n}\n\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n\n.bg-zinc-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(244 244 245 / var(--tw-bg-opacity));\n}\n\n.bg-zinc-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(228 228 231 / var(--tw-bg-opacity));\n}\n\n.bg-zinc-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(250 250 250 / var(--tw-bg-opacity));\n}\n\n.fill-zinc-500 {\n  fill: #71717a;\n}\n\n.stroke-zinc-500 {\n  stroke: #71717a;\n}\n\n.object-contain {\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.object-cover {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.p-5 {\n  padding: 1.25rem;\n}\n\n.p-\\[1px\\] {\n  padding: 1px;\n}\n\n.p-\\[5px\\] {\n  padding: 5px;\n}\n\n.px-1 {\n  padding-left: 0.25rem;\n  padding-right: 0.25rem;\n}\n\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n\n.px-5 {\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n}\n\n.px-8 {\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n\n.px-\\[5px\\] {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.px-\\[6px\\] {\n  padding-left: 6px;\n  padding-right: 6px;\n}\n\n.py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n\n.py-2\\.5 {\n  padding-top: 0.625rem;\n  padding-bottom: 0.625rem;\n}\n\n.py-3 {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n\n.py-\\[5px\\] {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.py-\\[6px\\] {\n  padding-top: 6px;\n  padding-bottom: 6px;\n}\n\n.pb-2 {\n  padding-bottom: 0.5rem;\n}\n\n.pb-\\[11px\\] {\n  padding-bottom: 11px;\n}\n\n.pt-14 {\n  padding-top: 3.5rem;\n}\n\n.pt-4 {\n  padding-top: 1rem;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-5xl {\n  font-size: 3rem;\n  line-height: 1;\n}\n\n.text-\\[10px\\] {\n  font-size: 10px;\n}\n\n.text-\\[8px\\] {\n  font-size: 8px;\n}\n\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n\n.font-bold {\n  font-weight: 700;\n}\n\n.font-medium {\n  font-weight: 500;\n}\n\n.font-normal {\n  font-weight: 400;\n}\n\n.font-semibold {\n  font-weight: 600;\n}\n\n.uppercase {\n  text-transform: uppercase;\n}\n\n.italic {\n  font-style: italic;\n}\n\n.leading-3 {\n  line-height: .75rem;\n}\n\n.leading-4 {\n  line-height: 1rem;\n}\n\n.leading-5 {\n  line-height: 1.25rem;\n}\n\n.leading-6 {\n  line-height: 1.5rem;\n}\n\n.leading-\\[14px\\] {\n  line-height: 14px;\n}\n\n.leading-\\[18px\\] {\n  line-height: 18px;\n}\n\n.tracking-wide {\n  letter-spacing: 0.025em;\n}\n\n.tracking-wider {\n  letter-spacing: 0.05em;\n}\n\n.text-cyan-300 {\n  --tw-text-opacity: 1;\n  color: rgb(103 232 249 / var(--tw-text-opacity));\n}\n\n.text-cyan-500 {\n  --tw-text-opacity: 1;\n  color: rgb(6 182 212 / var(--tw-text-opacity));\n}\n\n.text-cyan-700 {\n  --tw-text-opacity: 1;\n  color: rgb(14 116 144 / var(--tw-text-opacity));\n}\n\n.text-zinc-300 {\n  --tw-text-opacity: 1;\n  color: rgb(212 212 216 / var(--tw-text-opacity));\n}\n\n.text-zinc-400 {\n  --tw-text-opacity: 1;\n  color: rgb(161 161 170 / var(--tw-text-opacity));\n}\n\n.text-zinc-600 {\n  --tw-text-opacity: 1;\n  color: rgb(82 82 91 / var(--tw-text-opacity));\n}\n\n.text-zinc-700 {\n  --tw-text-opacity: 1;\n  color: rgb(63 63 70 / var(--tw-text-opacity));\n}\n\n.text-zinc-800 {\n  --tw-text-opacity: 1;\n  color: rgb(39 39 42 / var(--tw-text-opacity));\n}\n\n.underline {\n  text-decoration-line: underline;\n}\n\n.underline-offset-4 {\n  text-underline-offset: 4px;\n}\n\n.outline {\n  outline-style: solid;\n}\n\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n\n.transition-all {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n.transition-colors {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n.duration-200 {\n  transition-duration: 200ms;\n}\n\n:root {\n  --foreground-rgb: 0, 0, 0;\n  --background-start-rgb: 214, 219, 220;\n  --background-end-rgb: 255, 255, 255;\n}\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    --foreground-rgb: 255, 255, 255;\n    --background-start-rgb: 0, 0, 0;\n    --background-end-rgb: 0, 0, 0;\n  }\n}\n\nbody {\n  color: rgb(var(--foreground-rgb));\n  background: linear-gradient(\n      to bottom,\n      transparent,\n      rgb(var(--background-end-rgb))\n    )\n    rgb(var(--background-start-rgb));\n}\n\n.selection\\:bg-emerald-100 *::-moz-selection {\n  --tw-bg-opacity: 1;\n  background-color: rgb(209 250 229 / var(--tw-bg-opacity));\n}\n\n.selection\\:bg-emerald-100 *::selection {\n  --tw-bg-opacity: 1;\n  background-color: rgb(209 250 229 / var(--tw-bg-opacity));\n}\n\n.selection\\:bg-emerald-100::-moz-selection {\n  --tw-bg-opacity: 1;\n  background-color: rgb(209 250 229 / var(--tw-bg-opacity));\n}\n\n.selection\\:bg-emerald-100::selection {\n  --tw-bg-opacity: 1;\n  background-color: rgb(209 250 229 / var(--tw-bg-opacity));\n}\n\n.placeholder\\:text-zinc-600::-moz-placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(82 82 91 / var(--tw-text-opacity));\n}\n\n.placeholder\\:text-zinc-600::placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(82 82 91 / var(--tw-text-opacity));\n}\n\n.after\\:absolute::after {\n  content: var(--tw-content);\n  position: absolute;\n}\n\n.after\\:inset-y-0::after {\n  content: var(--tw-content);\n  top: 0px;\n  bottom: 0px;\n}\n\n.after\\:left-1\\/2::after {\n  content: var(--tw-content);\n  left: 50%;\n}\n\n.after\\:w-1::after {\n  content: var(--tw-content);\n  width: 0.25rem;\n}\n\n.after\\:-translate-x-1\\/2::after {\n  content: var(--tw-content);\n  --tw-translate-x: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.hover\\:border-cyan-500:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(6 182 212 / var(--tw-border-opacity));\n}\n\n.hover\\:bg-cyan-200:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(165 243 252 / var(--tw-bg-opacity));\n}\n\n.hover\\:bg-cyan-500:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(6 182 212 / var(--tw-bg-opacity));\n}\n\n.hover\\:bg-zinc-100:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(244 244 245 / var(--tw-bg-opacity));\n}\n\n.hover\\:text-cyan-500:hover {\n  --tw-text-opacity: 1;\n  color: rgb(6 182 212 / var(--tw-text-opacity));\n}\n\n.hover\\:underline:hover {\n  text-decoration-line: underline;\n}\n\n.focus\\:border-cyan-500:focus {\n  --tw-border-opacity: 1;\n  border-color: rgb(6 182 212 / var(--tw-border-opacity));\n}\n\n.focus\\:border-transparent:focus {\n  border-color: transparent;\n}\n\n.focus\\:outline-none:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n\n.focus\\:ring-\\[\\.5px\\]:focus {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(.5px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n\n.focus\\:ring-zinc-400:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(161 161 170 / var(--tw-ring-opacity));\n}\n\n.focus-visible\\:outline-none:focus-visible {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n\n.focus-visible\\:ring:focus-visible {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n\n.focus-visible\\:ring-1:focus-visible {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n\n.focus-visible\\:ring-offset-1:focus-visible {\n  --tw-ring-offset-width: 1px;\n}\n\n.disabled\\:pointer-events-none:disabled {\n  pointer-events: none;\n}\n\n.disabled\\:cursor-not-allowed:disabled {\n  cursor: not-allowed;\n}\n\n.disabled\\:opacity-50:disabled {\n  opacity: 0.5;\n}\n\n.group:hover .group-hover\\:stroke-cyan-500 {\n  stroke: #06b6d4;\n}\n\n.data-\\[panel-group-direction\\=vertical\\]\\:h-px[data-panel-group-direction=vertical] {\n  height: 1px;\n}\n\n.data-\\[panel-group-direction\\=vertical\\]\\:w-full[data-panel-group-direction=vertical] {\n  width: 100%;\n}\n\n.data-\\[panel-group-direction\\=vertical\\]\\:flex-col[data-panel-group-direction=vertical] {\n  flex-direction: column;\n}\n\n.data-\\[panel-group-direction\\=vertical\\]\\:after\\:left-0[data-panel-group-direction=vertical]::after {\n  content: var(--tw-content);\n  left: 0px;\n}\n\n.data-\\[panel-group-direction\\=vertical\\]\\:after\\:h-1[data-panel-group-direction=vertical]::after {\n  content: var(--tw-content);\n  height: 0.25rem;\n}\n\n.data-\\[panel-group-direction\\=vertical\\]\\:after\\:w-full[data-panel-group-direction=vertical]::after {\n  content: var(--tw-content);\n  width: 100%;\n}\n\n.data-\\[panel-group-direction\\=vertical\\]\\:after\\:-translate-y-1\\/2[data-panel-group-direction=vertical]::after {\n  content: var(--tw-content);\n  --tw-translate-y: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.data-\\[panel-group-direction\\=vertical\\]\\:after\\:translate-x-0[data-panel-group-direction=vertical]::after {\n  content: var(--tw-content);\n  --tw-translate-x: 0px;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.dark\\:border-cyan-700:is(.dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(14 116 144 / var(--tw-border-opacity));\n}\n\n.dark\\:border-cyan-900:is(.dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(22 78 99 / var(--tw-border-opacity));\n}\n\n.dark\\:border-zinc-800:is(.dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(39 39 42 / var(--tw-border-opacity));\n}\n\n.dark\\:border-zinc-900:is(.dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(24 24 27 / var(--tw-border-opacity));\n}\n\n.dark\\:bg-cyan-500:is(.dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(6 182 212 / var(--tw-bg-opacity));\n}\n\n.dark\\:bg-cyan-950:is(.dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(8 51 68 / var(--tw-bg-opacity));\n}\n\n.dark\\:bg-emerald-500:is(.dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(16 185 129 / var(--tw-bg-opacity));\n}\n\n.dark\\:bg-zinc-800:is(.dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(39 39 42 / var(--tw-bg-opacity));\n}\n\n.dark\\:bg-zinc-900:is(.dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(24 24 27 / var(--tw-bg-opacity));\n}\n\n.dark\\:bg-zinc-950:is(.dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(9 9 11 / var(--tw-bg-opacity));\n}\n\n.dark\\:stroke-zinc-50:is(.dark *) {\n  stroke: #fafafa;\n}\n\n.dark\\:text-black:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n}\n\n.dark\\:text-zinc-50:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(250 250 250 / var(--tw-text-opacity));\n}\n\n.dark\\:text-zinc-500:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(113 113 122 / var(--tw-text-opacity));\n}\n\n.dark\\:text-zinc-700:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(63 63 70 / var(--tw-text-opacity));\n}\n\n.dark\\:text-zinc-950:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(9 9 11 / var(--tw-text-opacity));\n}\n\n.dark\\:selection\\:bg-emerald-500 *:is(.dark *)::-moz-selection {\n  --tw-bg-opacity: 1;\n  background-color: rgb(16 185 129 / var(--tw-bg-opacity));\n}\n\n.dark\\:selection\\:bg-emerald-500 *:is(.dark *)::selection {\n  --tw-bg-opacity: 1;\n  background-color: rgb(16 185 129 / var(--tw-bg-opacity));\n}\n\n.dark\\:selection\\:bg-emerald-500:is(.dark *)::-moz-selection {\n  --tw-bg-opacity: 1;\n  background-color: rgb(16 185 129 / var(--tw-bg-opacity));\n}\n\n.dark\\:selection\\:bg-emerald-500:is(.dark *)::selection {\n  --tw-bg-opacity: 1;\n  background-color: rgb(16 185 129 / var(--tw-bg-opacity));\n}\n\n.dark\\:placeholder\\:text-zinc-50:is(.dark *)::-moz-placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(250 250 250 / var(--tw-text-opacity));\n}\n\n.dark\\:placeholder\\:text-zinc-50:is(.dark *)::placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(250 250 250 / var(--tw-text-opacity));\n}\n\n.dark\\:hover\\:bg-cyan-400:hover:is(.dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(34 211 238 / var(--tw-bg-opacity));\n}\n\n.dark\\:focus\\:ring-zinc-700:focus:is(.dark *) {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(63 63 70 / var(--tw-ring-opacity));\n}\n\n.\\[\\&\\[data-panel-group-direction\\=vertical\\]\\>div\\]\\:rotate-90[data-panel-group-direction=vertical]>div {\n  --tw-rotate: 90deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../scribe-theia/src/browser/styles/scribe-theia.css":
/*!**************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../scribe-theia/src/browser/styles/scribe-theia.css ***!
  \**************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.toolbar-wrapper {
  background-color: white ;
  font-weight: bold;
  color: rgb(113 113 122);

}  
.theia-no-open-workspace #theia-statusBar {
  background-color: white !important;
  font-size: larger;
  font-weight: bold;
  color: rgb(113 113 122);
}
.p-Widget.p-DockPanel-widget.ps {
  background-color: white !important;
  border-left: 1px solid rgb(228 228 231);
}

.p-Widget.theia-sidepanel-toolbar.theia-right-side-panel.p-BoxPanel-child {
background-color: white;
}


.p-Widget.p-Panel.p-SplitPanel {
padding-top: 10px !important;

}
.toolbar-column.left {
  display: none;
}
/* .p-TabBar-tab.p-mod-closable {
  display: none;

} */
.p-Widget.p-TabBar-toolbar.ps {
height: 40px !important;
}
.item.enabled.toolbar-item.action-label {
  border-radius: 8px;
  padding-left: 8px !important;
  padding-right: 8px !important;

  font-size: 14px !important;
  height: 31px;

  border: 1px solid rgb(228 228 231);
}
.p-TabBar.theia-app-sides .p-TabBar-tabIcon{
font-size: 14px !important;
}
.theia-mod-offline #theia-statusBar .area .element {
  color: rgb(113 113 122);
}
.theia-tabBar-tab-row{
  background-color: white !important;
  height: 140px;
  font-size: larger;
  font-weight: bold;
  color: rgb(113 113 122);

}
.toolbar-item  {
  background-color: rgb(250 250 250)!important;
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  gap: 4px;
  padding: 0px !important;
  margin: 8px !important;

}

.toolbar-column {
  display: flex;
  align-items: center;
  gap: 10px;

}
.p-Widget.p-TabBar.theia-app-right.theia-app-sides {
  border-left: 1px solid rgb(228 228 231);

}

`, "",{"version":3,"sources":["webpack://./../scribe-theia/src/browser/styles/scribe-theia.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,iBAAiB;EACjB,uBAAuB;;AAEzB;AACA;EACE,kCAAkC;EAClC,iBAAiB;EACjB,iBAAiB;EACjB,uBAAuB;AACzB;AACA;EACE,kCAAkC;EAClC,uCAAuC;AACzC;;AAEA;AACA,uBAAuB;AACvB;;;AAGA;AACA,4BAA4B;;AAE5B;AACA;EACE,aAAa;AACf;AACA;;;GAGG;AACH;AACA,uBAAuB;AACvB;AACA;EACE,kBAAkB;EAClB,4BAA4B;EAC5B,6BAA6B;;EAE7B,0BAA0B;EAC1B,YAAY;;EAEZ,kCAAkC;AACpC;AACA;AACA,0BAA0B;AAC1B;AACA;EACE,uBAAuB;AACzB;AACA;EACE,kCAAkC;EAClC,aAAa;EACb,iBAAiB;EACjB,iBAAiB;EACjB,uBAAuB;;AAEzB;AACA;EACE,4CAA4C;EAC5C,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,eAAe;EACf,QAAQ;EACR,uBAAuB;EACvB,sBAAsB;;AAExB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;;AAEX;AACA;EACE,uCAAuC;;AAEzC","sourcesContent":[".toolbar-wrapper {\n  background-color: white ;\n  font-weight: bold;\n  color: rgb(113 113 122);\n\n}  \n.theia-no-open-workspace #theia-statusBar {\n  background-color: white !important;\n  font-size: larger;\n  font-weight: bold;\n  color: rgb(113 113 122);\n}\n.p-Widget.p-DockPanel-widget.ps {\n  background-color: white !important;\n  border-left: 1px solid rgb(228 228 231);\n}\n\n.p-Widget.theia-sidepanel-toolbar.theia-right-side-panel.p-BoxPanel-child {\nbackground-color: white;\n}\n\n\n.p-Widget.p-Panel.p-SplitPanel {\npadding-top: 10px !important;\n\n}\n.toolbar-column.left {\n  display: none;\n}\n/* .p-TabBar-tab.p-mod-closable {\n  display: none;\n\n} */\n.p-Widget.p-TabBar-toolbar.ps {\nheight: 40px !important;\n}\n.item.enabled.toolbar-item.action-label {\n  border-radius: 8px;\n  padding-left: 8px !important;\n  padding-right: 8px !important;\n\n  font-size: 14px !important;\n  height: 31px;\n\n  border: 1px solid rgb(228 228 231);\n}\n.p-TabBar.theia-app-sides .p-TabBar-tabIcon{\nfont-size: 14px !important;\n}\n.theia-mod-offline #theia-statusBar .area .element {\n  color: rgb(113 113 122);\n}\n.theia-tabBar-tab-row{\n  background-color: white !important;\n  height: 140px;\n  font-size: larger;\n  font-weight: bold;\n  color: rgb(113 113 122);\n\n}\n.toolbar-item  {\n  background-color: rgb(250 250 250)!important;\n  display: flex;\n  align-items: center;\n  font-weight: 400;\n  font-size: 14px;\n  gap: 4px;\n  padding: 0px !important;\n  margin: 8px !important;\n\n}\n\n.toolbar-column {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n\n}\n.p-Widget.p-TabBar.theia-app-right.theia-app-sides {\n  border-left: 1px solid rgb(228 228 231);\n\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../scribe-theia/lib/browser/resource-manager/bind.js":
/*!************************************************************!*\
  !*** ../scribe-theia/lib/browser/resource-manager/bind.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.bindAllResourceManagerContributions = void 0;
const browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
const resources_manager_factory_1 = __webpack_require__(/*! ./resources-manager-factory */ "../scribe-theia/lib/browser/resource-manager/resources-manager-factory.js");
const resources_viewer_widget_1 = __webpack_require__(/*! ./resources-viewer-widget */ "../scribe-theia/lib/browser/resource-manager/resources-viewer-widget.js");
const resource_manager_contribution_1 = __webpack_require__(/*! ./resource-manager-contribution */ "../scribe-theia/lib/browser/resource-manager/resource-manager-contribution.js");
const utils_1 = __webpack_require__(/*! ./utils */ "../scribe-theia/lib/browser/resource-manager/utils.js");
const ViewerWidget_1 = __webpack_require__(/*! ./resources/ViewerWidget */ "../scribe-theia/lib/browser/resource-manager/resources/ViewerWidget.js");
const tn_viewer_widget_1 = __webpack_require__(/*! ./resources/tn-viewer-widget */ "../scribe-theia/lib/browser/resource-manager/resources/tn-viewer-widget.js");
const bindAllResourceManagerContributions = (bind) => {
    bind(resources_viewer_widget_1.ResourcesViewerWidget).toSelf();
    bind(browser_1.WidgetFactory).toDynamicValue((ctx) => ({
        id: resources_viewer_widget_1.ResourcesViewerWidget.ID,
        createWidget: () => ctx.container.get(resources_viewer_widget_1.ResourcesViewerWidget),
    }));
    bind(resources_manager_factory_1.ResourceManagerFactory).toSelf().inSingletonScope();
    bind(browser_1.WidgetFactory).toService(resources_manager_factory_1.ResourceManagerFactory);
    bind(browser_1.FrontendApplicationContribution).toService(resource_manager_contribution_1.ResourceManagerFrontendContribution);
    (0, browser_1.bindViewContribution)(bind, resource_manager_contribution_1.ResourceManagerFrontendContribution);
    bind(browser_1.StylingParticipant).toService(resource_manager_contribution_1.ResourceManagerFrontendContribution);
    bind(utils_1.ResourceManagerUtils).toSelf().inSingletonScope();
    (0, browser_1.bindViewContribution)(bind, ViewerWidget_1.ViewerWidgetFrontendContribution);
    bind(browser_1.FrontendApplicationContribution).toService(ViewerWidget_1.ViewerWidgetFrontendContribution);
    bind(ViewerWidget_1.ViewerWidget).toSelf();
    bind(browser_1.WidgetFactory).toDynamicValue((context) => ({
        id: ViewerWidget_1.ViewerWidget.ID,
        createWidget: () => context.container.get(ViewerWidget_1.ViewerWidget),
    }));
    (0, browser_1.bindViewContribution)(bind, tn_viewer_widget_1.TnViewerWidgetFrontendContribution);
    bind(browser_1.FrontendApplicationContribution).toService(tn_viewer_widget_1.TnViewerWidgetFrontendContribution);
    bind(tn_viewer_widget_1.TnViewerWidget).toSelf().inSingletonScope();
    bind(browser_1.WidgetFactory).toDynamicValue((context) => ({
        id: tn_viewer_widget_1.TnViewerWidget.ID,
        createWidget: () => context.container.get(tn_viewer_widget_1.TnViewerWidget),
    }));
};
exports.bindAllResourceManagerContributions = bindAllResourceManagerContributions;


/***/ }),

/***/ "../scribe-theia/lib/browser/resource-manager/resource-manager-contribution.js":
/*!*************************************************************************************!*\
  !*** ../scribe-theia/lib/browser/resource-manager/resource-manager-contribution.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResourceManagerFrontendContribution = exports.TOGGLE_RESOURCE_MANAGER = void 0;
const browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
const resources_viewer_widget_1 = __webpack_require__(/*! ./resources-viewer-widget */ "../scribe-theia/lib/browser/resource-manager/resources-viewer-widget.js");
const resources_manager_factory_1 = __webpack_require__(/*! ./resources-manager-factory */ "../scribe-theia/lib/browser/resource-manager/resources-manager-factory.js");
const inversify_1 = __webpack_require__(/*! @theia/core/shared/inversify */ "../node_modules/@theia/core/shared/inversify/index.js");
const theme_1 = __webpack_require__(/*! @theia/core/lib/common/theme */ "../node_modules/@theia/core/lib/common/theme.js");
exports.TOGGLE_RESOURCE_MANAGER = {
    id: "resource-manager.toggle",
};
let ResourceManagerFrontendContribution = class ResourceManagerFrontendContribution extends browser_1.AbstractViewContribution {
    constructor() {
        super({
            viewContainerId: resources_manager_factory_1.RESOURCE_MANAGER_ID,
            widgetId: resources_viewer_widget_1.ResourcesViewerWidget.ID,
            widgetName: resources_viewer_widget_1.ResourcesViewerWidget.LABEL,
            defaultWidgetOptions: {
                area: "left",
                rank: 200,
            },
            toggleCommandId: exports.TOGGLE_RESOURCE_MANAGER.id,
        });
    }
    init() { }
    async initializeLayout(app) {
        await this.openView({ reveal: true });
    }
    registerThemeStyle(theme, collector) {
        const contrastBorder = theme.getColor("contrastBorder");
        if (contrastBorder && (0, theme_1.isHighContrast)(theme.type)) {
            //   collector.addRule(`
            //             .t-siw-search-container .searchHeader .search-field-container {
            //                 border-color: ${contrastBorder};
            //             }
            //         `);
        }
    }
    async registerCommands(commands) {
        super.registerCommands(commands);
        commands.registerCommand(exports.TOGGLE_RESOURCE_MANAGER, {
            execute: () => this.openView({ reveal: true, activate: true }),
        });
    }
};
exports.ResourceManagerFrontendContribution = ResourceManagerFrontendContribution;
__decorate([
    (0, inversify_1.postConstruct)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ResourceManagerFrontendContribution.prototype, "init", null);
exports.ResourceManagerFrontendContribution = ResourceManagerFrontendContribution = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], ResourceManagerFrontendContribution);


/***/ }),

/***/ "../scribe-theia/lib/browser/resource-manager/resources-manager-factory.js":
/*!*********************************************************************************!*\
  !*** ../scribe-theia/lib/browser/resource-manager/resources-manager-factory.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResourceManagerFactory = exports.RESOURCE_MANAGER_VIEW_CONTAINER_TITLE_OPTIONS = exports.RESOURCE_MANAGER_ID = void 0;
const browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
const nls_1 = __webpack_require__(/*! @theia/core/lib/common/nls */ "../node_modules/@theia/core/lib/common/nls.js");
const inversify_1 = __webpack_require__(/*! @theia/core/shared/inversify */ "../node_modules/@theia/core/shared/inversify/index.js");
const resources_viewer_widget_1 = __webpack_require__(/*! ./resources-viewer-widget */ "../scribe-theia/lib/browser/resource-manager/resources-viewer-widget.js");
exports.RESOURCE_MANAGER_ID = "resource-manager-view-container";
exports.RESOURCE_MANAGER_VIEW_CONTAINER_TITLE_OPTIONS = {
    label: nls_1.nls.localizeByDefault("Resource Manager"),
    iconClass: (0, browser_1.codicon)("flame"),
    closeable: true,
};
let ResourceManagerFactory = class ResourceManagerFactory {
    constructor() {
        this.id = exports.RESOURCE_MANAGER_ID;
        this.resourceViewerWidgetOptions = {
            canHide: false,
            initiallyCollapsed: true,
        };
    }
    async createWidget() {
        const viewContainer = this.viewContainerFactory({
            id: exports.RESOURCE_MANAGER_ID,
            progressLocationId: "Resource Manager",
        });
        viewContainer.setTitleOptions(exports.RESOURCE_MANAGER_VIEW_CONTAINER_TITLE_OPTIONS);
        const widget = await this.widgetManager.getOrCreateWidget(resources_viewer_widget_1.ResourcesViewerWidget.ID);
        viewContainer.addWidget(widget, this.resourceViewerWidgetOptions);
        return viewContainer;
    }
};
exports.ResourceManagerFactory = ResourceManagerFactory;
__decorate([
    (0, inversify_1.inject)(browser_1.ViewContainer.Factory),
    __metadata("design:type", Function)
], ResourceManagerFactory.prototype, "viewContainerFactory", void 0);
__decorate([
    (0, inversify_1.inject)(browser_1.WidgetManager),
    __metadata("design:type", browser_1.WidgetManager)
], ResourceManagerFactory.prototype, "widgetManager", void 0);
exports.ResourceManagerFactory = ResourceManagerFactory = __decorate([
    (0, inversify_1.injectable)()
], ResourceManagerFactory);


/***/ }),

/***/ "../scribe-theia/lib/browser/resource-manager/resources-viewer-widget.js":
/*!*******************************************************************************!*\
  !*** ../scribe-theia/lib/browser/resource-manager/resources-viewer-widget.js ***!
  \*******************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (98:44)\nFile was processed with these loaders:\n * ../node_modules/source-map-loader/dist/cjs.js\nYou may need an additional loader to handle the result of these loaders.\n| () => {\n| };\n> registeredResources: types_1.ScribeResource[] = [resources_1.tnResource, resources_1.twlResource];\n| render();\n| {");

/***/ }),

/***/ "../scribe-theia/lib/browser/resource-manager/resources/ViewerWidget.js":
/*!******************************************************************************!*\
  !*** ../scribe-theia/lib/browser/resource-manager/resources/ViewerWidget.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var ViewerWidget_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ViewerWidgetFrontendContribution = exports.ViewerWidget = void 0;
const browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
const inversify_1 = __webpack_require__(/*! @theia/core/shared/inversify */ "../node_modules/@theia/core/shared/inversify/index.js");
const react_1 = __importDefault(__webpack_require__(/*! @theia/core/shared/react */ "../node_modules/@theia/core/shared/react/index.js"));
let ViewerWidget = ViewerWidget_1 = class ViewerWidget extends browser_1.ReactWidget {
    constructor() {
        super();
        this.id = ViewerWidget_1.ID;
        this.title.label = "Runtime Widget";
        this.title.closable = true;
        this.update();
    }
    onUpdateRequest(msg) {
        super.onUpdateRequest(msg);
    }
    render() {
        return react_1.default.createElement("div", null, "Runtime widget");
    }
};
exports.ViewerWidget = ViewerWidget;
ViewerWidget.ID = "resource-viewer-widget";
exports.ViewerWidget = ViewerWidget = ViewerWidget_1 = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], ViewerWidget);
let ViewerWidgetFrontendContribution = class ViewerWidgetFrontendContribution extends browser_1.AbstractViewContribution {
    constructor() {
        super({
            widgetId: ViewerWidget.ID,
            widgetName: "Resource Widget",
            defaultWidgetOptions: {
                area: "main",
                rank: 200,
            },
        });
    }
    init() { }
    async initializeLayout() {
        // await this.openView({ reveal: true });
    }
};
exports.ViewerWidgetFrontendContribution = ViewerWidgetFrontendContribution;
__decorate([
    (0, inversify_1.postConstruct)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ViewerWidgetFrontendContribution.prototype, "init", null);
exports.ViewerWidgetFrontendContribution = ViewerWidgetFrontendContribution = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], ViewerWidgetFrontendContribution);


/***/ }),

/***/ "../scribe-theia/lib/browser/resource-manager/resources/tn-viewer-widget.js":
/*!**********************************************************************************!*\
  !*** ../scribe-theia/lib/browser/resource-manager/resources/tn-viewer-widget.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var TnViewerWidget_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TnViewerWidgetFrontendContribution = exports.TnViewerWidget = void 0;
const browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
const inversify_1 = __webpack_require__(/*! @theia/core/shared/inversify */ "../node_modules/@theia/core/shared/inversify/index.js");
const react_1 = __importDefault(__webpack_require__(/*! @theia/core/shared/react */ "../node_modules/@theia/core/shared/react/index.js"));
const TranslationNotesView_1 = __importDefault(__webpack_require__(/*! ../../../components/TranslationNotes/TranslationNotesView */ "../scribe-theia/lib/components/TranslationNotes/TranslationNotesView.js"));
const translationNotes_1 = __webpack_require__(/*! ../../../utils/translationNotes */ "../scribe-theia/lib/utils/translationNotes.js");
const file_service_1 = __webpack_require__(/*! @theia/filesystem/lib/browser/file-service */ "../node_modules/@theia/filesystem/lib/browser/file-service.js");
let TnViewerWidget = TnViewerWidget_1 = class TnViewerWidget extends browser_1.ReactWidget {
    constructor() {
        super();
        this.uri = null;
        this.tnTsv = {};
        this.id = TnViewerWidget_1.ID;
        this.title.label = "Translation Notes";
        this.title.closable = true;
        this.update();
    }
    onUpdateRequest(msg) {
        super.onUpdateRequest(msg);
    }
    setUri(uri) {
        (0, translationNotes_1.getDocumentAsScriptureTSV)("ACT 1:1", uri, this.fs).then((tnTsv) => {
            this.tnTsv = tnTsv;
            this.update();
        });
    }
    render() {
        console.log("Rendering Translation Notes");
        console.log("URI: ", this.uri);
        console.log("TN TSV: ", this.tnTsv);
        return (react_1.default.createElement(TranslationNotesView_1.default, { tnTsv: this.tnTsv, ref: { verseRef: "GEN 1:1" } }));
    }
};
exports.TnViewerWidget = TnViewerWidget;
TnViewerWidget.ID = "tn-viewer-widget";
__decorate([
    (0, inversify_1.inject)(file_service_1.FileService),
    __metadata("design:type", file_service_1.FileService)
], TnViewerWidget.prototype, "fs", void 0);
exports.TnViewerWidget = TnViewerWidget = TnViewerWidget_1 = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], TnViewerWidget);
let TnViewerWidgetFrontendContribution = class TnViewerWidgetFrontendContribution extends browser_1.AbstractViewContribution {
    constructor() {
        super({
            widgetId: TnViewerWidget.ID,
            widgetName: "Resource Widget",
            defaultWidgetOptions: {
                area: "main",
                rank: 200,
            },
        });
    }
    init() { }
    async initializeLayout() {
        // await this.openView({ reveal: true });
    }
};
exports.TnViewerWidgetFrontendContribution = TnViewerWidgetFrontendContribution;
__decorate([
    (0, inversify_1.postConstruct)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TnViewerWidgetFrontendContribution.prototype, "init", null);
exports.TnViewerWidgetFrontendContribution = TnViewerWidgetFrontendContribution = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], TnViewerWidgetFrontendContribution);


/***/ }),

/***/ "../scribe-theia/lib/browser/resource-manager/utils.js":
/*!*************************************************************!*\
  !*** ../scribe-theia/lib/browser/resource-manager/utils.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ResourceManagerUtils_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResourceManagerUtils = void 0;
const browser_1 = __webpack_require__(/*! @theia/workspace/lib/browser */ "../node_modules/@theia/workspace/lib/browser/index.js");
const inversify_1 = __webpack_require__(/*! @theia/core/shared/inversify */ "../node_modules/@theia/core/shared/inversify/index.js");
const core_1 = __webpack_require__(/*! @theia/core */ "../node_modules/@theia/core/lib/common/index.js");
const file_service_1 = __webpack_require__(/*! @theia/filesystem/lib/browser/file-service */ "../node_modules/@theia/filesystem/lib/browser/file-service.js");
let ResourceManagerUtils = ResourceManagerUtils_1 = class ResourceManagerUtils {
    constructor() {
        this.addDownloadedResourceToProjectConfig = async (resource) => {
            var _a;
            const roots = await this.workspaceService.roots;
            const projectURI = roots[0].resource;
            if (!projectURI) {
                this.messageService.error;
            }
            const configFileUri = projectURI === null || projectURI === void 0 ? void 0 : projectURI.withPath(projectURI.path.join(ResourceManagerUtils_1.CONFIG_FILE_NAME));
            if (!configFileUri) {
                console.error("No workspace opened");
                return;
            }
            let config = {};
            const configFileExists = await this.fileService.exists(configFileUri);
            if (configFileExists) {
                const configFile = await this.fileService.readFile(configFileUri);
                config = JSON.parse(new TextDecoder().decode(configFile.value.buffer));
            }
            const configDownloadedResources = (_a = config.resources) !== null && _a !== void 0 ? _a : [];
            if (configDownloadedResources.some((r) => r.id === resource.id)) {
                this.messageService.info(`Resource ${resource.name} already exists in the project!`);
                return;
            }
            const newConfigDownloadedResources = [
                ...configDownloadedResources,
                resource,
            ];
            config.resources = newConfigDownloadedResources;
            await this.fileService.write(configFileUri, JSON.stringify(config, null, 2));
        };
        this.getDownloadedResourcesFromProjectConfig = async () => {
            var _a;
            const roots = await this.workspaceService.roots;
            const projectURI = roots[0].resource;
            if (!projectURI) {
                this.messageService.error;
            }
            const configFileUri = projectURI === null || projectURI === void 0 ? void 0 : projectURI.withPath(projectURI.path.join(ResourceManagerUtils_1.CONFIG_FILE_NAME));
            if (!configFileUri) {
                console.error("No workspace opened");
                return;
            }
            let config = {};
            const configFileExists = await this.fileService.exists(configFileUri);
            if (configFileExists) {
                const configFile = await this.fileService.readFile(configFileUri);
                config = JSON.parse(new TextDecoder().decode(configFile.value.buffer));
            }
            return ((_a = config.resources) !== null && _a !== void 0 ? _a : []);
        };
    }
};
exports.ResourceManagerUtils = ResourceManagerUtils;
ResourceManagerUtils.CONFIG_FILE_NAME = "scribe.config.json";
__decorate([
    (0, inversify_1.inject)(browser_1.WorkspaceService),
    __metadata("design:type", browser_1.WorkspaceService)
], ResourceManagerUtils.prototype, "workspaceService", void 0);
__decorate([
    (0, inversify_1.inject)(core_1.MessageService),
    __metadata("design:type", core_1.MessageService)
], ResourceManagerUtils.prototype, "messageService", void 0);
__decorate([
    (0, inversify_1.inject)(file_service_1.FileService),
    __metadata("design:type", file_service_1.FileService)
], ResourceManagerUtils.prototype, "fileService", void 0);
exports.ResourceManagerUtils = ResourceManagerUtils = ResourceManagerUtils_1 = __decorate([
    (0, inversify_1.injectable)()
], ResourceManagerUtils);


/***/ }),

/***/ "../scribe-theia/lib/browser/scribe-theia-contribution.js":
/*!****************************************************************!*\
  !*** ../scribe-theia/lib/browser/scribe-theia-contribution.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ScribeTheiaContribution = void 0;
const inversify_1 = __webpack_require__(/*! @theia/core/shared/inversify */ "../node_modules/@theia/core/shared/inversify/index.js");
let ScribeTheiaContribution = class ScribeTheiaContribution {
};
exports.ScribeTheiaContribution = ScribeTheiaContribution;
exports.ScribeTheiaContribution = ScribeTheiaContribution = __decorate([
    (0, inversify_1.injectable)()
    // Add contribution interface to be implemented, e.g. "ScribeTheiaContribution implements CommandContribution"
], ScribeTheiaContribution);


/***/ }),

/***/ "../scribe-theia/lib/browser/scribe-theia-frontend-module.js":
/*!*******************************************************************!*\
  !*** ../scribe-theia/lib/browser/scribe-theia-frontend-module.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Generated using theia-extension-generator
 */
const inversify_1 = __webpack_require__(/*! @theia/core/shared/inversify */ "../node_modules/@theia/core/shared/inversify/index.js");
const scribe_theia_contribution_1 = __webpack_require__(/*! ./scribe-theia-contribution */ "../scribe-theia/lib/browser/scribe-theia-contribution.js");
const toolbar_defaults_1 = __webpack_require__(/*! @theia/toolbar/lib/browser/toolbar-defaults */ "../node_modules/@theia/toolbar/lib/browser/toolbar-defaults.js");
__webpack_require__(/*! ../../src/browser/styles/scribe-theia.css */ "../scribe-theia/src/browser/styles/scribe-theia.css");
__webpack_require__(/*! ../../lib/browser/output-tailwind.css */ "../scribe-theia/lib/browser/output-tailwind.css");
const toolbar_defaults_override_1 = __webpack_require__(/*! ./toolbar-defaults-override */ "../scribe-theia/lib/browser/toolbar-defaults-override.js");
const toolbar_contributions_1 = __webpack_require__(/*! ./toolbar-contributions */ "../scribe-theia/lib/browser/toolbar-contributions.js");
const widgets_1 = __webpack_require__(/*! ./widgets */ "../scribe-theia/lib/browser/widgets/index.js");
const bind_1 = __webpack_require__(/*! ./resource-manager/bind */ "../scribe-theia/lib/browser/resource-manager/bind.js");
exports["default"] = new inversify_1.ContainerModule((bind, unbind, isBound, rebind, unbindAsync, onActivation, onDeactivation) => {
    // Replace this line with the desired binding, e.g. "bind(CommandContribution).to(ScribeTheiaContribution)
    bind(scribe_theia_contribution_1.ScribeTheiaContribution).toSelf();
    rebind(toolbar_defaults_1.ToolbarDefaultsFactory).toConstantValue(toolbar_defaults_override_1.ToolbarDefaultsOverride);
    (0, toolbar_contributions_1.bindAllToolbarContributions)(bind);
    (0, widgets_1.bindAllWidgetsContributions)(bind);
    (0, bind_1.bindAllResourceManagerContributions)(bind);
});


/***/ }),

/***/ "../scribe-theia/lib/browser/toolbar-contributions.js":
/*!************************************************************!*\
  !*** ../scribe-theia/lib/browser/toolbar-contributions.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var LayoutsToolbarContribution_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LayoutsToolbarContribution = exports.bindAllToolbarContributions = exports.NOTIFICATION_COMMAND = exports.LOCK_COMMAND = exports.OPEN_COMMAND = exports.SAVE_COMMAND = exports.LAYOUT_COMMAND = void 0;
const core_1 = __webpack_require__(/*! @theia/core */ "../node_modules/@theia/core/lib/common/index.js");
const inversify_1 = __webpack_require__(/*! @theia/core/shared/inversify */ "../node_modules/@theia/core/shared/inversify/index.js");
const React = __importStar(__webpack_require__(/*! @theia/core/shared/react */ "../node_modules/@theia/core/shared/react/index.js"));
const browser_1 = __webpack_require__(/*! @theia/workspace/lib/browser */ "../node_modules/@theia/workspace/lib/browser/index.js");
const abstract_toolbar_contribution_1 = __webpack_require__(/*! @theia/toolbar/lib/browser/abstract-toolbar-contribution */ "../node_modules/@theia/toolbar/lib/browser/abstract-toolbar-contribution.js");
const toolbar_interfaces_1 = __webpack_require__(/*! @theia/toolbar/lib/browser/toolbar-interfaces */ "../node_modules/@theia/toolbar/lib/browser/toolbar-interfaces.js");
exports.LAYOUT_COMMAND = {
    id: "scribe.layout.view",
    category: "Layout",
    label: "Change Layout",
};
exports.SAVE_COMMAND = {
    id: "scribe.save.file",
    category: "File",
    label: "Save File",
};
exports.OPEN_COMMAND = {
    id: "scribe.open.file",
    category: "File",
    label: "Open File",
};
exports.LOCK_COMMAND = {
    id: "scribe.lock",
    category: "Lock",
    label: "Lock file",
};
exports.NOTIFICATION_COMMAND = {
    id: "scribe.notifications",
    category: "Notifications",
    label: "Show Notifications",
};
const bindAllToolbarContributions = (bind) => {
    bind(LayoutsToolbarContribution).toSelf().inSingletonScope();
    bind(toolbar_interfaces_1.ToolbarContribution).to(LayoutsToolbarContribution);
    bind(core_1.CommandContribution).to(LayoutsToolbarContribution);
};
exports.bindAllToolbarContributions = bindAllToolbarContributions;
let LayoutsToolbarContribution = LayoutsToolbarContribution_1 = class LayoutsToolbarContribution extends abstract_toolbar_contribution_1.AbstractToolbarContribution {
    constructor() {
        super(...arguments);
        this.id = LayoutsToolbarContribution_1.ID;
        this.handleLayoutClick = (e) => this.doHandleLayoutClick(e);
        this.handleSaveClick = (e) => this.doHandleSaveClick(e);
        this.handleOpenClick = (e) => this.doHandleOpenClick(e);
        this.handleNotificationClick = (e) => this.doHandleNotificationClick(e);
        this.handleLockClick = (e) => this.doHandleNotificationClick(e);
    }
    doHandleLayoutClick(e) {
        e.stopPropagation();
        this.commandService.executeCommand(exports.LAYOUT_COMMAND.id);
    }
    doHandleSaveClick(e) {
        e.stopPropagation();
        this.commandService.executeCommand(exports.SAVE_COMMAND.id);
    }
    doHandleLockClick(e) {
        e.stopPropagation();
        this.commandService.executeCommand(exports.SAVE_COMMAND.id);
    }
    doHandleOpenClick(e) {
        e.stopPropagation();
        this.commandService.executeCommand(exports.OPEN_COMMAND.id);
    }
    doHandleNotificationClick(e) {
        e.stopPropagation();
        this.commandService.executeCommand(exports.NOTIFICATION_COMMAND.id);
    }
    render() {
        return (React.createElement("div", { className: "toolbar-wrapper" },
            React.createElement("div", { role: "button", tabIndex: 0, className: "item enabled toolbar-item action-label", id: "easy-save-item-icon", onClick: this.handleSaveClick, title: "Save File" },
                React.createElement("div", { className: "codicon codicon-cloud-upload" }),
                React.createElement("span", null, "Save")),
            React.createElement("div", { role: "button", tabIndex: 0, className: "item enabled toolbar-item action-label", id: "easy-layout-item-icon", onClick: this.handleLayoutClick, title: "Change Layout" },
                React.createElement("div", { className: "codicon codicon-layout" }),
                React.createElement("span", null, "Layout")),
            React.createElement("div", { role: "button", tabIndex: 0, className: "item enabled toolbar-item action-label", id: "easy-open-item-icon", onClick: this.handleOpenClick, title: "Change Font" },
                React.createElement("div", { className: "codicon codicon-text-size" }),
                React.createElement("span", null, "Font Size")),
            React.createElement("div", { role: "button", tabIndex: 0, className: "item enabled toolbar-item action-label", id: "easy-open-item-icon", onClick: this.handleLockClick, title: "Lock File" },
                React.createElement("div", { className: "codicon codicon-lock" })),
            React.createElement("div", { role: "button", tabIndex: 0, className: "item enabled toolbar-item action-label", id: "easy-open-item-icon", onClick: this.handleNotificationClick, title: "Notifications" },
                React.createElement("div", { className: "codicon codicon-bell" }))));
    }
    registerCommands(registry) {
        registry.registerCommand(exports.LAYOUT_COMMAND, {
            execute: async () => {
                this.messageService.info("Change Layout - to be implemented, in command contribution");
            },
        });
        registry.registerCommand(exports.SAVE_COMMAND, {
            execute: async () => {
                this.messageService.info("Save File - to be implemented, in command contribution");
            },
        });
        registry.registerCommand(exports.OPEN_COMMAND, {
            execute: async () => {
                this.messageService.info("Open File - to be implemented, in command contribution");
            },
        });
        registry.registerCommand(exports.NOTIFICATION_COMMAND, {
            execute: async () => {
                this.messageService.info("Notifications - to be implemented, in command contribution");
            },
        });
        registry.registerCommand(exports.LOCK_COMMAND, {
            execute: async () => {
                this.messageService.info("Lock file - to be implemented, in command contribution");
            },
        });
    }
};
exports.LayoutsToolbarContribution = LayoutsToolbarContribution;
LayoutsToolbarContribution.ID = "scribe-theia-layout-toolbar-contribution";
__decorate([
    (0, inversify_1.inject)(browser_1.WorkspaceService),
    __metadata("design:type", browser_1.WorkspaceService)
], LayoutsToolbarContribution.prototype, "workspaceService", void 0);
__decorate([
    (0, inversify_1.inject)(core_1.MessageService),
    __metadata("design:type", core_1.MessageService)
], LayoutsToolbarContribution.prototype, "messageService", void 0);
exports.LayoutsToolbarContribution = LayoutsToolbarContribution = LayoutsToolbarContribution_1 = __decorate([
    (0, inversify_1.injectable)()
], LayoutsToolbarContribution);


/***/ }),

/***/ "../scribe-theia/lib/browser/toolbar-defaults-override.js":
/*!****************************************************************!*\
  !*** ../scribe-theia/lib/browser/toolbar-defaults-override.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ToolbarDefaultsOverride = void 0;
const toolbar_interfaces_1 = __webpack_require__(/*! @theia/toolbar/lib/browser/toolbar-interfaces */ "../node_modules/@theia/toolbar/lib/browser/toolbar-interfaces.js");
const ToolbarDefaultsOverride = () => ({
    items: {
        [toolbar_interfaces_1.ToolbarAlignment.LEFT]: [
            [
                {
                    id: "textEditor.commands.go.back",
                    command: "textEditor.commands.go.back",
                    icon: "codicon codicon-add",
                },
                {
                    id: "textEditor.commands.go.forward",
                    command: "textEditor.commands.go.forward",
                    icon: "codicon codicon-arrow-right",
                },
            ],
        ],
        [toolbar_interfaces_1.ToolbarAlignment.CENTER]: [
            [
                {
                    id: "workbench.action.splitEditorRight",
                    command: "workbench.action.splitEditor",
                    icon: "codicon codicon-split-horizontal",
                },
            ],
        ],
        [toolbar_interfaces_1.ToolbarAlignment.RIGHT]: [
            [
                {
                    id: "scribe-theia-layout-toolbar-contribution",
                    group: "contributed",
                },
                {
                    id: "workbench.action.showCommands",
                    command: "workbench.action.showCommands",
                    icon: "codicon codicon-terminal",
                    tooltip: "Command Palette",
                },
            ],
        ],
    },
});
exports.ToolbarDefaultsOverride = ToolbarDefaultsOverride;


/***/ }),

/***/ "../scribe-theia/lib/browser/widgets/AiSidebar.js":
/*!********************************************************!*\
  !*** ../scribe-theia/lib/browser/widgets/AiSidebar.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var AiSidebar_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AiSidebarContribution = exports.AiSidebarCommand = exports.AiSidebar = void 0;
const browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
const React = __importStar(__webpack_require__(/*! @theia/core/shared/react */ "../node_modules/@theia/core/shared/react/index.js"));
const inversify_1 = __webpack_require__(/*! @theia/core/shared/inversify */ "../node_modules/@theia/core/shared/inversify/index.js");
const browser_2 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
const frontend_application_state_1 = __webpack_require__(/*! @theia/core/lib/browser/frontend-application-state */ "../node_modules/@theia/core/lib/browser/frontend-application-state.js");
const browser_3 = __webpack_require__(/*! @theia/workspace/lib/browser */ "../node_modules/@theia/workspace/lib/browser/index.js");
const ScrollArea_1 = __webpack_require__(/*! ../../components/ui/ScrollArea */ "../scribe-theia/lib/components/ui/ScrollArea.js");
const Button_1 = __importDefault(__webpack_require__(/*! ../../components/Button */ "../scribe-theia/lib/components/Button.js"));
const icons_react_1 = __webpack_require__(/*! @tabler/icons-react */ "../node_modules/@tabler/icons-react/dist/esm/tabler-icons-react.mjs");
const TextArea_1 = __webpack_require__(/*! ../../components/ui/TextArea */ "../scribe-theia/lib/components/ui/TextArea.js");
const QuestionCard_1 = __importDefault(__webpack_require__(/*! ../../components/QuestionCard */ "../scribe-theia/lib/components/QuestionCard.js"));
let AiSidebar = AiSidebar_1 = class AiSidebar extends browser_1.ReactWidget {
    init() {
        this.doInit();
    }
    async doInit() {
        this.id = AiSidebar_1.ID;
        this.title.label = AiSidebar_1.LABEL;
        this.title.caption = AiSidebar_1.LABEL;
        this.title.closable = false;
        this.update();
    }
    onActivateRequest(msg) {
        super.onActivateRequest(msg);
        const elArr = this.node.getElementsByTagName("a");
        if (elArr && elArr.length > 0) {
            elArr[0].focus();
        }
    }
    render() {
        return (React.createElement(ScrollArea_1.ScrollArea, { className: "w-full h-full overflow-y-auto pb-2" },
            React.createElement(ScrollArea_1.ScrollBar, { orientation: "vertical" }),
            React.createElement("div", { className: "flex items-center sticky dark:bg-zinc-950 bg-white  top-0 z-20 gap-[5px] border-b py-2.5 px-2 dark:border-zinc-900 border-zinc-200 justify-center" },
                React.createElement(Button_1.default, { label: "Discuss", className: "dark:border-cyan-900 bg-cyan-100 hover:bg-cyan-200 dark:bg-cyan-950  border-cyan-300 text-cyan-700" }),
                React.createElement(Button_1.default, { label: "Suggest" }),
                React.createElement(Button_1.default, { label: "Checks" })),
            React.createElement("div", { className: "space-y-2.5   px-5 py-2.5" },
                React.createElement(QuestionCard_1.default, { isAudio: true }),
                React.createElement(QuestionCard_1.default, { isImage: true }),
                React.createElement(QuestionCard_1.default, null),
                React.createElement(QuestionCard_1.default, null),
                React.createElement(QuestionCard_1.default, null),
                React.createElement("div", { className: " absolute bottom-0 pt-4 pb-[11px] bg-white dark:bg-zinc-950 w-full left-0 px-5" },
                    React.createElement("div", { className: "relative" },
                        React.createElement(TextArea_1.Textarea, { className: "h-20", placeholder: "Ask AI Bot some questions" }),
                        React.createElement("div", { className: "flex absolute bottom-2.5 right-2.5 items-center gap-2.5" },
                            React.createElement(Button_1.default, { size: "icon", className: "dark:bg-cyan-500 bg-cyan-400 hover:bg-cyan-500 dark:hover:bg-cyan-400 text-zinc-800 dark:text-black  dark:border-cyan-700", icon: React.createElement(icons_react_1.IconPhoto, { size: 12, stroke: 2, strokeLinejoin: "miter" }) }),
                            React.createElement(Button_1.default, { size: "icon", className: "dark:bg-cyan-500 bg-cyan-400 hover:bg-cyan-500 dark:hover:bg-cyan-400 text-zinc-800 dark:text-black  dark:border-cyan-700", icon: React.createElement(icons_react_1.IconMicrophone, { size: 12, stroke: 2, strokeLinejoin: "miter" }) }),
                            React.createElement(Button_1.default, { size: "icon", className: "dark:bg-cyan-500 bg-cyan-400 hover:bg-cyan-500 dark:hover:bg-cyan-400 text-zinc-800 dark:text-black  dark:border-cyan-700", icon: React.createElement(icons_react_1.IconPhoto, { size: 12, stroke: 2, strokeLinejoin: "miter" }) })))))));
    }
};
exports.AiSidebar = AiSidebar;
AiSidebar.ID = "scribe.ai-sidebar";
AiSidebar.LABEL = "AI Sidebar";
__decorate([
    (0, inversify_1.postConstruct)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AiSidebar.prototype, "init", null);
exports.AiSidebar = AiSidebar = AiSidebar_1 = __decorate([
    (0, inversify_1.injectable)()
], AiSidebar);
/**
 * Triggers opening the `AiSidebar`.
 */
exports.AiSidebarCommand = {
    id: AiSidebar.ID,
    label: AiSidebar.LABEL,
};
let AiSidebarContribution = class AiSidebarContribution extends browser_2.AbstractViewContribution {
    constructor() {
        super({
            widgetId: AiSidebar.ID,
            widgetName: AiSidebar.LABEL,
            defaultWidgetOptions: {
                area: "right",
            },
        });
    }
    async onStart(app) {
        this.stateService
            .reachedState("ready")
            .then(() => this.openView({ reveal: true }));
    }
    registerCommands(registry) {
        registry.registerCommand(exports.AiSidebarCommand, {
            execute: () => this.openView({ reveal: true }),
        });
    }
    registerMenus(menus) {
        menus.registerMenuAction(browser_2.CommonMenus.HELP, {
            commandId: exports.AiSidebarCommand.id,
            label: exports.AiSidebarCommand.label,
            order: "a10",
        });
    }
};
exports.AiSidebarContribution = AiSidebarContribution;
__decorate([
    (0, inversify_1.inject)(frontend_application_state_1.FrontendApplicationStateService),
    __metadata("design:type", frontend_application_state_1.FrontendApplicationStateService)
], AiSidebarContribution.prototype, "stateService", void 0);
__decorate([
    (0, inversify_1.inject)(browser_3.WorkspaceService),
    __metadata("design:type", browser_3.WorkspaceService)
], AiSidebarContribution.prototype, "workspaceService", void 0);
exports.AiSidebarContribution = AiSidebarContribution = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], AiSidebarContribution);


/***/ }),

/***/ "../scribe-theia/lib/browser/widgets/BottomEditorLeft.js":
/*!***************************************************************!*\
  !*** ../scribe-theia/lib/browser/widgets/BottomEditorLeft.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var BottomEditorLeft_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BottomEditorLeftContribution = exports.BottomEditorLeft = void 0;
const browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
const React = __importStar(__webpack_require__(/*! @theia/core/shared/react */ "../node_modules/@theia/core/shared/react/index.js"));
const inversify_1 = __webpack_require__(/*! @theia/core/shared/inversify */ "../node_modules/@theia/core/shared/inversify/index.js");
const browser_2 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
const frontend_application_state_1 = __webpack_require__(/*! @theia/core/lib/browser/frontend-application-state */ "../node_modules/@theia/core/lib/browser/frontend-application-state.js");
const browser_3 = __webpack_require__(/*! @theia/workspace/lib/browser */ "../node_modules/@theia/workspace/lib/browser/index.js");
const Resizable_1 = __webpack_require__(/*! ../../components/ui/Resizable */ "../scribe-theia/lib/components/ui/Resizable.js");
const Badge_1 = __webpack_require__(/*! ../../components/ui/Badge */ "../scribe-theia/lib/components/ui/Badge.js");
let BottomEditorLeft = BottomEditorLeft_1 = class BottomEditorLeft extends browser_1.ReactWidget {
    init() {
        this.doInit();
    }
    async doInit() {
        this.id = BottomEditorLeft_1.ID;
        this.title.label = BottomEditorLeft_1.LABEL;
        this.title.caption = BottomEditorLeft_1.LABEL;
        this.title.closable = false;
        this.update();
    }
    onActivateRequest(msg) {
        super.onActivateRequest(msg);
        const elArr = this.node.getElementsByTagName("a");
        if (elArr && elArr.length > 0) {
            elArr[0].focus();
        }
    }
    render() {
        return (React.createElement(Resizable_1.ResizablePanelGroup, { direction: "vertical", className: "w-full" },
            React.createElement(Resizable_1.ResizablePanel, { defaultSize: 50 },
                React.createElement("div", { className: "px-5 py-2.5 space-y-5" },
                    React.createElement("div", { className: "flex items-center gap-2" },
                        React.createElement(Badge_1.Badge, { variant: "destructive" }, "Mark 1:9"),
                        React.createElement("p", { className: "tracking-wide text-xs font-semibold text-zinc-300 dark:text-zinc-700" }, "Alignment")),
                    React.createElement("p", { className: "dark:text-zinc-50 text-zinc-700 text-sm  font-medium tracking-wide leading-4" }, "Cierto dia, Jes\u00FAs lleg\u00F3 de Nazaret de Galilea, y Juan lo bautiz\u00F3 en el rio Jord\u00E1n."))),
            React.createElement(Resizable_1.ResizableHandle, null),
            React.createElement(Resizable_1.ResizablePanel, { className: "p-5", defaultSize: 50 },
                React.createElement("p", { className: "dark:text-zinc-50 text-zinc-700 dark:selection:bg-emerald-500 selection:bg-emerald-100  text-sm tracking-wide font-medium leading-4" },
                    React.createElement("span", { className: "dark:bg-emerald-500 bg-emerald-100" }, "One day Jesus"),
                    " ",
                    "went from",
                    " ",
                    React.createElement("span", { className: "dark:bg-emerald-500 bg-emerald-100" }, "Nazareth"),
                    " ",
                    "in",
                    " ",
                    React.createElement("span", { className: "dark:bg-emerald-500 bg-emerald-100" },
                        "Galilee,",
                        " "),
                    " ",
                    "and James I baptized him in the river."))));
    }
};
exports.BottomEditorLeft = BottomEditorLeft;
BottomEditorLeft.ID = "scribe.editor.bottom.left";
BottomEditorLeft.LABEL = "Editor Main Left";
__decorate([
    (0, inversify_1.postConstruct)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BottomEditorLeft.prototype, "init", null);
exports.BottomEditorLeft = BottomEditorLeft = BottomEditorLeft_1 = __decorate([
    (0, inversify_1.injectable)()
], BottomEditorLeft);
let BottomEditorLeftContribution = class BottomEditorLeftContribution extends browser_2.AbstractViewContribution {
    constructor() {
        super({
            widgetId: BottomEditorLeft.ID,
            widgetName: BottomEditorLeft.LABEL,
            defaultWidgetOptions: {
                area: "bottom",
            },
        });
    }
    async onStart(app) {
        this.stateService
            .reachedState("ready")
            .then(() => this.openView({ reveal: true, area: "bottom" }));
    }
};
exports.BottomEditorLeftContribution = BottomEditorLeftContribution;
__decorate([
    (0, inversify_1.inject)(frontend_application_state_1.FrontendApplicationStateService),
    __metadata("design:type", frontend_application_state_1.FrontendApplicationStateService)
], BottomEditorLeftContribution.prototype, "stateService", void 0);
__decorate([
    (0, inversify_1.inject)(browser_3.WorkspaceService),
    __metadata("design:type", browser_3.WorkspaceService)
], BottomEditorLeftContribution.prototype, "workspaceService", void 0);
exports.BottomEditorLeftContribution = BottomEditorLeftContribution = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], BottomEditorLeftContribution);


/***/ }),

/***/ "../scribe-theia/lib/browser/widgets/BottomEditorRight.js":
/*!****************************************************************!*\
  !*** ../scribe-theia/lib/browser/widgets/BottomEditorRight.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var BottomEditorRightWidget_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BottomEditorRightContribution = exports.BottomEditorRightWidget = void 0;
const browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
const React = __importStar(__webpack_require__(/*! @theia/core/shared/react */ "../node_modules/@theia/core/shared/react/index.js"));
const inversify_1 = __webpack_require__(/*! @theia/core/shared/inversify */ "../node_modules/@theia/core/shared/inversify/index.js");
const browser_2 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
const frontend_application_state_1 = __webpack_require__(/*! @theia/core/lib/browser/frontend-application-state */ "../node_modules/@theia/core/lib/browser/frontend-application-state.js");
const browser_3 = __webpack_require__(/*! @theia/workspace/lib/browser */ "../node_modules/@theia/workspace/lib/browser/index.js");
const Button_1 = __importDefault(__webpack_require__(/*! ../../components/Button */ "../scribe-theia/lib/components/Button.js"));
let BottomEditorRightWidget = BottomEditorRightWidget_1 = class BottomEditorRightWidget extends browser_1.ReactWidget {
    init() {
        this.doInit();
    }
    async doInit() {
        this.id = BottomEditorRightWidget_1.ID;
        this.title.label = BottomEditorRightWidget_1.LABEL;
        this.title.caption = BottomEditorRightWidget_1.LABEL;
        this.title.closable = false;
        this.update();
    }
    onActivateRequest(msg) {
        super.onActivateRequest(msg);
        const elArr = this.node.getElementsByTagName("a");
        if (elArr && elArr.length > 0) {
            elArr[0].focus();
        }
    }
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement("p", { className: "font-semibold text-xs text-center tracking-wide leading-4 dark:text-zinc-50 text-zinc-700" }, "Tsv translation notes english"),
            React.createElement("div", { className: "mt-2.5 rounded-lg flex items-center justify-between gap-[5px] dark:bg-zinc-900 bg-zinc-200  p-[5px]" },
                React.createElement(Button_1.default, { label: "Book", className: "dark:bg-zinc-800 bg-zinc-50 hover:bg-zinc-100 dark:text-zinc-50 text-zinc-700 w-1/3 uppercase font-semibold" }),
                React.createElement(Button_1.default, { label: "Chapter", className: "dark:bg-zinc-800 bg-zinc-50 hover:bg-zinc-100 dark:text-zinc-50 text-zinc-700 w-1/3 uppercase font-semibold" }),
                React.createElement(Button_1.default, { label: "Verse", className: "dark:bg-zinc-800 bg-zinc-50 hover:bg-zinc-100 dark:text-zinc-50 text-zinc-700 w-1/3 uppercase font-semibold" })),
            React.createElement("article", { className: "dark:text-zinc-50 px-2 text-zinc-700 leading-[18px] mt-2.5   text-xs tracking-wide text-center whitespace-pre-line" }, "1:9b and was baptized by John in the Jordan. and [then] John baptized Jesus/him in the Jordan [River]. -OR- \u2022 [When he arrived at the place where John was preaching,| John baptized him in the Jordan [River]."),
            React.createElement("div", null)));
    }
};
exports.BottomEditorRightWidget = BottomEditorRightWidget;
BottomEditorRightWidget.ID = "scribe.editor.bottom.right";
BottomEditorRightWidget.LABEL = "Editor Bottom Right";
__decorate([
    (0, inversify_1.postConstruct)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BottomEditorRightWidget.prototype, "init", null);
exports.BottomEditorRightWidget = BottomEditorRightWidget = BottomEditorRightWidget_1 = __decorate([
    (0, inversify_1.injectable)()
], BottomEditorRightWidget);
let BottomEditorRightContribution = class BottomEditorRightContribution extends browser_2.AbstractViewContribution {
    constructor() {
        super({
            widgetId: BottomEditorRightWidget.ID,
            widgetName: BottomEditorRightWidget.LABEL,
            defaultWidgetOptions: {
                area: "main",
                mode: "split-right",
            },
        });
    }
    async onStart(app) {
        this.stateService
            .reachedState("ready")
            .then(() => this.openView({ reveal: true, area: "bottom", mode: "split-right" }));
    }
};
exports.BottomEditorRightContribution = BottomEditorRightContribution;
__decorate([
    (0, inversify_1.inject)(frontend_application_state_1.FrontendApplicationStateService),
    __metadata("design:type", frontend_application_state_1.FrontendApplicationStateService)
], BottomEditorRightContribution.prototype, "stateService", void 0);
__decorate([
    (0, inversify_1.inject)(browser_3.WorkspaceService),
    __metadata("design:type", browser_3.WorkspaceService)
], BottomEditorRightContribution.prototype, "workspaceService", void 0);
exports.BottomEditorRightContribution = BottomEditorRightContribution = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], BottomEditorRightContribution);


/***/ }),

/***/ "../scribe-theia/lib/browser/widgets/MainEditorLeft.js":
/*!*************************************************************!*\
  !*** ../scribe-theia/lib/browser/widgets/MainEditorLeft.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var MainEditorLeftWidget_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MainEditorLeftContribution = exports.MainEditorLeftWidget = void 0;
const browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
const React = __importStar(__webpack_require__(/*! @theia/core/shared/react */ "../node_modules/@theia/core/shared/react/index.js"));
const inversify_1 = __webpack_require__(/*! @theia/core/shared/inversify */ "../node_modules/@theia/core/shared/inversify/index.js");
const browser_2 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
const frontend_application_state_1 = __webpack_require__(/*! @theia/core/lib/browser/frontend-application-state */ "../node_modules/@theia/core/lib/browser/frontend-application-state.js");
const browser_3 = __webpack_require__(/*! @theia/workspace/lib/browser */ "../node_modules/@theia/workspace/lib/browser/index.js");
const ChapterReading_1 = __importDefault(__webpack_require__(/*! ../../components/ChapterReading */ "../scribe-theia/lib/components/ChapterReading.js"));
let MainEditorLeftWidget = MainEditorLeftWidget_1 = class MainEditorLeftWidget extends browser_1.ReactWidget {
    init() {
        this.doInit();
    }
    async doInit() {
        this.id = MainEditorLeftWidget_1.ID;
        this.title.label = MainEditorLeftWidget_1.LABEL;
        this.title.caption = MainEditorLeftWidget_1.LABEL;
        this.title.closable = false;
        this.update();
    }
    onActivateRequest(msg) {
        super.onActivateRequest(msg);
        const elArr = this.node.getElementsByTagName("a");
        if (elArr && elArr.length > 0) {
            elArr[0].focus();
        }
    }
    render() {
        return (React.createElement(ChapterReading_1.default, { version: "NTV", chapterName: "Marcos", verse: "1", scripture: 'Marcos 1 Juan el Bautista prepara el camino \' Esta es la Buena Noticia acerca de Jes\u00FAs el Mes\u00EDas, el Hijo de Dios. Comenz\u00F3 2 tal como el profeta Isa\u00EDas hab\u00EDa escrito: \u00ABMira, envio a mi mensajero delante de ti, y \u00E9l preparar\u00E1 tu camino. 3 Es una voz que clama en el desierto: "\u00A1Preparen el camino para la venida del Se\u00F1or! \u00A1\u00C1branle camino!"\u00BB. 4 Ese mensajero era Juan el Bautista. Estaba en el desierto y predicaba que la gente deb\u00EDa ser bautizada para demostrar que se hab\u00EDa arrepentido de sus pecados y vuelto a Dios para ser perdonada. 5 Toda la gente de Judea, incluidos los habitantes de Jerusal\u00E9n, sal\u00EDan para ver y o\u00EDr a Juan; y cuando confesaban sus pecados, \u00E9l los bautizaba en el r\u00EDo Jord\u00E1n.' }));
    }
};
exports.MainEditorLeftWidget = MainEditorLeftWidget;
MainEditorLeftWidget.ID = "scribe.editor.main.left";
MainEditorLeftWidget.LABEL = "Editor Main Left";
__decorate([
    (0, inversify_1.postConstruct)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MainEditorLeftWidget.prototype, "init", null);
exports.MainEditorLeftWidget = MainEditorLeftWidget = MainEditorLeftWidget_1 = __decorate([
    (0, inversify_1.injectable)()
], MainEditorLeftWidget);
let MainEditorLeftContribution = class MainEditorLeftContribution extends browser_2.AbstractViewContribution {
    constructor() {
        super({
            widgetId: MainEditorLeftWidget.ID,
            widgetName: MainEditorLeftWidget.LABEL,
            defaultWidgetOptions: {
                area: "main",
            },
        });
    }
    async onStart(app) {
        this.stateService
            .reachedState("ready")
            .then(() => this.openView({ reveal: true, area: "main" }));
    }
};
exports.MainEditorLeftContribution = MainEditorLeftContribution;
__decorate([
    (0, inversify_1.inject)(frontend_application_state_1.FrontendApplicationStateService),
    __metadata("design:type", frontend_application_state_1.FrontendApplicationStateService)
], MainEditorLeftContribution.prototype, "stateService", void 0);
__decorate([
    (0, inversify_1.inject)(browser_3.WorkspaceService),
    __metadata("design:type", browser_3.WorkspaceService)
], MainEditorLeftContribution.prototype, "workspaceService", void 0);
exports.MainEditorLeftContribution = MainEditorLeftContribution = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], MainEditorLeftContribution);


/***/ }),

/***/ "../scribe-theia/lib/browser/widgets/MainEditorRight.js":
/*!**************************************************************!*\
  !*** ../scribe-theia/lib/browser/widgets/MainEditorRight.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var MainEditorRightWidget_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MainEditorRightContribution = exports.MainEditorRightWidget = void 0;
const browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
const React = __importStar(__webpack_require__(/*! @theia/core/shared/react */ "../node_modules/@theia/core/shared/react/index.js"));
const inversify_1 = __webpack_require__(/*! @theia/core/shared/inversify */ "../node_modules/@theia/core/shared/inversify/index.js");
const browser_2 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
const frontend_application_state_1 = __webpack_require__(/*! @theia/core/lib/browser/frontend-application-state */ "../node_modules/@theia/core/lib/browser/frontend-application-state.js");
const browser_3 = __webpack_require__(/*! @theia/workspace/lib/browser */ "../node_modules/@theia/workspace/lib/browser/index.js");
const ChapterReading_1 = __importDefault(__webpack_require__(/*! ../../components/ChapterReading */ "../scribe-theia/lib/components/ChapterReading.js"));
let MainEditorRightWidget = MainEditorRightWidget_1 = class MainEditorRightWidget extends browser_1.ReactWidget {
    init() {
        this.doInit();
    }
    async doInit() {
        this.id = MainEditorRightWidget_1.ID;
        this.title.label = MainEditorRightWidget_1.LABEL;
        this.title.caption = MainEditorRightWidget_1.LABEL;
        this.title.closable = false;
        this.update();
    }
    onActivateRequest(msg) {
        super.onActivateRequest(msg);
        const elArr = this.node.getElementsByTagName("a");
        if (elArr && elArr.length > 0) {
            elArr[0].focus();
        }
    }
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement(ChapterReading_1.default, { version: "NLT", chapterName: "Mark", verse: "1", scripture: "John the Baptist Prepares the Way\n1 This is the Good News about Jesus the Messiah, the Son of God. It began 2\njust as the prophet Isaiah had written:\n\"Look, I am sending my messenger ahead of you,\nand he will prepare your way.\n3 He is a voice shouting in the wilderness,\n'Prepare the way for the Lord's coming!\nClear the road for him!\"\n4 This messenger was John the Baptist. He was in the wilderness and\npreached that people should be baptized to show that they had repented of\ntheir sins and turned to God to be forgiven. 5 All of Judea, including all the\npeople of Jerusalem, went out to see and hear John. And when they\nconfessed their sins, he baptized them in the Jordan River." })));
    }
};
exports.MainEditorRightWidget = MainEditorRightWidget;
MainEditorRightWidget.ID = "scribe.editor.main.right";
MainEditorRightWidget.LABEL = "Editor Main Right";
__decorate([
    (0, inversify_1.postConstruct)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MainEditorRightWidget.prototype, "init", null);
exports.MainEditorRightWidget = MainEditorRightWidget = MainEditorRightWidget_1 = __decorate([
    (0, inversify_1.injectable)()
], MainEditorRightWidget);
let MainEditorRightContribution = class MainEditorRightContribution extends browser_2.AbstractViewContribution {
    constructor() {
        super({
            widgetId: MainEditorRightWidget.ID,
            widgetName: MainEditorRightWidget.LABEL,
            defaultWidgetOptions: {
                area: "main",
                mode: "split-right",
            },
        });
    }
    async onStart(app) {
        this.stateService
            .reachedState("ready")
            .then(() => this.openView({ reveal: true, area: "main", mode: "split-right" }));
    }
};
exports.MainEditorRightContribution = MainEditorRightContribution;
__decorate([
    (0, inversify_1.inject)(frontend_application_state_1.FrontendApplicationStateService),
    __metadata("design:type", frontend_application_state_1.FrontendApplicationStateService)
], MainEditorRightContribution.prototype, "stateService", void 0);
__decorate([
    (0, inversify_1.inject)(browser_3.WorkspaceService),
    __metadata("design:type", browser_3.WorkspaceService)
], MainEditorRightContribution.prototype, "workspaceService", void 0);
exports.MainEditorRightContribution = MainEditorRightContribution = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], MainEditorRightContribution);


/***/ }),

/***/ "../scribe-theia/lib/browser/widgets/index.js":
/*!****************************************************!*\
  !*** ../scribe-theia/lib/browser/widgets/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.bindAllWidgetsContributions = void 0;
const browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
const AiSidebar_1 = __webpack_require__(/*! ./AiSidebar */ "../scribe-theia/lib/browser/widgets/AiSidebar.js");
const MainEditorLeft_1 = __webpack_require__(/*! ./MainEditorLeft */ "../scribe-theia/lib/browser/widgets/MainEditorLeft.js");
const MainEditorRight_1 = __webpack_require__(/*! ./MainEditorRight */ "../scribe-theia/lib/browser/widgets/MainEditorRight.js");
const BottomEditorLeft_1 = __webpack_require__(/*! ./BottomEditorLeft */ "../scribe-theia/lib/browser/widgets/BottomEditorLeft.js");
const BottomEditorRight_1 = __webpack_require__(/*! ./BottomEditorRight */ "../scribe-theia/lib/browser/widgets/BottomEditorRight.js");
const bindAllWidgetsContributions = (bind) => {
    // sidebar widget binds
    (0, browser_1.bindViewContribution)(bind, AiSidebar_1.AiSidebarContribution);
    bind(browser_1.FrontendApplicationContribution).toService(AiSidebar_1.AiSidebarContribution);
    bind(AiSidebar_1.AiSidebar).toSelf();
    bind(browser_1.WidgetFactory)
        .toDynamicValue((context) => ({
        id: AiSidebar_1.AiSidebar.ID,
        createWidget: () => context.container.get(AiSidebar_1.AiSidebar),
    }))
        .inSingletonScope();
    // left editor widget binds
    (0, browser_1.bindViewContribution)(bind, MainEditorLeft_1.MainEditorLeftContribution);
    bind(browser_1.FrontendApplicationContribution).toService(MainEditorLeft_1.MainEditorLeftContribution);
    bind(MainEditorLeft_1.MainEditorLeftWidget).toSelf();
    bind(browser_1.WidgetFactory)
        .toDynamicValue((context) => ({
        id: MainEditorLeft_1.MainEditorLeftWidget.ID,
        createWidget: () => context.container.get(MainEditorLeft_1.MainEditorLeftWidget),
    }))
        .inSingletonScope();
    // right editor widget binds
    (0, browser_1.bindViewContribution)(bind, MainEditorRight_1.MainEditorRightContribution);
    bind(browser_1.FrontendApplicationContribution).toService(MainEditorRight_1.MainEditorRightContribution);
    bind(MainEditorRight_1.MainEditorRightWidget).toSelf();
    bind(browser_1.WidgetFactory)
        .toDynamicValue((context) => ({
        id: MainEditorRight_1.MainEditorRightWidget.ID,
        createWidget: () => context.container.get(MainEditorRight_1.MainEditorRightWidget),
    }))
        .inSingletonScope();
    // Bottom Editor Left
    (0, browser_1.bindViewContribution)(bind, BottomEditorLeft_1.BottomEditorLeftContribution);
    bind(browser_1.FrontendApplicationContribution).toService(BottomEditorLeft_1.BottomEditorLeftContribution);
    bind(BottomEditorLeft_1.BottomEditorLeft).toSelf();
    bind(browser_1.WidgetFactory)
        .toDynamicValue((context) => ({
        id: BottomEditorLeft_1.BottomEditorLeft.ID,
        createWidget: () => context.container.get(BottomEditorLeft_1.BottomEditorLeft),
    }))
        .inSingletonScope();
    // Bottom Editor Right
    (0, browser_1.bindViewContribution)(bind, BottomEditorRight_1.BottomEditorRightContribution);
    bind(browser_1.FrontendApplicationContribution).toService(BottomEditorRight_1.BottomEditorRightContribution);
    bind(BottomEditorRight_1.BottomEditorRightWidget).toSelf();
    bind(browser_1.WidgetFactory)
        .toDynamicValue((context) => ({
        id: BottomEditorRight_1.BottomEditorRightWidget.ID,
        createWidget: () => context.container.get(BottomEditorRight_1.BottomEditorRightWidget),
    }))
        .inSingletonScope();
};
exports.bindAllWidgetsContributions = bindAllWidgetsContributions;


/***/ }),

/***/ "../scribe-theia/lib/components/Button.js":
/*!************************************************!*\
  !*** ../scribe-theia/lib/components/Button.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = Button;
const React = __importStar(__webpack_require__(/*! @theia/core/shared/react */ "../node_modules/@theia/core/shared/react/index.js"));
const Button_1 = __webpack_require__(/*! ./ui/Button */ "../scribe-theia/lib/components/ui/Button.js");
function Button({ label, icon, size, className, onClick, }) {
    return (React.createElement(Button_1.Buttons, { onClick: onClick, size: size, className: className, variant: "outline" },
        icon,
        label));
}


/***/ }),

/***/ "../scribe-theia/lib/components/ChapterReading.js":
/*!********************************************************!*\
  !*** ../scribe-theia/lib/components/ChapterReading.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = ChapterReading;
const React = __importStar(__webpack_require__(/*! @theia/core/shared/react */ "../node_modules/@theia/core/shared/react/index.js"));
const Badge_1 = __webpack_require__(/*! ../components/ui/Badge */ "../scribe-theia/lib/components/ui/Badge.js");
const icons_react_1 = __webpack_require__(/*! @tabler/icons-react */ "../node_modules/@tabler/icons-react/dist/esm/tabler-icons-react.mjs");
const Button_1 = __importDefault(__webpack_require__(/*! ../components/Button */ "../scribe-theia/lib/components/Button.js"));
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


/***/ }),

/***/ "../scribe-theia/lib/components/QuestionCard.js":
/*!******************************************************!*\
  !*** ../scribe-theia/lib/components/QuestionCard.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = QuestionCard;
const icons_react_1 = __webpack_require__(/*! @tabler/icons-react */ "../node_modules/@tabler/icons-react/dist/esm/tabler-icons-react.mjs");
const React = __importStar(__webpack_require__(/*! @theia/core/shared/react */ "../node_modules/@theia/core/shared/react/index.js"));
// import IconWaveForm from "../../src/icons/wave-form.svg";
// import IconVolume from "../../src/icons/volume.svg";
const Badge_1 = __webpack_require__(/*! ../components/ui/Badge */ "../scribe-theia/lib/components/ui/Badge.js");
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


/***/ }),

/***/ "../scribe-theia/lib/components/TranslationNotes/TranslationNote.js":
/*!**************************************************************************!*\
  !*** ../scribe-theia/lib/components/TranslationNotes/TranslationNote.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(/*! react */ "../node_modules/react/index.js"));
const tsv_1 = __webpack_require__(/*! ../../utils/tsv */ "../scribe-theia/lib/utils/tsv.js");
/**
 * @component
 * @description
 * `TranslationNote` renders a translation note which includes a heading (Quote) and the note's content (Note).
 * The note content is converted from Markdown to HTML for rendering. The component expects a `note` object
 * as a prop, conforming to the `TranslationNoteType` interface.
 *
 * The `Quote` is displayed as the heading of the note. If `Quote` is not provided or is an empty string,
 * "General Verse Note" is used as a fallback. The `Note` content is processed through `markdownToHTML`
 * function to convert Markdown formatted text into HTML.
 */
const TranslationNote = ({ note: { ID, Quote, Note }, }) => {
    const effectiveQuote = Quote || "General Verse Note";
    return (react_1.default.createElement("div", { id: `note_${ID}` },
        react_1.default.createElement("h3", null, effectiveQuote),
        react_1.default.createElement("div", { dangerouslySetInnerHTML: { __html: (0, tsv_1.markdownToHTML)(Note) } })));
};
exports["default"] = TranslationNote;


/***/ }),

/***/ "../scribe-theia/lib/components/TranslationNotes/TranslationNoteScroller.js":
/*!**********************************************************************************!*\
  !*** ../scribe-theia/lib/components/TranslationNotes/TranslationNoteScroller.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(/*! react */ "../node_modules/react/index.js"));
const react_2 = __webpack_require__(/*! @vscode/webview-ui-toolkit/react */ "../node_modules/@vscode/webview-ui-toolkit/react/index.js");
const TranslationNote_1 = __importDefault(__webpack_require__(/*! ./TranslationNote */ "../scribe-theia/lib/components/TranslationNotes/TranslationNote.js"));
const TranslationNoteScroller = ({ notes, currentIndex, incrementIndex, decrementIndex, }) => {
    return (react_1.default.createElement("div", { className: "scroller-container" },
        react_1.default.createElement("div", { id: "note-position" },
            currentIndex + 1,
            " of ",
            notes.length),
        react_1.default.createElement("div", { className: "column-container" },
            react_1.default.createElement(react_2.VSCodeButton, { onClick: decrementIndex, appearance: "icon", "aria-label": "left" },
                react_1.default.createElement("span", { className: "arrow-button codicon codicon-chevron-left" })),
            react_1.default.createElement("div", { id: "note-container" },
                react_1.default.createElement(TranslationNote_1.default, { note: notes[currentIndex] })),
            react_1.default.createElement(react_2.VSCodeButton, { onClick: incrementIndex, appearance: "icon", "aria-label": "right" },
                react_1.default.createElement("span", { className: "arrow-button codicon codicon-chevron-right" })))));
};
exports["default"] = TranslationNoteScroller;


/***/ }),

/***/ "../scribe-theia/lib/components/TranslationNotes/TranslationNotesView.js":
/*!*******************************************************************************!*\
  !*** ../scribe-theia/lib/components/TranslationNotes/TranslationNotesView.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.extractBookChapterVerse = void 0;
const react_1 = __webpack_require__(/*! react */ "../node_modules/react/index.js");
const react_2 = __webpack_require__(/*! @vscode/webview-ui-toolkit/react */ "../node_modules/@vscode/webview-ui-toolkit/react/index.js");
const react_3 = __importDefault(__webpack_require__(/*! @theia/core/shared/react */ "../node_modules/@theia/core/shared/react/index.js"));
const TranslationNoteScroller_1 = __importDefault(__webpack_require__(/*! ./TranslationNoteScroller */ "../scribe-theia/lib/components/TranslationNotes/TranslationNoteScroller.js"));
const extractBookChapterVerse = (refString) => {
    const match = refString.match(/([A-Za-z0-9]{3}) (\d+):(\d+)/);
    return match
        ? {
            bookID: match[1],
            chapter: parseInt(match[2], 10),
            verse: parseInt(match[3], 10),
        }
        : { bookID: "GEN", chapter: 1, verse: 1 };
};
exports.extractBookChapterVerse = extractBookChapterVerse;
function TranslationNotesView({ tnTsv, ref, }) {
    var _a;
    const [chapter, setChapter] = (0, react_1.useState)(1);
    const [verse, setVerse] = (0, react_1.useState)(1);
    const [noteIndex, setNoteIndex] = (0, react_1.useState)(0);
    const [translationNotesObj, setTranslationNotesObj] = (0, react_1.useState)(tnTsv);
    const changeChapterVerse = (ref) => {
        const { verseRef } = ref;
        const { chapter: newChapter, verse: newVerse } = (0, exports.extractBookChapterVerse)(verseRef);
        setChapter(newChapter);
        setVerse(newVerse);
        setNoteIndex(0);
    };
    const handleMessage = (event) => {
        const { command, data } = event.data;
        1;
        const commandToFunctionMapping = {
            ["changeRef"]: (data) => changeChapterVerse(data),
        };
        commandToFunctionMapping[command](data);
    };
    const incrementNoteIndex = () => setNoteIndex((prevIndex) => prevIndex < translationNotesObj[chapter][verse].length - 1
        ? prevIndex + 1
        : prevIndex);
    const decrementNoteIndex = () => setNoteIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    const content = ((_a = translationNotesObj === null || translationNotesObj === void 0 ? void 0 : translationNotesObj[chapter]) === null || _a === void 0 ? void 0 : _a[verse]) ? (react_3.default.createElement(TranslationNoteScroller_1.default, { notes: translationNotesObj[chapter][verse] || {}, currentIndex: noteIndex, incrementIndex: incrementNoteIndex, decrementIndex: decrementNoteIndex })) : ("No translation notes available for this verse.");
    return (react_3.default.createElement("main", null,
        react_3.default.createElement("section", { className: "translation-note-view" },
            react_3.default.createElement(react_2.VSCodePanels, { activeid: "tab-verse", "aria-label": "note-type-tab" },
                react_3.default.createElement(react_2.VSCodePanelTab, { id: "tab-verse" }, "VERSE NOTES"),
                react_3.default.createElement(react_2.VSCodePanelView, { id: "view-verse" }, content)))));
}
exports["default"] = TranslationNotesView;


/***/ }),

/***/ "../scribe-theia/lib/components/ui/Badge.js":
/*!**************************************************!*\
  !*** ../scribe-theia/lib/components/ui/Badge.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.badgeVariants = void 0;
exports.Badge = Badge;
const React = __importStar(__webpack_require__(/*! react */ "../node_modules/react/index.js"));
const class_variance_authority_1 = __webpack_require__(/*! class-variance-authority */ "../node_modules/class-variance-authority/dist/index.js");
const clsx_1 = __webpack_require__(/*! ../../utils/clsx */ "../scribe-theia/lib/utils/clsx.js");
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


/***/ }),

/***/ "../scribe-theia/lib/components/ui/Button.js":
/*!***************************************************!*\
  !*** ../scribe-theia/lib/components/ui/Button.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.buttonVariants = exports.Buttons = void 0;
const React = __importStar(__webpack_require__(/*! react */ "../node_modules/react/index.js"));
const react_slot_1 = __webpack_require__(/*! @radix-ui/react-slot */ "../node_modules/@radix-ui/react-slot/dist/index.js");
const class_variance_authority_1 = __webpack_require__(/*! class-variance-authority */ "../node_modules/class-variance-authority/dist/index.js");
const clsx_1 = __webpack_require__(/*! ../../utils/clsx */ "../scribe-theia/lib/utils/clsx.js");
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


/***/ }),

/***/ "../scribe-theia/lib/components/ui/Resizable.js":
/*!******************************************************!*\
  !*** ../scribe-theia/lib/components/ui/Resizable.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use client";
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResizableHandle = exports.ResizablePanel = exports.ResizablePanelGroup = void 0;
const React = __importStar(__webpack_require__(/*! react */ "../node_modules/react/index.js"));
const lucide_react_1 = __webpack_require__(/*! lucide-react */ "../node_modules/lucide-react/dist/esm/lucide-react.js");
const ResizablePrimitive = __importStar(__webpack_require__(/*! react-resizable-panels */ "../node_modules/react-resizable-panels/dist/react-resizable-panels.browser.development.esm.js"));
const clsx_1 = __webpack_require__(/*! ../../utils/clsx */ "../scribe-theia/lib/utils/clsx.js");
const ResizablePanelGroup = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(ResizablePrimitive.PanelGroup, Object.assign({ className: (0, clsx_1.cn)("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", className) }, props)));
};
exports.ResizablePanelGroup = ResizablePanelGroup;
const ResizablePanel = ResizablePrimitive.Panel;
exports.ResizablePanel = ResizablePanel;
const ResizableHandle = (_a) => {
    var { withHandle, className } = _a, props = __rest(_a, ["withHandle", "className"]);
    return (React.createElement(ResizablePrimitive.PanelResizeHandle, Object.assign({ className: (0, clsx_1.cn)("relative flex w-px items-center justify-center bg-border border border-zinc-100 dark:border-zinc-900 after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90", className) }, props), withHandle && (React.createElement("div", { className: "z-10 flex py-[6px] text-zinc-700 dark:text-zinc-50  px-1 items-center justify-center rounded-lg border dark:border-zinc-800 border-zinc-300 bg-zinc-50 dark:bg-zinc-900" },
        React.createElement(lucide_react_1.GripVertical, { className: "h-4 w-4" })))));
};
exports.ResizableHandle = ResizableHandle;


/***/ }),

/***/ "../scribe-theia/lib/components/ui/ScrollArea.js":
/*!*******************************************************!*\
  !*** ../scribe-theia/lib/components/ui/ScrollArea.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use client";
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ScrollBar = exports.ScrollArea = void 0;
const React = __importStar(__webpack_require__(/*! react */ "../node_modules/react/index.js"));
const ScrollAreaPrimitive = __importStar(__webpack_require__(/*! @radix-ui/react-scroll-area */ "../node_modules/@radix-ui/react-scroll-area/dist/index.js"));
const clsx_1 = __webpack_require__(/*! ../../utils/clsx */ "../scribe-theia/lib/utils/clsx.js");
const ScrollArea = React.forwardRef((_a, ref) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (React.createElement(ScrollAreaPrimitive.Root, Object.assign({ ref: ref, className: (0, clsx_1.cn)("relative overflow-hidden", className) }, props),
        React.createElement(ScrollAreaPrimitive.Viewport, { className: "h-full w-full rounded-[inherit]" }, children),
        React.createElement(ScrollBar, null),
        React.createElement(ScrollAreaPrimitive.Corner, null)));
});
exports.ScrollArea = ScrollArea;
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
const ScrollBar = React.forwardRef((_a, ref) => {
    var { className, orientation = "vertical" } = _a, props = __rest(_a, ["className", "orientation"]);
    return (React.createElement(ScrollAreaPrimitive.ScrollAreaScrollbar, Object.assign({ ref: ref, orientation: orientation, className: (0, clsx_1.cn)("flex touch-none select-none transition-colors", orientation === "vertical" &&
            "h-full w-2.5 border-l border-l-transparent p-[1px]", orientation === "horizontal" &&
            "h-2.5 flex-col border-t border-t-transparent p-[1px]", className) }, props),
        React.createElement(ScrollAreaPrimitive.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-white" })));
});
exports.ScrollBar = ScrollBar;
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;


/***/ }),

/***/ "../scribe-theia/lib/components/ui/TextArea.js":
/*!*****************************************************!*\
  !*** ../scribe-theia/lib/components/ui/TextArea.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Textarea = void 0;
const React = __importStar(__webpack_require__(/*! react */ "../node_modules/react/index.js"));
const clsx_1 = __webpack_require__(/*! ../../utils/clsx */ "../scribe-theia/lib/utils/clsx.js");
const Textarea = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement("textarea", Object.assign({ className: (0, clsx_1.cn)("flex min-h-[80px] w-full rounded-[20px] border dark:border-zinc-900 border-zinc-200 bg-zinc-50 dark:text-zinc-50 text-zinc-700 dark:bg-zinc-900 px-4 py-3 text-xs ring-offset-background dark:placeholder:text-zinc-50 placeholder:text-zinc-600 focus-visible:outline-none focus:border-cyan-500 focus-visible:ring focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className), ref: ref }, props)));
});
exports.Textarea = Textarea;
Textarea.displayName = "Textarea";


/***/ }),

/***/ "../scribe-theia/lib/utils/clsx.js":
/*!*****************************************!*\
  !*** ../scribe-theia/lib/utils/clsx.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.cn = cn;
const clsx_1 = __webpack_require__(/*! clsx */ "../node_modules/clsx/dist/clsx.js");
const tailwind_merge_1 = __webpack_require__(/*! tailwind-merge */ "../node_modules/tailwind-merge/dist/bundle-cjs.js");
function cn(...inputs) {
    return (0, tailwind_merge_1.twMerge)((0, clsx_1.clsx)(inputs));
}


/***/ }),

/***/ "../scribe-theia/lib/utils/translationNotes.js":
/*!*****************************************************!*\
  !*** ../scribe-theia/lib/utils/translationNotes.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getDocumentAsScriptureTSV = void 0;
const tsv_1 = __webpack_require__(/*! ./tsv */ "../scribe-theia/lib/utils/tsv.js");
const getDocumentAsScriptureTSV = async (verseRef, resourceUri, fs) => {
    const { bookID } = (0, tsv_1.extractBookChapterVerse)(verseRef);
    const docUri = resourceUri.withPath(resourceUri.path.join(`tn_${bookID}.tsv`));
    const doc = await fs.readFile(docUri);
    const text = doc.toString();
    if (text.trim().length === 0) {
        return {};
    }
    try {
        return (0, tsv_1.tsvStringToScriptureTSV)(text);
    }
    catch (_a) {
        throw new Error("Could not get document as json. Content is not valid scripture TSV");
    }
};
exports.getDocumentAsScriptureTSV = getDocumentAsScriptureTSV;


/***/ }),

/***/ "../scribe-theia/lib/utils/tsv.js":
/*!****************************************!*\
  !*** ../scribe-theia/lib/utils/tsv.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.markdownToHTML = exports.tsvFlatArrayToScriptureTSV = exports.tsvStringToFlatArray = exports.tsvStringToScriptureTSV = exports.extractBookChapterVerse = void 0;
const bible_reference_range_1 = __webpack_require__(/*! bible-reference-range */ "../node_modules/bible-reference-range/dist/index.js");
const dompurify_1 = __importDefault(__webpack_require__(/*! dompurify */ "../node_modules/dompurify/dist/purify.js"));
const marked_1 = __webpack_require__(/*! marked */ "../node_modules/marked/lib/marked.cjs");
const extractBookChapterVerse = (refString) => {
    const match = refString.match(/([A-Za-z0-9]{3}) (\d+):(\d+)/);
    return match
        ? {
            bookID: match[1],
            chapter: parseInt(match[2], 10),
            verse: parseInt(match[3], 10),
        }
        : { bookID: "GEN", chapter: 1, verse: 1 };
};
exports.extractBookChapterVerse = extractBookChapterVerse;
/**
 * Converts a TSV string into a ScriptureTSV object.
 * @param tsv The TSV string to convert.
 * @returns A ScriptureTSV object.
 */
const tsvStringToScriptureTSV = (tsv) => (0, exports.tsvFlatArrayToScriptureTSV)((0, exports.tsvStringToFlatArray)(tsv));
exports.tsvStringToScriptureTSV = tsvStringToScriptureTSV;
/**
 * Converts a TSV string to an array of TsvObject, with each object representing a row.
 * @param tsv The TSV string to convert.
 * @returns An array of TsvObject.
 */
const tsvStringToFlatArray = (tsv) => {
    if (!tsv) {
        return [];
    }
    const lines = tsv.trim().split("\n");
    const [headerLine, ...dataLines] = lines;
    const headers = headerLine.split("\t");
    return dataLines.map((line) => {
        const values = line.split("\t");
        return headers.reduce((obj, header, index) => {
            var _a;
            return (Object.assign(Object.assign({}, obj), { [header]: (_a = values[index]) !== null && _a !== void 0 ? _a : "" }));
        }, {});
    });
};
exports.tsvStringToFlatArray = tsvStringToFlatArray;
/**
 * Converts a flat array of TSV rows into a structured ScriptureTSV object.
 * @param flatTsvArray The array of TSV rows to convert.
 * @returns A ScriptureTSV object.
 */
const tsvFlatArrayToScriptureTSV = (flatTsvArray) => {
    const tsvItems = Array.isArray(flatTsvArray) ? flatTsvArray : [];
    return tsvItems.reduce((scriptureTsv, note) => {
        const referenceList = note.Reference
            ? (0, bible_reference_range_1.parseReferenceToList)(note.Reference)
            : [{ chapter: note.Chapter || "", verse: note.Verse || "" }];
        return referenceList.reduce((acc, refChunk) => {
            return mapNoteToChaptersVerses(note, refChunk, acc);
        }, scriptureTsv);
    }, {});
};
exports.tsvFlatArrayToScriptureTSV = tsvFlatArrayToScriptureTSV;
/**
 * Maps a TSV row to its corresponding chapters and verses within the ScriptureTSV object.
 * @param note The TSV row to map.
 * @param refChunk The reference chunk indicating chapter and verse(s).
 * @param scriptureTsv The ScriptureTSV object being constructed.
 * @returns The updated ScriptureTSV object with the note mapped.
 */
function mapNoteToChaptersVerses(note, refChunk, scriptureTsv) {
    const { chapter, verse: startVerse, endVerse = startVerse } = refChunk;
    const verses = range(startVerse, endVerse);
    const updatedScriptureTsv = Object.assign({}, scriptureTsv);
    verses.forEach((verse) => {
        const verseStr = verse.toString();
        if (!updatedScriptureTsv[chapter]) {
            updatedScriptureTsv[chapter] = {};
        }
        if (!updatedScriptureTsv[chapter][verseStr]) {
            updatedScriptureTsv[chapter][verseStr] = [];
        }
        updatedScriptureTsv[chapter][verseStr].push(note);
    });
    return updatedScriptureTsv;
}
/**
 * Generates an array of numbers between two bounds, inclusive.
 * @param start The start of the range.
 * @param end The end of the range.
 * @returns An array of numbers from start to end, inclusive.
 */
function range(start, end) {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}
const markdownToHTML = (markdown) => dompurify_1.default.sanitize(marked_1.marked.parse(markdown));
exports.markdownToHTML = markdownToHTML;


/***/ }),

/***/ "../scribe-theia/lib/browser/output-tailwind.css":
/*!*******************************************************!*\
  !*** ../scribe-theia/lib/browser/output-tailwind.css ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_output_tailwind_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./output-tailwind.css */ "../node_modules/css-loader/dist/cjs.js!../scribe-theia/lib/browser/output-tailwind.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_output_tailwind_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_output_tailwind_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "../scribe-theia/src/browser/styles/scribe-theia.css":
/*!***********************************************************!*\
  !*** ../scribe-theia/src/browser/styles/scribe-theia.css ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_scribe_theia_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./scribe-theia.css */ "../node_modules/css-loader/dist/cjs.js!../scribe-theia/src/browser/styles/scribe-theia.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_scribe_theia_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_scribe_theia_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ })

}]);
//# sourceMappingURL=scribe-theia_lib_browser_scribe-theia-frontend-module_js.js.map