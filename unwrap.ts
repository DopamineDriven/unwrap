import type {
  DetailedHTMLProps,
  HTMLAttributes,
  SVGProps,
  DetailedHTMLFactory,
  AreaHTMLAttributes,
  AudioHTMLAttributes,
  AnchorHTMLAttributes,
  AllHTMLAttributes,
  BaseHTMLAttributes,
  BlockquoteHTMLAttributes,
  ButtonHTMLAttributes,
  CanvasHTMLAttributes,
  ColHTMLAttributes,
  ColgroupHTMLAttributes,
  DataHTMLAttributes,
  DetailsHTMLAttributes,
  DelHTMLAttributes,
  EmbedHTMLAttributes,
  FieldsetHTMLAttributes,
  DialogHTMLAttributes,
  FormHTMLAttributes,
  HtmlHTMLAttributes,
  IframeHTMLAttributes,
  ImgHTMLAttributes,
  InsHTMLAttributes,
  InputHTMLAttributes,
  KeygenHTMLAttributes,
  LabelHTMLAttributes,
  LiHTMLAttributes,
  LinkHTMLAttributes,
  MapHTMLAttributes,
  MenuHTMLAttributes,
  MediaHTMLAttributes,
  MetaHTMLAttributes,
  MeterHTMLAttributes,
  QuoteHTMLAttributes,
  ObjectHTMLAttributes,
  OlHTMLAttributes,
  OptgroupHTMLAttributes,
  OptionHTMLAttributes,
  OutputHTMLAttributes,
  ParamHTMLAttributes,
  ProgressHTMLAttributes,
  SlotHTMLAttributes,
  ScriptHTMLAttributes,
  SelectHTMLAttributes,
  SourceHTMLAttributes,
  StyleHTMLAttributes,
  TableHTMLAttributes,
  TextareaHTMLAttributes,
  TdHTMLAttributes,
  ThHTMLAttributes,
  TimeHTMLAttributes,
  TrackHTMLAttributes,
  VideoHTMLAttributes,
  WebViewHTMLAttributes,
  DetailedReactHTMLElement
} from "react";

export const IntrinsicComprehensiveRequired = ({
  ...props
}: {
  [P in keyof ReturnType<
    Unwrap.UnwrapInterface["ReactRecursiveUnwrapped"]
  >]-?: ReturnType<Unwrap.UnwrapInterface["ReactRecursiveUnwrapped"]>[P];
}) => ({ ...props });

export const IntrinsicComprehensiveConditional = ({
  ...props
}: {
  [P in keyof ReturnType<
    Unwrap.UnwrapInterface["ReactRecursiveUnwrapped"]
  >]?: ReturnType<Unwrap.UnwrapInterface["ReactRecursiveUnwrapped"]>[P];
}) => ({ ...props });

export const SelectTargetedElements = <
  T extends keyof ReturnType<typeof Unwrap.IntrinsicComprehensiveRequired>
>(
  props: Pick<
    ReturnType<
      keyof typeof Unwrap.IntrinsicComprehensiveRequired extends [T]
        ? typeof Unwrap.IntrinsicComprehensiveRequired
        : undefined
    >,
    T
  >
) => props;

export type PickElementSelection<
  T extends keyof ReturnType<typeof Unwrap.IntrinsicComprehensiveRequired>
> = ReturnType<typeof SelectTargetedElements>[T];

export interface SelectTargetedElementOOP
  extends Partial<
    ReturnType<
      typeof SelectTargetedElements extends infer U
        ? U
        : typeof SelectTargetedElements
    >
  > {}

export type OOElementSelection = Required<SelectTargetedElementOOP>;

/**@private */
export const HTMLFactoryUnwrapped = (
  props: Unwrap.UnwrapPick<
    ReturnType<DetailedHTMLFactory<
      Unwrap.HTMLAttributesUnion<Unwrap.HTMLElementUnion>,
      Unwrap.HTMLElementUnion
    >>,
    keyof DetailedHTMLFactory<
      Unwrap.HTMLAttributesUnion<Unwrap.HTMLElementUnion>,
      Unwrap.HTMLElementUnion
    >
  >
) => props;
export class JSXIntrinsicPropsConstruct {
  constructor(
    public consumeJsxComprehensive: typeof IntrinsicComprehensiveConditional
  ) {}
  ComprehensiveConditional(
    props: ReturnType<typeof IntrinsicComprehensiveConditional>
  ) {
    return { ...props };
  }

  ExplicitConditional(
    props: Unwrap.UnwrapPick<
      ReturnType<typeof Unwrap.IntrinsicComprehensiveRequired>,
      keyof DetailedHTMLFactory<
        Unwrap.HTMLAttributesUnion<Unwrap.HTMLElementUnion>,
        Unwrap.HTMLElementUnion
      >
    >
  ) {
    return { ...props };
  }
}

