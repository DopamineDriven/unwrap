import { HTMLFactoryUnwrapped, Unwrap as Unwrappable } from "./unwrap";
import React from "react";

export namespace Unwrap {
  export declare module UnwrapHTMLFactory {
    export const HTMLFactoryUnwrapped: <
      T extends Pick<
        Unwrappable.HTMLElementUnion,
        keyof Unwrappable.HTMLElementUnion
      >,
      P extends Pick<
        Unwrappable.HTMLAttributesUnion<T>,
        keyof Unwrappable.HTMLAttributesUnion<T>
      >
    >(
      props: Unwrappable.UnwrapPick<
        ReturnType<React.DetailedHTMLFactory<P, T>>,
        keyof ReturnType<React.DetailedHTMLFactory<P, T>>
      >
    ) => typeof props;

    export interface HTMLFactoryUnwrappedReturnInterface
      extends ReturnType<
        typeof HTMLFactoryUnwrapped extends infer U
          ? U
          : typeof HTMLFactoryUnwrapped
      > {}

    // export const UnwrapLegacyRefProps: [Promise<Unwrap.UnwrapHTMLFactory.HTMLFactoryUnwrappedReturnType['ref']>[{...}];

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
    export const { ...UnwrapProps }: ReturnType<typeof HTMLUnwrapped>["props"];
    export const { ...UnwrapRef }: ReturnType<typeof HTMLUnwrapped>;
    export type KeyPropsTypeRef<
      T extends typeof Unwrap.UnwrapHTMLFactory.HTMLUnwrapped
    > = ({ ...props }: T) => typeof props[keyof typeof props];
  }
}

export const { key, props, type, ref } = Unwrap.UnwrapHTMLFactory.HTMLUnwrapped(
  <
    typeof Unwrap.UnwrapHTMLFactory.HTMLUnwrapped[keyof typeof Unwrap.UnwrapHTMLFactory.HTMLUnwrapped]
  >[HTMLFactoryUnwrapped]
);

export default Unwrap.UnwrapHTMLFactory;
