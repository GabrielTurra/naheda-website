import { createStitches, defaultThemeMap } from "@stitches/react";
import {
  colors,
  fontSizes,
  fontWeights,
  radii,
  space,
  breakpoints,
  utils,
} from "@/src/styles/tokens";

import { Bebas_Neue, Quicksand } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

const quicksand = Quicksand({
  weight: ["300", "500"],
  subsets: ["latin"],
  display: "swap",
});

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: "space",
    width: "space",
    utils: "space",
  },
  theme: {
    colors: {
      ...colors,
      primary: colors.red600,
      secondary: colors.indigo500,
      tertiary: colors.green500,
      quartenary: colors.red500,
      textBase: colors.textBase,
    },
    fonts: {
      body: `${quicksand.style.fontFamily}, sans-serif`,
      title: `${bebasNeue.style.fontFamily}, sans-serif`,
    },
    fontSizes,
    fontWeights,
    radii,
    space,
    utils,
  },
  media: breakpoints,
});
