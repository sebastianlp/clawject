"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[694],{3024:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var t=a(5893),r=a(1151),o=a(4866),s=a(5162);const l={title:"Bean"},c=void 0,i={id:"api/bean",title:"Bean",description:"Bean is an object that is managed and constructed by Clawject container it can have dependencies,",source:"@site/docs/api/bean.mdx",sourceDirName:"api",slug:"/api/bean",permalink:"/docs/api/bean",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1701602866,formattedLastUpdatedAt:"Dec 3, 2023",frontMatter:{title:"Bean"},sidebar:"docs",previous:{title:"ScopeRegister",permalink:"/docs/api/scope-register"},next:{title:"@PostConstruct @PreDestroy",permalink:"/docs/api/lifecycle"}},d={},u=[{value:"Declare Bean",id:"declare-bean",level:2},{value:"<code>@Bean</code> decorator",id:"bean-decorator",level:3},{value:"<code>Bean</code> function",id:"bean-function",level:3},{value:"Bean Types",id:"bean-types",level:2},{value:"Specifying Bean type",id:"specifying-bean-type",level:2},{value:"Bean Dependencies",id:"bean-dependencies",level:2},{value:"How dependencies are resolved",id:"how-dependencies-are-resolved",level:2},{value:"Optional dependencies",id:"optional-dependencies",level:2},{value:"Circular dependencies",id:"circular-dependencies",level:2}];function p(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Bean is an object that is managed and constructed by Clawject container it can have dependencies,\nand it can be a dependency for other Beans."}),"\n",(0,t.jsx)(n.h2,{id:"declare-bean",children:"Declare Bean"}),"\n",(0,t.jsx)(n.p,{children:"There are a few ways to declare a Bean, let's explore all of them one by one."}),"\n",(0,t.jsxs)(n.h3,{id:"bean-decorator",children:[(0,t.jsx)(n.code,{children:"@Bean"})," decorator"]}),"\n",(0,t.jsxs)(n.p,{children:["You can decorate property, getter or method with ",(0,t.jsx)(n.code,{children:"@Bean"})," decorator to declare a Bean."]}),"\n",(0,t.jsxs)(n.p,{children:["When you're decorating ",(0,t.jsx)(n.strong,{children:"method"})," or property that holds ",(0,t.jsx)(n.strong,{children:"arrow function"})," -\nit's your responsibility to provide return value for bean,\nif it's class - it should be instantiated, if it's some dynamic value \u2014 it should be returned from function provided."]}),"\n",(0,t.jsxs)(n.p,{children:["Functions decorated with ",(0,t.jsx)(n.code,{children:"@Bean"})," decorator called ",(0,t.jsx)(n.strong,{children:"factory-functions"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"You can provide bean dependencies via function arguments by specifying an argument type."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="Declaring method and arrow function beans"',children:"class Foo {\n  name = 'foo';\n}\n\nclass MyContext extends CatContext {\n  @Bean foo() {\n    return new Foo();\n  }\n\n  @Bean fooName = (foo: Foo) => foo.name;\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["When your bean doesn't have any dependencies -\nyou can just assign value to property decorated with ",(0,t.jsx)(n.code,{children:"@Bean"})," decorator."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="Declaring bean without dependencies"',children:"class Foo {}\n\nclass MyContext extends CatContext {\n  @Bean foo = new Foo();\n}\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"bean-function",children:[(0,t.jsx)(n.code,{children:"Bean"})," function"]}),"\n",(0,t.jsxs)(n.p,{children:["It can be quite annoying to declare each dependency in method or arrow function for your class,\nespecially when your class has a lot of dependencies.\nSo, if you add/change/remove a dependency - you need to change it in factory-function level as well.\nTo solve this inconvenience Clawject has ",(0,t.jsx)(n.code,{children:"Bean"})," function that accepts class constructor,\nand automatically instantiate it with all needed dependencies."]}),"\n",(0,t.jsxs)(o.Z,{children:[(0,t.jsx)(s.Z,{value:"bean-function",label:"Declaring bean with Bean function",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"class Bar {}\nclass Baz {}\n\nclass Foo {\n  constructor(\n    private dependency0: string,\n    private dependency1: number,\n    private dependency2: Bar,\n    private dependency3: Baz,\n  ) {}\n}\n\nclass MyContext extends CatContext {\n  foo = Bean(Foo);\n\n  @Bean stringBean = 'dependency0';\n  @Bean numberBean = 1;\n  barBean = Bean(Bar);\n  bazBean = Bean(Baz);\n}\n"})})}),(0,t.jsx)(s.Z,{value:"no-bean-function",label:"Declaring bean with @Bean decorator and method",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"class Bar {}\nclass Baz {}\n\nclass Foo {\n  constructor(\n    private dependency0: string,\n    private dependency1: number,\n    private dependency2: Bar,\n    private dependency3: Baz,\n  ) {}\n}\n\nclass MyContext extends CatContext {\n  @Bean foo(\n    dependency0: string,\n    dependency1: number,\n    dependency2: Bar,\n    dependency3: Baz,\n  ) {\n    return new Foo(\n      dependency0,\n      dependency1,\n      dependency2,\n      dependency3,\n    );\n  }\n\n  @Bean stringBean = 'dependency0';\n  @Bean numberBean = 1;\n\n  @Bean barBean() {\n    return new Bar();\n  }\n\n  @Bean bazBean() {\n    return new Baz();\n  }\n}\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"bean-types",children:"Bean Types"}),"\n",(0,t.jsx)(n.p,{children:"Bean type is a type of value that bean will provide as a dependency for other beans."}),"\n",(0,t.jsxs)(n.p,{children:["There are a few restrictions on bean value types: ",(0,t.jsx)(n.code,{children:"undefined"}),", ",(0,t.jsx)(n.code,{children:"void"}),", ",(0,t.jsx)(n.code,{children:"null"}),", ",(0,t.jsx)(n.code,{children:"never"})," or union type.\nIf you specify an invalid bean type, you will get compile-time error.\nLet's take a look at invalid bean types:"]}),"\n",(0,t.jsxs)(o.Z,{children:[(0,t.jsx)(s.Z,{value:"undefined-void-null-never",label:"undefined, void, null, never",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"class MyContext extends CatContext {\n  @Bean foo: undefined = undefined;\n  @Bean bar: void = undefined;\n  @Bean baz: null = null;\n  @Bean quux(): never { throw new Error('never'); }\n}\n"})})}),(0,t.jsx)(s.Z,{value:"union-type",label:"union",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"class MyContext extends CatContext {\n  @Bean foo: string | number = 'string';\n}\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"specifying-bean-type",children:"Specifying Bean type"}),"\n",(0,t.jsx)(n.p,{children:"You can specify the type explicitly for each property,\nbut it is not necessary to, because Clawject using TypeScript type system to infer types."}),"\n",(0,t.jsx)(n.p,{children:"The next two examples are equivalent:"}),"\n",(0,t.jsxs)(o.Z,{children:[(0,t.jsx)(s.Z,{value:"infer-type",label:"Infering type based on value",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"class MyContext extends CatContext {\n  @Bean foo = 'fooValue'; // <- type of Bean will be \"string\"\n}\n"})})}),(0,t.jsx)(s.Z,{value:"explicitly-specify-type",label:"Specify type explicitly",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"class MyContext extends CatContext {\n  @Bean foo: string = 'fooValue'; // <- type of Bean will be \"string\"\n}\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["When your bean type is a class-type -\nClawject will automatically resolve a class type including ",(0,t.jsx)(n.code,{children:"implements"})," and ",(0,t.jsx)(n.code,{children:"extends"})," clauses types."]}),"\n",(0,t.jsx)(n.admonition,{title:"Note",type:"info",children:(0,t.jsxs)(n.p,{children:["Only first level of ",(0,t.jsx)(n.code,{children:"extends"})," and ",(0,t.jsx)(n.code,{children:"implements"})," clauses will be resolved,\nso if your class extends another class, and that class extends another class, -\nonly a first class type will be resolved."]})}),"\n",(0,t.jsx)(n.p,{children:"Let's take a look at the next example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'class AbstractBar {}\nclass AbstractFoo extends AbstractBar {}\n\ninterface IFoo {}\n\nclass Foo extends AbstractFoo implements IFoo {}\n\nclass MyContext extends CatContext {\n  foo = Bean(Foo);\n\n  @PostConstruct\n  postConstruct(\n    foo: Foo, // <- "foo" will be injected\n    iFoo: IFoo, // <- "foo" will be injected, "Foo" explicitly implements "IFoo"\n    abstractFoo: AbstractFoo, // <- "foo" will be injected, "Foo" explicitly extends "AbstractFoo"\n    abstractBar: AbstractBar, // <- compilation error will be reported, no bean of type "AbstractBar" were found\n  ) {}\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"bean-dependencies",children:"Bean Dependencies"}),"\n",(0,t.jsxs)(n.p,{children:["Bean dependency is a parameter of a bean that is injected by Clawject.\nDependency can be declared in class constructor, or in a ",(0,t.jsx)(n.code,{children:"factory-method"}),"."]}),"\n",(0,t.jsxs)(o.Z,{children:[(0,t.jsx)(s.Z,{value:"class-bean-dependency",label:"Class-Constructor Bean dependencies",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"class Foo {\n  constructor(\n    private bar: string,\n    private baz: number,\n  ) {}\n}\n\nclass MyContext extends CatContext {\n  @Bean bar = 'barValue';\n  @Bean baz = 42;\n\n  foo = Bean(Foo);\n}\n"})})}),(0,t.jsx)(s.Z,{value:"factory-function-bean-dependencies",label:"Factory-Method bean dependencies",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"class Foo {\n  constructor(\n    private bar: string,\n    private baz: number,\n  ) {}\n}\n\nclass MyContext extends CatContext {\n  @Bean bar = 'barValue';\n  @Bean baz = 42;\n\n  @Bean foo(bar: string, baz: number) {\n    return new Foo(bar, baz)\n  }\n}\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"how-dependencies-are-resolved",children:"How dependencies are resolved"}),"\n",(0,t.jsx)(n.p,{children:"There are a few steps that are taken to resolve bean dependencies."}),"\n",(0,t.jsx)(n.p,{children:"Firstly - Clawject try to find all beans that are compatible with a dependency type.\nIf none of the compatible bean candidates are found - compilation error will be reported."}),"\n",(0,t.jsxs)(n.p,{children:["If only ",(0,t.jsx)(n.strong,{children:"one"})," compatible bean is found - it's used as a dependency."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"class Foo {\n  constructor(\n    private bar: string // <- \"barBean\" will be injected\n  ) {}\n}\n\nclass MyContext extends CatContext {\n  @Bean barBean = 'barValue';\n\n  foo = Bean(Foo);\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.strong,{children:"more than one"})," compatible bean is found - Clawject try to find a candidate that has the same name as parameter.\nIf such bean is found - it's used as a dependency."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"class Foo {\n  constructor(\n    private bar: string // <- \"bar\" will be injected\n  ) {}\n}\n\nclass MyContext extends CatContext {\n  @Bean bar = 'barValue';\n  @Bean barOther = 'barOtherValue';\n\n  foo = Bean(Foo);\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.strong,{children:"more than one"})," compatible bean is found, and none of them has the same name\nas parameter - then compilation error will be reported."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"class Foo {\n  constructor(\n    private bar: string // <- compilation error\n  ) {}\n}\n\nclass MyContext extends CatContext {\n  @Bean bar1 = 'bar1Value';\n  @Bean bar2 = 'bar2Value';\n\n  foo = Bean(Foo);\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"optional-dependencies",children:"Optional dependencies"}),"\n",(0,t.jsxs)(n.p,{children:["Dependencies can be optional, if there are no suitable bean candidates found - ",(0,t.jsx)(n.code,{children:"undefined"})," or ",(0,t.jsx)(n.code,{children:"null"})," will be injected."]}),"\n",(0,t.jsx)(n.p,{children:"Let's take a look at how we can mark dependency as optional:"}),"\n",(0,t.jsxs)(o.Z,{children:[(0,t.jsx)(s.Z,{value:"optional-operator",label:"Optional operator",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"class Foo {\n  constructor(\n    private bar?: string, // <- optional dependency, `undefined` will be injected\n  ) {}\n}\n\nclass MyContext extends CatContext {\n  foo = Bean(Foo);\n}\n"})})}),(0,t.jsx)(s.Z,{value:"union-undefined",label:"Union with undefined",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"class Foo {\n  constructor(\n    private bar: string | undefined, // <- optional dependency, `undefined` will be injected\n  ) {}\n}\n\nclass MyContext extends CatContext {\n  foo = Bean(Foo);\n}\n"})})}),(0,t.jsx)(s.Z,{value:"union-null",label:"Union with null",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"class Foo {\n  constructor(\n    private bar: string | null, // <- optional dependency, `null` will be injected\n  ) {}\n}\n\nclass MyContext extends CatContext {\n  foo = Bean(Foo);\n}\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"circular-dependencies",children:"Circular dependencies"}),"\n",(0,t.jsx)(n.p,{children:"Clawject will detect circular dependencies and report compilation error with involved beans."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"class Bar {\n  constructor(\n    private foo: Foo,\n  ) {}\n}\n\nclass Foo {\n  constructor(\n    private bar: Bar,\n  ) {}\n}\n\nclass MyContext extends CatContext {\n  foo = Bean(Foo); // <- Circular dependencies detected. foo <\u2014> bar\n  bar = Bean(Bar); // <- Circular dependencies detected. bar <\u2014> foo\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},5162:(e,n,a)=>{a.d(n,{Z:()=>s});a(7294);var t=a(6010);const r={tabItem:"tabItem_Ymn6"};var o=a(5893);function s(e){let{children:n,hidden:a,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,s),hidden:a,children:n})}},4866:(e,n,a)=>{a.d(n,{Z:()=>B});var t=a(7294),r=a(6010),o=a(2466),s=a(6550),l=a(469),c=a(1980),i=a(7392),d=a(12);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}(a);return function(e){const n=(0,i.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function h(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:a}=e;const r=(0,s.k6)(),o=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,c._X)(o),(0,t.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function x(e){const{defaultValue:n,queryString:a=!1,groupId:r}=e,o=p(e),[s,c]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:o}))),[i,u]=b({queryString:a,groupId:r}),[x,f]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,d.Nk)(a);return[r,(0,t.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),y=(()=>{const e=i??x;return h({value:e,tabValues:o})?e:null})();(0,l.Z)((()=>{y&&c(y)}),[y]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var f=a(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=a(5893);function j(e){let{className:n,block:a,selectedValue:t,selectValue:s,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:i}=(0,o.o5)(),d=e=>{const n=e.currentTarget,a=c.indexOf(n),r=l[a].value;r!==t&&(i(n),s(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;n=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;n=c[a]??c[c.length-1];break}}n?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},n),children:l.map((e=>{let{value:n,label:a,attributes:o}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...o,className:(0,r.Z)("tabs__item",y.tabItem,o?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function v(e){let{lazy:n,children:a,selectedValue:r}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function g(e){const n=x(e);return(0,m.jsxs)("div",{className:(0,r.Z)("tabs-container",y.tabList),children:[(0,m.jsx)(j,{...e,...n}),(0,m.jsx)(v,{...e,...n})]})}function B(e){const n=(0,f.Z)();return(0,m.jsx)(g,{...e,children:u(e.children)},String(n))}},1151:(e,n,a)=>{a.d(n,{Z:()=>l,a:()=>s});var t=a(7294);const r={},o=t.createContext(r);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);