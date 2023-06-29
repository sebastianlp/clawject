import ts, { factory } from 'typescript';
import { Component } from '../component/Component';
import { getDecoratorsOnly } from '../ts/utils/getDecoratorsOnly';
import { LifecycleKind } from '../component-lifecycle/LifecycleKind';
import { isDecoratorFromLibrary } from '../ts/predicates/isDecoratorFromLibrary';
import { isStaticallyKnownPropertyName } from '../ts/predicates/isStaticallyKnownPropertyName';
import { getCompilationContext } from '../../transformer/getCompilationContext';
import { IncorrectNameError } from '../../compilation-context/messages/errors/IncorrectNameError';
import { getNameFromNodeOrNull } from '../ts/utils/getNameFromNodeOrNull';
import { ComponentLifecycle } from '../component-lifecycle/ComponentLifecycle';
import { ClassPropertyWithArrowFunctionInitializer } from '../ts/types';
import { IncorrectArgumentsLengthError } from '../../compilation-context/messages/errors/IncorrectArgumentsLengthError';

//TODO verify decorators
export function processLifecycleElement(node: ts.MethodDeclaration | ClassPropertyWithArrowFunctionInitializer, component: Component): ts.ClassElement {
    const compilationContext = getCompilationContext();
    const elementDecorators = getDecoratorsOnly(node);

    const lifecycles = new Set<LifecycleKind>();

    elementDecorators.forEach(it => {
        if (isDecoratorFromLibrary(it, 'PostConstruct')) {
            lifecycles.add(LifecycleKind.POST_CONSTRUCT);
        }
        if (isDecoratorFromLibrary(it, 'BeforeDestruct')) {
            lifecycles.add(LifecycleKind.BEFORE_DESTRUCT);
        }
    });

    if (lifecycles.size === 0) {
        return node;
    }

    const argumentsLength = getArgumentsLength(node);

    if (argumentsLength > 0) {
        getCompilationContext().report(new IncorrectArgumentsLengthError(
            'Lifecycle elements could not have arguments outside of CatContext classes.',
            node,
            null
        ));

        return node;
    }

    if (!node.name) {
        getCompilationContext().report(new IncorrectNameError(
            'Lifecycle element should have statically known name.',
            node,
            null
        ));

        return node;
    }

    if (!isStaticallyKnownPropertyName(node.name)) {
        getCompilationContext().report(new IncorrectNameError(
            'Lifecycle element should have statically known name.',
            node,
            null
        ));

        return node;
    }

    const classMemberName = getNameFromNodeOrNull(node);

    if (classMemberName === null) {
        compilationContext.report(new IncorrectNameError(
            'Lifecycle element should have statically known name.',
            node,
            null
        ));

        return node;
    }

    const componentLifecycle = new ComponentLifecycle({
        lifecycles: lifecycles,
        classMemberName: classMemberName,
        node: node,
    });

    component.componentLifecycleRegister.register(componentLifecycle);

    if (ts.isMethodDeclaration(node)) {
        return factory.updateMethodDeclaration(
            node,
            node.modifiers?.filter(modifier => !isDecoratorFromLibrary(modifier, undefined)),
            undefined,
            node.name,
            undefined,
            undefined,
            [],
            node.type,
            node.body,
        );
    }

    return factory.updatePropertyDeclaration(
        node,
        node.modifiers?.filter(modifier => !isDecoratorFromLibrary(modifier, undefined)),
        node.name,
        node.questionToken,
        node.type,
        node.initializer,
    );
}

function getArgumentsLength(node: ts.MethodDeclaration | ClassPropertyWithArrowFunctionInitializer): number {
    if (ts.isMethodDeclaration(node)) {
        return node.parameters.length;
    }

    return node.initializer.parameters.length;
}