export declare module Unwrap {
  interface Validator<T> {
    (
      props: { [key: string]: any },
      propName: string,
      componentName: string,
      location: string,
      propFullName: string
    ): Error | null;
    [nominalTypeHack]?:
      | {
          type: T extends infer U ? U : T;
        }
      | undefined;
  }
  type InferValidatorTarget<V> = V extends Validator<infer T> ? T : any;

  type UnwrapPick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  const nominalTypeHack: unique symbol;

  type IsOptional<T> = undefined extends T ? true : false;

  export type RequiredKeys<V> = {
    [K in keyof V]-?: Exclude<V[K], undefined> extends Validator<infer T>
      ? IsOptional<T> extends true
        ? never
        : K
      : never;
  }[keyof V];

  export type OptionalKeys<V> = Exclude<keyof V, RequiredKeys<V>>;

  export type InferPropsInner<V> = {
    [K in keyof V]-?: InferValidatorTarget<V[K]>;
  };

  /**
   * @type ExciseEnumerble<T> = T extends Array<infer U> ? U : T;
   * @description if T encounters a configuration of the Array variety then and only then will
   * it extend the Array (T in Array<infer U> ) infer the child type U within;
   * if no array is present T is returned unchanged
   */

  type ExciseEnumerble<T> = T extends Array<infer U> ? U : T;

  type Enumerable<T> = T extends Array<infer U> | infer U
    ? Array<U> | U
    : Array<T> | T;

  type RecursiveOptional<T> = { [P in keyof T]?: RecursiveOptional<T[P]> };

  type OmitRecursiveOptionalRecursionAgent<T> = T extends RecursiveOptional<
    infer U
  >
    ? U
    : T;

  type Depth<T> = T extends Function
    ? T
    : T extends Array<infer U>
    ? DepthArr<U>
    : T extends object
    ? DepthObj<T>
    : T | undefined;

  interface DepthArr<T> extends Array<Depth<T>> {}

  type DepthObj<T> = {
    [P in keyof T]?: Depth<T[P]>;
  };

  const ReturnExposeIntrinsicElements: <
    T extends keyof JSX.IntrinsicElements extends Record<keyof T, infer U>
      ? Record<keyof U, U>
      : Record<keyof T, T>
  >({
    ...jsxProps
  }: Partial<
    OmitRecursiveOptionalRecursionAgent<
      RecursiveOptional<JSX.IntrinsicElements>
    >
      >) => typeof jsxProps;
  
  interface HTMLFactoryExhaustive {
    htmlFactory: Unwrap.UnwrapPick<
      ReturnType<typeof Unwrap.IntrinsicComprehensiveRequired>,
      keyof DetailedHTMLFactory<
        Unwrap.HTMLAttributesUnion<Unwrap.HTMLElementUnion>,
        Unwrap.HTMLElementUnion
      >
    >
  } 
  
  interface UnwrapInterface {
    ReactRecursiveUnwrapped: <
      T extends keyof JSX.IntrinsicElements extends Record<keyof T, infer U>
        ? Record<keyof U, U>
        : Record<keyof T, T>
    >({
      ...jsxProps
    }: Partial<
      OmitRecursiveOptionalRecursionAgent<
        RecursiveOptional<JSX.IntrinsicElements>
      >
    >) => typeof jsxProps;
    reactRecursiveReturnTypeInferred: ReturnType<
      Unwrap.UnwrapInterface["ReactRecursiveUnwrapped"]
    >;

    UnwrapReactWrapperFunction: (
      props: OmitRecursiveOptionalRecursionAgent<
        RecursiveOptional<Unwrap.UnwrapInterface["ReactRecursiveUnwrapped"]>
      >
    ) => ReturnType<typeof props>;
  }

  type ReactUnwrapped<
    T extends keyof ReturnType<
      Unwrap.UnwrapInterface["ReactRecursiveUnwrapped"]
    >
  > = {
    [P in T]?: ReturnType<Unwrap.UnwrapInterface["ReactRecursiveUnwrapped"]>[P];
  };

  type ExposedJSXIntrinsicElements = ReturnType<
    Unwrap.UnwrapInterface["ReactRecursiveUnwrapped"]
  >;

  const IntrinsicComprehensiveConditional: ({
    ...props
  }: ExposedJSXIntrinsicElements) => {
    [P in keyof typeof props]?: typeof props[P];
    };
  
