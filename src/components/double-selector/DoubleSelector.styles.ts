import { fadeInTop } from "@/src/styles/animations";
import { Col } from "@/src/styles/grid";
import { styled } from "@/stitches.config";

export const DoubleSelectorComponent = styled("div", {
  background: "$primary",

  "&:hover": {
    "> div": {
      h2: {
        opacity: 0,
      },
    },
  },
});

export const SelectorCol = styled(Col, {
  overflow: "hidden",
  height: "300px",
  transition: "all 0.3s linear",
  position: "relative",
  cursor: "pointer",

  h2: {
    transition: "all 0.3s linear",
  },

  "&:hover": {
    flex: "0 0 85%",
    maxWidth: "85%",

    "@md": {
      flex: "0 0 65%",
      maxWidth: "65%",
    },

    h2: {
      opacity: "1 !important",
    },

    img: {
      filter: "brightness(70%) grayscale(0%)",
    },

    p: {
      "@md": {
        display: "block",
      },
    },
  },

  img: {
    objectFit: "cover",
    width: "100%",
    height: "100%",
    filter: "brightness(55%) grayscale(60%)",
    top: 0,
  },
});

export const ContentSection = styled("div", {
  position: "absolute",

  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  zIndex: 3,

  h2: {
    color: "$white",
    textAlign: "center",
    fontSize: "$5xl",

    "@md": {
      fontSize: "$7xl",
    },
  },

  p: {
    color: "$white",
    textAlign: "center",
    display: "none",
    opacity: 0,

    animation: `0.3s ease ${fadeInTop} forwards`,
  },
});
