import { DOMAttributes } from "react";

export namespace Unwrap {
  export declare module UnwrapDOM {
   export const DOMAttributesUnwrapped: <
      T extends import("react").DOMAttributes<{ [P in keyof T]: T[P] }>
    >({
      ...domAttribsProps
    }: import("react").DOMAttributes<T>) => typeof domAttribsProps;
   export const DOMAttributesExposed: <
      T extends DOMAttributes<{ [P in keyof T]-?: T[P] }>
    >({
      ...y
    }: DOMAttributes<T>) => typeof y;
   export type InferDomAttributesExposedReturnType = ReturnType<
      typeof DOMAttributesExposed
    >;

   export interface DOMAttributesUnwrappedReturned
      extends ReturnType<
        typeof DOMAttributesUnwrapped extends infer U
          ? U
          : typeof DOMAttributesUnwrapped[keyof typeof DOMAttributesUnwrapped]
      > {}

   export const JSDomHelper: <T extends ReturnType<typeof DOMAttributesUnwrapped>>({
      ...props
    }: T) => T;

   export const DOMAttributesDestructuredRecursively: (
      props: ({...propss}: InferDomAttributesExposedReturnType) => typeof propss
    ) => ReturnType<typeof props>

   export type ConsumeDomAttributesConsumption = Omit<
      ReturnType<
        typeof DOMAttributesDestructuredRecursively extends infer U
          ? U
          : typeof DOMAttributesDestructuredRecursively
      >,
      "undefined"
    >;

   export const JSHelperDOMAttributes: Exclude<
      ReturnType<typeof JSDomHelper>,
      undefined
    >;

   export const {
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

   export const DOMAttribsAutoPhagocytosis: <
      T extends typeof UnwrapDOM.DOMAttributesExposed extends infer U
        ? U
        : typeof UnwrapDOM.DOMAttributesExposed
    >(
      props: T
    ) => ReturnType<typeof props>;

   export type UnwrapDomAttribsAutoPhagocytosis = ReturnType<
      typeof DOMAttribsAutoPhagocytosis
    >;

   export const DOMAttribsAutoPhagocytosisGlobal: UnwrapDomAttribsAutoPhagocytosis;
  }
}


// @ts-ignore:export-just-namespace
export default Unwrap.UnwrapDOM;