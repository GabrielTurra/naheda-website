import { fadeInTop } from "@/src/styles/animations";
import { Col } from "@/src/styles/grid";
import { styled } from "@/stitches.config";

export const DoubleSelectorComponent = styled("div", {
  background: "$primary",
});

export const SelectorCol = styled(Col, {
  overflow: "hidden",
  height: "300px",
  transition: "all 0.3s ease",
  position: "relative",
  cursor: "pointer",
  transformOrigin: "0 0",

  "&:hover": {
    flex: "0 0 75%",
    maxWidth: "75%",

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
    transition: "all 0.3s ease",
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
  },

  p: {
    color: "$white",
    textAlign: "center",
    display: "none",
    opacity: 0,

    animation: `0.3s ease ${fadeInTop} forwards`,
  },
});
