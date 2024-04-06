"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5062],{2756:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var s=n(5893),a=n(1151);n(4866),n(5162);const o={title:"Custom Scopes",hide_title:!0},r=void 0,c={id:"guides/creating-scope",title:"Custom Scopes",description:"Creating scope",source:"@site/docs/guides/creating-scope.mdx",sourceDirName:"guides",slug:"/guides/creating-scope",permalink:"/docs/guides/creating-scope",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1712414697e3,frontMatter:{title:"Custom Scopes",hide_title:!0},sidebar:"docs",previous:{title:"Sharing configurations",permalink:"/docs/guides/sharing-configurations"},next:{title:"Errors",permalink:"/docs/errors"}},i={},l=[{value:"Creating scope",id:"creating-scope",level:2},{value:"Creating HttpExecutionContext",id:"creating-httpexecutioncontext",level:3},{value:"Creating Scope implementation",id:"creating-scope-implementation",level:3},{value:"<code>onScopeBegin</code>",id:"onscopebegin",level:4},{value:"<code>onScopeEnded</code>",id:"onscopeended",level:4},{value:"<code>registerScopeBeginCallback</code>",id:"registerscopebegincallback",level:4},{value:"<code>removeScopeBeginCallback</code>",id:"removescopebegincallback",level:4},{value:"<code>get</code>",id:"get",level:4},{value:"<code>remove</code>",id:"remove",level:4},{value:"<code>registerDestructionCallback</code>",id:"registerdestructioncallback",level:4},{value:"<code>useProxy</code>",id:"useproxy",level:4},{value:"Put the pieces together",id:"put-the-pieces-together",level:4},{value:"Creating the server code",id:"creating-the-server-code",level:3},{value:"Registering the Scope",id:"registering-the-scope",level:3},{value:"Using the Custom Scope",id:"using-the-custom-scope",level:3}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"creating-scope",children:"Creating scope"}),"\n",(0,s.jsxs)(t.p,{children:["Out of the box, Clawject provides two scopes: ",(0,s.jsx)(t.code,{children:"singleton"})," and ",(0,s.jsx)(t.code,{children:"transient"}),", but sometimes you may need to define your own scopes."]}),"\n",(0,s.jsxs)(t.p,{children:["For example, if you are developing an http server application,\nyou may want to provide a separate instance of a particular bean or set of beans for each request.\nClawject provides a mechanism for creating ",(0,s.jsx)(t.strong,{children:"custom scopes"})," for scenarios such as this."]}),"\n",(0,s.jsxs)(t.p,{children:["To create a custom scope, you should implement the ",(0,s.jsx)(t.code,{children:"Scope"})," interface."]}),"\n",(0,s.jsxs)(t.p,{children:["In the following steps, we will implement ",(0,s.jsx)(t.code,{children:"request"})," scope that\nis using ",(0,s.jsx)(t.a,{href:"https://nodejs.org/api/async_context.html#asynclocalstoragerunstore-callback-args",children:"AsyncLocalStorage#run"}),"\nto assign and retrieve ",(0,s.jsx)(t.code,{children:"httpRequestId"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"creating-httpexecutioncontext",children:"Creating HttpExecutionContext"}),"\n",(0,s.jsxs)(t.p,{children:["First of all - let's define ",(0,s.jsx)(t.code,{children:"HttpExecutionContext"})," class that will store unique id to each http request and\nallows us to retrieve ",(0,s.jsx)(t.code,{children:"getCurrentRequestId"})," in the context of c callback call:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:'title="HttpExecutionContext.ts"',children:"import { AsyncLocalStorage } from 'node:async_hooks';\n\nexport class HttpExecutionContext {\n  private static idSeq = 0;\n  private static asyncLocalStorage = new AsyncLocalStorage<number>();\n\n  static run<T>(callback: () => T): T {\n    return this.asyncLocalStorage.run(this.idSeq++, callback);\n  }\n\n  static getCurrentRequestId(): number {\n    //For simplicity - let's assume that AsyncLocalStorage always returns a value\n    return this.asyncLocalStorage.getStore()!;\n  }\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"creating-scope-implementation",children:"Creating Scope implementation"}),"\n",(0,s.jsxs)(t.p,{children:["Now let's create ",(0,s.jsx)(t.code,{children:"RequestScope"})," class that implements ",(0,s.jsx)(t.code,{children:"Scope"})," interface:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:'title="RequestScope.ts"',children:"import { Scope, ObjectFactory, ObjectFactoryResult } from '@clawject/di';\n\nexport class RequestScope implements Scope {\n  static readonly instance = new RequestScope();\n  private constructor() {}\n\n  private beginCallbacks: (() => Promise<void>)[] = [];\n  private requestIdToNameToInstance = new Map<number, Map<string, any>>();\n  private destructionCallbacks = new Map<number, Map<string, () => void>>();\n\n  onScopeBegin(): Promise<void>\n  onScopeEnded(): Promise<void>\n  registerScopeBeginCallback(callback: () => Promise<void>): void\n  removeScopeBeginCallback(callback: () => Promise<void>): void\n  get(name: string, objectFactory: ObjectFactory): ObjectFactoryResult\n  remove(name: string): ObjectFactoryResult | null\n  registerDestructionCallback(name: string, callback: () => void): void\n  useProxy(): boolean\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"Now let's implement each method"}),"\n",(0,s.jsx)(t.h4,{id:"onscopebegin",children:(0,s.jsx)(t.code,{children:"onScopeBegin"})}),"\n",(0,s.jsxs)(t.p,{children:["This method is not a part of ",(0,s.jsx)(t.code,{children:"Scope"})," interface, so you can name and implement it as you wish."]}),"\n",(0,s.jsxs)(t.p,{children:["This method will be called when the scope is about to start, and it should execute and await all beginning callbacks that were registered via ",(0,s.jsx)(t.code,{children:"Scope#registerScopeBeginCallback"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"In our case, this method will be called at the start of each http request."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"export class RequestScope implements Scope {\n  private beginCallbacks: (() => Promise<void>)[] = [];\n\n  async onScopeBegin(): Promise<void> {\n    await Promise.all(this.beginCallbacks.map(cb => cb()));\n  }\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["It's crucial to call all registered callbacks and await them all before the scope begins,\nbecause some beans can be ",(0,s.jsx)(t.code,{children:"async"})," and may require some initialization before the scope begins."]}),"\n",(0,s.jsx)(t.h4,{id:"onscopeended",children:(0,s.jsx)(t.code,{children:"onScopeEnded"})}),"\n",(0,s.jsx)(t.p,{children:"This method should be called when the scope is about to end.\nIt should do a final cleanup and destroy all beans that were created during the scope's lifetime.\nThis method should do the following:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Execute and await all destruction callbacks that were registered via ",(0,s.jsx)(t.code,{children:"Scope#registerDestructionCallback"})]}),"\n",(0,s.jsx)(t.li,{children:"Remove all beans that were created during the scope's lifetime from the underlying storage."}),"\n",(0,s.jsxs)(t.li,{children:["Remove all destruction callbacks that were registered via ",(0,s.jsx)(t.code,{children:"Scope#registerDestructionCallback"})]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import { HttpExecutionContext } from './HttpExecutionContext';\n\nexport class RequestScope implements Scope {\n  private requestIdToNameToInstance = new Map<number, Map<string, any>>();\n  private destructionCallbacks = new Map<number, Map<string, () => void>>();\n\n  async onScopeEnded(): Promise<void> {\n    const requestId = HttpExecutionContext.getCurrentRequestId();\n    const destructionCallbacks = Array.from(this.destructionCallbacks.get(requestId)?.values() ?? []);\n\n    await Promise.all(destructionCallbacks.map(cb => cb()));\n\n    this.requestIdToNameToInstance.delete(requestId);\n    this.destructionCallbacks.delete(requestId);\n  }\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"This method will be called at the end of each http request."}),"\n",(0,s.jsx)(t.h4,{id:"registerscopebegincallback",children:(0,s.jsx)(t.code,{children:"registerScopeBeginCallback"})}),"\n",(0,s.jsxs)(t.p,{children:["This method is a part of ",(0,s.jsx)(t.code,{children:"Scope"})," interface, so you should implement it as it is defined in the interface."]}),"\n",(0,s.jsx)(t.p,{children:"This method should register a callback that will be executed when the scope begins, but it should not execute the callback.\nNote that the callback is unique for each created application context, and will be called only for application contexts that are using this scope."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"export class RequestScope implements Scope {\n  private beginCallbacks: (() => Promise<void>)[] = [];\n\n  registerScopeBeginCallback(callback: () => Promise<void>): void {\n    this.beginCallbacks.push(callback);\n  }\n}\n"})}),"\n",(0,s.jsx)(t.h4,{id:"removescopebegincallback",children:(0,s.jsx)(t.code,{children:"removeScopeBeginCallback"})}),"\n",(0,s.jsxs)(t.p,{children:["This method is a part of ",(0,s.jsx)(t.code,{children:"Scope"})," interface, so you should implement it as it is defined in the interface."]}),"\n",(0,s.jsxs)(t.p,{children:["This method should remove a callback that was registered via ",(0,s.jsx)(t.code,{children:"Scope#registerScopeBeginCallback"}),", it should not execute the callback.\nThis method will be called only on application context shutdown."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"export class RequestScope implements Scope {\n  private beginCallbacks: (() => Promise<void>)[] = [];\n\n  removeScopeBeginCallback(callback: () => Promise<void>): void {\n    this.beginCallbacks = this.beginCallbacks.filter(cb => cb !== callback);\n  }\n}\n"})}),"\n",(0,s.jsx)(t.h4,{id:"get",children:(0,s.jsx)(t.code,{children:"get"})}),"\n",(0,s.jsxs)(t.p,{children:["This method is a part of ",(0,s.jsx)(t.code,{children:"Scope"})," interface, so you should implement it as it is defined in the interface."]}),"\n",(0,s.jsx)(t.p,{children:"This method should do the following:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Return an instance of a bean that is associated with the given name using ",(0,s.jsx)(t.code,{children:"ObjectFactory"})," as a factory for creating the bean."]}),"\n",(0,s.jsxs)(t.li,{children:["If the bean is not found in the underlying storage, it should create a new instance of the bean using the ",(0,s.jsx)(t.code,{children:"ObjectFactory"})," and store it in the underlying storage."]}),"\n",(0,s.jsx)(t.li,{children:"If the bean is found in the underlying storage, it should return the instance of the bean from the underlying storage."}),"\n",(0,s.jsxs)(t.li,{children:["If after calling objectFactory.getObject() it receives a Promise,\nit should return a new promise that will resolve to the instance of the bean and store it in the underlying storage.\nWhen the promise resolves and ",(0,s.jsx)(t.code,{children:"get"})," method will be called again with the same name - it should return the awaited value of the bean from the underlying storage.\nIf a result of awaited value is also a Promise\u2014it should store it and return it as a result of ",(0,s.jsx)(t.code,{children:"get"})," method."]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import { ObjectFactory, ObjectFactoryResult, Scope } from '@clawject/di';\nimport { HttpExecutionContext } from './HttpExecutionContext';\n\nexport class RequestScope implements Scope {\n    private requestIdToNameToInstance = new Map<number, Map<string, any>>();\n\n  get(name: string, objectFactory: ObjectFactory): ObjectFactoryResult {\n    const requestId = HttpExecutionContext.getCurrentRequestId();\n    let nameToInstance = this.requestIdToNameToInstance.get(requestId);\n    if (!nameToInstance) {\n      nameToInstance = new Map();\n      this.requestIdToNameToInstance.set(requestId, nameToInstance);\n    }\n\n    let object: any;\n\n    if (nameToInstance.has(name)) {\n      object = nameToInstance.get(name);\n    } else {\n      object = objectFactory.getObject();\n      if (object instanceof Promise) {\n        object = object.then(resolvedObject => {\n          nameToInstance!.set(name, resolvedObject);\n          return resolvedObject;\n        });\n      }\n      nameToInstance.set(name, object);\n    }\n\n    return object;\n  }\n}\n"})}),"\n",(0,s.jsx)(t.h4,{id:"remove",children:(0,s.jsx)(t.code,{children:"remove"})}),"\n",(0,s.jsxs)(t.p,{children:["This method is a part of ",(0,s.jsx)(t.code,{children:"Scope"})," interface, so you should implement it as it is defined in the interface."]}),"\n",(0,s.jsx)(t.p,{children:"This method should do the following:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Remove the bean associated with the given name from the underlying storage."}),"\n",(0,s.jsxs)(t.li,{children:["Return the instance of the bean that was removed from the underlying storage or ",(0,s.jsx)(t.code,{children:"null"})," if the bean was not found in the underlying storage."]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import { ObjectFactoryResult, Scope } from '@clawject/di';\nimport { HttpExecutionContext } from './HttpExecutionContext';\n\nexport class RequestScope implements Scope {\n  private requestIdToNameToInstance = new Map<number, Map<string, any>>();\n  private destructionCallbacks = new Map<number, Map<string, () => void>>();\n\n  remove(name: string): ObjectFactoryResult | null {\n    const requestId = HttpExecutionContext.getCurrentRequestId();\n\n    const instance = this.requestIdToNameToInstance.get(requestId)?.get(name);\n\n    this.destructionCallbacks.get(requestId)?.delete(name);\n    this.requestIdToNameToInstance.get(requestId)?.delete(name);\n\n    return instance ?? null;\n  }\n}\n"})}),"\n",(0,s.jsx)(t.h4,{id:"registerdestructioncallback",children:(0,s.jsx)(t.code,{children:"registerDestructionCallback"})}),"\n",(0,s.jsxs)(t.p,{children:["This method is a part of ",(0,s.jsx)(t.code,{children:"Scope"})," interface, so you should implement it as it is defined in the interface."]}),"\n",(0,s.jsx)(t.p,{children:"This method should register a callback that will be executed when the scope ends, but it should not execute the callback.\nThis method will be called by a container when a bean is being destroyed."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import { HttpExecutionContext } from './HttpExecutionContext';\n\nexport class RequestScope implements Scope {\n  private destructionCallbacks = new Map<number, Map<string, () => void>>();\n\n  registerDestructionCallback(name: string, callback: () => void): void {\n    const requestId = HttpExecutionContext.getCurrentRequestId();\n    let nameToCallback = this.destructionCallbacks.get(requestId);\n    if (!nameToCallback) {\n      nameToCallback = new Map();\n      this.destructionCallbacks.set(requestId, nameToCallback);\n    }\n\n    nameToCallback.set(name, callback);\n  }\n}\n"})}),"\n",(0,s.jsx)(t.h4,{id:"useproxy",children:(0,s.jsx)(t.code,{children:"useProxy"})}),"\n",(0,s.jsxs)(t.p,{children:["This method is a part of ",(0,s.jsx)(t.code,{children:"Scope"})," interface, so you should implement it as it is defined in the interface.\nNote that this method is optional, and you can omit it, default implementation will return ",(0,s.jsx)(t.code,{children:"true"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["This method should return ",(0,s.jsx)(t.code,{children:"true"})," if the scope requires a proxy to be injected instead of the actual bean instance, and ",(0,s.jsx)(t.code,{children:"false"})," otherwise.\nNote that in most of the cases you will need to inject proxies."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"export class RequestScope implements Scope {\n  useProxy(): boolean {\n    return true;\n  }\n}\n"})}),"\n",(0,s.jsx)(t.h4,{id:"put-the-pieces-together",children:"Put the pieces together"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import { Scope, ObjectFactory, ObjectFactoryResult } from '@clawject/di';\nimport { HttpExecutionContext } from './HttpExecutionContext';\n\nexport class RequestScope implements Scope {\n  private constructor() {}\n  static readonly instance = new RequestScope();\n\n  private beginCallbacks: (() => Promise<void>)[] = [];\n  private requestIdToNameToInstance = new Map<number, Map<string, any>>();\n  private destructionCallbacks = new Map<number, Map<string, () => void>>();\n\n  async onScopeBegin(): Promise<void> {\n    await Promise.all(this.beginCallbacks.map(cb => cb()));\n  }\n\n  async onScopeEnded(): Promise<void> {\n    const requestId = HttpExecutionContext.getCurrentRequestId();\n    const destructionCallbacks = Array.from(this.destructionCallbacks.get(requestId)?.values() ?? []);\n\n    await Promise.all(destructionCallbacks.map(cb => cb()));\n\n    this.requestIdToNameToInstance.delete(requestId);\n    this.destructionCallbacks.delete(requestId);\n  }\n\n  registerScopeBeginCallback(callback: () => Promise<void>): void {\n    this.beginCallbacks.push(callback);\n  }\n\n  removeScopeBeginCallback(callback: () => Promise<void>): void {\n    this.beginCallbacks = this.beginCallbacks.filter(cb => cb !== callback);\n  }\n\n  get(name: string, objectFactory: ObjectFactory): ObjectFactoryResult {\n    const requestId = HttpExecutionContext.getCurrentRequestId();\n    let nameToInstance = this.requestIdToNameToInstance.get(requestId);\n    if (!nameToInstance) {\n      nameToInstance = new Map();\n      this.requestIdToNameToInstance.set(requestId, nameToInstance);\n    }\n\n    let object: any;\n\n    if (nameToInstance.has(name)) {\n      object = nameToInstance.get(name);\n    } else {\n      object = objectFactory.getObject();\n      if (object instanceof Promise) {\n        object = object.then(resolvedObject => {\n          nameToInstance!.set(name, resolvedObject);\n          return resolvedObject;\n        });\n      }\n      nameToInstance.set(name, object);\n    }\n\n    return object;\n  }\n\n  remove(name: string): ObjectFactoryResult | null {\n    const requestId = HttpExecutionContext.getCurrentRequestId();\n\n    const instance = this.requestIdToNameToInstance.get(requestId)?.get(name);\n\n    this.destructionCallbacks.get(requestId)?.delete(name);\n    this.requestIdToNameToInstance.get(requestId)?.delete(name);\n\n    return instance ?? null;\n  }\n\n  registerDestructionCallback(name: string, callback: () => void): void {\n    const requestId = HttpExecutionContext.getCurrentRequestId();\n    let nameToCallback = this.destructionCallbacks.get(requestId);\n    if (!nameToCallback) {\n      nameToCallback = new Map();\n      this.destructionCallbacks.set(requestId, nameToCallback);\n    }\n\n    nameToCallback.set(name, callback);\n  }\n\n  useProxy(): boolean {\n    return true;\n  }\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"creating-the-server-code",children:"Creating the server code"}),"\n",(0,s.jsx)(t.p,{children:"Now let's create a simple http server that will use our custom scope."}),"\n",(0,s.jsxs)(t.p,{children:["To do this, we will use the ",(0,s.jsx)(t.code,{children:"http"})," module from Node.js and the ",(0,s.jsx)(t.code,{children:"HttpExecutionContext"})," class that we created earlier."]}),"\n",(0,s.jsxs)(t.p,{children:["When a request is received, we will run the request handling code inside HttpExecutionContext's ",(0,s.jsx)(t.code,{children:"run"})," method."]}),"\n",(0,s.jsxs)(t.p,{children:["Before any request handling code is executed, we will call ",(0,s.jsx)(t.code,{children:"RequestScope#onScopeBegin"})," to initialize the scoped beans, and await initialization."]}),"\n",(0,s.jsxs)(t.p,{children:["After the request handling code is executed, we will call ",(0,s.jsx)(t.code,{children:"RequestScope#onScopeEnded"})," to destroy the scoped beans, and await destruction."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:'title="main.ts"',children:"import http from 'node:http';\nimport { HttpExecutionContext } from './HTTPExecutionContext';\nimport { RequestScope } from './RequestScope';\n\nhttp.createServer((req, res) => {\n  HttpExecutionContext.run(async () => {\n    await RequestScope.instance.onScopeBegin();\n    /* request-handling */\n    await RequestScope.instance.onScopeEnded();\n  });\n}).listen(8080);\n"})}),"\n",(0,s.jsx)(t.h3,{id:"registering-the-scope",children:"Registering the Scope"}),"\n",(0,s.jsxs)(t.p,{children:["To make the Clawject container aware of your new scope,\nyou need to register it through the ",(0,s.jsx)(t.code,{children:"registerScope"})," method on a ",(0,s.jsx)(t.code,{children:"ScopeRegister"})," class."]}),"\n",(0,s.jsx)(t.p,{children:"Note that you should register your scope before creating the container."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import { ScopeRegister } from '@clawject/di';\nimport { RequestScope } from './RequestScope';\n\nScopeRegister.registerScope('request', RequestScope.instance);\n"})}),"\n",(0,s.jsx)(t.h3,{id:"using-the-custom-scope",children:"Using the Custom Scope"}),"\n",(0,s.jsx)(t.p,{children:"Now we have registered our custom scope, and we can use it in our beans."}),"\n",(0,s.jsxs)(t.p,{children:["Let's define ",(0,s.jsx)(t.code,{children:"RequestStorage"})," class that can store arbitrary data for each http request:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:'title="RequestStorage.ts"',children:"export class RequestStorage {\n  private data = new Map<string, any>();\n\n  set(key: string, value: any): void {\n    this.data.set(key, value);\n  }\n\n  get(key: string): any {\n    return this.data.get(key);\n  }\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Now let's define ",(0,s.jsx)(t.code,{children:"request"})," bean that will be scoped to each http request:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:'title="Application.ts"',children:"import { Bean, ClawjectApplication, Scope } from '@clawject/di';\nimport { RequestStorage } from './RequestStorage';\n\n@ClawjectApplication\nexport class Application {\n  @Scope('request') requestStorage = Bean(RequestStorage)\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Now, when you inject RequestStorage into other beans (even singleton-scoped) \u2013 the proxy will be injected, and the actual instance of ",(0,s.jsx)(t.code,{children:"RequestStorage"})," will be created and destroyed for each http request."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:'title="SomeService.ts"',children:"import { RequestStorage } from './RequestStorage';\n\nexport class SomeService {\n  constructor(private requestStorage: RequestStorage) {}\n\n  /* ... */\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},5162:(e,t,n)=>{n.d(t,{Z:()=>r});n(7294);var s=n(512);const a={tabItem:"tabItem_Ymn6"};var o=n(5893);function r(e){let{children:t,hidden:n,className:r}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,s.Z)(a.tabItem,r),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var s=n(7294),a=n(512),o=n(2466),r=n(6550),c=n(469),i=n(1980),l=n(7392),d=n(12);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:a}}=e;return{value:t,label:n,attributes:s,default:a}}))}(n);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,r.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,s.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=h(e),[r,i]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:o}))),[l,u]=m({queryString:n,groupId:a}),[g,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,d.Nk)(n);return[a,(0,s.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),x=(()=>{const e=l??g;return p({value:e,tabValues:o})?e:null})();(0,c.Z)((()=>{x&&i(x)}),[x]);return{selectedValue:r,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),b(e)}),[u,b,o]),tabValues:o}}var b=n(2389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(5893);function f(e){let{className:t,block:n,selectedValue:s,selectValue:r,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:l}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=i.indexOf(t),a=c[n].value;a!==s&&(l(t),r(a))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:c.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>i.push(e),onKeyDown:u,onClick:d,...o,className:(0,a.Z)("tabs__item",x.tabItem,o?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=g(e);return(0,j.jsxs)("div",{className:(0,a.Z)("tabs-container",x.tabList),children:[(0,j.jsx)(f,{...e,...t}),(0,j.jsx)(v,{...e,...t})]})}function w(e){const t=(0,b.Z)();return(0,j.jsx)(y,{...e,children:u(e.children)},String(t))}},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>r});var s=n(7294);const a={},o=s.createContext(a);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);