  function IntrinsicComprehensiveRequired({
    ...props
  }: {
    [P in keyof ReturnType<
      Unwrap.UnwrapInterface["ReactRecursiveUnwrapped"]
    >]-?: ReturnType<Unwrap.UnwrapInterface["ReactRecursiveUnwrapped"]>[P];
    }): (typeof props)[keyof typeof props];
  
  
  type ImplementUnwrapReact<
    _implements = (
      props: ReturnType<Unwrap.UnwrapInterface["ReactRecursiveUnwrapped"]>
    ) => {
      [P in keyof typeof props]: typeof props[Exclude<P, undefined>];
    }
  > = {
    [R in keyof ReturnType<
      (
        props: ReturnType<Unwrap.UnwrapInterface["ReactRecursiveUnwrapped"]>
      ) => { [P in keyof R]: R[Exclude<P, undefined>] }
    >]: { [L in keyof R]: R[L] };
  };

  type HTMLElementUnion =
    | HTMLAnchorElement
    | HTMLAreaElement
    | HTMLAudioElement
    | HTMLBRElement
    | HTMLBaseElement
    | HTMLBodyElement
    | HTMLButtonElement
    | HTMLCanvasElement
    | HTMLDListElement
    | HTMLDataElement
    | HTMLDataListElement
    | HTMLDetailsElement
    | HTMLDivElement
    | HTMLElement
    | HTMLEmbedElement
    | HTMLFieldSetElement
    | HTMLFormElement
    | HTMLHRElement
    | HTMLHeadElement
    | HTMLHeadingElement
    | HTMLHtmlElement
    | HTMLIFrameElement
    | HTMLImageElement
    | HTMLInputElement
    | HTMLLIElement
    | HTMLLabelElement
    | HTMLLegendElement
    | HTMLLinkElement
    | HTMLMapElement
    | HTMLMediaElement
    | HTMLMenuElement
    | HTMLMetaElement
    | HTMLMeterElement
    | HTMLModElement
    | HTMLOListElement
    | HTMLObjectElement
    | HTMLOptGroupElement
    | HTMLOptionElement
    | HTMLParagraphElement
    | HTMLParamElement
    | HTMLPictureElement
    | HTMLProgressElement
    | HTMLQuoteElement
    | HTMLScriptElement
    | HTMLSelectElement
    | HTMLSlotElement
    | HTMLSourceElement
    | HTMLSpanElement
    | HTMLStyleElement
    | HTMLTableCaptionElement
    | HTMLTableCellElement
    | HTMLTableColElement
    | HTMLTableElement
    | HTMLTableRowElement
    | HTMLTableSectionElement
    | HTMLTemplateElement
    | HTMLTextAreaElement
    | HTMLTimeElement
    | HTMLTitleElement
    | HTMLTrackElement
    | HTMLUListElement
    | HTMLUnknownElement
    | HTMLVideoElement
    | HTMLWebViewElement;

  type HTMLAttributesUnion<T> =
    | HTMLAttributes<T>
    | AllHTMLAttributes<T>
    | AnchorHTMLAttributes<T>
    | AreaHTMLAttributes<T>
    | AudioHTMLAttributes<T>
    | BaseHTMLAttributes<T>
    | BlockquoteHTMLAttributes<T>
    | ButtonHTMLAttributes<T>
    | CanvasHTMLAttributes<T>
    | ColHTMLAttributes<T>
    | ColgroupHTMLAttributes<T>
    | DataHTMLAttributes<T>
    | DetailsHTMLAttributes<T>
    | DelHTMLAttributes<T>
    | DialogHTMLAttributes<T>
    | EmbedHTMLAttributes<T>
    | FieldsetHTMLAttributes<T>
    | FormHTMLAttributes<T>
    | HtmlHTMLAttributes<T>
    | IframeHTMLAttributes<T>
    | ImgHTMLAttributes<T>
    | InputHTMLAttributes<T>
    | InsHTMLAttributes<T>
    | KeygenHTMLAttributes<T>
    | LabelHTMLAttributes<T>
    | LiHTMLAttributes<T>
    | LinkHTMLAttributes<T>
    | MapHTMLAttributes<T>
    | MenuHTMLAttributes<T>
    | MediaHTMLAttributes<T>
    | MetaHTMLAttributes<T>
    | MeterHTMLAttributes<T>
    | QuoteHTMLAttributes<T>
    | ObjectHTMLAttributes<T>
    | OlHTMLAttributes<T>
    | OptgroupHTMLAttributes<T>
    | OptionHTMLAttributes<T>
    | OutputHTMLAttributes<T>
    | ParamHTMLAttributes<T>
    | ProgressHTMLAttributes<T>
    | SlotHTMLAttributes<T>
    | ScriptHTMLAttributes<T>
    | SelectHTMLAttributes<T>
    | SourceHTMLAttributes<T>
    | StyleHTMLAttributes<T>
    | TableHTMLAttributes<T>
    | TextareaHTMLAttributes<T>
    | TdHTMLAttributes<T>
    | ThHTMLAttributes<T>
    | TimeHTMLAttributes<T>
    | TrackHTMLAttributes<T>
    | VideoHTMLAttributes<T>
    | WebViewHTMLAttributes<T>;

