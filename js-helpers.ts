import { DOMAttributes } from "react";
import { IntrinsicComprehensiveConditional } from "./unwrap";

export namespace Unwrap {
  export declare module UnwrapJS {
    export const JsHelperElementsFunc: (
      props: typeof IntrinsicComprehensiveConditional
    ) => ReturnType<typeof props>;

    export const {
      ...JSXIntrinsicElementsDestructured
    }: ReturnType<typeof JsHelperElementsFunc>;

    export const JsxIntrisnicElementsRequired: {
      [P in keyof typeof JSXIntrinsicElementsDestructured]-?: Exclude<
        typeof JSXIntrinsicElementsDestructured[P],
        undefined
      >;
    };

    // if you append [keyof typeof props] onto AllHTMLAttributes, it generates 1901 additional properties 👀
    export const ExtendJSXIntrinsicElementsRequired: (
      props: typeof JsxIntrisnicElementsRequired[keyof typeof JsxIntrisnicElementsRequired]
    ) => typeof props;
    export type ExtendJSXIntrinsicElementsRequiredReturnType = ReturnType<
      typeof ExtendJSXIntrinsicElementsRequired extends infer U
        ? U
        : typeof ExtendJSXIntrinsicElementsRequired
    >;

    export const DOMAttribs: <
      T extends DOMAttributes<{ [P in keyof T]?: T[P] }>
    >({
      ...y
    }: DOMAttributes<T>) => typeof y | typeof y[];

    export const DOMAttributesUnwrapped: <
      T extends DOMAttributes<{ [P in keyof T]?: T[P] }>
    >({
      ...y
    }: DOMAttributes<T>) => typeof y | typeof y[];
   export type inferReturn = ReturnType<typeof DOMAttributesUnwrapped>;

    export const DOMAttribsJSHelper: ({
      ...props
    }: ReturnType<
      typeof import("./unwrap").DOMAttributesUnwrapped
    >) => typeof props;

   export const ElementHelper: ReturnType<typeof ExtendJSXIntrinsicElementsRequired>;

   export const pickType: Required<
      Pick<typeof ElementHelper, `${keyof typeof ElementHelper}`>
    >;

   export const JSHelperPickElement: (
      props: Pick<typeof pickType, keyof typeof pickType>
    ) => typeof props;

   export const JSHelperElementProperties: ({
      ...props
    }: typeof JSHelperPickElement) => typeof props;
  }
}
export default Unwrap.UnwrapJS;
