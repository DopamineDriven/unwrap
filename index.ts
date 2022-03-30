import * as React from "react";
import Unwrap, { JSXIntrinsicPropsConstruct } from "./unwrap";
export default Unwrap;
export const IntrinsicConsumer = ({
  ...props
}: {
  [P in keyof ReturnType<
    Unwrap.UnwrapInterface["ReactRecursiveUnwrapped"]
  >]-?: ReturnType<Unwrap.UnwrapInterface["ReactRecursiveUnwrapped"]>[P];
}): {
  a: React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >;
  abbr: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  address: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  >;
  area: React.DetailedHTMLProps<
    React.AreaHTMLAttributes<HTMLAreaElement>,
    HTMLAreaElement
  >;
  article: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  >;
  aside: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  >;
  audio: React.DetailedHTMLProps<
    React.AudioHTMLAttributes<HTMLAudioElement>,
    HTMLAudioElement
  >;
  b: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  base: React.DetailedHTMLProps<
    React.BaseHTMLAttributes<HTMLBaseElement>,
    HTMLBaseElement
  >;
  bdi: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  bdo: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  big: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  blockquote: React.DetailedHTMLProps<
    React.BlockquoteHTMLAttributes<HTMLQuoteElement>,
    HTMLQuoteElement
  >;
  body: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLBodyElement>,
    HTMLBodyElement
  >;
  br: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLBRElement>,
    HTMLBRElement
  >;
  button: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
  canvas: React.DetailedHTMLProps<
    React.CanvasHTMLAttributes<HTMLCanvasElement>,
    HTMLCanvasElement
  >;
  caption: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  >;
  cite: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  code: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  col: React.DetailedHTMLProps<
    React.ColHTMLAttributes<HTMLTableColElement>,
    HTMLTableColElement
  >;
  colgroup: React.DetailedHTMLProps<
    React.ColgroupHTMLAttributes<HTMLTableColElement>,
    HTMLTableColElement
  >;
  data: React.DetailedHTMLProps<
    React.DataHTMLAttributes<HTMLDataElement>,
    HTMLDataElement
  >;
  datalist: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDataListElement>,
    HTMLDataListElement
  >;
  dd: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  del: React.DetailedHTMLProps<
    React.DelHTMLAttributes<HTMLModElement>,
    HTMLModElement
  >;
  details: React.DetailedHTMLProps<
    React.DetailsHTMLAttributes<HTMLDetailsElement>,
    HTMLDetailsElement
  >;
  dfn: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  dialog: React.DetailedHTMLProps<
    React.DialogHTMLAttributes<HTMLDialogElement>,
    HTMLDialogElement
  >;
  div: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
  dl: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDListElement>,
    HTMLDListElement
  >;
  dt: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  em: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  embed: React.DetailedHTMLProps<
    React.EmbedHTMLAttributes<HTMLEmbedElement>,
    HTMLEmbedElement
  >;
  fieldset: React.DetailedHTMLProps<
    React.FieldsetHTMLAttributes<HTMLFieldSetElement>,
    HTMLFieldSetElement
  >;
  figcaption: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  >;
  figure: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  >;
  footer: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  >;
  form: React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  >;
  h1: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >;
  h2: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >;
  h3: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >;
  h4: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >;
  h5: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >;
  h6: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >;
  head: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadElement>,
    HTMLHeadElement
  >;
  header: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  >;
  hgroup: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  >;
  hr: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHRElement>,
    HTMLHRElement
  >;
  html: React.DetailedHTMLProps<
    React.HtmlHTMLAttributes<HTMLHtmlElement>,
    HTMLHtmlElement
  >;
  i: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  iframe: React.DetailedHTMLProps<
    React.IframeHTMLAttributes<HTMLIFrameElement>,
    HTMLIFrameElement
  >;
  img: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >;
  input: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  ins: React.DetailedHTMLProps<
    React.InsHTMLAttributes<HTMLModElement>,
    HTMLModElement
  >;
  kbd: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  keygen: React.DetailedHTMLProps<
    React.KeygenHTMLAttributes<HTMLElement>,
    HTMLElement
  >;
  label: React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  >;
  legend: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLLegendElement>,
    HTMLLegendElement
  >;
  li: React.DetailedHTMLProps<
    React.LiHTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  >;
  link: React.DetailedHTMLProps<
    React.LinkHTMLAttributes<HTMLLinkElement>,
    HTMLLinkElement
  >;
  main: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  map: React.DetailedHTMLProps<
    React.MapHTMLAttributes<HTMLMapElement>,
    HTMLMapElement
  >;
  mark: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  menu: React.DetailedHTMLProps<
    React.MenuHTMLAttributes<HTMLElement>,
    HTMLElement
  >;
  menuitem: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  >;
  meta: React.DetailedHTMLProps<
    React.MetaHTMLAttributes<HTMLMetaElement>,
    HTMLMetaElement
  >;
  meter: React.DetailedHTMLProps<
    React.MeterHTMLAttributes<HTMLMeterElement>,
    HTMLMeterElement
  >;
  nav: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  noindex: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  >;
  noscript: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  >;
  object: React.DetailedHTMLProps<
    React.ObjectHTMLAttributes<HTMLObjectElement>,
    HTMLObjectElement
  >;
  ol: React.DetailedHTMLProps<
    React.OlHTMLAttributes<HTMLOListElement>,
    HTMLOListElement
  >;
  optgroup: React.DetailedHTMLProps<
    React.OptgroupHTMLAttributes<HTMLOptGroupElement>,
    HTMLOptGroupElement
  >;
  option: React.DetailedHTMLProps<
    React.OptionHTMLAttributes<HTMLOptionElement>,
    HTMLOptionElement
  >;
  output: React.DetailedHTMLProps<
    React.OutputHTMLAttributes<HTMLOutputElement>,
    HTMLOutputElement
  >;
  p: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  >;
  param: React.DetailedHTMLProps<
    React.ParamHTMLAttributes<HTMLParamElement>,
    HTMLParamElement
  >;
  picture: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  >;
  pre: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLPreElement>,
    HTMLPreElement
  >;
  progress: React.DetailedHTMLProps<
    React.ProgressHTMLAttributes<HTMLProgressElement>,
    HTMLProgressElement
  >;
  q: React.DetailedHTMLProps<
    React.QuoteHTMLAttributes<HTMLQuoteElement>,
    HTMLQuoteElement
  >;
  rp: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  rt: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  ruby: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  s: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  samp: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  slot: React.DetailedHTMLProps<
    React.SlotHTMLAttributes<HTMLSlotElement>,
    HTMLSlotElement
  >;
  script: React.DetailedHTMLProps<
    React.ScriptHTMLAttributes<HTMLScriptElement>,
    HTMLScriptElement
  >;
  section: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  >;
  select: React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  >;
  small: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  >;
  source: React.DetailedHTMLProps<
    React.SourceHTMLAttributes<HTMLSourceElement>,
    HTMLSourceElement
  >;
  span: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;
  strong: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  >;
  style: React.DetailedHTMLProps<
    React.StyleHTMLAttributes<HTMLStyleElement>,
    HTMLStyleElement
  >;
  sub: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  summary: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  >;
  sup: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  table: React.DetailedHTMLProps<
    React.TableHTMLAttributes<HTMLTableElement>,
    HTMLTableElement
  >;
  template: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLTemplateElement>,
    HTMLTemplateElement
  >;
  tbody: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLTableSectionElement>,
    HTMLTableSectionElement
  >;
  td: React.DetailedHTMLProps<
    React.TdHTMLAttributes<HTMLTableDataCellElement>,
    HTMLTableDataCellElement
  >;
  textarea: React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >;
  tfoot: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLTableSectionElement>,
    HTMLTableSectionElement
  >;
  th: React.DetailedHTMLProps<
    React.ThHTMLAttributes<HTMLTableHeaderCellElement>,
    HTMLTableHeaderCellElement
  >;
  thead: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLTableSectionElement>,
    HTMLTableSectionElement
  >;
  time: React.DetailedHTMLProps<
    React.TimeHTMLAttributes<HTMLTimeElement>,
    HTMLTimeElement
  >;
  title: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLTitleElement>,
    HTMLTitleElement
  >;
  tr: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLTableRowElement>,
    HTMLTableRowElement
  >;
  track: React.DetailedHTMLProps<
    React.TrackHTMLAttributes<HTMLTrackElement>,
    HTMLTrackElement
  >;
  u: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  ul: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  >;
  var: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  video: React.DetailedHTMLProps<
    React.VideoHTMLAttributes<HTMLVideoElement>,
    HTMLVideoElement
  >;
  wbr: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  webview: React.DetailedHTMLProps<
    React.WebViewHTMLAttributes<HTMLWebViewElement>,
    HTMLWebViewElement
  >;
  svg: React.SVGProps<SVGSVGElement>;
  animate: React.SVGProps<SVGElement>;
  animateMotion: React.SVGProps<SVGElement>;
  animateTransform: React.SVGProps<SVGElement>;
  circle: React.SVGProps<SVGCircleElement>;
  clipPath: React.SVGProps<SVGClipPathElement>;
  defs: React.SVGProps<SVGDefsElement>;
  desc: React.SVGProps<SVGDescElement>;
  ellipse: React.SVGProps<SVGEllipseElement>;
  feBlend: React.SVGProps<SVGFEBlendElement>;
  feColorMatrix: React.SVGProps<SVGFEColorMatrixElement>;
  feComponentTransfer: React.SVGProps<SVGFEComponentTransferElement>;
  feComposite: React.SVGProps<SVGFECompositeElement>;
  feConvolveMatrix: React.SVGProps<SVGFEConvolveMatrixElement>;
  feDiffuseLighting: React.SVGProps<SVGFEDiffuseLightingElement>;
  feDisplacementMap: React.SVGProps<SVGFEDisplacementMapElement>;
  feDistantLight: React.SVGProps<SVGFEDistantLightElement>;
  feDropShadow: React.SVGProps<SVGFEDropShadowElement>;
  feFlood: React.SVGProps<SVGFEFloodElement>;
  feFuncA: React.SVGProps<SVGFEFuncAElement>;
  feFuncB: React.SVGProps<SVGFEFuncBElement>;
  feFuncG: React.SVGProps<SVGFEFuncGElement>;
  feFuncR: React.SVGProps<SVGFEFuncRElement>;
  feGaussianBlur: React.SVGProps<SVGFEGaussianBlurElement>;
  feImage: React.SVGProps<SVGFEImageElement>;
  feMerge: React.SVGProps<SVGFEMergeElement>;
  feMergeNode: React.SVGProps<SVGFEMergeNodeElement>;
  feMorphology: React.SVGProps<SVGFEMorphologyElement>;
  feOffset: React.SVGProps<SVGFEOffsetElement>;
  fePointLight: React.SVGProps<SVGFEPointLightElement>;
  feSpecularLighting: React.SVGProps<SVGFESpecularLightingElement>;
  feSpotLight: React.SVGProps<SVGFESpotLightElement>;
  feTile: React.SVGProps<SVGFETileElement>;
  feTurbulence: React.SVGProps<SVGFETurbulenceElement>;
  filter: React.SVGProps<SVGFilterElement>;
  foreignObject: React.SVGProps<SVGForeignObjectElement>;
  g: React.SVGProps<SVGGElement>;
  image: React.SVGProps<SVGImageElement>;
  line: React.SVGProps<SVGLineElement>;
  linearGradient: React.SVGProps<SVGLinearGradientElement>;
  marker: React.SVGProps<SVGMarkerElement>;
  mask: React.SVGProps<SVGMaskElement>;
  metadata: React.SVGProps<SVGMetadataElement>;
  mpath: React.SVGProps<SVGElement>;
  path: React.SVGProps<SVGPathElement>;
  pattern: React.SVGProps<SVGPatternElement>;
  polygon: React.SVGProps<SVGPolygonElement>;
  polyline: React.SVGProps<SVGPolylineElement>;
  radialGradient: React.SVGProps<SVGRadialGradientElement>;
  rect: React.SVGProps<SVGRectElement>;
  stop: React.SVGProps<SVGStopElement>;
  switch: React.SVGProps<SVGSwitchElement>;
  symbol: React.SVGProps<SVGSymbolElement>;
  text: React.SVGProps<SVGTextElement>;
  textPath: React.SVGProps<SVGTextPathElement>;
  tspan: React.SVGProps<SVGTSpanElement>;
  use: React.SVGProps<SVGUseElement>;
  view: React.SVGProps<SVGViewElement>;
} => ({ ...props });

