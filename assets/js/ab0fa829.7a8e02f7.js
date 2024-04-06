"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4675],{2164:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var s=n(5893),o=n(1151);const i={title:"Clawject: Simplifying Dependency Injection in TypeScript",slug:"simplifying-dependency-injection-in-typescript",authors:[{name:"Artem Korniev",url:"https://github.com/artem1458",image_url:"https://avatars.githubusercontent.com/u/33227963?v=4"}],tags:["typescript","nodejs","oop"],image:"https://clawject.com/img/blog/cover_1.jpg",hide_table_of_contents:!1},a=void 0,r={permalink:"/blog/simplifying-dependency-injection-in-typescript",source:"@site/blog/2024-04-06-simplifying-dependency-injection-in-ts.mdx",title:"Clawject: Simplifying Dependency Injection in TypeScript",description:"Outline",date:"2024-04-06T00:00:00.000Z",tags:[{label:"typescript",permalink:"/blog/tags/typescript"},{label:"nodejs",permalink:"/blog/tags/nodejs"},{label:"oop",permalink:"/blog/tags/oop"}],readingTime:5.3,hasTruncateMarker:!0,authors:[{name:"Artem Korniev",url:"https://github.com/artem1458",image_url:"https://avatars.githubusercontent.com/u/33227963?v=4",imageURL:"https://avatars.githubusercontent.com/u/33227963?v=4"}],frontMatter:{title:"Clawject: Simplifying Dependency Injection in TypeScript",slug:"simplifying-dependency-injection-in-typescript",authors:[{name:"Artem Korniev",url:"https://github.com/artem1458",image_url:"https://avatars.githubusercontent.com/u/33227963?v=4",imageURL:"https://avatars.githubusercontent.com/u/33227963?v=4"}],tags:["typescript","nodejs","oop"],image:"https://clawject.com/img/blog/cover_1.jpg",hide_table_of_contents:!1},unlisted:!1},c={authorsImageUrls:[void 0]},l=[{value:"Outline",id:"outline",level:2},{value:"Unleash the power of polymorphism with Clawject",id:"unleash-the-power-of-polymorphism-with-clawject",level:2},{value:"Clean domain objects",id:"clean-domain-objects",level:2},{value:"Split container by features",id:"split-container-by-features",level:2}];function p(e){const t={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("img",{src:"/img/blog/cover_1.jpg",alt:"Clawject logo hovering under mountains"}),"\n",(0,s.jsx)(t.h2,{id:"outline",children:"Outline"}),"\n",(0,s.jsxs)(t.p,{children:["Greetings, I'm the creator of ",(0,s.jsx)(t.a,{href:"https://clawject.com/",children:"Clawject"}),", a dependency injection framework for TypeScript. I'm here to introduce you to the world of effortless and type-safe dependency injection."]}),"\n",(0,s.jsx)(t.p,{children:"Have you ever thought that dependency injection in TypeScript could be easier?"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Meet Clawject, the first truly type-safe dependency injection framework for TypeScript."})}),"\n",(0,s.jsx)(t.p,{children:"You diligently write types, interfaces, generics, and all of that to ensure type safety, but it all comes to an end if you mix up an injection token."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"@Injectable()\nclass CatsService {\n  constructor(\n  \t@Inject(InjectionTokens.DogsRepository)\n  \tprivate catsRepository: Repository<Cat>\n  ) {}\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"TypeScript will compile this code without any errors, it will execute, and you'll only find out at runtime that instead of cats, you're getting dogs. Dogs are also great, but in this case, we specifically need cats."}),"\n",(0,s.jsxs)(t.p,{children:["Now, let's define ",(0,s.jsx)(t.code,{children:"CatsService"}),"  with Clawject."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"class CatsService {\n  constructor(\n  \tprivate catsRepository: Repository<Cat>\n  ) {}\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["As you can see, Clawject doesn't require you to attach the ",(0,s.jsx)(t.code,{children:"@Injectable"})," decorator to the class or specify what exactly you want to inject. Instead, Clawject will take the type of your dependency and find the appropriate implementation at compile time."]}),"\n",(0,s.jsxs)(t.p,{children:["If we wanted to avoid attaching the ",(0,s.jsx)(t.code,{children:"@Injectable"})," decorator to the class ",(0,s.jsx)(t.strong,{children:"without"})," Clawject, you would use something like a ",(0,s.jsx)(t.a,{href:"https://docs.nestjs.com/fundamentals/custom-providers#factory-providers-usefactory",children:"Factory providers"}),", but this is quite inconvenient. It requires changes if the class constructor changes and still leaves room for error by mixing up injection tokens. ",(0,s.jsx)(t.em,{children:"Besides, it's just not elegant."})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"const InjectionTokens = {\n  DogsRepository: Symbol('dogsRepository'),\n  CatsRepository: Symbol('catsRepository')\n}\n\nclass CatsService {\n  constructor(\n  \tprivate catsRepository: Repository<Cat>\n  ) {}\n}\n\n@Module({\n  providers: [\n    {\n      provide: InjectionTokens.DogsRepository,\n      useClass: Repository\n    },\n    {\n      provide: InjectionTokens.CatsRepository,\n      useClass: Repository\n    },\n    {\n      provide: CatsService,\n      useFactory: (catsRepository: Repository<Cat>) =>\n      \tnew CatsService(catsRepository),\n      \t\t  /*Oops, wrong injection token...*/\n      inject: [InjectionTokens.DogsRepository]\n    }\n  ],\n})\nexport class Application {}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Now, let's take a look at how you can create a ",(0,s.jsx)(t.code,{children:"CatsService"})," ",(0,s.jsx)(t.strong,{children:"with"})," Clawject."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"class CatsService {\n  constructor(\n  \tprivate catsRepository: Repository<Cat>\n  ) {}\n}\n\n@ClawjectApplication\nclass Application {\n  dogsRepository = Bean(Repository<Dog>);\n  catsRepository = Bean(Repository<Cat>);\n\n  catsService = Bean(CatsService);\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"And that's it! \u2728"})}),"\n",(0,s.jsx)(t.p,{children:"Clawject will resolve all dependencies based on types and notify you of errors such as missing dependencies, circular dependencies, and more, at compile time and directly in your favorite IDE!"}),"\n",(0,s.jsx)("img",{src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/r4qj71g0vvprxpoxidmd.png",alt:"Clawject in-editor errors demonstration"}),"\n",(0,s.jsx)(t.h2,{id:"unleash-the-power-of-polymorphism-with-clawject",children:"Unleash the power of polymorphism with Clawject"}),"\n",(0,s.jsx)(t.p,{children:"Clawject works great with classes, interfaces, types, generics, and type inheritance, allowing you to describe dependencies very flexibly and simply."}),"\n",(0,s.jsxs)(t.p,{children:["Let's declare an ",(0,s.jsx)(t.code,{children:"interface ReadOnlyRepository<T>"}),", ",(0,s.jsx)(t.code,{children:"interface Repository<T>"}),", and a ",(0,s.jsx)(t.code,{children:"class HttpRepository<T>"})," that implements both of these interfaces:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"interface ReadOnlyRepository<T> { /*...*/ }\n\ninterface Repository<T> extends ReadOnlyRepository<T> { /*...*/ }\n\nclass HttpRepository<T> implements Repository<T> { /*...*/ }\n"})}),"\n",(0,s.jsxs)(t.p,{children:["We've created a polymorphic class and interfaces that allow reading and writing entities with the type ",(0,s.jsx)(t.code,{children:"<T>"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Now, let's declare the following services: ",(0,s.jsx)(t.code,{children:"ReadCatsService"})," and ",(0,s.jsx)(t.code,{children:"WriteCatsService"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"class ReadCatsService {\n  constructor(\n    private repository: ReadOnlyRepository<Cat>\n  ) {}\n}\n\nclass WriteCatsService {\n  constructor(\n    private repository: Repository<Cat>\n  ) {}\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["As you can see, we simply state that we need dependencies of types ",(0,s.jsx)(t.code,{children:"ReadOnlyRepository<Cat>"})," and ",(0,s.jsx)(t.code,{children:"Repository<Cat>"}),", and we don't care about the specific implementation that will be injected."]}),"\n",(0,s.jsxs)(t.p,{children:["Now, let's declare the ",(0,s.jsx)(t.code,{children:"Application"})," class and our ",(0,s.jsx)(t.code,{children:"Beans"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"@ClawjectApplication\nclass Application {\n  httpCatsRepository = Bean(HttpRepository<Cat>);\n\n  readCatsService = Bean(ReadCatsService);\n  writeCatsService = Bean(WriteCatsService);\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["As you can see, Clawject understands that the class ",(0,s.jsx)(t.code,{children:"HttpRepository<Cat>"})," implements the interfaces ",(0,s.jsx)(t.code,{children:"ReadOnlyRepository<Cat>"})," and ",(0,s.jsx)(t.code,{children:"Repository<Cat>"}),", and will inject the ",(0,s.jsx)(t.code,{children:"httpCatsRepository"})," bean instance as a dependency in both services."]}),"\n",(0,s.jsxs)(t.p,{children:["If we were to do something similar with a more ",(0,s.jsx)(t.em,{children:"classical"})," library, we would have to write a lot of boilerplate and non-type-safe code."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"const InjectionTokens = {\n  ReadOnlyCatsRepository: Symbol('ReadOnlyCatsRepository'),\n  CatsRepository: Symbol('CatsRepository'),\n  HttpCatsRepository: Symbol('HttpCatsRepository'),\n}\n\n@Injectable()\nclass ReadCatsService {\n  constructor(\n      @Inject(InjectionTokens.ReadOnlyCatsRepository)\n      private repository: ReadOnlyRepository<Cat>\n  ) {}\n}\n\n@Injectable()\nclass WriteCatsService {\n  constructor(\n      @Inject(InjectionTokens.CatsRepository)\n      private repository: Repository<Cat>\n  ) {}\n}\n\n@Module({\n  providers: [\n    {\n      useClass: HttpRepository,\n      provide: InjectionTokens.HttpCatsRepository,\n    },\n    {\n      provide: InjectionTokens.ReadOnlyCatsRepository,\n      useExisting: InjectionTokens.HttpCatsRepository,\n    },\n    {\n      provide: InjectionTokens.CatsRepository,\n      useExisting: InjectionTokens.HttpCatsRepository,\n    },\n    ReadCatsService,\n    WriteCatsService,\n  ],\n})\nclass Application {}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"clean-domain-objects",children:"Clean domain objects"}),"\n",(0,s.jsxs)(t.p,{children:["The philosophy of Clawject revolves around the idea that dependency injection should be an ",(0,s.jsx)(t.strong,{children:"external architectural layer"}),", while all domain objects should describe their dependencies without any framework references."]}),"\n",(0,s.jsx)(t.p,{children:"Clawject allows you to extract absolutely all DI-related things from your classes, simplifying your code and reducing the probability of mistakes. Because Clawject is a very external component, you can work with any classes from external libraries just as easily as with your own."}),"\n",(0,s.jsxs)(t.p,{children:["Let's imagine we have an npm package called ",(0,s.jsx)(t.code,{children:"data-access"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"/* node_modules/data-access/repositories.d.ts */\n\nexport interface Repository<T> { /*...*/ }\nexport declare class HttpRepository<T> implements Repository<T> {\n  private readonly baseUrl;\n  constructor(baseUrl: string);\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Now, let's declare the ",(0,s.jsx)(t.code,{children:"CatsService"})," that uses the repository from ",(0,s.jsx)(t.code,{children:"data-access"})," package."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"/* src/cat/CatsService.ts */\n\nimport { Repository } from 'data-access';\nimport { Cat } from './models/Cat';\n\nclass CatsService {\n  constructor(\n  \tprivate repository: Repository<Cat>\n  ) {}\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"Now, let's declare beans for our classes."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"/* src/Application.ts */\n\nimport { HttpRepository } from 'data-access';\nimport { Cat } from './cat/models/Cat';\nimport { CatsService } from './cat/CatsService';\n\n@ClawjectApplication\nclass Application {\n  @Bean catsApiBaseUrl = '/api/cat';\n\n  httpCatsRepository = Bean(HttpRepository<Cat>);\n  catsService = Bean(CatsService);\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"As you can see, the classes remain clean and literally know nothing about being part of a dependency injection container. Moreover, you don't need to manually write factory functions to keep your classes clean and framework-independent."}),"\n",(0,s.jsx)(t.h2,{id:"split-container-by-features",children:"Split container by features"}),"\n",(0,s.jsxs)(t.p,{children:["Clawject allows you to break down parts of the container into separate classes and even ",(0,s.jsx)(t.a,{href:"https://clawject.com/docs/guides/sharing-configurations",children:"share them via npm packages"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Let's declare the ",(0,s.jsx)(t.code,{children:"CatsConfiguration"})," class, which will contain beans related only to cats."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"@Configuration\nexport class CatsConfiguration {\n  @Bean apiBaseUrl = '/api/cat';\n\n  httpCatsRepository = Bean(HttpRepository<Cat>);\n  catsService = Bean(CatsService);\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Now we can import the configuration classes into our ",(0,s.jsx)(t.code,{children:"Application"})," class or other configuration classes."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import { CatsConfiguration } from './cat/CatsConfiguration';\nimport { DogsConfiguration } from './dog/DogsConfiguration';\nimport { BirdsConfiguration } from './bird/BirdsConfiguration';\n\n@ClawjectApplication\nclass Application {\n  catsConfiguration = Import(CatsConfiguration);\n  dogsConfiguration = Import(DogsConfiguration);\n  birdsConfiguration = Import(BirdsConfiguration);\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"Clawject will assemble the entire container, instantiate all classes with the necessary dependencies, and inform you in a very developer-friendly manner if anything is missing."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.strong,{children:["Thanks for reading this article. If you're interested, visit ",(0,s.jsx)(t.a,{href:"https://clawject.com/",children:"Clawject's website"})," for more examples and learn how to install and use it in your project."]})})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>a});var s=n(7294);const o={},i=s.createContext(o);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);