# unwrap-react

## Consume JSX.IntrinsicElement Props *Effortlessly*

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

## New Namespaces 🎉

### `UnwrapHTMLFactory`

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
