"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1501],{5505:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var r=n(5893),a=n(1151),s=n(4866),l=n(5162),i=n(4498);const o={title:"Setup \ud83d\udee0",hide_title:!0,tags:["setup","ts-patch","webpack","vite","rollup","tsc"]},c=void 0,u={id:"setup",title:"Setup \ud83d\udee0",description:"Prerequisites",source:"@site/docs/setup.mdx",sourceDirName:".",slug:"/setup",permalink:"/docs/setup",draft:!1,unlisted:!1,tags:[{label:"setup",permalink:"/docs/tags/setup"},{label:"ts-patch",permalink:"/docs/tags/ts-patch"},{label:"webpack",permalink:"/docs/tags/webpack"},{label:"vite",permalink:"/docs/tags/vite"},{label:"rollup",permalink:"/docs/tags/rollup"},{label:"tsc",permalink:"/docs/tags/tsc"}],version:"current",lastUpdatedAt:17120833e5,frontMatter:{title:"Setup \ud83d\udee0",hide_title:!0,tags:["setup","ts-patch","webpack","vite","rollup","tsc"]},sidebar:"docs",previous:{title:"Introduction \ud83d\ude80",permalink:"/docs/"},next:{title:"Language Service \u2728",permalink:"/docs/language-service"}},d={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"tsconfig.json",id:"tsconfigjson",level:2},{value:"ts-patch",id:"ts-patch",level:2},{value:"ts-patch, webpack, ts-loader",id:"ts-patch-webpack-ts-loader",level:3},{value:"ts-patch, vite, rollup-plugin-typescript2",id:"ts-patch-vite-rollup-plugin-typescript2",level:3},{value:"ts-patch, pure typescript (tsc)",id:"ts-patch-pure-typescript-tsc",level:3},{value:"Without ts-patch",id:"without-ts-patch",level:2},{value:"webpack, ts-loader",id:"webpack-ts-loader",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Node.js version 18 or above"}),"\n",(0,r.jsx)(t.li,{children:"TypeScript version 5.0 \u2013 5.4"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n","\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(l.Z,{value:"yarn",label:"yarn",default:!0,children:(0,r.jsx)(i.Z,{language:"bash",children:"yarn add @clawject/di"})}),(0,r.jsx)(l.Z,{value:"npm",label:"npm",children:(0,r.jsx)(i.Z,{language:"bash",children:"npm install @clawject/di"})})]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["Remember to ",(0,r.jsx)(t.a,{href:"./language-service",children:"install language service plugin"})," to get support for ",(0,r.jsx)(t.strong,{children:"Clawject"})," features right in your code editor!"]})}),"\n",(0,r.jsx)(t.h2,{id:"tsconfigjson",children:"tsconfig.json"}),"\n",(0,r.jsx)(t.p,{children:"Firstly, you need to define custom transformers in your tsconfig.json."}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"@clawject/di/transformer/metadata"})," is optional, it's used to generate metadata for your configuration classes which allows you to share configuration via npm packages.\nVisit ",(0,r.jsx)(t.a,{href:"./guides/sharing-configurations",children:(0,r.jsx)(t.strong,{children:"sharing configurations"})})," section to learn more about it."]})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",metastring:'title="tsconfig.json"',children:'{\n  "compilerOptions": {\n    "plugins": [\n      { "transform": "@clawject/di/transformer" },\n      {\n        "transform": "@clawject/di/transformer/metadata",\n        "afterDeclarations": true\n      }\n    ]\n  }\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"ts-patch",children:"ts-patch"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Patches typescript to allow custom transformers (plugins) during build."})}),"\n",(0,r.jsxs)(t.p,{children:["ts-patch is the best way to utilize ",(0,r.jsx)(t.strong,{children:"Clawject"})," features.\nIt allows you to use ",(0,r.jsx)(t.strong,{children:"Clawject"})," with any build tool that uses ",(0,r.jsx)(t.strong,{children:"typescript"})," compiler."]}),"\n",(0,r.jsxs)(t.p,{children:["For detailed ts-patch configuration guide - please refer to ",(0,r.jsx)(t.a,{href:"https://github.com/nonara/ts-patch#readme",children:"ts-patch documentation"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"ts-patch-webpack-ts-loader",children:"ts-patch, webpack, ts-loader"}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.p,{children:["When using webpack with ",(0,r.jsx)(t.strong,{children:"ts-loader"})," - make sure ",(0,r.jsx)(t.strong,{children:"transpileOnly"})," mode is disabled.\nBasically, ",(0,r.jsx)(t.strong,{children:"transpileOnly"})," disables the ability to perform static type checking,\nwhich is required for ",(0,r.jsx)(t.strong,{children:"Clawject"})," to work.\nAlso, if you're using ",(0,r.jsx)(t.strong,{children:"Babel"})," - please make sure that it's applied ",(0,r.jsx)(t.strong,{children:"after"})," ts-loader.\n",(0,r.jsx)(t.a,{href:"https://github.com/TypeStrong/ts-loader#transpileonly",children:"ts-loader#transpileOnly"})]})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:'title="webpack.config.js"',children:"import { ClawjectWebpackPlugin } from '@clawject/di/webpack';\n\nexport default {\n  module: {\n    rules: [{\n      test: /\\.ts$/,\n      loader: 'ts-loader',\n      options: {\n        // This option needed if you have typescript >= 5 and using\n        // live-compiler method of ts-patch\n        // https://github.com/nonara/ts-patch#method-1-live-compiler\n        compiler: 'ts-patch/compiler'\n      }\n    }]\n  },\n  plugins: [\n    new ClawjectWebpackPlugin()\n  ]\n};\n"})}),"\n",(0,r.jsx)(t.h3,{id:"ts-patch-vite-rollup-plugin-typescript2",children:"ts-patch, vite, rollup-plugin-typescript2"}),"\n",(0,r.jsx)(t.admonition,{type:"danger",children:(0,r.jsxs)(t.p,{children:["Currently ",(0,r.jsx)(t.strong,{children:"Vite"})," or ",(0,r.jsx)(t.strong,{children:"rollup-plugin-typescript2"})," not correctly utilizes ts-patch,\nit's ignoring compilation errors produced by Clawject, so it could lead to runtime errors."]})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="vite.config.ts"',children:"import { defineConfig } from 'vite';\nimport typescript from 'rollup-plugin-typescript2';\n\nexport default defineConfig({\n  esbuild: false,\n  plugins: [\n    typescript(),\n  ],\n});\n"})}),"\n",(0,r.jsx)(t.h3,{id:"ts-patch-pure-typescript-tsc",children:"ts-patch, pure typescript (tsc)"}),"\n",(0,r.jsxs)(t.p,{children:["To make Clawject work with pure typescript (tsc), you need to define custom transformers in your ",(0,r.jsx)(t.a,{href:"#tsconfigjson",children:"tsconfig.json"}),", and that's all."]}),"\n",(0,r.jsx)(t.admonition,{title:"About typescript watch mode",type:"tip",children:(0,r.jsxs)(t.p,{children:["Clawject will work pretty well in ",(0,r.jsx)(t.strong,{children:"native tsc watch mode"})," as well!"]})}),"\n",(0,r.jsx)(t.h2,{id:"without-ts-patch",children:"Without ts-patch"}),"\n",(0,r.jsx)(t.p,{children:"If you don't want to use ts-patch for some reason - you can utilize Clawject features without it."}),"\n",(0,r.jsx)(t.h3,{id:"webpack-ts-loader",children:"webpack, ts-loader"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:'title="webpack.config.js"',children:"import { ClawjectTransformer } from '@clawject/di/transformer';\nimport { ClawjectMetadataTransformer } from '@clawject/di/transformer/metadata';\nimport { ClawjectWebpackPlugin } from '@clawject/di/webpack'\n\nexport default {\n  module: {\n    rules: [{\n      test: /\\.ts$/,\n      loader: 'ts-loader',\n      options: {\n        getCustomTransformers: (program, getProgram) => ({\n          before: [ClawjectTransformer(getProgram)],\n          afterDeclarations: [ClawjectMetadataTransformer(getProgram)]\n        })\n      }\n    }]\n  },\n  plugins: [\n    new ClawjectWebpackPlugin()\n  ]\n};\n"})})]})}function m(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},5162:(e,t,n)=>{n.d(t,{Z:()=>l});n(7294);var r=n(512);const a={tabItem:"tabItem_Ymn6"};var s=n(5893);function l(e){let{children:t,hidden:n,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,l),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(7294),a=n(512),s=n(2466),l=n(6550),i=n(469),o=n(1980),c=n(7392),u=n(12);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=p(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[c,d]=m({queryString:n,groupId:a}),[g,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),j=(()=>{const e=c??g;return h({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{j&&o(j)}),[j]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=n(2389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(5893);function w(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),u=e=>{const t=e.currentTarget,n=o.indexOf(t),a=i[n].value;a!==r&&(c(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.Z)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function x(e){const t=g(e);return(0,b.jsxs)("div",{className:(0,a.Z)("tabs-container",j.tabList),children:[(0,b.jsx)(w,{...e,...t}),(0,b.jsx)(v,{...e,...t})]})}function y(e){const t=(0,f.Z)();return(0,b.jsx)(x,{...e,children:d(e.children)},String(t))}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>l});var r=n(7294);const a={},s=r.createContext(a);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);