"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[616],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,d=u["".concat(l,".").concat(m)]||u[m]||f[m]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6437:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={title:"Introduction \ud83d\udc4b",slug:"/"},i="Why Clawject",c={unversionedId:"intro",id:"intro",title:"Introduction \ud83d\udc4b",description:"Introducing Clawject, the TypeScript Dependency Injection framework that's here to make your coding life a breeze.",source:"@site/docs/01-intro.mdx",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction \ud83d\udc4b",slug:"/"},sidebar:"tutorialSidebar",next:{title:"Setup \ud83d\udee0\ufe0f",permalink:"/docs/setup"}},l={},s=[],p={toc:s},u="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"why-clawject"},"Why Clawject"),(0,o.kt)("p",null,"Introducing Clawject, the TypeScript Dependency Injection framework that's here to make your coding life a breeze.\nNo more wrestling with injection tokens and drowning in boilerplate code.\nWith Clawject, you can simply focus on writing clean classes, defining interfaces, and managing types,\nwhile the framework takes care of the rest.\nSay goodbye to the headaches and hello to a smoother TypeScript development journey with Clawject!\n\ud83c\udf89"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="main.ts"',title:'"main.ts"'},"import { Bean, CatContext } from 'clawject';\n\ninterface IFoo {}\nclass Foo implements IFoo { /* ... */ }\n\nclass Bar {\n  constructor(\n    private foo: IFoo // <-- Clawject will automatically inject implementation of IFoo interface\n  ) {}\n}\n\nclass ApplicationContext extends CatContext {\n  fooBean = Bean(Foo);\n  barBean = Bean(Bar);\n}\n")))}f.isMDXComponent=!0}}]);