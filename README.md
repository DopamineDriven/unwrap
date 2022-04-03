# unwrap-react

## Consume React's Props *Effortlessly*

- Consume IntrinsicElements, HTMLFactories, DOMAttributes, MetaTypes...and more
- Website ft documentation and examples coming 🔜

### This package should be installed as a Development Dependency

```bash
npm i --dev unwrap-react
```

```bash
yarn add -D unwrap-react
```

```bash
pnpm add -D unwrap-react
```

## New Namespaces stemming from the overarching `Unwrap` namespace 🎉 (v0.4.1)

### `Unwrap.UnwrapHTMLFactory`

- Access `key`, `type`, `props`, and `ref` in an instant with this subnamespace
- use the `htmlFactoryGlobalHelper` to expedite this process (JS friendly as well)

```tsx
    export declare const htmlFactoryGlobalHelper: HTMLFactoryUnwrappedReturnType;
    /**
      const Unwrap.UnwrapHTMLFactory.htmlFactoryGlobalHelper: Unwrappable.UnwrapPick<React.DOMElement<Pick<Unwrappable.HTMLAttributesUnion<Pick<Unwrappable.HTMLElementUnion, "slot" | "style" | "title" | "addEventListener" | "removeEventListener" | "accessKey" | "accessKeyLabel" | "autocapitalize" | ... 277 more ... | "focus">>, "slot" | ... 252 more ... | "onTransitionEndCapture">, Pick<...>>, keyof React.DOMElement<...>>
    */
   const exampleHtmlFactoryConsumer = Unwrap.UnwrapHTMLFactory.htmlFactoryGlobalHelper.props.onCompositionStart

   /**
      onCompositionStart?: React.CompositionEventHandler<Pick<Unwrappable.HTMLElementUnion, "slot" | "style" | "title" | "addEventListener" | "removeEventListener" | "accessKey" | "accessKeyLabel" | "autocapitalize" | ... 277 more ... | "focus">> | undefined
   */



```

### `Unwrap.UnwrapDOM`

- this helper type provides all `on-` prefixed DOMEventHandler methods sans `children` and `dangerouslySetInnerHtml` (ReactNode & {__html: string}, respectively)
- 162 total DOMEvent-related props to access out of the box with a simple const

```tsx
const onChangeEventHandler = Unwrap.UnwrapDOM.JSHelperDOMAttributes.onChange //...navigate to node_modules/unwrap-react/dom-attribs.d.ts to see that this component does support all SVG/HTML React Components that use various events natively 
```

### `Unwrap.UnwrapJS`

- This namespace is oriented towards non-typescript React users
- Some useful declarations from this namespace include:

```ts
const Unwrap.UnwrapJS.JSXIntrinsicElementsDestructured: {
    a?: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> | undefined;
    abbr?: React.DetailedHTMLProps<...> | undefined;
    ... 172 more ...;
    view?: React.SVGProps<...> | undefined;
}


```

- Which can be used as follows:

```ts
import Unwrap from "unwrap-react";
/**
 * the `textPath.arabicForm` optional chain has the following property definition at its terminal `arabicForm` value:
 * React.SVGAttributes<SVGTextPathElement>.arabicForm?: "initial" | "medial" | "terminal" | "isolated" | undefined
*/
const arabicForm = Unwrap.UnwrapJS.JSXIntrinsicElementsDestructured?.textPath?.arabicForm;

/**
 * `JSXIntrinsicElementsRequired` recursively requires all mapped props be stripped of conditional signs `?` as follows:
 
 *  `const JsxIntrisnicElementsRequired: {
      [P in keyof typeof JSXIntrinsicElementsDestructured]-?: Exclude<typeof JSXIntrinsicElementsDestructured[P], undefined>;
    };`
* This is great for destructuring what you need and only what you need -- 
*/

const {
  a,
  abbr,
  address,
  animate,
  animateMotion,
  animateTransform,
  area,
  article,
  aside,
  audio
} = Unwrap.UnwrapJS.JsxIntrisnicElementsRequired;

```

### New v0.4.1 -- `DOMAttributesUnwrapped`

```ts
export const DOMAttributesUnwrapped = <
  T extends import("react").DOMAttributes<{ [P in keyof T]?: T[P] }>
>({
  ...domAttribsProps
}: import("react").DOMAttributes<T>) => ({ ...domAttribsProps });
```

