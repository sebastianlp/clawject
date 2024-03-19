"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[133],{3271:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=r(5893),t=r(1151);const a={title:"Errors",hide_title:!0,description:"Compile-time and runtime errors."},i=void 0,s={id:"errors",title:"Errors",description:"Compile-time and runtime errors.",source:"@site/docs/errors.mdx",sourceDirName:".",slug:"/errors",permalink:"/docs/errors",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1710862593,formattedLastUpdatedAt:"Mar 19, 2024",frontMatter:{title:"Errors",hide_title:!0,description:"Compile-time and runtime errors."},sidebar:"docs",previous:{title:"Custom Scopes",permalink:"/docs/guides/creating-scope"},next:{title:"Support",permalink:"/docs/support"}},c={},l=[{value:"Errors",id:"errors",level:2},{value:"Compile-time",id:"compile-time",level:3},{value:"CE1: IncorrectNameError",id:"ce1-incorrectnameerror",level:4},{value:"CE2: DuplicateDecoratorError",id:"ce2-duplicatedecoratorerror",level:4},{value:"CE3: TypeQualifyError",id:"ce3-typequalifyerror",level:4},{value:"CE4: CanNotRegisterBeanError",id:"ce4-cannotregisterbeanerror",level:4},{value:"CE5: BeanCandidateNotFoundError",id:"ce5-beancandidatenotfounderror",level:4},{value:"CE6: MissingInitializerError",id:"ce6-missinginitializererror",level:4},{value:"CE7: CircularDependenciesError",id:"ce7-circulardependencieserror",level:4},{value:"CE8: IncorrectTypeError",id:"ce8-incorrecttypeerror",level:4},{value:"CE9: IncorrectArgumentsLengthError",id:"ce9-incorrectargumentslengtherror",level:4},{value:"CE10: DependencyResolvingError",id:"ce10-dependencyresolvingerror",level:4},{value:"CE11: NotSupportedError",id:"ce11-notsupportederror",level:4},{value:"CE12: BeanExposingError",id:"ce12-beanexposingerror",level:4},{value:"CE13: ConfigurationImportError",id:"ce13-configurationimporterror",level:4},{value:"CE14: DuplicateNameError",id:"ce14-duplicatenameerror",level:4},{value:"CE15: NotStaticallyKnownError",id:"ce15-notstaticallyknownerror",level:4},{value:"CE15: CorruptedMetadataError",id:"ce15-corruptedmetadataerror",level:4},{value:"Runtime",id:"runtime",level:3},{value:"ExposedBeanNotFoundError",id:"exposedbeannotfounderror",level:4},{value:"CorruptedMetadataError",id:"corruptedmetadataerror",level:4},{value:"DuplicateScopeError",id:"duplicatescopeerror",level:4},{value:"IllegalArgumentError",id:"illegalargumenterror",level:4},{value:"IllegalStateError",id:"illegalstateerror",level:4},{value:"NoClassMetadataFoundError",id:"noclassmetadatafounderror",level:4},{value:"CouldNotBeProxiedError",id:"couldnotbeproxiederror",level:4},{value:"ScopeIsNotRegisteredError",id:"scopeisnotregisterederror",level:4},{value:"UsageWithoutConfiguredDIError",id:"usagewithoutconfigureddierror",level:4}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"errors",children:"Errors"}),"\n",(0,o.jsx)(n.p,{children:"Clawject produces few types of errors compile-time and runtime."}),"\n",(0,o.jsx)(n.h3,{id:"compile-time",children:"Compile-time"}),"\n",(0,o.jsxs)(n.p,{children:["Each compile time error has own code that can be used to identify it.\nEach code is unique and consists of prefix ",(0,o.jsx)(n.code,{children:"CE"})," and number.\nExample: ",(0,o.jsx)(n.code,{children:"CE7"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"ce1-incorrectnameerror",children:"CE1: IncorrectNameError"}),"\n",(0,o.jsx)(n.p,{children:"It occurs when the name of the element is empty."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Solution:"})," Add name to the element."]}),"\n",(0,o.jsx)(n.h4,{id:"ce2-duplicatedecoratorerror",children:"CE2: DuplicateDecoratorError"}),"\n",(0,o.jsx)(n.p,{children:"It occurs when the element has more than one same decorator.\nExample:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"@ClawjectApplication\nclass Application {\n  @Bean\n  @Bean\n  cat = new Cat();\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Solution:"})," Remove extra decorators."]}),"\n",(0,o.jsx)(n.h4,{id:"ce3-typequalifyerror",children:"CE3: TypeQualifyError"}),"\n",(0,o.jsx)(n.p,{children:"It occurs when Clawject can't qualify a type of element or return type of method or function."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Solution:"})," Specify the type of element explicitly or verify that the type is correct."]}),"\n",(0,o.jsx)(n.h4,{id:"ce4-cannotregisterbeanerror",children:"CE4: CanNotRegisterBeanError"}),"\n",(0,o.jsxs)(n.p,{children:["It occurs when the element can't be registered as a bean because some of the bean dependencies could not be resolved.\nThis error appears directly on bean declaration in ",(0,o.jsx)(n.code,{children:"@Configuration"}),"/",(0,o.jsx)(n.code,{children:"@ClawjectApplication"})," classes."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Solution:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Define missing dependencies in the context."}),"\n",(0,o.jsxs)(n.li,{children:["Check a topic about ",(0,o.jsx)(n.a,{href:"/docs/fundamentals/bean#how-dependencies-are-resolved",children:"how dependencies are resolved"})]}),"\n",(0,o.jsx)(n.li,{children:"If more than one matching dependency is defined - rename parameter to match one of the resolved dependencies by name."}),"\n",(0,o.jsxs)(n.li,{children:["Specify primary bean for the dependency with ",(0,o.jsx)(n.a,{href:"/docs/fundamentals/primary",children:(0,o.jsx)(n.code,{children:"@Primary"})})," decorator."]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"ce5-beancandidatenotfounderror",children:"CE5: BeanCandidateNotFoundError"}),"\n",(0,o.jsx)(n.p,{children:"It occurs when the bean candidate for the specific dependency could not be resolved."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["When declaring bean with ",(0,o.jsx)(n.a,{href:"/docs/fundamentals/bean#bean-decorator",children:"@Bean decorator"})," - error will\nappear on the corresponding parameter of the ",(0,o.jsx)(n.strong,{children:"factory-function"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["When declaring bean with ",(0,o.jsx)(n.a,{href:"/docs/fundamentals/bean#bean-function",children:"Bean function"})," - error will\nappear on the corresponding parameter of the ",(0,o.jsx)(n.strong,{children:"class constructor"}),".\nIf application has more than one matching candidate, for injection - Clawject will identify candidates that are matching by name and type."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Solution:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Define missing dependencies in the context."}),"\n",(0,o.jsxs)(n.li,{children:["Check a topic about ",(0,o.jsx)(n.a,{href:"/docs/fundamentals/bean#how-dependencies-are-resolved",children:"how dependencies are resolved"})]}),"\n",(0,o.jsx)(n.li,{children:"If more than one matching dependency is defined - rename parameter to match one of the resolved dependencies by name."}),"\n",(0,o.jsxs)(n.li,{children:["Specify primary bean for the dependency with ",(0,o.jsx)(n.a,{href:"/docs/fundamentals/primary",children:(0,o.jsx)(n.code,{children:"@Primary"})})," decorator."]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"ce6-missinginitializererror",children:"CE6: MissingInitializerError"}),"\n",(0,o.jsx)(n.p,{children:"It occurs when a property or method registered as a bean or lifecycle hook does not have an initializer.\nExample:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"@ClawjectApplication\nclass Application {\n  @Bean cat: Cat;\n  @PostConstruct postConstruct(): void;\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Solution:"})," Add initializer to the property or method."]}),"\n",(0,o.jsx)(n.h4,{id:"ce7-circulardependencieserror",children:"CE7: CircularDependenciesError"}),"\n",(0,o.jsxs)(n.p,{children:["It occurs when some beans have circular dependencies between each other.\nA circular dependency occurs when a bean ",(0,o.jsx)(n.code,{children:"A"})," depends on another bean ",(0,o.jsx)(n.code,{children:"B"}),", and the bean ",(0,o.jsx)(n.code,{children:"B"})," depends on bean ",(0,o.jsx)(n.code,{children:"A"})," as well:",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.code,{children:"Bean A"})," \u2192 ",(0,o.jsx)(n.code,{children:"Bean B"})," \u2192 ",(0,o.jsx)(n.code,{children:"Bean A"})]}),"\n",(0,o.jsxs)(n.p,{children:["Of course, you could have more beans implied:",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.code,{children:"Bean A"})," \u2192 ",(0,o.jsx)(n.code,{children:"Bean B"})," \u2192 ",(0,o.jsx)(n.code,{children:"Bean C"})," \u2192 ",(0,o.jsx)(n.code,{children:"Bean D"})," \u2192 ",(0,o.jsx)(n.code,{children:"Bean E"})," \u2192 ",(0,o.jsx)(n.code,{children:"Bean A"})]}),"\n",(0,o.jsx)(n.p,{children:"Example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"class A {\n  constructor(b: B) {}\n}\nclass B {\n  constructor(a: A) {}\n}\n\n@ClawjectApplication\nclass Application {\n  //Error here\n  @Bean A(b: B): A {\n    return new A(b);\n  }\n  @Bean B(a: A): B {\n    return new B(a);\n  }\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"Clawject will detect circular dependencies at compile-time and report this error in a readable way."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Solution:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Redesign. When you have a circular dependency, it\u2019s likely there is a design problem and that the responsibilities are not well separated.\nTry to redesign the components properly so that their hierarchy is well-designed, and there is no need for circular dependencies."}),"\n",(0,o.jsxs)(n.li,{children:["If you can\u2019t redesign the components, it's possible to assign the instance after creation.\nIt's not the best way, but it works.\nNote that field ",(0,o.jsx)(n.code,{children:"b"})," in ",(0,o.jsx)(n.code,{children:"A"})," will be available only after the creation of the bean ",(0,o.jsx)(n.code,{children:"B"}),".\nExample:","\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"class A {\n  declare public b: B;\n}\nclass B {\n  constructor(a: A) {}\n}\n@ClawjectApplication\nclass Application {\n  @Bean A(): A {\n    return new A();\n  }\n  @Bean B(a: A): B {\n    const instance = new B(a);\n    a.b = instance;\n\n    return instance;\n  }\n}\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"ce8-incorrecttypeerror",children:"CE8: IncorrectTypeError"}),"\n",(0,o.jsxs)(n.p,{children:["It occurs when the type of the bean is not supported by Clawject, here defined restricted ",(0,o.jsx)(n.a,{href:"/docs/fundamentals/bean#bean-types",children:"Bean types"}),". Example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"@ClawjectApplication\nclass Application {\n  @Bean undefinedBean(): undefined {\n    return undefined;\n  }\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Solution:"})," Use only supported types or wrap an unsupported type in the object. Example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"class Value<T> {\n  constructor(public value: T) {}\n}\n@ClawjectApplication\nclass Application {\n  @Bean undefinedBean(): Value<undefined> {\n    return new Value(undefined);\n  }\n}\n"})}),"\n",(0,o.jsx)(n.h4,{id:"ce9-incorrectargumentslengtherror",children:"CE9: IncorrectArgumentsLengthError"}),"\n",(0,o.jsx)(n.p,{children:"It occurs when required arguments count not match requirements. Example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"@ClawjectApplication\nclass Application {\n  @Qualifier() cat = Bean(Cat)\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["In this example - ",(0,o.jsx)(n.code,{children:"@Qualifier"})," decorator requires exactly one argument to be passed, but it was not provided, so Clawject will report error."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Solution:"})," Pass required arguments count."]}),"\n",(0,o.jsx)(n.h4,{id:"ce10-dependencyresolvingerror",children:"CE10: DependencyResolvingError"}),"\n",(0,o.jsx)(n.p,{children:"It occurs when the dependencies of bean could not be resolved. Examples:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Didn't pass class to the ",(0,o.jsx)(n.strong,{children:"Bean function"}),":","\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"@ClawjectApplication\nclass Application {\n  cat = Bean();\n}\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["More than one or no class declaration found, ",(0,o.jsx)(n.code,{children:"Dog"})," class is declared, but ",(0,o.jsx)(n.code,{children:"Cat"})," is not:","\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"class Dog {}\n\n@ClawjectApplication\nclass Application {\n  cat = Bean(Cat);\n  dog = Bean(Dog);\n}\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Solution:"})," Try to specify the class explicitly or verify that the class is correct."]}),"\n",(0,o.jsx)(n.h4,{id:"ce11-notsupportederror",children:"CE11: NotSupportedError"}),"\n",(0,o.jsx)(n.p,{children:"It occurs when some feature is not supported by Clawject. Example:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Using ",(0,o.jsx)(n.code,{children:"@PostConstruct"})," decorator on method with arguments outside Configuration class:","\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"class Cat {\n  @PostConstruct\n  meow(data: any): void {}\n}\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Using ",(0,o.jsx)(n.code,{children:"@Embedded"})," decorator with bean declared with ",(0,o.jsx)(n.a,{href:"/docs/fundamentals/bean#bean-function",children:"Bean function"}),":","\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"@ClawjectApplication\nclass Application {\n  @Embedded cat = Bean(Cat);\n}\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Unsupported bean modifiers:","\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"@ClawjectApplication\nclass Application {\n  static cat1 = Bean(Cat);\n  abstract cat2 = Bean(Cat);\n  private cat3 = Bean(Cat);\n}\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Using decorators in inappropriate places, for example ",(0,o.jsx)(n.code,{children:"@Bean"})," decorator in not ",(0,o.jsx)(n.code,{children:"@Configuration"}),"/",(0,o.jsx)(n.code,{children:"@ClawjectApplication"})," class:","\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"class Dog {}\nclass Cat {\n  @Bean\n  dog(): Dog {}\n}\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Inappropriate decorators combination:","\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"@Bean @Embedded\n@ClawjectApplication\nclass Application {\n  @Bean @PostConstruct cat = Bean(Cat);\n}\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Inappropriate decorator target:","\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"@Bean\nclass Application {}\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Solution:"})," Do not use unsupported features."]}),"\n",(0,o.jsx)(n.h4,{id:"ce12-beanexposingerror",children:"CE12: BeanExposingError"}),"\n",(0,o.jsx)(n.p,{children:"It occurs when you try to expose bean by the same name more than once. Example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"class IFoo {}\nclass Foo implements IFoo {}\n\n@ClawjectApplication\nclass Application {\n  foo = Bean(Foo);\n\n  exposed1 = ExposeBeans<{ foo: Foo }>();\n  exposed2 = ExposeBeans<{ foo: IFoo }>();\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Solution:"})," Rename one of the exposed elements."]}),"\n",(0,o.jsx)(n.h4,{id:"ce13-configurationimporterror",children:"CE13: ConfigurationImportError"}),"\n",(0,o.jsx)(n.p,{children:"It occurs when Clawject cannot resolve class which you're trying to import. Example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"@ClawjectApplication\nclass Application {\n  foo = Import(FooConfiguration); //FooConfiguration is not defined\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Solution:"})," Define missing class."]}),"\n",(0,o.jsx)(n.h4,{id:"ce14-duplicatenameerror",children:"CE14: DuplicateNameError"}),"\n",(0,o.jsxs)(n.p,{children:["It occurs when few beans have the same name (class member name or name defined via ",(0,o.jsx)(n.a,{href:"/docs/fundamentals/qualifier",children:(0,o.jsx)(n.code,{children:"@Qualifier decorator"})}),"). Example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"@ClawjectApplication\nclass Application {\n  cat = Bean(Cat);\n  @Qualifier('cat') dog = Bean(Dog);\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Solution:"})," Change the name of one of the beans."]}),"\n",(0,o.jsx)(n.h4,{id:"ce15-notstaticallyknownerror",children:"CE15: NotStaticallyKnownError"}),"\n",(0,o.jsx)(n.p,{children:"It occurs when value or name in some part of the code is not statically known. Example:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The name of element is computed or uniq Symbol:","\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"const BeanName = 'MasyaCat';\nconst symbol = Symbol.for('MasyaCat');\n@ClawjectApplication\nclass Application {\n  ['Masya' + 'Cat'] = Bean(Cat);\n  [BeanName] = Bean(Cat);\n  [symbol] = Bean(Cat);\n}\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Arguments on some decorators are computed:","\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"@ClawjectApplication\nclass Application {\n  @Qualifier('Masya' + 'Cat') cat = Bean(Cat);\n}\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Solution:"})," Use only statically known values and names when it's required."]}),"\n",(0,o.jsx)(n.h4,{id:"ce15-corruptedmetadataerror",children:"CE15: CorruptedMetadataError"}),"\n",(0,o.jsx)(n.p,{children:"It occurs when class metadata is corrupted, it was altered manually or by some other tool.\nIt can appear only in declaration files.\nExample:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:'title="application.d.ts"',children:"export declare class Application {\n    /** This field is auto-generated, editing it could lead to unexpected behavior.*/\n    #___clawject_compile_time_metadata___: {\n        kind: 2;\n        AdditionalPropertyAddedByUserOrTool: string;\n        version: 1;\n        external: null;\n        beans: [];\n        imports: [];\n    };\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Solution:"})," Do not edit generated files, regenerate declaration file."]}),"\n",(0,o.jsx)(n.h3,{id:"runtime",children:"Runtime"}),"\n",(0,o.jsxs)(n.p,{children:["Runtime errors are regular JavaScript errors that can be thrown during the application execution.\nClawject exporting Error classes that can be caught and handled in the application code.\nEach error has ",(0,o.jsx)(n.code,{children:"name"})," property, so it can be identified via ",(0,o.jsx)(n.code,{children:"name"})," or via ",(0,o.jsx)(n.code,{children:"instanceof"})," operator."]}),"\n",(0,o.jsx)(n.h4,{id:"exposedbeannotfounderror",children:"ExposedBeanNotFoundError"}),"\n",(0,o.jsx)(n.p,{children:"It occurs when the exposed bean that is requested is not found in the application context.\nThis error should not appear if everything is configured correctly and any generated file was not edited manually."}),"\n",(0,o.jsx)(n.h4,{id:"corruptedmetadataerror",children:"CorruptedMetadataError"}),"\n",(0,o.jsx)(n.p,{children:"It occurs when class metadata is corrupted because it was altered manually or by some other tool."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Solution:"})," Do not edit generated files, regenerate file."]}),"\n",(0,o.jsx)(n.h4,{id:"duplicatescopeerror",children:"DuplicateScopeError"}),"\n",(0,o.jsx)(n.p,{children:"It occurs when you're trying to register the scope that is already registered. Example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"class MyScope implements Scope {\n  //...\n}\nScopeRegister.registerScope('my-scope', new MyScope());\nScopeRegister.registerScope('my-scope', new MyScope());\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Solution:"})," Do not register the same scope more than once."]}),"\n",(0,o.jsx)(n.h4,{id:"illegalargumenterror",children:"IllegalArgumentError"}),"\n",(0,o.jsx)(n.p,{children:"It occurs when an incorrect argument is passed to some method or function.\nExample:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"@ClawjectApplication\nclass MyApplication {\n  importedFunction = Import('non-constructable-value');\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Solution:"})," Pass only expected arguments."]}),"\n",(0,o.jsx)(n.h4,{id:"illegalstateerror",children:"IllegalStateError"}),"\n",(0,o.jsx)(n.p,{children:"It's an internal error that should never happen, it occurs when the application is in an illegal state."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Solution:"})," Report an issue."]}),"\n",(0,o.jsx)(n.h4,{id:"noclassmetadatafounderror",children:"NoClassMetadataFoundError"}),"\n",(0,o.jsxs)(n.p,{children:["It can occur if you passing class that is not annotated with ",(0,o.jsx)(n.code,{children:"@ClawjectApplication"})," to the ",(0,o.jsx)(n.code,{children:"ClawjectFactory.createApplicationContext"})," method."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Solution:"})," Pass only classes annotated with ",(0,o.jsx)(n.code,{children:"@ClawjectApplication"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"couldnotbeproxiederror",children:"CouldNotBeProxiedError"}),"\n",(0,o.jsxs)(n.p,{children:["It occurs when your scope implementation defines ",(0,o.jsx)(n.code,{children:"useProxy"})," method that is returned ",(0,o.jsx)(n.code,{children:"true"}),", and bean that is returned value that could not be proxied\nwas decorated with this scope.\nJavaScript does not allow wrapping primitive values in proxy, and clawject not supports proxies on functions, so this error will be thrown.\nExample:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"class MyCustomScope implements Scope {\n  useProxy(): boolean {\n    return true;\n  }\n  //...\n}\n@ClawjectApplication\nclass Application {\n  @Bean @Scope('MyCustomScope') cat = 'Masya';\n  @Bean @Scope('MyCustomScope') catFunction = () => () => 'Masya';\n}\nContainerManager.registerScope('MyCustomScope', new MyCustomScope());\nawait ClawjectFactory.createApplicationContext(Application);\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Solution:"})," Wrap value in the object or class."]}),"\n",(0,o.jsx)(n.h4,{id:"scopeisnotregisterederror",children:"ScopeIsNotRegisteredError"}),"\n",(0,o.jsx)(n.p,{children:"It occurs when you're trying to assign non-registered scope to the bean. Example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"@ClawjectApplication\nclass Application {\n  @Scope('MySuperScopeThatIsNotRegistered') cat = Bean(Cat);\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Solution:"})," Register scope before using it."]}),"\n",(0,o.jsx)(n.h4,{id:"usagewithoutconfigureddierror",children:"UsageWithoutConfiguredDIError"}),"\n",(0,o.jsx)(n.p,{children:"It occurs when you're trying to use Clawject without proper configuration,\nfor example - you're forgotten to add Clawject transformer to the tsconfig.json file."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Solution:"})," Configure Clawject properly."]})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>i});var o=r(7294);const t={},a=o.createContext(t);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);