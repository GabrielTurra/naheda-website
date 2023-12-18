import { styled } from "@/stitches.config";
import { breakpoints } from "@/src/styles/tokens/breakpoints";
import { ColGridResponsiveType } from "../../@types/grid";
import { colSizesStyles } from "./styles";

const gridColGridResponsive = Object.keys(breakpoints).reduce(
  (accumulator, breakpoint) => {
    // @ts-ignore
    accumulator[breakpoint] = Object.entries(colSizesStyles).reduce(
      (acc, item) => {
        // @ts-ignore
        acc[Number(item[0])] = {
          [`@${breakpoint}`]: {
            ...item[1],
          },
        };

        return acc;
      },
      {} as typeof colSizesStyles,
    );

    return accumulator;
  },
  {},
) as ColGridResponsiveType;

const gridColSizes = Object.entries(colSizesStyles).reduce(
  (acc, item) => {
    // @ts-ignore
    acc[item[0]] = item[1];

    return acc;
  },
  {} as typeof colSizesStyles,
);

export const Container = styled("div", {
  margin: "0 auto",
  padding: "0 $4",
  height: "100%",
  width: "90%",
  maxWidth: "90%",

  "@sm": {
    padding: "0",
    maxWidth: "540px",
  },

  "@md": {
    maxWidth: "672px",
  },

  "@lg": {
    maxWidth: "960px",
  },

  "@xl": {
    maxWidth: "1216px",
  },

  "@xxl": {
    maxWidth: "1600px",
  },
});

export const Row = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
  height: "100%",

  "&.align-center": {
    alignItems: "center",
  },

  "&.content-center": {
    alignContent: "center",
  },
});

export const Col = styled("div", {
  flexBasis: 0,
  flexGrow: 1,
  maxWidth: "100%",

  variants: {
    size: gridColSizes,
    ...gridColGridResponsive,
  },
});
