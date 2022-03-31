# unwrap-react

## JS only users -- several imports available for use (see below)

```jsx
import Unwrap from "unwrap-react";
import { JSXIntrinsicPropsConstruct } from "unwrap-react/unwrap";

export const JSXExposed = () =>
  new JSXIntrinsicPropsConstruct({
    a: { "aria-activedescendant": "a" },
    input,
    label,
    textarea,
    div,
    fieldset,
    form,
    button,
    blockquote,
    h2,
    h1,
    h4,
    p,
    pre,
    span,
    feImage,
    image,
    img,
    svg,
    path,
    g
  });

const useReturnExposeIntrinsicElements = (
  props = Unwrap.ReturnExposeIntrinsicElements()
) => {
  const visualizeReturnedProps = {
    ...props
  };
  return (
    <>
      <div
        lang={div?.lang ? div.lang : "json"}
        className={cn(
          `font-interVar container max-w-6xl justify-center mx-auto fit min-h-48 break-normal flex-wrap`,
          div?.className ? div.className : ""
        )}
        {...div}>
        <pre
          className='container flex-col mx-auto text-[0.75rem] flex-grow text-left bg-[#151515] leading-[1.29rem] min-w-full text-yellow-400 break-normal w-4xl w-fit-4xl overflow-x-clip '
          {...pre}>
          {JSON.stringify({ ...visualizeReturnedProps }, null, 2)}
        </pre>
      </div>
    </>
  );
};

useReturnExposeIntrinsicElements({
  a: {
    title:
      "access 175 IntrinsicElements and their nested attributes anywhere 🎉 "
  },
  div: {
    children: () => (
      <>
        <title>
          {"embed the children prop of a given element with returned JSX 👀 "}
        </title>
        <aside>{"This is 100% JS, no typescript required"}</aside>
      </>
    )
  }
});

```

## Introducing New Feaetures in v0.3.0

- Instantiate the new `JSXIntrinsicPropsConstruct` class by extending its import in a function:

```tsx
export const OptimizedImportOfClass = <
  T extends import("unwrap-react/unwrap").JSXIntrinsicPropsConstruct
>(
  instantiatedConstruct: T
) => {
  const {
    consumeJsxComprehensive: {
      address,
      form,
      fieldset,
      input,
      label,
      button,
      a,
      span,
      p,
      div,
      h1,
      h2,
      h4,
      title,
      svg,
      g,
      path,
      foreignObject,
      caption
    }
  } = instantiatedConstruct;
  return {
    address,
    form,
    fieldset,
    input,
    label,
    button,
    a,
    span,
    p,
    div,
    h1,
    h2,
    h4,
    title,
    svg,
    g,
    path,
    foreignObject,
    caption
  };
};
```

### Use Type Helpers to Unwrap returned Divs until more features are released

```ts
export interface FieldsReturnedByJsxConstruct
  extends ReturnType<
    typeof OptimizedImportOfClass extends infer U
      ? U
      : typeof OptimizedImportOfClass[keyof typeof OptimizedImportOfClass]
  > {}
```

### Consume the Returned Type Properties

- Create as many of the returned element as you'd like -- for example, divs alpha through omega below

```tsx
export const Consumption = ({
  a: registerAnchor,
  a: faqAnchor,
  a: privacyPolicyAnchor,
  button: loadingButton,
  button: disabledButton,
  button: submitButton,
  h1: homeH1Heading,
  h1: aboutH1Heading,
  h1: dynamicH1Heading,
  input: emailInput,
  input: passwordInput,
  input: rememberMeInput,
  input: forgotPasswordInput,
  form: loginForm,
  label: emailLabel,
  label: passwordLabel,
  label: rememberMeLabel,
  label: forgotPasswordLabel,
  div: divAlpha,
  div: divBeta,
  div: divGamma,
  div: divDelta,
  div: divEpsilon,
  div: divZeta,
  div: divEta,
  div: divTheta,
  div: divIota,
  div: divKappa,
  div: divLambda,
  div: divMu,
  div: divNu,
  div: divXi,
  div: divOmicron,
  div: divPi,
  div: divRho,
  div: divSigma,
  div: divTau,
  div: divUpsilon,
  div: divPhi,
  div: divChi,
  div: divPsi,
  div: divOmega
}: FieldsReturnedByJsxConstruct) => {
  const submitButtonRef = useRef<typeof submitButton>(
    submitButton
  ) as MutableRefObject<typeof submitButton>;
  return (
    <div
      className={cn(
        divAlpha?.className ??
          "fallback bg-gray-800/80 text-blue-700/80 font-interVar tracking-[0.025rem] leading-[1.125rem] text-[1.45rem] mx-auto relative"
      )}
      {...divAlpha}>
      <form onSubmit={loginForm?.onSubmit}>
        <input
          {...emailInput}
          className={cn("appearance-none", emailInput?.className ?? "")}
        />
        <div
          {...divOmega}
          about='I am the omega div! My properties are absolute, nestled at the core of your returned JSX 🎨'
          className={cn(
            "absolute origin-center",
            divOmega?.className ? divOmega.className : ""
          )}
        />
      </form>
    </div>
  );
};
```

