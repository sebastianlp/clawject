import type * as ts from 'typescript';
import { MissingInitializerError } from '../../compilation-context/messages/errors/MissingInitializerError';
import { Configuration } from '../configuration/Configuration';
import { Bean } from './Bean';
import { BeanKind } from './BeanKind';
import { getLazyExpressionValue } from './getLazyExpressionValue';
import { getBeanScopeExpressionValue } from './getBeanScopeExpressionValue';
import { extractDecoratorMetadata } from '../decorator-processor/extractDecoratorMetadata';
import { DecoratorKind } from '../decorator-processor/DecoratorKind';
import { getBeanQualifierValue } from './getBeanQualifierValue';
import { getBeanConditionExpressionValue } from './getBeanConditionExpressionValue';
import { getExternalValueFromNode } from '../ts/utils/getExternalValueFromNode';
import { Context } from '../../compilation-context/Context';

export const registerBeanFactoryMethod = (
  configuration: Configuration,
  classElement: ts.MethodDeclaration,
): void => {
  if (classElement.body === undefined) {
    Context.report(new MissingInitializerError(
      'Method Bean should have a body.',
      classElement.name,
      configuration,
      null,
    ));
    return;
  }

  const bean = new Bean({
    classMemberName: classElement.name.getText(),
    node: classElement,
    kind: BeanKind.FACTORY_METHOD,
    primary: extractDecoratorMetadata(classElement, DecoratorKind.Primary) !== null,
    external: getExternalValueFromNode(classElement) ?? null,
  });

  bean.lazyExpression.value = getLazyExpressionValue(bean.node);
  bean.scopeExpression.value = getBeanScopeExpressionValue(bean);
  bean.conditionExpression.value = getBeanConditionExpressionValue(bean);
  bean.qualifier = getBeanQualifierValue(bean);
  configuration.beanRegister.register(bean);
};
