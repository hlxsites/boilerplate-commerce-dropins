import{jsx as s,Fragment as t}from"@dropins/tools/preact-jsx-runtime.js";import{c}from"./classes.js";function l({node:a,...r}){return a?Array.isArray(a)?s(t,{children:a.map((m,e)=>s(l,{node:m,className:r.className,...r},e))}):(r.className=c([a.props.className,r.className]),s(a.type,{ref:a.ref,...a.props,...r},a.key)):null}export{l as V};
//# sourceMappingURL=vcomponent.js.map
