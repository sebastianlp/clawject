"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[591],{5294:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var r=n(5893),o=n(1151);n(4866),n(5162);const s={title:"@PostConstruct @PreDestroy"},a=void 0,c={id:"api/lifecycle",title:"@PostConstruct @PreDestroy",description:"Clawject allows us to attach custom actions to bean or context creation and destruction,",source:"@site/docs/api/lifecycle.mdx",sourceDirName:"api",slug:"/api/lifecycle",permalink:"/docs/api/lifecycle",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"@PostConstruct @PreDestroy"},sidebar:"docs",previous:{title:"Bean",permalink:"/docs/api/bean"},next:{title:"@Embedded",permalink:"/docs/api/embedded"}},l={},i=[{value:"@PostConstruct",id:"postconstruct",level:2},{value:"@PostConstruct in Context",id:"postconstruct-in-context",level:3},{value:"@PostConstruct in Bean",id:"postconstruct-in-bean",level:3},{value:"@PreDestroy",id:"predestroy",level:2},{value:"@PreDestroy in Context",id:"predestroy-in-context",level:3},{value:"@PreDestroy in Bean",id:"predestroy-in-bean",level:3}];function u(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Clawject allows us to attach custom actions to bean or context creation and destruction,\nand it is done using the ",(0,r.jsx)(t.code,{children:"@PostConstruct"})," and ",(0,r.jsx)(t.code,{children:"@PreDestroy"})," decorators."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"@PostConstruct"})," and ",(0,r.jsx)(t.code,{children:"@PreDestroy"})," can be used in inheritors of ",(0,r.jsx)(t.code,{children:"CatContext"})," and in Beans.\nYou can decorate ",(0,r.jsx)(t.code,{children:"method"})," or ",(0,r.jsx)(t.code,{children:"property with arrow function"}),", also decoration target should not be ",(0,r.jsx)(t.code,{children:"static"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"@PostConstruct"})," and ",(0,r.jsx)(t.code,{children:"@PreDestroy"})," can be used together at the same method \u2014 so the method will be called twice."]}),"\n",(0,r.jsxs)(t.p,{children:["Note that ",(0,r.jsx)(t.code,{children:"@PostConstruct"})," and ",(0,r.jsx)(t.code,{children:"@PreDestroy"})," works a little different in Context and in Beans,\nwhen using in Context - you can pass arguments to the method,\nthese arguments will be treated as a dependencies, and container will inject appropriate Beans to the method, in other hand,\nwhen using in Bean - you can't pass arguments to the method,\ncontainer will not inject anything to the method and will report compilation error."]}),"\n",(0,r.jsx)(t.h2,{id:"postconstruct",children:"@PostConstruct"}),"\n",(0,r.jsx)(t.p,{children:"Clawject calls the methods annotated with @PostConstruct only once, just after the initialization of bean or context."}),"\n",(0,r.jsx)(t.h3,{id:"postconstruct-in-context",children:"@PostConstruct in Context"}),"\n",(0,r.jsxs)(t.p,{children:["Let's use the ",(0,r.jsx)(t.code,{children:"@PostConstruct"})," decorator in the Context:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:'class MyContext extends CatContext {\n  @Bean foo = \'string\';\n\n  @PostConstruct\n  postConstruct(stringBean: string) { // <- "foo" bean will be injected here\n    console.log(`MyContext has been created, "stringBean" value is ${stringBean}`);\n  }\n}\n'})}),"\n",(0,r.jsx)(t.h3,{id:"postconstruct-in-bean",children:"@PostConstruct in Bean"}),"\n",(0,r.jsxs)(t.p,{children:["Let's use the ",(0,r.jsx)(t.code,{children:"@PostConstruct"})," decorator in the Bean:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"class Foo {\n  @PostConstruct\n  postConstruct() {\n    console.log('Foo bean has been created');\n  }\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Now when we register this class as a Bean in context -\nthe ",(0,r.jsx)(t.code,{children:"postConstruct"})," method will be called when ",(0,r.jsx)(t.code,{children:"Foo"})," instance is created."]}),"\n",(0,r.jsx)(t.h2,{id:"predestroy",children:"@PreDestroy"}),"\n",(0,r.jsx)(t.p,{children:"Clawject calls the methods annotated with @PostConstruct only once,\njust before context clearing or bean removal from context."}),"\n",(0,r.jsx)(t.p,{children:"The purpose of this method should be to release resources or perform other cleanup tasks,\nsuch as closing a database connection, before the bean gets destroyed."}),"\n",(0,r.jsx)(t.h3,{id:"predestroy-in-context",children:"@PreDestroy in Context"}),"\n",(0,r.jsxs)(t.p,{children:["Let's use the ",(0,r.jsx)(t.code,{children:"@PreDestroy"})," decorator in the Context:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:'class MyContext extends CatContext {\n  @Bean foo = \'string\';\n\n  @PreDestroy\n  preDestroy(stringBean: string) { // <- "foo" bean will be injected here\n    console.log(`MyContext is going to be destroyed, "stringBean" value is ${stringBean}`);\n  }\n}\n'})}),"\n",(0,r.jsx)(t.h3,{id:"predestroy-in-bean",children:"@PreDestroy in Bean"}),"\n",(0,r.jsxs)(t.p,{children:["Let's use the ",(0,r.jsx)(t.code,{children:"@PreDestroy"})," decorator in the Bean:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"class Foo {\n  @PreDestroy\n  preDestroy() {\n    console.log('Foo bean is going to be destroyed');\n  }\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Now when we register this class as a Bean in context -\nthe ",(0,r.jsx)(t.code,{children:"preDestroy"})," method will be called when ",(0,r.jsx)(t.code,{children:"Foo"})," bean is going to be destroyed."]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},5162:(e,t,n)=>{n.d(t,{Z:()=>a});n(7294);var r=n(6010);const o={tabItem:"tabItem_Ymn6"};var s=n(5893);function a(e){let{children:t,hidden:n,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,a),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(7294),o=n(6010),s=n(2466),a=n(6550),c=n(469),l=n(1980),i=n(7392),u=n(12);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:o}}=e;return{value:t,label:n,attributes:r,default:o}}))}(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const o=(0,a.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(o.location.search);t.set(s,e),o.replace({...o.location,search:t.toString()})}),[s,o])]}function x(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,s=h(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[i,d]=b({queryString:n,groupId:o}),[x,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,s]=(0,u.Nk)(n);return[o,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:o}),m=(()=>{const e=i??x;return p({value:e,tabValues:s})?e:null})();(0,c.Z)((()=>{m&&l(m)}),[m]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=n(2389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(5893);function j(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:c}=e;const l=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.o5)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),o=c[n].value;o!==r&&(i(t),a(o))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t),children:c.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,o.Z)("tabs__item",m.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:o}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function v(e){const t=x(e);return(0,g.jsxs)("div",{className:(0,o.Z)("tabs-container",m.tabList),children:[(0,g.jsx)(j,{...e,...t}),(0,g.jsx)(y,{...e,...t})]})}function w(e){const t=(0,f.Z)();return(0,g.jsx)(v,{...e,children:d(e.children)},String(t))}},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>a});var r=n(7294);const o={},s=r.createContext(o);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);