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
