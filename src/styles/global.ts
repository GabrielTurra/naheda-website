import { globalCss } from "@/stitches.config";
import { globalClasses } from "./classes";

export const globalStyles = globalCss({
  ...globalClasses,

  ".self-end": {
    alignSelf: "flex-end",
  },

  ".global-section": {
    paddingTop: "$section !important",
    paddingBottom: "$section !important",
  },

  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  body: {
    "-webkit-font-smoothing": "antialiased",
    fontFamily: "$body",
    fontWeight: "$regular",
    color: "$textBase",
    overflowX: "hidden",
  },

  "h1, .h1": {
    fontFamily: "$title",
    fontSize: "$5xl",
    lineHeight: "120%",
    letterSpacing: 1,

    "@lg": {
      fontSize: "$6xl",
    },
  },

  "h2, .h2": {
    fontFamily: "$title",
    fontSize: "$4xl",
    lineHeight: "120%",
    letterSpacing: 1,

    "@lg": {
      fontSize: "$5xl",
    },
  },

  "h3, .h3": {
    fontFamily: "$title",
    fontSize: "$3xl",
    lineHeight: "120%",

    "@lg": {
      fontSize: "$4xl",
    },
  },

  "h4, .h4": {
    fontFamily: "$title",
    fontSize: "$2xl",
    lineHeight: "120%",
  },

  "h5, .h5": {
    fontFamily: "$title",
    fontSize: "$xl",
    lineHeight: "120%",
  },

  "h6, .h6": {
    fontFamily: "$title",
    fontSize: "$lg",
    lineHeight: "120%",
  },

  "p, input, textarea": {
    fontFamily: "$body",
    fontSize: "$sm",
    lineHeight: "160%",
    margin: "$4 0",

    "@md": {
      fontSize: "$lg",
    },
  },

  "p + p": {
    margin: "0 0 $4",
  },

  label: {
    fontSize: "$sm",
    lineHeight: "120%",
  },

  small: {
    fontSize: "$xs",
    lineHeight: "120%",
  },
});
