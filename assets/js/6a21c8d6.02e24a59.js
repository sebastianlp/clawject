"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[622],{8499:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>x,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var i=t(5893),a=t(1151);const o={title:"ContainerManager"},r=void 0,c={id:"api/container-manager",title:"ContainerManager",description:"ContainerManager is a main entry point to work with DI.",source:"@site/docs/api/container-manager.mdx",sourceDirName:"api",slug:"/api/container-manager",permalink:"/docs/api/container-manager",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1701602866,formattedLastUpdatedAt:"Dec 3, 2023",frontMatter:{title:"ContainerManager"},sidebar:"docs",previous:{title:"Clawject Type System",permalink:"/docs/core-concepts/type-system"},next:{title:"CatContext",permalink:"/docs/api/cat-context"}},l={},s=[{value:"Usage",id:"usage",level:2},{value:"Methods overview",id:"methods-overview",level:2},{value:"<code>ContainerManager.init</code>",id:"containermanagerinit",level:3},{value:"Init context",id:"init-context",level:4},{value:"Init context with a specific key",id:"init-context-with-a-specific-key",level:4},{value:"Init context with an external configuration",id:"init-context-with-an-external-configuration",level:4},{value:"<code>ContainerManager.get</code>",id:"containermanagerget",level:3},{value:"Get initialized context",id:"get-initialized-context",level:4},{value:"Get initialized context by key",id:"get-initialized-context-by-key",level:4},{value:"Get context but not initializing it",id:"get-context-but-not-initializing-it",level:4},{value:"<code>ContainerManager.getOrInit</code>",id:"containermanagergetorinit",level:3},{value:"Get and init context",id:"get-and-init-context",level:4},{value:"<code>ContainerManager.destroy</code>",id:"containermanagerdestroy",level:3},{value:"Destroying initialized context",id:"destroying-initialized-context",level:4},{value:"Destroying non-initialized context",id:"destroying-non-initialized-context",level:4}];function d(n){const e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"ContainerManager is a main entry point to work with DI.\nYou can use ContainerManager to initialize, get or clear containers."}),"\n",(0,i.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(e.p,{children:"Let's assume you're defined you context class like this:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",metastring:'title="MyContext.ts"',children:"import { CatContext } from '@clawject/di';\n\nexport class MyContext extends CatContext { /* ... */ }\n"})}),"\n",(0,i.jsxs)(e.p,{children:["To init container, you need to use ContainerManager object and pass context class to the ",(0,i.jsx)(e.code,{children:"init"})," method."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",metastring:'title="main.ts"',children:"import { ContainerManager } from '@clawject/di';\nimport { MyContext } from './MyContext';\n\nContainerManager.init(MyContext);\n"})}),"\n",(0,i.jsx)(e.h2,{id:"methods-overview",children:"Methods overview"}),"\n",(0,i.jsx)(e.h3,{id:"containermanagerinit",children:(0,i.jsx)(e.code,{children:"ContainerManager.init"})}),"\n",(0,i.jsxs)(e.p,{children:["Init method is used to initialize CatContext and retrieve ",(0,i.jsx)(e.code,{children:"InitializedContext"})," object."]}),"\n",(0,i.jsx)(e.p,{children:"If context was already initialized but not cleared - new context will be initialized will replace old one.\nNot clearing context can cause memory leaks."}),"\n",(0,i.jsx)(e.h4,{id:"init-context",children:"Init context"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"import { ContainerManager, CatContext } from '@clawject/di';\n\nclass MyContext extends CatContext { /* ... */ }\n\nconst myContext = ContainerManager.init(MyContext);\n"})}),"\n",(0,i.jsx)(e.h4,{id:"init-context-with-a-specific-key",children:"Init context with a specific key"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"import { ContainerManager, CatContext } from '@clawject/di';\n\nclass MyContext extends CatContext { /* ... */ }\n\nconst myKey = new Symbol('my-context');\n\nconst myContext = ContainerManager.init(MyContext, { key: myKey });\n"})}),"\n",(0,i.jsx)(e.h4,{id:"init-context-with-an-external-configuration",children:"Init context with an external configuration"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"import { ContainerManager, CatContext } from '@clawject/di';\n\ninterface IExternalConfiguration { /* ... */ }\n\nclass MyContext extends CatContext<{}, IExternalConfiguration> { /* ... */ }\n\nconst externalConfiguration: IExternalConfiguration = { /* ... */ }\n\nconst myContext = ContainerManager.init(MyContext, { config: externalConfiguration });\n"})}),"\n",(0,i.jsx)(e.h3,{id:"containermanagerget",children:(0,i.jsx)(e.code,{children:"ContainerManager.get"})}),"\n",(0,i.jsxs)(e.p,{children:["Get method is used to retrieve ",(0,i.jsx)(e.code,{children:"InitializedContext"})," object if context it was initialized."]}),"\n",(0,i.jsx)(e.h4,{id:"get-initialized-context",children:"Get initialized context"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"import { ContainerManager, CatContext } from '@clawject/di';\n\nclass MyContext extends CatContext { /* ... */ }\n\nContainerManager.init(MyContext);\n\nconst initializedContext = ContainerManager.get(MyContext);\n"})}),"\n",(0,i.jsx)(e.h4,{id:"get-initialized-context-by-key",children:"Get initialized context by key"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"import { ContainerManager, CatContext } from '@clawject/di';\n\nclass MyContext extends CatContext { /* ... */ }\n\nconst myKey = new Symbol('my-context');\n\nContainerManager.init(MyContext, { key: myKey });\n\nconst initializedContext = ContainerManager.get(MyContext, { key: myKey });\n"})}),"\n",(0,i.jsx)(e.h4,{id:"get-context-but-not-initializing-it",children:"Get context but not initializing it"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"import { ContainerManager, CatContext } from '@clawject/di';\n\nclass MyContext extends CatContext { /* ... */ }\n\nconst myKey = new Symbol('my-context');\n\ntry {\n    ContainerManager.get(MyContext, { key: myKey });\n} catch (error) {\n    console.log(error.message); // <-- Will print \"Context 'MyContext' with key 'Symbol(my-context)' is not initialized\"\n}\n"})}),"\n",(0,i.jsx)(e.h3,{id:"containermanagergetorinit",children:(0,i.jsx)(e.code,{children:"ContainerManager.getOrInit"})}),"\n",(0,i.jsxs)(e.p,{children:["This method is a combination of ",(0,i.jsx)(e.code,{children:"init"})," and ",(0,i.jsx)(e.code,{children:"get"})," methods."]}),"\n",(0,i.jsxs)(e.p,{children:["If context was not initialized, it will be initialized and ",(0,i.jsx)(e.code,{children:"InitializedContext"})," object will be returned.If context was initialized, ",(0,i.jsx)(e.code,{children:"InitializedContext"})," object will be returned."]}),"\n",(0,i.jsx)(e.h4,{id:"get-and-init-context",children:"Get and init context"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"import { ContainerManager, CatContext } from '@clawject/di';\n\nclass MyContext extends CatContext {}\n\nconst initializedContext1 = ContainerManager.getOrInit(MyContext);\nconst initializedContext2 = ContainerManager.getOrInit(MyContext);\n\nconsole.log(initializedContext1 === initializedContext2); // <-- Will print \"true\"\n"})}),"\n",(0,i.jsx)(e.h3,{id:"containermanagerdestroy",children:(0,i.jsx)(e.code,{children:"ContainerManager.destroy"})}),"\n",(0,i.jsx)(e.p,{children:"This method destroys already initialized context."}),"\n",(0,i.jsx)(e.p,{children:"If the initialized context was not found, logs warning to the console."}),"\n",(0,i.jsx)(e.h4,{id:"destroying-initialized-context",children:"Destroying initialized context"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"import { ContainerManager, CatContext } from '@clawject/di';\n\nclass MyContext extends CatContext {}\n\nContainerManager.init(MyContext);\nContainerManager.destroy(MyContext);\n"})}),"\n",(0,i.jsx)(e.h4,{id:"destroying-non-initialized-context",children:"Destroying non-initialized context"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"import { ContainerManager, CatContext } from '@clawject/di';\n\nclass MyContext extends CatContext {}\n\nContainerManager.destroy(MyContext); // <-- Will print warn \"Context 'MyContext' not found when trying to destroy it\"\n"})})]})}function x(n={}){const{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>c,a:()=>r});var i=t(7294);const a={},o=i.createContext(a);function r(n){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:r(n.components),i.createElement(o.Provider,{value:e},n.children)}}}]);