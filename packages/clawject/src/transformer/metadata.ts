import type * as ts from 'typescript';
import { ConfigurationRepository } from '../compile-time/core/configuration/ConfigurationRepository';
import { DeclarationMetadataBuilder } from '../compile-time/core/declaration-metadata/DeclarationMetadataBuilder';
import { ApplicationRepository } from '../compile-time/core/application/ApplicationRepository';
import { Context } from '../compile-time/compilation-context/Context';

/** @public */
const transformer = (program: ts.Program): ts.TransformerFactory<ts.SourceFile> => {
  return context => (sourceFile): ts.SourceFile => {
    Context.assignProgram(program);

    if (!ConfigurationRepository.fileNameToConfigurations.has(sourceFile.fileName) && !ApplicationRepository.fileNameToApplications.has(sourceFile.fileName)) {
      return sourceFile;
    }

    const visitor = (node: ts.Node): ts.Node => {
      if (!node.original) {
        return Context.ts.visitEachChild(node, visitor, context);
      }

      let transformedNode = node;

      if (Context.ts.isClassDeclaration(node)) {
        const configuration = ConfigurationRepository.nodeToConfiguration
          .get(node.original as ts.ClassDeclaration);
        const application = ApplicationRepository.nodeToApplication.get(node.original as ts.ClassDeclaration);

        let metadata: ts.PropertyDeclaration | null = null;

        //Order is important because application is also a configuration
        if (application) {
          metadata = DeclarationMetadataBuilder.buildForApplication(application);
        } else if (configuration) {
          metadata = DeclarationMetadataBuilder.buildForConfiguration(configuration);
        }

        if (metadata) {
          transformedNode = Context.factory.updateClassDeclaration(
            node,
            node.modifiers,
            node.name,
            node.typeParameters,
            node.heritageClauses,
            [
              ...node.members,
              metadata,
            ]
          );
        }
      }

      return Context.ts.visitEachChild(transformedNode, visitor, context);
    };

    return Context.ts.visitNode(sourceFile, visitor) as ts.SourceFile;
  };
};

/** @public */
export const ClawjectMetadataTransformer = (programGetter: () => ts.Program): ts.TransformerFactory<ts.SourceFile> => {
  const target = {} as ts.Program;

  const programProxy = new Proxy(target, {
    get(target: ts.Program, p: string | symbol, receiver: any): any {
      return programGetter()[p];
    },
    set(target: ts.Program, p: string | symbol, newValue: any, receiver: any): boolean {
      throw Error('ts.Program\'s methods are readonly');
    }
  });

  return transformer(programProxy);
};

export default transformer;
