# @unwrap/react

## Consume JSX.IntrinsicElement Props Effortlessly

```tsx
import { VFC, FC } from "react";
import Unwrap from "unwrap-react/unwrap";
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
  Unwrap.ReactUnwrapped<"a" | "b" | "sub" | "sup" | "h1" | "em" | "div">
> = ({ b, h1, sup, sub, a, em, div }) => {
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
        <h1 {...h1}>
          This Library is 100% unopinionated; why?&nbsp;
          <b {...b}>Endless Flexibility</b>&nbsp; -- <em {...em}>You Decide</em>
          &nbsp;<sub {...sub}>SubScript Tags</sub>&nbsp;
          <sup {...sup}>SuperScript Tags</sup>
        </h1>
      </Example>
    </>
  );
};
```

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