---

## JS-Only-Devs -- New JS-Friendly Helpers

- Example: a DataInspector component (children = ReactNode)

```jsx
import JsxHelper, { JsHelperElementsFunc } from "unwrap-react/js-helpers";
import cn from "classnames";

// using the JsHelperElementsFunc
export const DataInspectorOne = (props = JsHelperElementsFunc(), children) => {
  return (
    <div
      lang={props.div?.lang ? props.div.lang : "json"}
      className={cn(
        `font-interVar container max-w-6xl justify-center mx-auto fit min-h-48 break-normal flex-wrap`,
        props.div?.className ? props.div.className : ""
      )}
      {...props.div}>
      <pre
        className='container flex-col mx-auto text-[0.75rem] flex-grow text-left bg-[#151515] leading-[1.29rem] min-w-full text-yellow-400 break-normal w-4xl w-fit-4xl overflow-x-clip '
        {...props.pre}>
        {children ?? <></>}
      </pre>
    </div>
  );
};

// using the JsxHelper
export const DataInspectorTwo = (props = JsxHelper, children) => {
  return (
    <div
      lang={props.div?.lang ? props.div.lang : "json"}
      className={cn(
        `font-interVar container max-w-6xl justify-center mx-auto fit min-h-48 break-normal flex-wrap`,
        props.div?.className ? props.div.className : ""
      )}
      {...props.div}>
      <pre
        className='container flex-col mx-auto text-[0.75rem] flex-grow text-left bg-[#151515] leading-[1.29rem] min-w-full text-yellow-400 break-normal w-4xl w-fit-4xl overflow-x-clip '
        {...props.pre}>
        {children ?? <></>}
      </pre>
    </div>
  );
};

```

---

## TypeScript Users 🚀

```tsx
import { VFC, FC } from "react";
import Unwrap from "unwrap-react";
export const Example: FC<
  Unwrap.ReactUnwrapped<"a" | "main" | "h1" | "aside">
> = ({ a, children, main, h1, aside }) => (
  <main {...main}>
    <h1 {...h1}>
      {children ?? <></>}
      <aside {...aside}>
        Unwrapping Reacts JSX.IntrinsicElements&nbsp;&rarr;&nbsp;
        <a {...a}>
          "Inject deeply nested Intrinsic Elements with their Native Props for
          consumption anywhere in your codebase"
        </a>
      </aside>
    </h1>
  </main>
);

export const Consume: VFC<
  Unwrap.ReactUnwrapped<"a" | "b" | "sub" | "sup" | "h1" | "h2" | "em" | "div">
> = ({ b, h1, h2, sup, sub, a, em, div }) => {
  return (
    <>
      <div {...div}>inject props any way you want...</div>
      <Example
        a={{
          href: "https://www.npmjs.com/package/unwrap-react",
          rel: "noopener noreferrer",
          target: "_blank",
          onClick: e => {
            e.preventDefault();
            typeof window !== "undefined"
              ? window.location.assign(
                  "https://www.npmjs.com/package/unwrap-react"
                )
              : "#";
          },
          title: `${"persist unconsumed props -- or conditionally persist them!"}`,
          className: a.className
            ? a.className
            : "mx-auto appearance-none blue-800/90 hover:blue-700/90",
          // prop forwarding...
          ...a
        }}
        h1={{
          defaultValue: h1.defaultValue
            ? h1.defaultValue
            : "fallback because you forgot to set the defaultValue, dummy 🎉",
          ...h1
        }}>
        <h2 {...h2}>
          This Library is 100% unopinionated; why?&nbsp;
          <b {...b}>Endless Flexibility</b>&nbsp; -- <em {...em}>You Decide</em>
          &nbsp;<sub {...sub}>SubScript Tags</sub>&nbsp;
          <sup {...sup}>SuperScript Tags</sup>
        </h2>
      </Example>
    </>
  );
};
```

## Version 0.4.0 introduces a new, easy to use, global const -- `JsxHelper` -- **JS-Only-Friendly**

