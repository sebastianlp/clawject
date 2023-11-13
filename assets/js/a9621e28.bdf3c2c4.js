"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[413],{1148:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>b,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=t(5893),r=t(1151),s=t(4866),o=t(5162);const l={title:"Bean Types",id:"bean-type"},i=void 0,c={id:"base-concepts/bean/bean-type",title:"Bean Types",description:"Bean type is a type of value that bean will provide as a dependency for other beans.",source:"@site/docs/04-base-concepts/06-bean/02-bean-types.mdx",sourceDirName:"04-base-concepts/06-bean",slug:"/base-concepts/bean/bean-type",permalink:"/docs/base-concepts/bean/bean-type",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Bean Types",id:"bean-type"},sidebar:"tutorialSidebar",previous:{title:"Declare Bean",permalink:"/docs/base-concepts/bean/declare-bean"},next:{title:"Bean Dependencies",permalink:"/docs/base-concepts/bean/bean-dependencies"}},u={},d=[{value:"Specifying Bean type",id:"specifying-bean-type",level:2}];function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Bean type is a type of value that bean will provide as a dependency for other beans."}),"\n",(0,a.jsxs)(n.p,{children:["There are a few restrictions on bean value types: ",(0,a.jsx)(n.code,{children:"undefined"}),", ",(0,a.jsx)(n.code,{children:"void"}),", ",(0,a.jsx)(n.code,{children:"null"}),", ",(0,a.jsx)(n.code,{children:"never"})," or union type.\nIf you specify an invalid bean type, you will get compile-time error.\nLet's take a look at invalid bean types:"]}),"\n","\n","\n",(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(o.Z,{value:"undefined-void-null-never",label:"undefined, void, null, never",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"class MyContext extends CatContext {\n  @Bean foo: undefined = undefined;\n  @Bean bar: void = undefined;\n  @Bean baz: null = null;\n  @Bean quux(): never { throw new Error('never'); }\n}\n"})})}),(0,a.jsx)(o.Z,{value:"union-type",label:"union",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"class MyContext extends CatContext {\n  @Bean foo: string | number = 'string';\n}\n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"specifying-bean-type",children:"Specifying Bean type"}),"\n",(0,a.jsx)(n.p,{children:"You can specify the type explicitly for each property,\nbut it is not necessary to, because Clawject using TypeScript type system to infer types."}),"\n",(0,a.jsx)(n.p,{children:"The next two examples are equivalent:"}),"\n",(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(o.Z,{value:"infer-type",label:"Infering type based on value",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"class MyContext extends CatContext {\n  @Bean foo = 'fooValue'; // <- type of Bean will be \"string\"\n}\n"})})}),(0,a.jsx)(o.Z,{value:"explicitly-specify-type",label:"Specify type explicitly",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"class MyContext extends CatContext {\n  @Bean foo: string = 'fooValue'; // <- type of Bean will be \"string\"\n}\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["When your bean type is a class-type -\nClawject will automatically resolve a class type including ",(0,a.jsx)(n.code,{children:"implements"})," and ",(0,a.jsx)(n.code,{children:"extends"})," clauses types."]}),"\n",(0,a.jsxs)(n.p,{children:["Note that only first level of ",(0,a.jsx)(n.code,{children:"extends"})," and ",(0,a.jsx)(n.code,{children:"implements"})," clauses will be resolved,\nso if your class extends another class, and that class extends another class, -\nonly a first class type will be resolved."]}),"\n",(0,a.jsx)(n.p,{children:"Let's take a look at the next example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:'class AbstractBar {}\nclass AbstractFoo extends AbstractBar {}\n\ninterface IFoo {}\n\nclass Foo extends AbstractFoo implements IFoo {}\n\nclass MyContext extends CatContext {\n  foo = Bean(Foo);\n\n  @PostConstruct\n  postConstruct(\n    foo: Foo, // <- "foo" will be injected\n    iFoo: IFoo, // <- "foo" will be injected, "Foo" explicitly implements "IFoo"\n    abstractFoo: AbstractFoo, // <- "foo" will be injected, "Foo" explicitly extends "AbstractFoo"\n    abstractBar: AbstractBar, // <- compilation error will be reported, no bean of type "AbstractBar" were found\n  ) {}\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["If you don't want to resolve ",(0,a.jsx)(n.code,{children:"implements"})," and ",(0,a.jsx)(n.code,{children:"extends"})," types,\nyou can specify a type of bean explicitly, or disable this feature globally.\nTODO link to configuration guide"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:'interface IFoo {}\nclass Foo implements IFoo {}\n\nclass MyContext extends CatContext {\n  foo: IFoo = Bean(Foo);\n\n  @PostConstruct\n  postConstruct(\n    iFoo: IFoo, // <- "foo" will be injected by explicit type\n    foo: Foo, // <- compilation error will be reported, no bean of type "Foo" were found\n  ) {}\n}\n'})})]})}function b(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>o});t(7294);var a=t(6010);const r={tabItem:"tabItem_Ymn6"};var s=t(5893);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,o),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>w});var a=t(7294),r=t(6010),s=t(2466),o=t(6550),l=t(469),i=t(1980),c=t(7392),u=t(12);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function b(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._X)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function h(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=p(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!b({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[c,d]=f({queryString:t,groupId:r}),[h,y]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,u.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),x=(()=>{const e=c??h;return b({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{x&&i(x)}),[x]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!b({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),y(e)}),[d,y,s]),tabValues:s}}var y=t(2389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=t(5893);function v(e){let{className:n,block:t,selectedValue:a,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),u=e=>{const n=e.currentTarget,t=i.indexOf(n),r=l[t].value;r!==a&&(c(n),o(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...s,className:(0,r.Z)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function j(e){const n=h(e);return(0,m.jsxs)("div",{className:(0,r.Z)("tabs-container",x.tabList),children:[(0,m.jsx)(v,{...e,...n}),(0,m.jsx)(g,{...e,...n})]})}function w(e){const n=(0,y.Z)();return(0,m.jsx)(j,{...e,children:d(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var a=t(7294);const r={},s=a.createContext(r);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);