# unwrap-react

## New

## Introducing a new even easier to use helper

```ts
const JsxComprehensive: ({ abbr, a, address, animate, animateMotion, animateTransform, area, article, aside, audio, b, base, bdi, bdo, big, blockquote, body, br, button, canvas, caption, circle, cite, clipPath, code, col, colgroup, data, datalist, dd, defs, del, desc, details, dfn, dialog, div, dl, dt, ellipse, em, embed, feBlend, feColorMatrix, feComponentTransfer, feComposite, feConvolveMatrix, feDiffuseLighting, feDisplacementMap, feDistantLight, feDropShadow, feFlood, feFuncA, feFuncB, feFuncG, feFuncR, feGaussianBlur, feImage, feMerge, feMergeNode, feMorphology, feOffset, fePointLight, feSpecularLighting, feSpotLight, feTile, feTurbulence, fieldset, figcaption, figure, filter, footer, foreignObject, form, g, h1, h2, h3, h4, h5, h6, head, header, hgroup, hr, html, i, iframe, image, img, input, ins, kbd, keygen, label, legend, li, line, linearGradient, link, main, map, mark, marker, mask, menu, menuitem, meta, metadata, meter, mpath, nav, noindex, noscript, object, ol, optgroup, option, output, p, param, path, pattern, picture, polygon, polyline, pre, progress, q, radialGradient, rect, rp, rt, ruby, s, samp, script, section, select, slot, small, source, span, stop, strong, style, sub, summary, sup, svg, switch: { ...switchProps }, symbol, table, tbody, td, template, text, textPath, textarea, tfoot, th, thead, time, title, tr, track, tspan, u, ul, use, var: { ...varProps }, video, view, wbr, webview }: ReturnType<typeof Unwrap.ReturnExposeIntrinsicElements>) => void
```

---

## Consume JSX.IntrinsicElement Props Effortlessly

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
