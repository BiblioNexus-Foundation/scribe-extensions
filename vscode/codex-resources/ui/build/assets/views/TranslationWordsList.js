import{r as c,j as e,a as r,V as i,v as d}from"../index.js";import{T as h}from"../TranslationWordRenderer.js";import"../markdownToHTML.js";import"../marked.esm.js";const x=()=>{const{translationWordsList:o,diskTwl:s}=u(),[a,t]=r.useState(0);r.useEffect(()=>{s.length>0&&t(0)},[s,s.length]);const l=r.useMemo(()=>{var n;return s!=null&&s[a]?{path:((n=s==null?void 0:s[a])==null?void 0:n.twUriPath)??null}:null},[a,s]);return o.length===0?e.jsx("div",{className:"prose-base",children:e.jsx("h1",{children:e.jsx("i",{children:"No Translation Words Found"})})}):s.length===0?e.jsx("div",{className:"prose-base",children:e.jsx("h3",{children:"Found translation Words but they do not have corresponding descriptions on disk."})}):e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx(i,{onClick:()=>t(n=>n===0?n:n-1),appearance:"secondary","aria-label":"left",className:"",disabled:a===0,children:e.jsx("i",{className:"codicon codicon-chevron-left"})}),e.jsxs("span",{className:"w-fit",children:[a+1," / ",s.length]}),e.jsx(i,{onClick:()=>t(n=>n===s.length-1?n:n+1),appearance:"secondary","aria-label":"right",className:"",disabled:a===s.length-1,children:e.jsx("i",{className:"codicon codicon-chevron-right"})})]}),e.jsx("div",{id:"note-container",className:"col-span-6",children:e.jsx(h,{translationWord:l})})]})},u=()=>{const[o,s]=r.useState([]);return r.useEffect(()=>{d.setMessageListeners(t=>{switch(t.data.type){case"update-twl":s(t.data.payload.wordsList??[]);break}})},[]),{diskTwl:r.useMemo(()=>o.filter(t=>t.existsOnDisk),[o]),translationWordsList:o}};c(e.jsx(x,{}));