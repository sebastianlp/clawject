"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[370],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=i(n),b=r,f=d["".concat(c,".").concat(b)]||d[b]||p[b]||o;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(7462),r=n(7294),o=n(6010),l=n(2466),s=n(6550),c=n(1980),i=n(7392),u=n(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function b(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[c,i]=f({queryString:n,groupId:a}),[d,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),y=(()=>{const e=c??d;return b({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{y&&s(y)}),[y]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!b({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),i(e),m(e)}),[i,m,o]),tabValues:o}}var y=n(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:s,selectValue:c,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,n=u.indexOf(t),a=i[n].value;a!==s&&(d(t),c(a))},b=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},i.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:b,onClick:p},l,{className:(0,o.Z)("tabs__item",h.tabItem,l?.className,{"tabs__item--active":s===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function C(e){const t=m(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",h.tabList)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function k(e){const t=(0,y.Z)();return r.createElement(C,(0,a.Z)({key:String(t)},e))}},530:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var a=n(7462),r=(n(7294),n(3905));n(4866),n(5162);const o={title:"Lazy",id:"lazy"},l=void 0,s={unversionedId:"base-concepts/lazy",id:"base-concepts/lazy",title:"Lazy",description:"By default, Clawject creates all singleton beans eagerly at the initialization of the context.",source:"@site/docs/03-base-concepts/08-lazy.mdx",sourceDirName:"03-base-concepts",slug:"/base-concepts/lazy",permalink:"/docs/base-concepts/lazy",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Lazy",id:"lazy"},sidebar:"tutorialSidebar",previous:{title:"Scope",permalink:"/docs/base-concepts/scope"},next:{title:"Embedded",permalink:"/docs/base-concepts/embedded"}},c={},i=[{value:"Lazy on CatContext class",id:"lazy-on-catcontext-class",level:2},{value:"Lazy on Beans",id:"lazy-on-beans",level:2},{value:"Combining @Lazy on CatContext and Bean",id:"combining-lazy-on-catcontext-and-bean",level:2}],u={toc:i},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("hr",null),(0,r.kt)("p",null,"By default, Clawject creates all singleton beans eagerly at the initialization of the context.\nHowever, there are cases when we need to create a bean,\nnot at the context initialization, but when we request it."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@Lazy")," decorator accepts optional boolean parameter that indicates is target will be lazy or not, default value: ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("h2",{id:"lazy-on-catcontext-class"},"Lazy on CatContext class"),(0,r.kt)("p",null,"When we put @Lazy decorator over the class that is inheritor of ",(0,r.kt)("inlineCode",{parentName:"p"},"CatContext"),",\nit indicates that all the beans that are declared in context should be loaded lazily."),(0,r.kt)("p",null,"Let's have a look here:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"class Foo {\n  @PostConstruct\n  postConstruct() {\n    console.log('Foo bean has been created');\n  }\n}\nclass Bar {\n  @PostConstruct\n  postConstruct() {\n    console.log('Bar bean has been created');\n  }\n}\n\n@Lazy\nclass MyContext extends CatContext {\n  foo = Bean(Foo);\n  bar = Bean(Bar);\n}\n\nconst context = ContainerManager.init(MyContext);\n\ncontext.getBean('foo'); // <- logs \"Foo bean has been created\"\ncontext.getBean('bar'); // <- logs \"Bar bean has been created\"\n")),(0,r.kt)("p",null,"As we see, all beans are created only when we request them for the first time."),(0,r.kt)("h2",{id:"lazy-on-beans"},"Lazy on Beans"),(0,r.kt)("p",null,"We can also put @Lazy decorator over the bean declaration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"class Foo {\n  @PostConstruct\n  postConstruct() {\n    console.log('Foo bean has been created');\n  }\n}\n\nclass MyContext extends CatContext {\n  foo = Bean(Foo);\n}\n\nconst context = ContainerManager.init(MyContext);\n\ncontext.getBean('foo'); // <- logs \"Foo bean has been created\"\n")),(0,r.kt)("p",null,"Again, the bean is created only when we request it for the first time."),(0,r.kt)("h2",{id:"combining-lazy-on-catcontext-and-bean"},"Combining @Lazy on CatContext and Bean"),(0,r.kt)("p",null,"We can also combine @Lazy decorator on CatContext and Bean.\nIf Bean is decorated with ",(0,r.kt)("inlineCode",{parentName:"p"},"@Lazy"),", it overrides the ",(0,r.kt)("inlineCode",{parentName:"p"},"@Lazy")," on ",(0,r.kt)("inlineCode",{parentName:"p"},"CatContext")," level for this bean,\nif not - value from ",(0,r.kt)("inlineCode",{parentName:"p"},"CatContext")," is used."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"class Foo {\n  @PostConstruct\n  postConstruct() {\n    console.log('Foo bean has been created');\n  }\n}\nclass Bar {\n  @PostConstruct\n  postConstruct() {\n    console.log('Bar bean has been created');\n  }\n}\n\n@Lazy\nclass MyContext extends CatContext {\n  \n  @Lazy(false)\n  foo = Bean(Foo);\n\n  bar = Bean(Bar);\n}\n\nContainerManager.init(MyContext); // <- logs \"Foo bean has been created\"\n")))}p.isMDXComponent=!0}}]);