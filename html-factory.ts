import { Unwrap as Unwrappable } from "./unwrap";
import React, { HTMLAttributes } from "react";

export namespace Unwrap {
  export declare module UnwrapHTMLFactory {
    export const HTMLFactoryUnwrapped: (
      props: Unwrappable.UnwrapPick<
        ReturnType<
          React.DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>
        >,
        keyof ReturnType<
          React.DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>
        >
      >
    ) => typeof props;

    export interface HTMLFactoryUnwrappedReturnInterface
      extends ReturnType<
        typeof HTMLFactoryUnwrapped extends infer U
          ? U
          : typeof HTMLFactoryUnwrapped
      > {}

    export type extractOptions<T> = T extends React.LegacyRef<
      Pick<Unwrappable.HTMLElementUnion, infer U>
    >
      ? U
      : Pick<Unwrappable.HTMLElementUnion, keyof Unwrappable.HTMLElementUnion>;
    type HTMLFactoryUnwrappedReturnType = ReturnType<
      typeof HTMLFactoryUnwrapped extends infer U
        ? U
        : typeof HTMLFactoryUnwrapped
    >;
    export const htmlFactoryGlobalHelper: HTMLFactoryUnwrappedReturnType;

    export function HTMLUnwrapped<
      T extends { props: typeof HTMLFactoryUnwrapped }
    >({ props }: T): ReturnType<typeof HTMLFactoryUnwrapped>;

    export const UnwrapKey: ReturnType<typeof HTMLUnwrapped>["key"];
    export const UnwrapProps: ReturnType<typeof HTMLUnwrapped>["props"];
    export const { ...UnwrapRef }: ReturnType<typeof HTMLUnwrapped>;
    export type KeyPropsTypeRef<
      T extends typeof Unwrap.UnwrapHTMLFactory.HTMLUnwrapped
    > = ({ ...props }: T) => typeof props[keyof typeof props];
  }
}

export default Unwrap.UnwrapHTMLFactory;
