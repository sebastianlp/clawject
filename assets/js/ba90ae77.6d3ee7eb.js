"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[304],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,b=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(b,s(s({ref:t},u),{},{components:n})):r.createElement(b,s({ref:t},u))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(7294),o=n(6010);const a={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:n,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(a.tabItem,s),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>C});var r=n(7462),o=n(7294),a=n(6010),s=n(2466),l=n(6550),i=n(1980),c=n(7392),u=n(12);function d(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:o}}=e;return{value:t,label:n,attributes:r,default:o}}))}function p(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(a),(0,o.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=p(e),[s,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[i,c]=b({queryString:n,groupId:r}),[d,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,u.Nk)(n);return[r,(0,o.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),f=(()=>{const e=i??d;return m({value:e,tabValues:a})?e:null})();(0,o.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),h(e)}),[c,h,a]),tabValues:a}}var f=n(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:l,selectValue:i,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),p=e=>{const t=e.currentTarget,n=u.indexOf(t),r=c[n].value;r!==l&&(d(t),i(r))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:s}=e;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},s,{className:(0,a.Z)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":l===t})}),n??t)})))}function g(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=h(e);return o.createElement("div",{className:(0,a.Z)("tabs-container",y.tabList)},o.createElement(v,(0,r.Z)({},e,t)),o.createElement(g,(0,r.Z)({},e,t)))}function C(e){const t=(0,f.Z)();return o.createElement(k,(0,r.Z)({key:String(t)},e))}},6739:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));n(4866),n(5162);const a={title:"PostConstruct and PreDestroy",id:"postconstruct-predestroy"},s=void 0,l={unversionedId:"base-concepts/postconstruct-predestroy",id:"base-concepts/postconstruct-predestroy",title:"PostConstruct and PreDestroy",description:"Overview",source:"@site/docs/03-base-concepts/09-lifecycle.mdx",sourceDirName:"03-base-concepts",slug:"/base-concepts/postconstruct-predestroy",permalink:"/docs/base-concepts/postconstruct-predestroy",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"PostConstruct and PreDestroy",id:"postconstruct-predestroy"},sidebar:"tutorialSidebar",previous:{title:"Embedded",permalink:"/docs/base-concepts/embedded"},next:{title:"Inject Arrays and Collections",permalink:"/docs/advanced-concepts/injecting-collections"}},i={},c=[{value:"Overview",id:"overview",level:2},{value:"@PostConstruct",id:"postconstruct",level:2},{value:"@PostConstruct in Context",id:"postconstruct-in-context",level:3},{value:"@PostConstruct in Bean",id:"postconstruct-in-bean",level:3},{value:"@PreDestroy",id:"predestroy",level:2},{value:"@PreDestroy in Context",id:"predestroy-in-context",level:3},{value:"@PreDestroy in Bean",id:"predestroy-in-bean",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Clawject allows us to attach custom actions to bean or context creation and destruction,\nand it is done using the ",(0,o.kt)("inlineCode",{parentName:"p"},"@PostConstruct")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"@PreDestroy")," decorators."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@PostConstruct")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"@PreDestroy")," can be used in inheritors of ",(0,o.kt)("inlineCode",{parentName:"p"},"CatContext")," and in Beans.\nYou can decorate ",(0,o.kt)("inlineCode",{parentName:"p"},"method")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"property with arrow function"),", also decoration target should not be ",(0,o.kt)("inlineCode",{parentName:"p"},"static"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@PostConstruct")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"@PreDestroy")," can be used together at the same method \u2014 so the method will be called twice."),(0,o.kt)("p",null,"Note that ",(0,o.kt)("inlineCode",{parentName:"p"},"@PostConstruct")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"@PreDestroy")," works a little different in Context and in Beans,\nwhen using in Context - you can pass arguments to the method,\nthese arguments will be treated as a dependencies, and container will inject appropriate Beans to the method, in other hand,\nwhen using in Bean - you can't pass arguments to the method,\ncontainer will not inject anything to the method and will report compilation error."),(0,o.kt)("h2",{id:"postconstruct"},"@PostConstruct"),(0,o.kt)("p",null,"Clawject calls the methods annotated with @PostConstruct only once, just after the initialization of bean or context."),(0,o.kt)("h3",{id:"postconstruct-in-context"},"@PostConstruct in Context"),(0,o.kt)("p",null,"Let's use the ",(0,o.kt)("inlineCode",{parentName:"p"},"@PostConstruct")," decorator in the Context:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'class MyContext extends CatContext {\n  @Bean foo = \'string\';\n  \n  @PostConstruct\n  postConstruct(stringBean: string) { // <- "foo" bean will be injected here\n    console.log(`MyContext has been created, "stringBean" value is ${stringBean}`);\n  }\n}\n')),(0,o.kt)("h3",{id:"postconstruct-in-bean"},"@PostConstruct in Bean"),(0,o.kt)("p",null,"Let's use the ",(0,o.kt)("inlineCode",{parentName:"p"},"@PostConstruct")," decorator in the Bean:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"class Foo {\n  @PostConstruct\n  postConstruct() {\n    console.log('Foo bean has been created');\n  }\n}\n")),(0,o.kt)("p",null,"Now when we register this class as a Bean in context -\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"postConstruct")," method will be called when ",(0,o.kt)("inlineCode",{parentName:"p"},"Foo")," instance is created."),(0,o.kt)("h2",{id:"predestroy"},"@PreDestroy"),(0,o.kt)("p",null,"A method decorated with @PreDestroy runs only once, just before Clawject removes bean from the context."),(0,o.kt)("p",null,"The purpose of this method should be to release resources or perform other cleanup tasks,\nsuch as closing a database connection, before the bean gets destroyed."),(0,o.kt)("h3",{id:"predestroy-in-context"},"@PreDestroy in Context"),(0,o.kt)("p",null,"Let's use the ",(0,o.kt)("inlineCode",{parentName:"p"},"@PreDestroy")," decorator in the Context:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'class MyContext extends CatContext {\n  @Bean foo = \'string\';\n  \n  @PreDestroy\n  preDestroy(stringBean: string) { // <- "foo" bean will be injected here\n    console.log(`MyContext is going to be destroyed, "stringBean" value is ${stringBean}`);\n  }\n}\n')),(0,o.kt)("h3",{id:"predestroy-in-bean"},"@PreDestroy in Bean"),(0,o.kt)("p",null,"Let's use the ",(0,o.kt)("inlineCode",{parentName:"p"},"@PreDestroy")," decorator in the Bean:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"class Foo {\n  @PreDestroy\n  preDestroy() {\n    console.log('Foo bean is going to be destroyed');\n  }\n}\n")),(0,o.kt)("p",null,"Now when we register this class as a Bean in context -\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"preDestroy")," method will be called when ",(0,o.kt)("inlineCode",{parentName:"p"},"Foo")," bean is going to be destroyed."))}p.isMDXComponent=!0}}]);