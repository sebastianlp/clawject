"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[352],{8500:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>h});var t=a(5893),c=a(1151),r=a(4866),l=a(5162);const s={title:"Inject Arrays and Collections"},o=void 0,i={id:"advanced-concepts/injecting-collections",title:"Inject Arrays and Collections",description:"Sometimes you need to inject an array or collection of beans into another bean,",source:"@site/docs/advanced-concepts/injecting-collections.mdx",sourceDirName:"advanced-concepts",slug:"/advanced-concepts/injecting-collections",permalink:"/docs/advanced-concepts/injecting-collections",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1701602866,formattedLastUpdatedAt:"Dec 3, 2023",frontMatter:{title:"Inject Arrays and Collections"},sidebar:"docs",previous:{title:"@Scope",permalink:"/docs/api/scope"},next:{title:"Custom Scopes",permalink:"/docs/advanced-concepts/custom-scopes"}},u={},h=[{value:"Defining Bean with Array or Collection type",id:"defining-bean-with-array-or-collection-type",level:2}];function d(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Sometimes you need to inject an array or collection of beans into another bean,\nfor example, when you need to inject listeners into a publisher, or caches into a cache manager."}),"\n",(0,t.jsx)(n.p,{children:"Clawject has some reserved types for arrays and collections:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["array: ",(0,t.jsx)(n.code,{children:"ReadonlyArray<any> | Array<any> | readonly any[] | any[]"})]}),"\n",(0,t.jsxs)(n.li,{children:["set: ",(0,t.jsx)(n.code,{children:"ReadonlySet<any> | Set<any>"})]}),"\n",(0,t.jsxs)(n.li,{children:["map: ",(0,t.jsx)(n.code,{children:"ReadonlyMap<string, any> | Map<string, any>"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Note that all arrays and collections that are injected are non-singletons, so mutating one of them will not affect other beans."}),"\n",(0,t.jsx)(n.p,{children:"Let's look at how we can inject arrays and collections with Clawject:"}),"\n",(0,t.jsxs)(r.Z,{children:[(0,t.jsx)(l.Z,{value:"array-literal",label:"Array literal",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"class Cache<T> {\n  clear(): void { /* ... */ }\n}\n\nclass CacheManager {\n  constructor(\n    private caches: Cache<any>[],\n  ) {}\n\n  clearAll(): void {\n    this.caches.forEach(cache => cache.clear());\n  }\n}\n\nclass MyContext extends CatContext {\n  stringCache = Bean(Cache<string>)\n  numberCache = Bean(Cache<number>)\n  booleanCache = Bean(Cache<boolean>)\n\n  cacheManager = Bean(CacheManager)\n}\n"})})}),(0,t.jsx)(l.Z,{value:"array",label:"Array",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"class Cache<T> {\n  clear(): void { /* ... */ }\n}\n\nclass CacheManager {\n  constructor(\n    private caches: Array<Cache<any>>,\n  ) {}\n\n  clearAll(): void {\n    this.caches.forEach(cache => cache.clear());\n  }\n}\n\nclass MyContext extends CatContext {\n  stringCache = Bean(Cache<string>)\n  numberCache = Bean(Cache<number>)\n  booleanCache = Bean(Cache<boolean>)\n\n  cacheManager = Bean(CacheManager)\n}\n"})})}),(0,t.jsx)(l.Z,{value:"readonly-array",label:"ReadonlyArray",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"class Cache<T> {\n  clear(): void { /* ... */ }\n}\n\nclass CacheManager {\n  constructor(\n    private caches: ReadonlyArray<Cache<any>>,\n  ) {}\n\n  clearAll(): void {\n    this.caches.forEach(cache => cache.clear());\n  }\n}\n\nclass MyContext extends CatContext {\n  stringCache = Bean(Cache<string>)\n  numberCache = Bean(Cache<number>)\n  booleanCache = Bean(Cache<boolean>)\n\n  cacheManager = Bean(CacheManager)\n}\n"})})}),(0,t.jsx)(l.Z,{value:"set",label:"Set",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"class Cache<T> {\n  clear(): void { /* ... */ }\n}\n\nclass CacheManager {\n  constructor(\n    private caches: Set<Cache<any>>,\n  ) {}\n\n  clearAll(): void {\n    this.caches.forEach(cache => cache.clear());\n  }\n}\n\nclass MyContext extends CatContext {\n  stringCache = Bean(Cache<string>)\n  numberCache = Bean(Cache<number>)\n  booleanCache = Bean(Cache<boolean>)\n\n  cacheManager = Bean(CacheManager)\n}\n"})})}),(0,t.jsx)(l.Z,{value:"readonly-set",label:"ReadonlySet",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"class Cache<T> {\n  clear(): void { /* ... */ }\n}\n\nclass CacheManager {\n  constructor(\n    private caches: ReadonlySet<Cache<any>>,\n  ) {}\n\n  clearAll(): void {\n    this.caches.forEach(cache => cache.clear());\n  }\n}\n\nclass MyContext extends CatContext {\n  stringCache = Bean(Cache<string>)\n  numberCache = Bean(Cache<number>)\n  booleanCache = Bean(Cache<boolean>)\n\n  cacheManager = Bean(CacheManager)\n}\n"})})}),(0,t.jsx)(l.Z,{value:"map",label:"Map",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"class Cache<T> {\n  clear(): void { /* ... */ }\n}\n\nclass CacheManager {\n  constructor(\n    private caches: Map<string, Cache<any>>,\n  ) {}\n\n  clearAll(): void {\n    this.caches.forEach((cache, beanName) => {\n      console.log(`Clearing cache ${beanName}`);\n      cache.clear();\n    });\n  }\n}\n\nclass MyContext extends CatContext {\n  stringCache = Bean(Cache<string>)\n  numberCache = Bean(Cache<number>)\n  booleanCache = Bean(Cache<boolean>)\n\n  cacheManager = Bean(CacheManager)\n}\n"})})}),(0,t.jsx)(l.Z,{value:"readonly-map",label:"ReadonlyMap",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"class Cache<T> {\n  clear(): void { /* ... */ }\n}\n\nclass CacheManager {\n  constructor(\n    private caches: ReadonlyMap<string, Cache<any>>,\n  ) {}\n\n  clearAll(): void {\n    this.caches.forEach((cache, beanName) => {\n      console.log(`Clearing cache ${beanName}`);\n      cache.clear();\n    });\n  }\n}\n\nclass MyContext extends CatContext {\n  stringCache = Bean(Cache<string>)\n  numberCache = Bean(Cache<number>)\n  booleanCache = Bean(Cache<boolean>)\n\n  cacheManager = Bean(CacheManager)\n}\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"defining-bean-with-array-or-collection-type",children:"Defining Bean with Array or Collection type"}),"\n",(0,t.jsx)(n.p,{children:"If you want to define Bean with type Array or Collection - you can safely do that.\nTo access such beans \u2014 you should match the type of collection and bean name."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"class MyContext extends CatContext {\n  @Bean myCollection = new Set(['foo', 'bar', 'baz']);\n  @Bean string1 = 'quux';\n  @Bean string2 = 'quuux';\n\n  @PostConstruct\n  postConstruct(\n    myCollection: Set<string>, // myCollection bean will be injected\n    otherStrings: Set<string>, // Set of string1 and string2 beans will be injected\n  ): void {}\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},5162:(e,n,a)=>{a.d(n,{Z:()=>l});a(7294);var t=a(6010);const c={tabItem:"tabItem_Ymn6"};var r=a(5893);function l(e){let{children:n,hidden:a,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.Z)(c.tabItem,l),hidden:a,children:n})}},4866:(e,n,a)=>{a.d(n,{Z:()=>j});var t=a(7294),c=a(6010),r=a(2466),l=a(6550),s=a(469),o=a(1980),i=a(7392),u=a(12);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:c}}=e;return{value:n,label:a,attributes:t,default:c}}))}(a);return function(e){const n=(0,i.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function p(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function C(e){let{queryString:n=!1,groupId:a}=e;const c=(0,l.k6)(),r=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,o._X)(r),(0,t.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(c.location.search);n.set(r,e),c.replace({...c.location,search:n.toString()})}),[r,c])]}function b(e){const{defaultValue:n,queryString:a=!1,groupId:c}=e,r=d(e),[l,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:r}))),[i,h]=C({queryString:a,groupId:c}),[b,g]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[c,r]=(0,u.Nk)(a);return[c,(0,t.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:c}),m=(()=>{const e=i??b;return p({value:e,tabValues:r})?e:null})();(0,s.Z)((()=>{m&&o(m)}),[m]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),g(e)}),[h,g,r]),tabValues:r}}var g=a(2389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=a(5893);function f(e){let{className:n,block:a,selectedValue:t,selectValue:l,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:i}=(0,r.o5)(),u=e=>{const n=e.currentTarget,a=o.indexOf(n),c=s[a].value;c!==t&&(i(n),l(c))},h=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=o.indexOf(e.currentTarget)+1;n=o[a]??o[0];break}case"ArrowLeft":{const a=o.indexOf(e.currentTarget)-1;n=o[a]??o[o.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":a},n),children:s.map((e=>{let{value:n,label:a,attributes:r}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:h,onClick:u,...r,className:(0,c.Z)("tabs__item",m.tabItem,r?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function x(e){let{lazy:n,children:a,selectedValue:c}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===c));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==c})))})}function v(e){const n=b(e);return(0,y.jsxs)("div",{className:(0,c.Z)("tabs-container",m.tabList),children:[(0,y.jsx)(f,{...e,...n}),(0,y.jsx)(x,{...e,...n})]})}function j(e){const n=(0,g.Z)();return(0,y.jsx)(v,{...e,children:h(e.children)},String(n))}},1151:(e,n,a)=>{a.d(n,{Z:()=>s,a:()=>l});var t=a(7294);const c={},r=t.createContext(c);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);