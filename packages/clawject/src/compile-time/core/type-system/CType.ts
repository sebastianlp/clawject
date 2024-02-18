import ts from 'typescript';
import { TypeComparator } from './TypeComparator';
import { BaseTypesRepository } from './BaseTypesRepository';
import { getCompilationContext } from '../../../transformer/getCompilationContext';

export class CType {
  private tsTypeRef: WeakRef<ts.Type>;

  constructor(
    tsType: ts.Type
  ) {
    this.tsTypeRef = new WeakRef(tsType);
  }

  get tsType(): ts.Type {
    const tsType = this.tsTypeRef.deref();

    if (!tsType) {
      throw new Error('Type has been GC or not assigned.');
    }

    return tsType;
  }

  isEmptyValue(): boolean {
    return this.getUnionOrIntersectionTypes()?.every(it => it.isEmptyValue()) ?? (this.isVoidLike() || this.isNull());
  }

  getDeclarations(): ts.Declaration[] {
    return this.tsType.symbol?.declarations ?? [];
  }

  getUnionOrIntersectionTypes(): CType[] | null {
    if (!this.isUnionOrIntersection()) {
      return null;
    }

    const thisUnionOrIntersectionTSType = this.tsType as ts.UnionOrIntersectionType;

    return thisUnionOrIntersectionTSType.types.map(it => new CType(it));
  }

  getTypeArguments(): CType[] | null {
    if (TypeComparator.isReferenceType(this.tsType)) {
      return getCompilationContext().typeChecker.getTypeArguments(this.tsType).map(it => new CType(it));
    }

    return null;
  }

  isUnionOrIntersection(): boolean {
    return TypeComparator.checkFlag(this.tsType, ts.TypeFlags.UnionOrIntersection);
  }

  isUnion(): boolean {
    return TypeComparator.checkFlag(this.tsType, ts.TypeFlags.Union);
  }

  isVoidLike(): boolean {
    return TypeComparator.checkFlag(this.tsType, ts.TypeFlags.VoidLike);
  }

  isUndefined(): boolean {
    return TypeComparator.checkFlag(this.tsType, ts.TypeFlags.Undefined);
  }

  isVoid(): boolean {
    return TypeComparator.checkFlag(this.tsType, ts.TypeFlags.Null);
  }

  isNull(): boolean {
    return TypeComparator.checkFlag(this.tsType, ts.TypeFlags.Null);
  }

  isNever(): boolean {
    return TypeComparator.checkFlag(this.tsType, ts.TypeFlags.Never);
  }

  isSymbol(): boolean {
    return TypeComparator.checkFlag(this.tsType, ts.TypeFlags.ESSymbol);
  }

  isArray(): boolean {
    return BaseTypesRepository.getBaseTypes().CArray.isCompatible(this);
  }

  isSet(): boolean {
    return BaseTypesRepository.getBaseTypes().CSet.isCompatible(this);
  }

  isMap(): boolean {
    return BaseTypesRepository.getBaseTypes().CMap.isCompatible(this);
  }

  isMapStringToAny(): boolean {
    return BaseTypesRepository.getBaseTypes().CMapStringToAny.isCompatible(this);
  }

  isPromise(): boolean {
    return BaseTypesRepository.getBaseTypes().CPromise.isCompatible(this);
  }

  getPromisedType(): CType | null {
    const typeChecker = getCompilationContext().typeChecker;
    const promisedType = typeChecker.getPromisedTypeOfPromise(this.tsType);

    if (!promisedType) {
      return null;
    }

    return new CType(promisedType);
  }

  isOptionalUndefined(): boolean {
    return this.isUnion() && (this.getUnionOrIntersectionTypes()?.some(it => it.isVoidLike()) ?? false);
  }

  isOptionalNull(): boolean {
    return this.isUnion() && (this.getUnionOrIntersectionTypes()?.some(it => it.isNull()) ?? false);
  }

  isOptional(): boolean {
    return this.isOptionalUndefined() || this.isOptionalNull();
  }

  isCompatibleToPossiblePromise(to: CType): boolean {
    if (to.isPromise()) {
      const promisedType = this.getPromisedType() ?? this;

      return this.isCompatible(promisedType);
    }

    return this.isCompatible(to);
  }

  //TODO follow source-target pattern from TS
  isCompatible(to: CType): boolean {
    return TypeComparator.compareType(to.tsType, this.tsType);
  }
}
