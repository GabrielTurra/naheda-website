import { styled } from "@/stitches.config";
import Image from "next/image";

export const Icon = styled(Image, {
  marginLeft: "$2",

  variants: {
    onlyIcon: {
      true: {
        marginLeft: "0",

        "@sm": {
          marginLeft: "$2",
        },
      },
    },
  },
});

export const ButtonComponent = styled("button", {
  border: "none",

  background: "",
  boxSizing: "border-box",
  cursor: "pointer",
  transition: "all 0.5s ease",
  fontSize: "$2xl",
  fontFamily: "$title",
  letterSpacing: 1,
  textAlign: "center",
  display: "static",
  position: "relative",
  overflow: "hidden",

  a: {
    display: "block",
    textDecoration: "none",
    padding: "$2 $5",
  },

  "@md": {
    fontSize: "$3xl",
    a: {
      padding: "$4 $10",
    },
  },

  "&:before, &:after": {
    background: "$primary",
    transition: "0.3s ease",
    content: "",
    position: "absolute",
    top: 0,
    bottom: 0,
    transform: "skewX(45deg)",
    width: "175%",
    zIndex: 1,
  },

  "&:before": {
    right: "-120%",
  },
  "&:after": {
    left: "-120%",
  },

  span: {
    marginLeft: "0 !important",
    color: "$white !important",
    zIndex: 2,
    position: "relative",
  },

  "&:hover": {
    background: "$secondary",

    "&:before, &:after": {
      width: "100%",
    },
  },

  "&:disabled": {
    background: "$gray500",
    opacity: 0.7,
    cursor: "not-allowed",
  },

  variants: {
    color: {
      white: {
        background: "$white",
        span: {
          color: "$textBase !important",
        },

        "&:hover": {
          background: "$gray300",
        },
      },
      green: {
        background: "$green700",
        span: {
          color: "$white !important",
        },

        "&:hover": {
          background: "$green900",
        },
      },
      secondary: {
        "&:hover": {
          background: "$white",

          span: {
            color: "$primary !important",
          },
        },

        "&:before, &:after": {
          background: "$secondary",
        },
      },
    },
    sizeWidth: {
      small: {
        padding: "$2 $4",
        fontSize: "$sm",
        width: "auto",
        minWidth: "50px",
      },
      big: {
        padding: "$3 $6",
        fontSize: "$sm",
        width: "230px",
        textTransform: "uppercase",
        fontWeight: "bold",
      },
      full: {
        padding: "$3 $6",
        fontSize: "$md",
        width: "100%",
      },
    },
    onlyIcon: {
      true: {
        width: "30px",
        height: "30px",

        minHeight: "auto",
        minWidth: "auto",

        padding: "0",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",

        span: {
          display: "none",
        },

        "@sm": {
          width: "auto",
          height: "auto",

          padding: "10px $6",

          minWidth: "128px",
          display: "flex",
          alignItems: "center",

          span: {
            display: "block",
          },
        },
      },
    },
  },
});
