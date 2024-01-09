import { fadeInBottom, fadeInTop } from "@/src/styles/animations";
import { styled } from "@/stitches.config";

export const HighlightedCardsComponent = styled("div", {
  background: "$primary",
  textAlign: "center",

  h2: {
    color: "$white",
    maxWidth: "70%",
    margin: "0 auto",
  },

  p: {
    fontWeight: "$bold",
    textTransform: "uppercase",
    color: "$white",
  },
});

export const TextCard = styled("div", {
  zIndex: 2,
  textAlign: "left",

  h3: {
    left: "20px",
    position: "absolute",
    bottom: "20px",
    zIndex: 2,

    transition: "all 0.3s ease",

    fontFamily: "$body",
    fontSize: "$2xl",
    color: "$white",
  },

  p: {
    left: "20px",
    position: "absolute",
    bottom: "20px",
    zIndex: 2,

    opacity: 0,
    margin: 0,

    fontWeight: "$regular",
    fontSize: "$md",
    color: "$white",

    display: "none",

    transition: "all 0.3s ease",
    animation: `0.3s ease ${fadeInBottom} forwards`,
  },
});

export const Card = styled("div", {
  height: "400px",
  position: "relative",
  cursor: "pointer",

  "&:hover": {
    img: {
      filter: "brightness(65%) grayscale(0%)",
    },

    span: {
      display: "block",
    },

    [`${TextCard}`]: {
      h3: {
        bottom: "45px",
      },
      p: {
        display: "block",
      },
    },
  },

  span: {
    zIndex: 2,
    position: "absolute",

    left: "20px",
    top: "20px",

    fontSize: "$2xl",
    color: "$gray200",
    fontWeight: "$bold",

    display: "none",
    animation: `0.3s ease ${fadeInTop} forwards`,
  },

  img: {
    width: "100%",
    height: "100%",

    objectFit: "cover",
    filter: "brightness(55%) grayscale(60%)",
    transition: "all 0.3s ease",

    zIndex: 1,
  },
});
