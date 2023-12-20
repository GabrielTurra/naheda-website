import { StructureCSS } from "./StructureCSS";
import { CreateArrayWithLengthX, NumericRange } from "./NumericRange";

type ZERO_TO_TWELVE = NumericRange<CreateArrayWithLengthX<0>, 12>;

export interface ColGridResponsiveType {
  xxl: {
    [key in ZERO_TO_TWELVE]: {
      "@xxl": StructureCSS;
    };
  };
  xl: {
    [key in ZERO_TO_TWELVE]: {
      "@xl": StructureCSS;
    };
  };
  lg: {
    [key in ZERO_TO_TWELVE]: {
      "@lg": StructureCSS;
    };
  };
  md: {
    [key in ZERO_TO_TWELVE]: {
      "@md": StructureCSS;
    };
  };
  sm: {
    [key in ZERO_TO_TWELVE]: {
      "@sm": StructureCSS;
    };
  };
  xs: {
    [key in ZERO_TO_TWELVE]: {
      "@xs": StructureCSS;
    };
  };
}
