"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[998],{1651:(e,t,r)=>{r.r(t),r.d(t,{default:()=>ae});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e){return function t(){for(var r=this,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return t.apply(r,[].concat(o,n))}}}function g(e){return{}.toString.call(e).includes("Object")}function p(e){return"function"==typeof e}var h=d((function(e,t){throw new Error(e[t]||e.default)}))({initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"}),y={changes:function(e,t){return g(t)||h("changeType"),Object.keys(t).some((function(t){return r=e,n=t,!Object.prototype.hasOwnProperty.call(r,n);var r,n}))&&h("changeField"),t},selector:function(e){p(e)||h("selectorType")},handler:function(e){p(e)||g(e)||h("handlerType"),g(e)&&Object.values(e).some((function(e){return!p(e)}))&&h("handlersType")},initial:function(e){var t;e||h("initialIsRequired"),g(e)||h("initialType"),t=e,Object.keys(t).length||h("initialContent")}};function m(e,t){return p(t)?t(e.current):t}function v(e,t){return e.current=f(f({},e.current),t),t}function b(e,t,r){return p(t)?t(e.current):Object.keys(r).forEach((function(r){var n;return null===(n=t[r])||void 0===n?void 0:n.call(t,e.current[r])})),r}const w={create:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};y.initial(e),y.handler(t);var r={current:e},n=d(b)(r,t),o=d(v)(r),i=d(y.changes)(e),c=d(m)(r);return[function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e};return y.selector(e),e(r.current)},function(e){!function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return t.reduceRight((function(e,t){return t(e)}),e)}}(n,o,i,c)(e)}]}};const O={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.36.1/min/vs"}};const j=function(e){return{}.toString.call(e).includes("Object")};var M={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:"Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "},E=function(e){return function t(){for(var r=this,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return t.apply(r,[].concat(o,n))}}}((function(e,t){throw new Error(e[t]||e.default)}))(M),P={config:function(e){return e||E("configIsRequired"),j(e)||E("configType"),e.urls?(console.warn(M.deprecation),{paths:{vs:e.urls.monacoBase}}):e}};const k=P;const R=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return t.reduceRight((function(e,t){return t(e)}),e)}};const S=function e(t,r){return Object.keys(r).forEach((function(n){r[n]instanceof Object&&t[n]&&Object.assign(r[n],e(t[n],r[n]))})),c(c({},t),r)};var C={type:"cancelation",msg:"operation is manually canceled"};const T=function(e){var t=!1,r=new Promise((function(r,n){e.then((function(e){return t?n(C):r(e)})),e.catch(n)}));return r.cancel=function(){return t=!0},r};var I,x,A=w.create({config:O,isInitialized:!1,resolve:null,reject:null,monaco:null}),V=(x=2,function(e){if(Array.isArray(e))return e}(I=A)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,i=void 0;try{for(var c,u=e[Symbol.iterator]();!(n=(c=u.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(a){o=!0,i=a}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}}(I,x)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}(I,x)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),D=V[0],L=V[1];function F(e){return document.body.appendChild(e)}function _(e){var t,r,n=D((function(e){return{config:e.config,reject:e.reject}})),o=(t="".concat(n.config.paths.vs,"/loader.js"),r=document.createElement("script"),t&&(r.src=t),r);return o.onload=function(){return e()},o.onerror=n.reject,o}function q(){var e=D((function(e){return{config:e.config,resolve:e.resolve,reject:e.reject}})),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],(function(t){z(t),e.resolve(t)}),(function(t){e.reject(t)}))}function z(e){D().monaco||L({monaco:e})}var N=new Promise((function(e,t){return L({resolve:e,reject:t})})),U={config:function(e){var t=k.config(e),r=t.monaco,n=u(t,["monaco"]);L((function(e){return{config:S(e.config,n),monaco:r}}))},init:function(){var e=D((function(e){return{monaco:e.monaco,isInitialized:e.isInitialized,resolve:e.resolve}}));if(!e.isInitialized){if(L({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),T(N);if(window.monaco&&window.monaco.editor)return z(window.monaco),e.resolve(window.monaco),T(N);R(F,_)(q)}return T(N)},__getMonacoInstance:function(){return D((function(e){return e.monaco}))}};const B=U;var W={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},Y={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}};var Z=function({children:e}){return n.createElement("div",{style:Y.container},e)};var $=function({width:e,height:t,isEditorReady:r,loading:o,_ref:i,className:c,wrapperProps:u}){return n.createElement("section",{style:{...W.wrapper,width:e,height:t},...u},!r&&n.createElement(Z,null,o),n.createElement("div",{ref:i,style:{...W.fullWidth,...!r&&W.hide},className:c}))},G=(0,n.memo)($);var H=function(e){(0,n.useEffect)(e,[])};var J=function(e,t,r=!0){let o=(0,n.useRef)(!0);(0,n.useEffect)(o.current||!r?()=>{o.current=!1}:e,t)};function K(){}function Q(e,t,r,n){return function(e,t){return e.editor.getModel(X(e,t))}(e,n)||function(e,t,r,n){return e.editor.createModel(t,r,n?X(e,n):void 0)}(e,t,r,n)}function X(e,t){return e.Uri.parse(t)}var ee=function({original:e,modified:t,language:r,originalLanguage:o,modifiedLanguage:i,originalModelPath:c,modifiedModelPath:u,keepCurrentOriginalModel:a=!1,keepCurrentModifiedModel:l=!1,theme:s="light",loading:f="Loading...",options:d={},height:g="100%",width:p="100%",className:h,wrapperProps:y={},beforeMount:m=K,onMount:v=K}){let[b,w]=(0,n.useState)(!1),[O,j]=(0,n.useState)(!0),M=(0,n.useRef)(null),E=(0,n.useRef)(null),P=(0,n.useRef)(null),k=(0,n.useRef)(v),R=(0,n.useRef)(m),S=(0,n.useRef)(!1);H((()=>{let e=B.init();return e.then((e=>(E.current=e)&&j(!1))).catch((e=>"cancelation"!==e?.type&&console.error("Monaco initialization: error:",e))),()=>M.current?function(){let e=M.current?.getModel();a||e?.original?.dispose(),l||e?.modified?.dispose(),M.current?.dispose()}():e.cancel()})),J((()=>{let e=M.current.getModifiedEditor();e.getOption(E.current.editor.EditorOption.readOnly)?e.setValue(t||""):t!==e.getValue()&&(e.executeEdits("",[{range:e.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),e.pushUndoStop())}),[t],b),J((()=>{M.current?.getModel()?.original.setValue(e||"")}),[e],b),J((()=>{let{original:e,modified:t}=M.current.getModel();E.current.editor.setModelLanguage(e,o||r||"text"),E.current.editor.setModelLanguage(t,i||r||"text")}),[r,o,i],b),J((()=>{E.current?.editor.setTheme(s)}),[s],b),J((()=>{M.current?.updateOptions(d)}),[d],b);let C=(0,n.useCallback)((()=>{if(!E.current)return;R.current(E.current);let n=Q(E.current,e||"",o||r||"text",c||""),a=Q(E.current,t||"",i||r||"text",u||"");M.current?.setModel({original:n,modified:a})}),[r,t,i,e,o,c,u]),T=(0,n.useCallback)((()=>{!S.current&&P.current&&(M.current=E.current.editor.createDiffEditor(P.current,{automaticLayout:!0,...d}),C(),E.current?.editor.setTheme(s),w(!0),S.current=!0)}),[d,s,C]);return(0,n.useEffect)((()=>{b&&k.current(M.current,E.current)}),[b]),(0,n.useEffect)((()=>{!O&&!b&&T()}),[O,b,T]),J((()=>{if(M.current&&E.current){let t=M.current.getOriginalEditor(),n=Q(E.current,e||"",o||r||"text",c||"");n!==t.getModel()&&t.setModel(n)}}),[c],b),J((()=>{if(M.current&&E.current){let e=M.current.getModifiedEditor(),n=Q(E.current,t||"",i||r||"text",u||"");n!==e.getModel()&&e.setModel(n)}}),[u],b),n.createElement(G,{width:p,height:g,isEditorReady:b,loading:f,_ref:P,className:h,wrapperProps:y})};(0,n.memo)(ee);var te=function(){let[e,t]=(0,n.useState)(B.__getMonacoInstance());return H((()=>{let r;return e||(r=B.init(),r.then((e=>{t(e)}))),()=>r?.cancel()})),e};var re=function(e){let t=(0,n.useRef)();return(0,n.useEffect)((()=>{t.current=e}),[e]),t.current},ne=new Map;var oe=function({defaultValue:e,defaultLanguage:t,defaultPath:r,value:o,language:i,path:c,theme:u="light",line:a,loading:l="Loading...",options:s={},overrideServices:f={},saveViewState:d=!0,keepCurrentModel:g=!1,width:p="100%",height:h="100%",className:y,wrapperProps:m={},beforeMount:v=K,onMount:b=K,onChange:w,onValidate:O=K}){let[j,M]=(0,n.useState)(!1),[E,P]=(0,n.useState)(!0),k=(0,n.useRef)(null),R=(0,n.useRef)(null),S=(0,n.useRef)(null),C=(0,n.useRef)(b),T=(0,n.useRef)(v),I=(0,n.useRef)(),x=(0,n.useRef)(o),A=re(c),V=(0,n.useRef)(!1),D=(0,n.useRef)(!1);H((()=>{let e=B.init();return e.then((e=>(k.current=e)&&P(!1))).catch((e=>"cancelation"!==e?.type&&console.error("Monaco initialization: error:",e))),()=>R.current?(I.current?.dispose(),g?d&&ne.set(c,R.current.saveViewState()):R.current.getModel()?.dispose(),void R.current.dispose()):e.cancel()})),J((()=>{let n=Q(k.current,e||o||"",t||i||"",c||r||"");n!==R.current?.getModel()&&(d&&ne.set(A,R.current?.saveViewState()),R.current?.setModel(n),d&&R.current?.restoreViewState(ne.get(c)))}),[c],j),J((()=>{R.current?.updateOptions(s)}),[s],j),J((()=>{!R.current||void 0===o||(R.current.getOption(k.current.editor.EditorOption.readOnly)?R.current.setValue(o):o!==R.current.getValue()&&(D.current=!0,R.current.executeEdits("",[{range:R.current.getModel().getFullModelRange(),text:o,forceMoveMarkers:!0}]),R.current.pushUndoStop(),D.current=!1))}),[o],j),J((()=>{let e=R.current?.getModel();e&&i&&k.current?.editor.setModelLanguage(e,i)}),[i],j),J((()=>{void 0!==a&&R.current?.revealLine(a)}),[a],j),J((()=>{k.current?.editor.setTheme(u)}),[u],j);let L=(0,n.useCallback)((()=>{if(S.current&&k.current&&!V.current){T.current(k.current);let n=c||r,a=Q(k.current,o||e||"",t||i||"",n||"");R.current=k.current?.editor.create(S.current,{model:a,automaticLayout:!0,...s},f),d&&R.current.restoreViewState(ne.get(n)),k.current.editor.setTheme(u),M(!0),V.current=!0}}),[e,t,r,o,i,c,s,f,d,u]);return(0,n.useEffect)((()=>{j&&C.current(R.current,k.current)}),[j]),(0,n.useEffect)((()=>{!E&&!j&&L()}),[E,j,L]),x.current=o,(0,n.useEffect)((()=>{j&&w&&(I.current?.dispose(),I.current=R.current?.onDidChangeModelContent((e=>{D.current||w(R.current.getValue(),e)})))}),[j,w]),(0,n.useEffect)((()=>{if(j){let e=k.current.editor.onDidChangeMarkers((e=>{let t=R.current.getModel()?.uri;if(t&&e.find((e=>e.path===t.path))){let e=k.current.editor.getModelMarkers({resource:t});O?.(e)}}));return()=>{e?.dispose()}}return()=>{}}),[j,O]),n.createElement(G,{width:p,height:h,isEditorReady:j,loading:l,_ref:S,className:y,wrapperProps:m})},ie=(0,n.memo)(oe),ce=r(7961);const ue="playground_S0FF",ae=()=>{const e=te();return n.useEffect((()=>{}),[e]),n.createElement(ce.Z,{noFooter:!0,title:"Playground",description:"Try out clawject right in your browser",wrapperClassName:ue},n.createElement(ie,{theme:"vs-dark",height:"unset",language:"typescript"}))}}}]);