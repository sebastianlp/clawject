import ts from 'typescript';
import { isExtendsCatContext } from '../ts/predicates/isExtendsCatContext';
import { CompilationContext } from '../../compilation-context/CompilationContext';
import { InternalsAccessBuilder } from '../internals-access/InternalsAccessBuilder';
import { processCatContext } from './processCatContext';
import { processImplicitComponents } from './processImplicitComponents';
import { verifyDecorators } from '../decorator-processor/verifyDecorators';
import { DecoratorTarget } from '../decorator-processor/DecoratorTarget';
import { isPropertyWithArrowFunction } from '../ts/predicates/isPropertyWithArrowFunction';
import { getDecoratorVerificationErrors } from './getDecoratorVerificationErrors';

export const processAtomicMode = (compilationContext: CompilationContext, tsContext: ts.TransformationContext, sourceFile: ts.SourceFile): ts.SourceFile => {
  //Skipping declaration files
  if (sourceFile.isDeclarationFile) {
    return sourceFile;
  }

  let shouldAddImports = false;

  const visitor = (node: ts.Node): ts.Node => {
    if (!ts.isClassDeclaration(node)) {
      return ts.visitEachChild(node, visitor, tsContext);
    }

    let transformedNode: ts.Node;

    const decoratorVerificationErrors = getDecoratorVerificationErrors(node);

    //Skipping processing anything because of errors
    if (decoratorVerificationErrors.length !== 0) {
      decoratorVerificationErrors.forEach(it => compilationContext.report(it));
      return node;
    }

    //Registering contexts
    if (isExtendsCatContext(node)) {
      shouldAddImports = true;
      transformedNode = processCatContext(node, compilationContext);
    } else {
      transformedNode = processImplicitComponents(node, compilationContext);
    }

    return ts.visitEachChild(transformedNode, visitor, tsContext);
  };

  const transformedFile = ts.visitNode(sourceFile, visitor);

  const updatedStatements = Array.from(transformedFile.statements);

  if (shouldAddImports) {
    updatedStatements.unshift(InternalsAccessBuilder.importDeclarationToInternal());
  }

  if (compilationContext.languageServiceMode) {
    return sourceFile;
  }

  return ts.factory.updateSourceFile(
    sourceFile,
    updatedStatements,
    sourceFile.isDeclarationFile,
    sourceFile.referencedFiles,
    sourceFile.typeReferenceDirectives,
    sourceFile.hasNoDefaultLib,
    sourceFile.libReferenceDirectives,
  );
};