```ts
import { IntrinsicComprehensiveConditional } from "./unwrap";

export const JsHelperElementsFunc = (
  props = IntrinsicComprehensiveConditional
) => {
  return IntrinsicComprehensiveConditional({ ...props });
};

export type JsHelperReturnForExport = ReturnType<typeof JsHelperElementsFunc>;

export const JsxComprehensiveConditional = (
  props: JsHelperReturnForExport
) => ({ ...props });

export const JsxHelper = JsxComprehensiveConditional(
  JsHelperElementsFunc(IntrinsicComprehensiveConditional)
);

export default JsxHelper;

```

### Use `OOElementSelection` or `PickElementSelection<T>` types for enhanced OOP when targeting a single element

- the `OOElementSelection` type is equal to `Required<SelectTargetedElement>` which does not persist the `Required<T>` generic beyond the superficial-most application (the parent itself)
- the `PickElementSelection<T>` type unionizes embedded prop types if multiple parents are targeted; this helper works best for a single element, otherwise non-scalar DOMAttributes such as `onClick` are assigned multiple types in the form of a union
- takeaway: with `PickElementSelection<T>` the parent-level unionization persists with depth, merging 1:1 type overlap while unionizing imperfect type overlap)

```tsx
import Unwrap from "unwrap-react";
import { OOElementSelection, PickElementSelection } from "unwrap-react/unwrap";

export const PickSingleElementPureOOP = ({
  a: { about, accessKey, onChange, ...rest }
}: OOElementSelection) => {
  return {
    targeted: {
      about,
      accessKey,
      onChange
    },
    exhaustive: (
      <a {...rest} about={about} accessKey={accessKey} onChange={onChange} />
    )
  };
};

export const PickSingleElementUnion = ({
  about,
  accessKey,
  onChange,
  ...rest
}: PickElementSelection<"a">) => {
  return {
    targeted: {
      about,
      accessKey,
      onChange
    },
    exhaustive: (
      <a {...rest} about={about} accessKey={accessKey} onChange={onChange} />
    )
  };
};
```

### Multiple Elements Targeted -- Which Helper to Choose?

- The `OOElementSelection` type employed by const `PureGracefulOOP` provides a clear approach

- The `PickElementSelection<T>` type deeply unionizes each given parents DOMAttributes via the `UnionizedClusterF` const below

- `PureGracefulOOP` doesn't unionize DOMAttributes returned by each targeted parent element like `UnionizedClusterF` does

- Use the `OOElementSelection` type for a vastly superior DX when targeting multiple elements
- `ReactUnwrapped<T>` or `OOElementSelection` should be used when targeting more than one element unless you're doing something oddly specifc (in which case I'd love to see it, PRs welcomed)

```tsx
// ✔ do do this -- clean + intuitive
export const PureGracefulOOP = ({
  a,
  div,
  button,
  pre,
  i
}: OOElementSelection) => {
  return (
    <i {...i}>
      <pre {...pre}>
        {JSON.stringify(
          {
            exhaustive: <a {...a} />,
            divExhaustive: <div {...div} />,
            buttonExhaustive: <button {...button} />
          },
          null,
          2
        )}
      </pre>
    </i>
  );
};

// ⛔ don't do this...dirty + mandatory type assertion
export const UnionizedClusterF = ({
  ...rest
}: PickElementSelection<"a" | "div" | "button" | "pre" | "i">) => {
  return (
    <i {...(rest as HTMLAttributes<HTMLElement>)}>
      <pre {...(rest as HTMLAttributes<HTMLPreElement>)}>
        {JSON.stringify(
          {
            exhaustive: (
              <a {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)} />
            ),
            divExhaustive: (
              <div {...(rest as HTMLAttributes<HTMLDivElement>)} />
            ),
            buttonExhaustive: (
              <button {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)} />
            )
          },
          null,
          2
        )}
      </pre>
    </i>
  );
};
```

## Another Simple example

```tsx
import * as React from "react";
export const Button = ({
  button,
  span
}: Unwrap.ReactUnwrapped<"button" | "span">) => {
  return (
    <button {...button}>
      Boop{" "}
      <span {...span} className="sr-only">
        Did you a heckin inject
      </span>
    </button>
  );
};
```

### Use the following approach to target a specific elements props

```tsx
// use this approach to target a specific JSX.IntrinsicElements child props
export const InjectEmailInput = ({
  ...props
}: Unwrap.UnwrapHtmlUnion<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>) => <input {...props} />;
```

---