const x = ({
  a: { ...anchorProps },
  canvas: { ...canvasProps }
}: ReturnType<Unwrap.UnwrapInterface["ReactRecursiveUnwrapped"]>) => {
  return {
    anchorChildren: {
      className: anchorProps?.className ? anchorProps.className : ""
    },
    anchorSpread: (props: typeof anchorProps) => ({ ...anchorProps }),
    canvasSpread: { ...canvasProps }
  };
};

const JsxComprehensive = ({
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
  switch: { ...switchProps }, // svg switch element -- houses 471 nested props to access
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
  var: { ...varProps }, // var property -- houses 256 nested props to access
  video,
  view,
  wbr,
  webview
}: ReturnType<typeof Unwrap.ReturnExposeIntrinsicElements>) => {
  const {} = code!;
};

const foreach = (props: string[]) => {
  return props.forEach((value, i) => {
    return {
      [i++]: value
    }
  
  });
  
}
const SelectTargetedElements = <T extends keyof ReturnType<typeof Unwrap.IntrinsicComprehensiveRequired>>(props: Pick<ReturnType<typeof Unwrap.IntrinsicComprehensiveRequired>, T>) => ({ ...props });

interface YYZ extends ReturnType<typeof SelectTargetedElements extends infer U ? U : typeof SelectTargetedElements> { 

}

const yyyyyyyyyyy = ({a, base}: YYZ) => {a}