"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[468],{890:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=t(5893),r=t(1151);t(4866),t(5162);const o={title:"@Embedded",id:"embedded"},s=void 0,l={id:"base-concepts/embedded",title:"@Embedded",description:"Clawject provides @Embedded decorator that allows to register elements from a plain object as a beans.",source:"@site/docs/04-base-concepts/011-embedded.mdx",sourceDirName:"04-base-concepts",slug:"/base-concepts/embedded",permalink:"/docs/base-concepts/embedded",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"@Embedded",id:"embedded"},sidebar:"tutorialSidebar",previous:{title:"@Lazy",permalink:"/docs/base-concepts/lazy"},next:{title:"@PostConstruct @PreDestroy",permalink:"/docs/base-concepts/postconstruct-predestroy"}},i={},d=[{value:"Embedding object into context",id:"embedding-object-into-context",level:2},{value:"Naming",id:"naming",level:2},{value:"@Lazy and @Scope on Embedded Beans",id:"lazy-and-scope-on-embedded-beans",level:2}];function c(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Clawject provides @Embedded decorator that allows to register elements from a plain object as a beans.\nPossible use cases:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Embedding initialized contexts into another context"}),"\n",(0,a.jsx)(n.li,{children:"Embedding external objects into a context"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Note that @Embedded decorator can't be applied to class-constructor Bean ",(0,a.jsx)(n.code,{children:"foo = Bean(Foo)"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"embedding-object-into-context",children:"Embedding object into context"}),"\n",(0,a.jsxs)(n.p,{children:["All properties of an object that is declared in ",(0,a.jsx)(n.code,{children:"IFoo"})," will be available as a dependency in a context,\nand the ",(0,a.jsx)(n.code,{children:"IFoo"})," object itself will be available as a bean."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"interface IFoo {\n  fooProperty: string;\n}\nconst foo: IFoo = { fooProperty: 'fooValue' };\n\nclass MyContext extends CatContext {\n  @Bean\n  @Embedded\n  fooBean = foo;\n\n  @PostConstruct\n  postConstruct(\n    fooObject: IFoo, // <- foo will be injected here\n    fooBeanFooProperty: string // <- foo.fooProperty will be injected here\n  ) {}\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"naming",children:"Naming"}),"\n",(0,a.jsx)(n.p,{children:"If you have more than one bean with the same type, and you want to inject bean from Embedded object,\nyou should specify the correct name for the dependency."}),"\n",(0,a.jsx)(n.p,{children:"In the embedded beans name will be defined as a class property name + property\nname from an embedded object with a first letter capitalized."}),"\n",(0,a.jsx)(n.p,{children:"Let's look at the example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"interface IEmbedded {\n  stringBean: string;\n}\n\nclass MyContext extends CatContext {\n  @Bean\n  @Embedded\n  embeddedBean: IEmbedded = { stringBean: 'embeddedStringBean' };\n\n  stringBean = 'stringBeanValue';\n\n  @PostConstruct\n  postConstruct(\n    stringBean: string, // <- stringBean will be injected here\n    embeddedBeanStringBean: string // <- embeddedBean.stringBean will be injected here\n  ) {}\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"lazy-and-scope-on-embedded-beans",children:"@Lazy and @Scope on Embedded Beans"}),"\n",(0,a.jsxs)(n.p,{children:["You can use ",(0,a.jsx)(n.code,{children:"@Lazy"})," and ",(0,a.jsx)(n.code,{children:"@Scope"})," decorators on embedded beans same as for regular beans,\nbut in that case -\nthe whole object that is assigned to a bean value will have the specified scope or will be lazy."]})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>s});t(7294);var a=t(6010);const r={tabItem:"tabItem_Ymn6"};var o=t(5893);function s(e){let{children:n,hidden:t,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,s),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>w});var a=t(7294),r=t(6010),o=t(2466),s=t(6550),l=t(469),i=t(1980),d=t(7392),c=t(12);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function b(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,s.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._X)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function h(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=b(e),[s,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[d,u]=m({queryString:t,groupId:r}),[h,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,c.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),g=(()=>{const e=d??h;return p({value:e,tabValues:o})?e:null})();(0,l.Z)((()=>{g&&i(g)}),[g]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var f=t(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(5893);function x(e){let{className:n,block:t,selectedValue:a,selectValue:s,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),c=e=>{const n=e.currentTarget,t=i.indexOf(n),r=l[t].value;r!==a&&(d(n),s(r))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>i.push(e),onKeyDown:u,onClick:c,...o,className:(0,r.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=h(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...e,...n}),(0,v.jsx)(j,{...e,...n})]})}function w(e){const n=(0,f.Z)();return(0,v.jsx)(y,{...e,children:u(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>s});var a=t(7294);const r={},o=a.createContext(r);function s(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);