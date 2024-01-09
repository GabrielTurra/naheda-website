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

  "&:nth-child(1)": {
    borderRight: "3px solid $primary",

    "@lg": {
      borderRight: "7px solid $primary",
    },
  },

  "&:nth-child(2)": {
    borderLeft: "3px solid $primary",

    "@lg": {
      borderLeft: "7px solid $primary",
    },
  },

  "&:hover": {
    flex: "0 0 75%",
    maxWidth: "75%",

    img: {
      filter: "brightness(70%) grayscale(0%)",
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

export const SelectorTitle = styled("h2", {
  position: "absolute",
  color: "$white",
  textAlign: "center",

  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  zIndex: 3,
});
