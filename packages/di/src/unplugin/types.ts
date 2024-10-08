/**
 * A valid `picomatch` glob pattern, or array of patterns.
 */
type FilterPattern = ReadonlyArray<string | RegExp> | string | RegExp | null;

export type Options = {
  /**
   * The patterns of files to include.
   *
   * `Default`: `[/\.[cm]?tsx?$/]`
   */
  include?: FilterPattern;

  /**
   * The patterns of files to exclude.
   *
   * `Default`: `[/node_modules/]`
   */
  exclude?: FilterPattern;

  /**
   * The path to the tsconfig file.
   * If not specified, the plugin will try to find it automatically.
   *
   * `Default`: `tsconfig.json`
   */
  tsconfig?: string;


  /**
   * Whether to skip the compilation.
   *
   * If you're already using TypeScript compiler to compile your code, you can set this to `true`
   * to skip the additional compilation by this plugin
   * and utilize clawject transformer as a typescript compiler plugin https://clawject.com/docs/setup#bundler-with-typescript-loader
   *
   * `Default`: `false`
   */
  skipCompilation?: boolean;
}

const defaultOptions: Options = {
  include: [/\.[cm]?tsx?$/],
  exclude: [/node_modules/],
  skipCompilation: false,
  tsconfig: 'tsconfig.json'
};

export const resolveOptions = (options: Partial<Options> = {}): Options => {
  return {
    ...defaultOptions,
    ...options
  };
};
