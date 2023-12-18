import { globalCss } from "@/stitches.config";
import { globalClasses } from "./classes";

export const globalStyles = globalCss({
  ...globalClasses,

  "::selection": {
    color: "$white",
    background: "$secondary",
  },

  "*": {
    margin: 0,
    padding: 0,
  },

  body: {
    "-webkit-font-smoothing": "antialiased",
    fontFamily: "$body",
    fontWeight: "$regular",
    color: "$textBase",
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
    lineHeight: "40px",

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
    fontSize: "$md",
    lineHeight: "160%",

    "@md": {
      fontSize: "$lg",
    },
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