#### Consumption (above) as Inferred By Intelisense

```ts
const Consumption: ({ a: registerAnchor, a: faqAnchor, a: privacyPolicyAnchor, button: loadingButton, button: disabledButton, button: submitButton, h1: homeH1Heading, h1: aboutH1Heading, h1: dynamicH1Heading, input: emailInput, input: passwordInput, input: rememberMeInput, input: forgotPasswordInput, form: loginForm, label: emailLabel, label: passwordLabel, label: rememberMeLabel, label: forgotPasswordLabel, div: divAlpha, div: divBeta, div: divGamma, div: divDelta, div: divEpsilon, div: divZeta, div: divEta, div: divTheta, div: divIota, div: divKappa, div: divLambda, div: divMu, div: divNu, div: divXi, div: divOmicron, div: divPi, div: divRho, div: divSigma, div: divTau, div: divUpsilon, div: divPhi, div: divChi, div: divPsi, div: divOmega }: FieldsReturnedByJsxConstruct) => JSX.Element
```

## Introducing a new even easier to use helper

```ts
const JsxComprehensive: ({
  abbr,
  a,
  address,
  animate,
  animateMotion,
  animateTransform,
  area,
  article,
  aside,
  audio,
  b,
  base,
  bdi,
  bdo,
  big,
  blockquote,
  body,
  br,
  button,
  canvas,
  caption,
  circle,
  cite,
  clipPath,
  code,
  col,
  colgroup,
  data,
  datalist,
  dd,
  defs,
  del,
  desc,
  details,
  dfn,
  dialog,
  div,
  dl,
  dt,
  ellipse,
  em,
  embed,
  feBlend,
  feColorMatrix,
  feComponentTransfer,
  feComposite,
  feConvolveMatrix,
  feDiffuseLighting,
  feDisplacementMap,
  feDistantLight,
  feDropShadow,
  feFlood,
  feFuncA,
  feFuncB,
  feFuncG,
  feFuncR,
  feGaussianBlur,
  feImage,
  feMerge,
  feMergeNode,
  feMorphology,
  feOffset,
  fePointLight,
  feSpecularLighting,
  feSpotLight,
  feTile,
  feTurbulence,
  fieldset,
  figcaption,
  figure,
  filter,
  footer,
  foreignObject,
  form,
  g,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  head,
  header,
  hgroup,
  hr,
  html,
  i,
  iframe,
  image,
  img,
  input,
  ins,
  kbd,
  keygen,
  label,
  legend,
  li,
  line,
  linearGradient,
  link,
  main,
  map,
  mark,
  marker,
  mask,
  menu,
  menuitem,
  meta,
  metadata,
  meter,
  mpath,
  nav,
  noindex,
  noscript,
  object,
  ol,
  optgroup,
  option,
  output,
  p,
  param,
  path,
  pattern,
  picture,
  polygon,
  polyline,
  pre,
  progress,
  q,
  radialGradient,
  rect,
  rp,
  rt,
  ruby,
  s,
  samp,
  script,
  section,
  select,
  slot,
  small,
  source,
  span,
  stop,
  strong,
  style,
  sub,
  summary,
  sup,
  svg,
  switch: { ...switchProps },
  symbol,
  table,
  tbody,
  td,
  template,
  text,
  textPath,
  textarea,
  tfoot,
  th,
  thead,
  time,
  title,
  tr,
  track,
  tspan,
  u,
  ul,
  use,
  var: { ...varProps },
  video,
  view,
  wbr,
  webview
}: ReturnType<typeof Unwrap.ReturnExposeIntrinsicElements>) => void;
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
