"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4881],{4934:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=t(5893),a=t(1151);t(4866),t(5162);const o={title:"@Embedded",hide_title:!0},l=void 0,i={id:"overview/embedded",title:"@Embedded",description:"@Embedded",source:"@site/docs/overview/embedded.mdx",sourceDirName:"overview",slug:"/overview/embedded",permalink:"/docs/overview/embedded",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1708364965,formattedLastUpdatedAt:"Feb 19, 2024",frontMatter:{title:"@Embedded",hide_title:!0},sidebar:"docs",previous:{title:"Lifecycle",permalink:"/docs/overview/lifecycle"},next:{title:"@Lazy",permalink:"/docs/overview/lazy"}},s={},d=[{value:"@Embedded",id:"embedded",level:2},{value:"Embedding object into context",id:"embedding-object-into-context",level:3},{value:"Naming",id:"naming",level:3}];function c(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"embedded",children:"@Embedded"}),"\n",(0,r.jsxs)(n.p,{children:["Clawject provides ",(0,r.jsx)(n.code,{children:"@Embedded"})," decorator that allows to register elements from a plain object as a beans."]}),"\n",(0,r.jsx)(n.admonition,{title:"Note that",type:"tip",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"@Embedded"})," decorator can't be applied to class-constructor Bean ",(0,r.jsx)(n.code,{children:"foo = Bean(Foo)"}),"."]})}),"\n",(0,r.jsx)(n.h3,{id:"embedding-object-into-context",children:"Embedding object into context"}),"\n",(0,r.jsxs)(n.p,{children:["All properties of an object that is declared in ",(0,r.jsx)(n.code,{children:"IFoo"})," will be available as a dependency in a configuration,\nand the ",(0,r.jsx)(n.code,{children:"IFoo"})," object itself will be available as a bean."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"interface IFoo {\n  fooProperty: string;\n}\nconst foo: IFoo = { fooProperty: 'fooValue' };\n\n@ClawjectApplication\nclass Application {\n  @Bean\n  @Embedded\n  fooBean = foo;\n\n  @PostConstruct\n  postConstruct(\n    fooObject: IFoo, // <- foo will be injected here\n    fooBeanFooProperty: string // <- foo.fooProperty will be injected here\n  ) {}\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"naming",children:"Naming"}),"\n",(0,r.jsxs)(n.p,{children:["If you have more than one bean with the same type, and you want to inject bean specifically from an ",(0,r.jsx)(n.code,{children:"Embedded"})," bean,\nyou should specify the correct name for the dependency."]}),"\n",(0,r.jsx)(n.p,{children:"In the embedded beans name will be defined as a class property name + property\nname from an embedded object with a first letter capitalized."}),"\n",(0,r.jsx)(n.p,{children:"Let's look at the example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"interface IEmbedded {\n  stringBean: string;\n}\n\n@ClawjectApplication\nclass Application {\n  @Bean\n  @Embedded\n  embeddedBean: IEmbedded = { stringBean: 'embeddedStringBean' };\n\n  stringBean = 'stringBeanValue';\n\n  @PostConstruct\n  postConstruct(\n    stringBean: string, // <- stringBean will be injected here\n    embeddedBeanStringBean: string // <- embeddedBean.stringBean will be injected here\n  ) {}\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>l});t(7294);var r=t(6905);const a={tabItem:"tabItem_Ymn6"};var o=t(5893);function l(e){let{children:n,hidden:t,className:l}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,l),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>y});var r=t(7294),a=t(6905),o=t(2466),l=t(6550),i=t(469),s=t(1980),d=t(7392),c=t(12);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function b(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function h(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=b(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[d,u]=m({queryString:t,groupId:a}),[h,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,c.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),v=(()=>{const e=d??h;return p({value:e,tabValues:o})?e:null})();(0,i.Z)((()=>{v&&s(v)}),[v]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var f=t(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(5893);function j(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:i}=e;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),c=e=>{const n=e.currentTarget,t=s.indexOf(n),a=i[t].value;a!==r&&(d(n),l(a))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>s.push(e),onKeyDown:u,onClick:c,...o,className:(0,a.Z)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function w(e){const n=h(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(j,{...e,...n}),(0,g.jsx)(x,{...e,...n})]})}function y(e){const n=(0,f.Z)();return(0,g.jsx)(w,{...e,children:u(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>l});var r=t(7294);const a={},o=r.createContext(a);function l(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);