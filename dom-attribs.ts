import { DOMAttributes } from "react";

export namespace Unwrap {
  export declare module UnwrapDOM {
    const DOMAttributesUnwrapped: <
      T extends import("react").DOMAttributes<{ [P in keyof T]: T[P] }>
    >({
      ...domAttribsProps
    }: import("react").DOMAttributes<T>) => typeof domAttribsProps;
    const DOMAttributesExposed: <
      T extends DOMAttributes<{ [P in keyof T]-?: T[P] }>
    >({
      ...y
    }: DOMAttributes<T>) => typeof y;
    type InferDomAttributesExposedReturnType = ReturnType<
      typeof DOMAttributesExposed
    >;

    interface DOMAttributesUnwrappedReturned
      extends ReturnType<
        typeof DOMAttributesUnwrapped extends infer U
          ? U
          : typeof DOMAttributesUnwrapped[keyof typeof DOMAttributesUnwrapped]
      > {}

    const JSDomHelper: <T extends ReturnType<typeof DOMAttributesUnwrapped>>({
      ...props
    }: T) => T;

    const DOMAttributesDestructuredRecursively: (
      props: ({...propss}: InferDomAttributesExposedReturnType) => typeof propss
    ) => ReturnType<typeof props>

    type ConsumeDomAttributesConsumption = Omit<
      ReturnType<
        typeof DOMAttributesDestructuredRecursively extends infer U
          ? U
          : typeof DOMAttributesDestructuredRecursively
      >,
      "undefined"
    >;

    const JSHelperDOMAttributes: Exclude<
      ReturnType<typeof JSDomHelper>,
      undefined
    >;

    const {
      ...JSHelperDOMAttributesDestructured
    }: {
      [P in keyof ReturnType<
        typeof DOMAttributesDestructuredRecursively
      >]: ReturnType<typeof DOMAttributesDestructuredRecursively>[P] extends {
        [W in keyof (infer U)]: infer U;
      }
        ? { [W in keyof U]: U[W] }
        : { [W in keyof P]: P[W] };
    };

    const DOMAttribsAutoPhagocytosis: <
      T extends typeof UnwrapDOM.DOMAttributesExposed extends infer U
        ? U
        : typeof UnwrapDOM.DOMAttributesExposed
    >(
      props: T
    ) => ReturnType<typeof props>;

    type UnwrapDomAttribsAutoPhagocytosis = ReturnType<
      typeof DOMAttribsAutoPhagocytosis
    >;

    const DOMAttribsAutoPhagocytosisGlobal: UnwrapDomAttribsAutoPhagocytosis;
  }
}


// @ts-ignore:export-just-namespace
export default Unwrap.UnwrapDOM;