  type UnwrapHtmlUnion<
    H extends HTMLElementUnion,
    T extends HTMLAttributesUnion<H>
  > = {
    [L in keyof DetailedHTMLFactory<T, H>]?: DetailedHTMLProps<T, H>[L];
  }; // type UnwrapHtmlUnion<
  //   H extends HTMLElementUnion,
  //   T extends DetailedHTMLFactory<HTMLAttributesUnion<H>, H>
  // > = {
  //     [L in keyof T]?: Exclude<T[L], undefined> extends DetailedReactHTMLElement<DetailedHTMLProps<HTMLAttributesUnion<{[W in keyof H]: H[W]}>, H>, H>
  // };
  // function unwrapHtmlTest(props: { [P in keyof DetailedHTMLFactory<HTMLAttributesUnion<HTMLElementUnion>, HTMLElementUnion>]: DetailedHTMLFactory<HTMLAttributesUnion<HTMLElementUnion>, HTMLElementUnion>[DetailedHTMLFactory<HTMLAttributesUnion<HTMLElementUnion>, HTMLElementUnion>P]] }): typeof props;

  type SvgElementUnion =
    | SVGAElement
    | SVGAnimateElement
    | SVGAngle
    | SVGAnimateMotionElement
    | SVGAnimateTransformElement
    | SVGAnimatedAngle
    | SVGAnimatedBoolean
    | SVGAnimatedEnumeration
    | SVGAnimatedInteger
    | SVGAnimatedLength
    | SVGAnimatedLengthList
    | SVGAnimatedNumber
    | SVGAnimatedNumberList
    | SVGAnimatedPoints
    | SVGAnimatedPreserveAspectRatio
    | SVGAnimatedRect
    | SVGAnimatedString
    | SVGAnimatedTransformList
    | SVGAnimationElement
    | SVGBoundingBoxOptions
    | SVGCircleElement
    | SVGClipPathElement
    | SVGComponentTransferFunctionElement
    | SVGDefsElement
    | SVGDescElement
    | SVGElement
    | SVGEllipseElement
    | SVGFEBlendElement
    | SVGFEColorMatrixElement
    | SVGFEComponentTransferElement
    | SVGFECompositeElement
    | SVGFEConvolveMatrixElement
    | SVGFEDiffuseLightingElement
    | SVGFEDistantLightElement
    | SVGFEDropShadowElement
    | SVGFEFloodElement
    | SVGFEFuncAElement
    | SVGFEFuncBElement
    | SVGFEFuncGElement
    | SVGFEFuncRElement
    | SVGFEGaussianBlurElement
    | SVGFEImageElement
    | SVGFEMergeElement
    | SVGFEMergeNodeElement
    | SVGFEMorphologyElement
    | SVGFEOffsetElement
    | SVGFEPointLightElement
    | SVGFESpecularLightingElement
    | SVGFESpotLightElement
    | SVGFETileElement
    | SVGFETurbulenceElement
    | SVGFilterElement
    | SVGFitToViewBox
    | SVGForeignObjectElement
    | SVGGElement
    | SVGGeometryElement
    | SVGGradientElement
    | SVGGraphicsElement
    | SVGImageElement
    | SVGLineElement
    | SVGLinearGradientElement
    | SVGMarkerElement
    | SVGMaskElement
    | SVGMetadataElement
    | SVGPathElement
    | SVGPatternElement
    | SVGPolygonElement
    | SVGPolylineElement
    | SVGRadialGradientElement
    | SVGRectElement
    | SVGSVGElement
    | SVGScriptElement
    | SVGStopElement
    | SVGStyleElement
    | SVGSwitchElement
    | SVGSymbolElement
    | SVGTSpanElement
    | SVGTextContentElement
    | SVGTextElement
    | SVGTextPathElement
    | SVGTextPositioningElement
    | SVGTitleElement
    | SVGUseElement
    | SVGViewElement;

  type UnwrapSvgUnion<
    T extends SvgElementUnion,
    P extends keyof SVGProps<T>
  > = {
    [R in P]?: SVGProps<T>[R];
  };

  /* interface with all optional values to accept ONLY one of them */
  type ConditionalSansOne<T, Keys extends keyof T = keyof T> = Pick<
    T,
    Exclude<keyof T, Keys>
  > &
    {
      [K in Keys]-?: Required<Pick<T, K>> &
        Partial<Record<Exclude<Keys, K>, undefined>>;
    }[Keys];
}
// map out the children props of each recursed JSX.IntrinsicElement via
// an additional round of conditional recursion for type deepening
// @ts-ignore:export-just-namespace
export default Unwrap;
