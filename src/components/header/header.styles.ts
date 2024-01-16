import { Row } from "@/src/styles/grid";
import { styled } from "@/stitches.config";
import { fadeIn, fadeInTop } from "@/src/styles/animations";
import Image from "next/image";

export const HeaderComponent = styled("div", {
  width: "100%",
  height: "150px",

  position: "absolute",
  top: 0,

  zIndex: "5",

  opacity: 0,
  animation: `0.5s ease 0.6s ${fadeInTop} forwards`,

  [`${Row}`]: {
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export const Logo = styled(Image, {
  width: "100px",
  height: "auto",
});

export const NavigationContent = styled("div", {
  display: "flex",
  justifyContent: "end",
  paddingBottom: "4px",

  "@lg": {
    borderBottom: "1px solid $white",
  },

  "> svg": {
    display: "block",
    color: "$white",

    "@lg": {
      display: "none",
    },
  },
});

export const NavigationComponent = styled("ul", {
  listStyle: "none",
  display: "none",

  "@lg": {
    display: "block",
  },

  li: {
    position: "relative",
    display: "inline-block",
    padding: "12px",
    color: "$white",
    cursor: "pointer",
    textTransform: "uppercase",
    fontWeight: "bold",

    "&:before": {
      content: "",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderTop: "2px solid #FFF",
      borderBottom: "2px solid #FFF",
      transform: "scaleY(2)",
      opacity: 0,
      transition: ".2s",
    },

    "&:after": {
      content: "",
      position: "absolute",
      top: "2px",
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "#FFF",
      transform: "scale(0)",
      opacity: 0,
      transition: ".3s",
      zIndex: -1,
    },

    "&:hover": {
      color: "$primary",

      "&:before": {
        transform: "scaleY(1)",
        opacity: 1,
      },

      "&:after": {
        transform: "scaleY(1)",
        opacity: 1,
      },
    },
  },
});

export const CollapsibleNavigation = styled("div", {
  background: "$primary",
  zIndex: 2,

  width: "100%",
  maxWidth: "100%",
  height: "100%",

  position: "fixed",
  left: "-100%",
  top: 0,

  paddingTop: "130px",

  transformOrigin: "0 0",
  transition: "all .3s ease",

  "@md": {
    width: "400px",
    maxWidth: "400px",
  },

  "@lg": {
    display: "none",
  },

  svg: {
    color: "$white",
    padding: "30px",
    transition: "all .3s ease",
    cursor: "pointer",

    "&:hover": {
      color: "$black",
    },
  },

  ul: {
    listStyle: "none",

    li: {
      color: "$white",
      width: "100%",
      padding: "30px",
      transition: "all .3s ease",
      cursor: "pointer",
      textAlign: "right",
      fontSize: "$xl",

      "@md": {
        fontSize: "$2xl",
      },

      "&:hover": {
        background: "rgba(255, 255, 255, 0.2)",
      },
    },
  },

  variants: {
    isOpen: {
      true: {
        zIndex: 2,
        left: 0,
      },
    },
  },
});

export const CollapsibleOverlay = styled("div", {
  position: "fixed",
  top: 0,
  left: 0,

  display: "none",

  animation: `${fadeIn} 300ms`,

  background: "rgba(0, 0, 0, 0.6)",
  zIndex: 1,

  width: "100%",
  height: "100%",

  variants: {
    isOpen: {
      true: {
        zIndex: 1,
        display: "block",
      },
    },
  },
});

export const AccessibilityButton = styled("button", {
  position: "absolute",
  left: "10px",
  top: "10px",
  zIndex: "-1",
  background: "$primary",
  color: "$white",
  border: "none",
  borderRadius: "15px",
  padding: "10px",
  opacity: 0,

  "&:focus": {
    zIndex: 20,
    opacity: 1,
  },
});
