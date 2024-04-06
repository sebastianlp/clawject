"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[330],{4641:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=t(5893),s=t(1151);t(4866),t(5162);const r={title:"Clawject Type System",hide_title:!0,tags:["types","type-system","nominal-typing","duck-typing","structural-typing","generics","intersection-types","union-types","tuple-types","type-aliases"]},o=void 0,i={id:"core-concepts/type-system",title:"Clawject Type System",description:"Clawject Type System",source:"@site/docs/core-concepts/type-system.mdx",sourceDirName:"core-concepts",slug:"/core-concepts/type-system",permalink:"/docs/core-concepts/type-system",draft:!1,unlisted:!1,tags:[{label:"types",permalink:"/docs/tags/types"},{label:"type-system",permalink:"/docs/tags/type-system"},{label:"nominal-typing",permalink:"/docs/tags/nominal-typing"},{label:"duck-typing",permalink:"/docs/tags/duck-typing"},{label:"structural-typing",permalink:"/docs/tags/structural-typing"},{label:"generics",permalink:"/docs/tags/generics"},{label:"intersection-types",permalink:"/docs/tags/intersection-types"},{label:"union-types",permalink:"/docs/tags/union-types"},{label:"tuple-types",permalink:"/docs/tags/tuple-types"},{label:"type-aliases",permalink:"/docs/tags/type-aliases"}],version:"current",lastUpdatedAt:1712414697e3,frontMatter:{title:"Clawject Type System",hide_title:!0,tags:["types","type-system","nominal-typing","duck-typing","structural-typing","generics","intersection-types","union-types","tuple-types","type-aliases"]},sidebar:"docs",previous:{title:"Clawject IoC Container",permalink:"/docs/core-concepts/clawject-ioc"},next:{title:"Configurations",permalink:"/docs/fundamentals/configurations"}},l={},c=[{value:"Clawject Type System",id:"clawject-type-system",level:2},{value:"Nominal type system",id:"nominal-type-system",level:2},{value:"Primitive types",id:"primitive-types",level:2},{value:"Object types",id:"object-types",level:2},{value:"Generic types",id:"generic-types",level:2},{value:"Classes and Interfaces inheritance",id:"classes-and-interfaces-inheritance",level:2},{value:"Intersection types",id:"intersection-types",level:2},{value:"Union types",id:"union-types",level:2},{value:"Tuple types",id:"tuple-types",level:2},{value:"Type aliases",id:"type-aliases",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"clawject-type-system",children:"Clawject Type System"}),"\n",(0,a.jsxs)(n.p,{children:["By default - Clawject type system follows a typescript type system as much as possible,\nbut there is one major difference -\nTypeScript using\n",(0,a.jsx)(n.a,{href:"https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html#structural-type-system",children:"structural type system (duck typing)"}),"\nbut Clawject using ",(0,a.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Nominal_type_system",children:"nominal typing"}),"."]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["You can configure Clawject to use structural typing by setting ",(0,a.jsx)(n.a,{href:"/docs/configuration#typesystem",children:"typeSystem"})," option to ",(0,a.jsx)(n.code,{children:"structural"})," in configuration file."]})}),"\n",(0,a.jsx)(n.p,{children:"In a nutshell, nominal typing means that types are compared based on their name and place in the code,\nand structural typing means that types are compared based on their structure."}),"\n",(0,a.jsxs)(n.p,{children:["As an example - you have 2 classes ",(0,a.jsx)(n.code,{children:"Cat"})," and ",(0,a.jsx)(n.code,{children:"Dog"}),", both of them have the same properties and methods,\nif you will use ",(0,a.jsx)(n.code,{children:"Cat"})," instead of ",(0,a.jsx)(n.code,{children:"Dog"})," or vice versa -\nTypeScript will not complain about it, because both classes have the same structure."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"class Cat {\n  name = 'cat';\n  voice(): void {\n    console.log('meow');\n  }\n}\n\nclass Dog {\n  name = 'dog';\n  voice(): void {\n    console.log('woof');\n  }\n}\n\nclass CatOwner {\n  constructor(private pet: Cat) {}\n}\n\nconst dog = new Dog();\n\nconst catOwner = new CatOwner(dog); // <- TypeScript will not complain about it\n"})}),"\n",(0,a.jsxs)(n.p,{children:["But clawject will and report compile error about missing Bean declaration for ",(0,a.jsx)(n.code,{children:"Cat"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"class Cat {\n  name = 'cat';\n  voice(): void {\n    console.log('meow');\n  }\n}\n\nclass Dog {\n  name = 'dog';\n  voice(): void {\n    console.log('woof');\n  }\n}\n\nclass CatOwner {\n  constructor(private pet: Cat) {}\n}\n\n@ClawjectApplication\nclass Application {\n  dog = Bean(Dog);\n\n  catOwner = Bean(CatOwner); // <- Cannot find a Bean candidate for 'pet'.\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"nominal-type-system",children:"Nominal type system"}),"\n",(0,a.jsx)(n.p,{children:"All the following examples are based on the Clawjects nominal type system implementation,\nso if you're chosen structural type system - some examples may not work as expected."}),"\n",(0,a.jsx)(n.h2,{id:"primitive-types",children:"Primitive types"}),"\n",(0,a.jsxs)(n.p,{children:["Clawject supports all primitive types like ",(0,a.jsx)(n.code,{children:"number"}),", ",(0,a.jsx)(n.code,{children:"string"}),", type literals, etc. from TypeScript, and compares them the same as typescript does."]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["Check ",(0,a.jsx)(n.a,{href:"/docs/fundamentals/bean#bean-types",children:"Bean Types"})," section for not supported bean types."]})}),"\n",(0,a.jsx)(n.h2,{id:"object-types",children:"Object types"}),"\n",(0,a.jsx)(n.p,{children:"Because Clawject is using nominal typing \u2014 it's relying on at type declaration name and place."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:'title="Using type references"',children:"class Foo {}\ninterface Bar {}\ntype Baz = {};\n\n@ClawjectApplication\nclass Application {\n  @Bean foo: Foo = new Foo();\n  @Bean bar: Bar = {};\n  @Bean baz: Baz = {};\n\n  @PostConstruct\n  postConstruct(\n    dep0: Foo, // <- foo bean will be injected here\n    dep1: Bar, // <- bar bean will be injected here\n    dep2: Baz, // <- baz bean will be injected here\n  ) {}\n}\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:'title="Using object literals"',children:"@ClawjectApplication\nclass Application {\n  @Bean foo: { bar: string } = {bar: 'barValue'};\n\n  @PostConstruct\n  postConstruct(\n    // compilation error will be reported here, because structurally these types are identical,\n    // but they have different declarations\n    foo: { bar: string },\n  ) {}\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"generic-types",children:"Generic types"}),"\n",(0,a.jsx)(n.p,{children:"Clawject has first-class support for generic types:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"class Foo<T> {\n  constructor(\n    private data: T\n  ) {}\n}\n\n@ClawjectApplication\nclass Application {\n  @Bean stringData = 'meow';\n  @Bean numberData = 42;\n\n  /* `stringData` bean will be injected for constructor parameter `data` */\n  fooWithString = Bean(Foo<string>);\n\n  /* `numberData` bean will be injected for constructor parameter `data` */\n  fooWithNumber = Bean(Foo<number>);\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"If generic is not defined explicitly, clawject will try to resolve it in the following way:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"If a generic type has a default value, it will be used as a fallback type."}),"\n",(0,a.jsxs)(n.li,{children:["If a generic type has ",(0,a.jsx)(n.code,{children:"extends"})," constraint - it will be used as a fallback type."]}),"\n",(0,a.jsxs)(n.li,{children:["If you're not specifying a generic type explicitly, and it doesn't have default value or ",(0,a.jsx)(n.code,{children:"extends"})," constraint - it will be treated as ",(0,a.jsx)(n.code,{children:"unknown"})," type (default typescript behavior)."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Let's take a look at the next example to better understand how generic types are resolved when they are not specified explicitly:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"class Foo<T> {\n  constructor(data: T) {}\n}\n\nclass Bar<T = string> {\n  constructor(data: T) {}\n}\n\nclass Baz {}\nclass Quux<T extends Baz> {\n  constructor(data: T) {}\n}\n\n@ClawjectApplication\nclass Application {\n  /* The type of parameter `data` will be `unknown` */\n  foo = Bean(Foo);\n\n  /* The type of parameter `data` will be `string` */\n  bar = Bean(Bar);\n\n  /* The type of parameter `data` will be `Baz` */\n  quux = Bean(Quux);\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"classes-and-interfaces-inheritance",children:"Classes and Interfaces inheritance"}),"\n",(0,a.jsxs)(n.p,{children:["When type is a class or interface type -\nClawject will automatically resolve a chain of type inheritance together with generics.\nSo, if you have class ",(0,a.jsx)(n.code,{children:"CacheImpl<T>"})," that implements ",(0,a.jsx)(n.code,{children:"ICache<T>"})," interface, and ",(0,a.jsx)(n.code,{children:"ICahce<T>"})," is extends ",(0,a.jsx)(n.code,{children:"IReadOnlyCache<T>"})," interface,\nClawject will treat ",(0,a.jsx)(n.code,{children:"CacheImpl<T>"})," as an intersection of ",(0,a.jsx)(n.code,{children:"CacheImpl<T>"}),", ",(0,a.jsx)(n.code,{children:"ICache<T>"})," and ",(0,a.jsx)(n.code,{children:"IReadOnlyCache<T>"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import { Customer } from './customer';\nimport { Store } from './store';\n\ninterface IReadOnlyCache<T> {\n  get(key: string): T | null;\n}\n\ninterface ICache<T> extends IReadOnlyCache<T> {\n  set(key: string, value: T): void;\n  clear(): void;\n}\n\nclass CacheImpl<T> implements ICache<T> {\n  /* ... */\n}\n\nclass CustomerService {\n  constructor(\n    /* Clawject injects \"customerCache\" bean just by interface with a generic type */\n    private cache: IReadOnlyCache<Customer>\n  ) {}\n}\n\nclass StoreService {\n  constructor(\n    /* Clawject injects \"storeCache\" bean just by interface with a generic type */\n    private cache: ICache<Store>\n  ) {}\n}\n\nclass CacheManager {\n  constructor(\n    /* Clawject injects array of all found beans with type ICache (customerCache, storeCache) */\n    private caches: ICache<any>[]\n  ) {}\n}\n\n@ClawjectApplication\nclass Application {\n  customerCache = Bean(CacheImpl<Customer>);\n  storeCache = Bean(CacheImpl<Store>);\n  customerService = Bean(CustomerService);\n  storeService = Bean(StoreService);\n  cacheManager = Bean(CacheManager);\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"intersection-types",children:"Intersection types"}),"\n",(0,a.jsx)(n.p,{children:"Clawject fully supports intersection types as bean types, and as bean dependency types:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:'interface IFoo { foo: string }\ninterface IBar { bar: string }\ninterface IBaz { baz: string }\n\n@ClawjectApplication\nclass Application {\n  @Bean fooAndBarAndBaz: IFoo & IBar & IBaz = { foo: \'fooValue\', bar: \'barValue\', baz: \'bazValue\' };\n\n  @PostConstruct\n  postConstruct(\n    dep0: IFoo, // <- "fooAndBarAndBaz" will be injected\n    dep1: IBar, // <- "fooAndBarAndBaz" will be injected\n    dep2: IBar, // <- "fooAndBarAndBaz" will be injected\n    dep3: IFoo & IBar, // <- "fooAndBarAndBaz" will be injected\n    dep4: IFoo & IBaz, // <- "fooAndBarAndBaz" will be injected\n    dep5: IFoo & IBar & IBaz, // <- "fooAndBarAndBaz" will be injected\n  ) {}\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Clawject also can resolve complex generic types as a dependencies:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:'class Repository<T> {}\nclass Service<T> {\n  constructor(\n    private repository: Repository<T>,\n  ) {}\n}\n\ninterface Foo { foo: string }\ninterface Bar { bar: string }\n\n@ClawjectApplication\nclass Application {\n  fooRepository = Bean(Repository<Foo>);\n  barRepository = Bean(Repository<Bar>);\n  fooService = Bean(Service<Foo>)  // <- "fooRepository" will be injected as a "repository" dependency\n\n  @PostConstruct\n  postConstruct(\n    service: Service<Foo>, // <- "fooService" will be injected\n  ) {}\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"union-types",children:"Union types"}),"\n",(0,a.jsx)(n.p,{children:"Clawject supports union types only as a bean dependency types,\nso it's not possible to create a bean with a union type, but it's possible to request a bean using a union type:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"interface IFoo { foo: string }\ninterface IBar { bar: string }\n\n@ClawjectApplication\nclass Application {\n  @Bean bar: IBar = { bar: 'barValue' }\n\n  @PostConstruct\n  postConstruct(\n    dep0: IFoo | IBar, // <- \"bar\" will be injected here, because IFoo was not declared as a bean\n  ) {}\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"tuple-types",children:"Tuple types"}),"\n",(0,a.jsx)(n.p,{children:"Clawject has support for tuple types."}),"\n",(0,a.jsxs)(n.p,{children:["Tuple types are treated as a ",(0,a.jsx)(n.em,{children:"nominal types"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"@ClawjectApplication\nclass Application {\n  @Bean tuple: [string, number] = ['foo', 42];\n\n  @PostConstruct\n  postConstruct(\n    dep0: [string, number], // <- \"tuple\" bean will be injected here\n  ) {}\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"type-aliases",children:"Type aliases"}),"\n",(0,a.jsxs)(n.p,{children:["From the typescript point of view -\ntype aliases are just a named wrapper around base types like ",(0,a.jsx)(n.code,{children:"string"}),", ",(0,a.jsx)(n.code,{children:"number"}),", object literals, etc.\nSo type aliases will be treated as a set of base types."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"interface Foo {}\ninterface Bar {}\n\ntype Baz = Foo & Bar;\n\n@ClawjectApplication\nclass Application {\n  /* Type of Bean resolved to `Foo` */\n  @Bean foo: Foo = {};\n  /* Type of Bean resolved to `Bar` */\n  @Bean bar: Bar = {};\n  /* Type of Bean resolved to `Foo & Bar` */\n  @Bean baz: Baz = {};\n  /* Type is identical to `baz` Bean */\n  @Bean fooAndBar: Foo & Bar = {};\n}\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>o});t(7294);var a=t(512);const s={tabItem:"tabItem_Ymn6"};var r=t(5893);function o(e){let{children:n,hidden:t,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(s.tabItem,o),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>v});var a=t(7294),s=t(512),r=t(2466),o=t(6550),i=t(469),l=t(1980),c=t(7392),p=t(12);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:s}}=e;return{value:n,label:t,attributes:a,default:s}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function y(e){let{queryString:n=!1,groupId:t}=e;const s=(0,o.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,r=u(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[c,d]=y({queryString:t,groupId:s}),[m,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,p.Nk)(t);return[s,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),f=(()=>{const e=c??m;return h({value:e,tabValues:r})?e:null})();(0,i.Z)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,r]),tabValues:r}}var b=t(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(5893);function g(e){let{className:n,block:t,selectedValue:a,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),p=e=>{const n=e.currentTarget,t=l.indexOf(n),s=i[t].value;s!==a&&(c(n),o(s))},d=e=>{let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:d,onClick:p,...r,className:(0,s.Z)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:s}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function x(e){const n=m(e);return(0,j.jsxs)("div",{className:(0,s.Z)("tabs-container",f.tabList),children:[(0,j.jsx)(g,{...e,...n}),(0,j.jsx)(w,{...e,...n})]})}function v(e){const n=(0,b.Z)();return(0,j.jsx)(x,{...e,children:d(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>o});var a=t(7294);const s={},r=a.createContext(s);function o(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);