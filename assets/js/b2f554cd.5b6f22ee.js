"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"simplifying-dependency-injection-in-typescript","metadata":{"permalink":"/blog/simplifying-dependency-injection-in-typescript","source":"@site/blog/2024-04-06-simplifying-dependency-injection-in-ts.mdx","title":"Clawject: Simplifying Dependency Injection in TypeScript","description":"Outline","date":"2024-04-06T00:00:00.000Z","tags":[{"label":"typescript","permalink":"/blog/tags/typescript"},{"label":"nodejs","permalink":"/blog/tags/nodejs"},{"label":"oop","permalink":"/blog/tags/oop"}],"readingTime":5.3,"hasTruncateMarker":true,"authors":[{"name":"Artem Korniev","url":"https://github.com/artem1458","image_url":"https://avatars.githubusercontent.com/u/33227963?v=4","imageURL":"https://avatars.githubusercontent.com/u/33227963?v=4"}],"frontMatter":{"title":"Clawject: Simplifying Dependency Injection in TypeScript","slug":"simplifying-dependency-injection-in-typescript","authors":[{"name":"Artem Korniev","url":"https://github.com/artem1458","image_url":"https://avatars.githubusercontent.com/u/33227963?v=4","imageURL":"https://avatars.githubusercontent.com/u/33227963?v=4"}],"tags":["typescript","nodejs","oop"],"image":"https://clawject.com/img/blog/cover_1.jpg","hide_table_of_contents":false},"unlisted":false},"content":"<img src=\\"/img/blog/cover_1.jpg\\" alt=\\"Clawject logo hovering under mountains\\"  />\\n\\n## Outline\\n\\nGreetings, I\'m the creator of [Clawject](https://clawject.com/), a dependency injection framework for TypeScript. I\'m here to introduce you to the world of effortless and type-safe dependency injection.\\n\\nHave you ever thought that dependency injection in TypeScript could be easier?\\n\\n**Meet Clawject, the first truly type-safe dependency injection framework for TypeScript.**\\n\\n\x3c!-- truncate --\x3e\\n\\nYou diligently write types, interfaces, generics, and all of that to ensure type safety, but it all comes to an end if you mix up an injection token.\\n\\n```ts\\n@Injectable()\\nclass CatsService {\\n  constructor(\\n  \\t@Inject(InjectionTokens.DogsRepository)\\n  \\tprivate catsRepository: Repository<Cat>\\n  ) {}\\n}\\n```\\n\\nTypeScript will compile this code without any errors, it will execute, and you\'ll only find out at runtime that instead of cats, you\'re getting dogs. Dogs are also great, but in this case, we specifically need cats.\\n\\nNow, let\'s define `CatsService`  with Clawject.\\n\\n```ts\\nclass CatsService {\\n  constructor(\\n  \\tprivate catsRepository: Repository<Cat>\\n  ) {}\\n}\\n```\\n\\nAs you can see, Clawject doesn\'t require you to attach the `@Injectable` decorator to the class or specify what exactly you want to inject. Instead, Clawject will take the type of your dependency and find the appropriate implementation at compile time.\\n\\nIf we wanted to avoid attaching the `@Injectable` decorator to the class **without** Clawject, you would use something like a [Factory providers](https://docs.nestjs.com/fundamentals/custom-providers#factory-providers-usefactory), but this is quite inconvenient. It requires changes if the class constructor changes and still leaves room for error by mixing up injection tokens. *Besides, it\'s just not elegant.*\\n\\n```ts\\nconst InjectionTokens = {\\n  DogsRepository: Symbol(\'dogsRepository\'),\\n  CatsRepository: Symbol(\'catsRepository\')\\n}\\n\\nclass CatsService {\\n  constructor(\\n  \\tprivate catsRepository: Repository<Cat>\\n  ) {}\\n}\\n\\n@Module({\\n  providers: [\\n    {\\n      provide: InjectionTokens.DogsRepository,\\n      useClass: Repository\\n    },\\n    {\\n      provide: InjectionTokens.CatsRepository,\\n      useClass: Repository\\n    },\\n    {\\n      provide: CatsService,\\n      useFactory: (catsRepository: Repository<Cat>) =>\\n      \\tnew CatsService(catsRepository),\\n      \\t\\t  /*Oops, wrong injection token...*/\\n      inject: [InjectionTokens.DogsRepository]\\n    }\\n  ],\\n})\\nexport class Application {}\\n```\\n\\nNow, let\'s take a look at how you can create a `CatsService` **with** Clawject.\\n\\n```ts\\nclass CatsService {\\n  constructor(\\n  \\tprivate catsRepository: Repository<Cat>\\n  ) {}\\n}\\n\\n@ClawjectApplication\\nclass Application {\\n  dogsRepository = Bean(Repository<Dog>);\\n  catsRepository = Bean(Repository<Cat>);\\n\\n  catsService = Bean(CatsService);\\n}\\n```\\n\\n**And that\'s it! \u2728**\\n\\nClawject will resolve all dependencies based on types and notify you of errors such as missing dependencies, circular dependencies, and more, at compile time and directly in your favorite IDE!\\n\\n<img src=\\"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/r4qj71g0vvprxpoxidmd.png\\" alt=\\"Clawject in-editor errors demonstration\\"  />\\n\\n## Unleash the power of polymorphism with Clawject\\n\\nClawject works great with classes, interfaces, types, generics, and type inheritance, allowing you to describe dependencies very flexibly and simply.\\n\\nLet\'s declare an `interface ReadOnlyRepository<T>`, `interface Repository<T>`, and a `class HttpRepository<T>` that implements both of these interfaces:\\n\\n```ts\\ninterface ReadOnlyRepository<T> { /*...*/ }\\n\\ninterface Repository<T> extends ReadOnlyRepository<T> { /*...*/ }\\n\\nclass HttpRepository<T> implements Repository<T> { /*...*/ }\\n```\\n\\nWe\'ve created a polymorphic class and interfaces that allow reading and writing entities with the type `<T>`.\\n\\nNow, let\'s declare the following services: `ReadCatsService` and `WriteCatsService`.\\n\\n```ts\\nclass ReadCatsService {\\n  constructor(\\n    private repository: ReadOnlyRepository<Cat>\\n  ) {}\\n}\\n\\nclass WriteCatsService {\\n  constructor(\\n    private repository: Repository<Cat>\\n  ) {}\\n}\\n```\\n\\nAs you can see, we simply state that we need dependencies of types `ReadOnlyRepository<Cat>` and `Repository<Cat>`, and we don\'t care about the specific implementation that will be injected.\\n\\nNow, let\'s declare the `Application` class and our `Beans`.\\n\\n```ts\\n@ClawjectApplication\\nclass Application {\\n  httpCatsRepository = Bean(HttpRepository<Cat>);\\n\\n  readCatsService = Bean(ReadCatsService);\\n  writeCatsService = Bean(WriteCatsService);\\n}\\n```\\n\\nAs you can see, Clawject understands that the class `HttpRepository<Cat>` implements the interfaces `ReadOnlyRepository<Cat>` and `Repository<Cat>`, and will inject the `httpCatsRepository` bean instance as a dependency in both services.\\n\\nIf we were to do something similar with a more *classical* library, we would have to write a lot of boilerplate and non-type-safe code.\\n\\n```ts\\nconst InjectionTokens = {\\n  ReadOnlyCatsRepository: Symbol(\'ReadOnlyCatsRepository\'),\\n  CatsRepository: Symbol(\'CatsRepository\'),\\n  HttpCatsRepository: Symbol(\'HttpCatsRepository\'),\\n}\\n\\n@Injectable()\\nclass ReadCatsService {\\n  constructor(\\n      @Inject(InjectionTokens.ReadOnlyCatsRepository)\\n      private repository: ReadOnlyRepository<Cat>\\n  ) {}\\n}\\n\\n@Injectable()\\nclass WriteCatsService {\\n  constructor(\\n      @Inject(InjectionTokens.CatsRepository)\\n      private repository: Repository<Cat>\\n  ) {}\\n}\\n\\n@Module({\\n  providers: [\\n    {\\n      useClass: HttpRepository,\\n      provide: InjectionTokens.HttpCatsRepository,\\n    },\\n    {\\n      provide: InjectionTokens.ReadOnlyCatsRepository,\\n      useExisting: InjectionTokens.HttpCatsRepository,\\n    },\\n    {\\n      provide: InjectionTokens.CatsRepository,\\n      useExisting: InjectionTokens.HttpCatsRepository,\\n    },\\n    ReadCatsService,\\n    WriteCatsService,\\n  ],\\n})\\nclass Application {}\\n```\\n\\n## Clean domain objects\\n\\nThe philosophy of Clawject revolves around the idea that dependency injection should be an **external architectural layer**, while all domain objects should describe their dependencies without any framework references.\\n\\nClawject allows you to extract absolutely all DI-related things from your classes, simplifying your code and reducing the probability of mistakes. Because Clawject is a very external component, you can work with any classes from external libraries just as easily as with your own.\\n\\nLet\'s imagine we have an npm package called `data-access`.\\n\\n```ts\\n/* node_modules/data-access/repositories.d.ts */\\n\\nexport interface Repository<T> { /*...*/ }\\nexport declare class HttpRepository<T> implements Repository<T> {\\n  private readonly baseUrl;\\n  constructor(baseUrl: string);\\n}\\n```\\n\\nNow, let\'s declare the `CatsService` that uses the repository from `data-access` package.\\n\\n```ts\\n/* src/cat/CatsService.ts */\\n\\nimport { Repository } from \'data-access\';\\nimport { Cat } from \'./models/Cat\';\\n\\nclass CatsService {\\n  constructor(\\n  \\tprivate repository: Repository<Cat>\\n  ) {}\\n}\\n```\\n\\nNow, let\'s declare beans for our classes.\\n\\n```ts\\n/* src/Application.ts */\\n\\nimport { HttpRepository } from \'data-access\';\\nimport { Cat } from \'./cat/models/Cat\';\\nimport { CatsService } from \'./cat/CatsService\';\\n\\n@ClawjectApplication\\nclass Application {\\n  @Bean catsApiBaseUrl = \'/api/cat\';\\n\\n  httpCatsRepository = Bean(HttpRepository<Cat>);\\n  catsService = Bean(CatsService);\\n}\\n```\\n\\nAs you can see, the classes remain clean and literally know nothing about being part of a dependency injection container. Moreover, you don\'t need to manually write factory functions to keep your classes clean and framework-independent.\\n\\n## Split container by features\\n\\nClawject allows you to break down parts of the container into separate classes and even [share them via npm packages](https://clawject.com/docs/guides/sharing-configurations).\\n\\nLet\'s declare the `CatsConfiguration` class, which will contain beans related only to cats.\\n\\n```ts\\n@Configuration\\nexport class CatsConfiguration {\\n  @Bean apiBaseUrl = \'/api/cat\';\\n\\n  httpCatsRepository = Bean(HttpRepository<Cat>);\\n  catsService = Bean(CatsService);\\n}\\n```\\n\\nNow we can import the configuration classes into our `Application` class or other configuration classes.\\n\\n```ts\\nimport { CatsConfiguration } from \'./cat/CatsConfiguration\';\\nimport { DogsConfiguration } from \'./dog/DogsConfiguration\';\\nimport { BirdsConfiguration } from \'./bird/BirdsConfiguration\';\\n\\n@ClawjectApplication\\nclass Application {\\n  catsConfiguration = Import(CatsConfiguration);\\n  dogsConfiguration = Import(DogsConfiguration);\\n  birdsConfiguration = Import(BirdsConfiguration);\\n}\\n```\\n\\nClawject will assemble the entire container, instantiate all classes with the necessary dependencies, and inform you in a very developer-friendly manner if anything is missing.\\n\\n**Thanks for reading this article. If you\'re interested, visit [Clawject\'s website](https://clawject.com/) for more examples and learn how to install and use it in your project.**"}]}')}}]);