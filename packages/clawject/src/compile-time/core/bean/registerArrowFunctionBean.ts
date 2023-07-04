import { ClassPropertyWithArrowFunctionInitializer } from '../ts/types';
import { TypeQualifyError } from '../../compilation-context/messages/errors/TypeQualifyError';
import { DITypeBuilder } from '../type-system/DITypeBuilder';
import { Bean } from './Bean';
import { BeanKind } from './BeanKind';
import { Configuration } from '../configuration/Configuration';
import { unwrapExpressionFromRoundBrackets } from '../ts/utils/unwrapExpressionFromRoundBrackets';
import { getCompilationContext } from '../../../transformer/getCompilationContext';
import { getBeanLazyExpressionValue } from './getBeanLazyExpressionValue';
import { getBeanScopeExpressionValue } from './getBeanScopeExpressionValue';

export const registerArrowFunctionBean = (
    configuration: Configuration,
    classElement: ClassPropertyWithArrowFunctionInitializer,
): void => {
    const compilationContext = getCompilationContext();

    const typeChecker = compilationContext.typeChecker;
    const signature = typeChecker.getSignatureFromDeclaration(unwrapExpressionFromRoundBrackets(classElement.initializer));
    if (!signature) {
        compilationContext.report(new TypeQualifyError(
            'Can not resolve function return type.',
            classElement.initializer,
            configuration.node,
        ));
        return;
    }

    const returnType = typeChecker.getReturnTypeOfSignature(signature);
    const diType = DITypeBuilder.build(returnType);

    const contextBean = new Bean({
        classMemberName: classElement.name.getText(),
        diType: diType,
        node: classElement,
        kind: BeanKind.ARROW_FUNCTION,
    });
    contextBean.lazyExpression.node = getBeanLazyExpressionValue(contextBean);
    contextBean.scopeExpression.node = getBeanScopeExpressionValue(contextBean);
    configuration.beanRegister.register(contextBean);
};
