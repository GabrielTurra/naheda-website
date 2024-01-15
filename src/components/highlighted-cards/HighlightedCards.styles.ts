import { fadeInBottom, fadeInTop } from "@/src/styles/animations";
import { Col } from "@/src/styles/grid";
import { styled } from "@/stitches.config";

export const HighlightedCardsComponent = styled("div", {
  background: "$primary",
  textAlign: "center",

  h2: {
    color: "$white",
    margin: "0 auto",

    "@xl": {
      maxWidth: "50%",
    },
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
  height: "270px",
  position: "relative",
  cursor: "pointer",

  "@lg": {
    height: "400px",
  },

  "&:hover": {
    img: {
      filter: "brightness(40%) grayscale(60%)",
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
    filter: "brightness(80%) grayscale(0%)",
    transition: "all 0.3s ease",

    zIndex: 1,
  },
});

export const HighlightedItem = styled(Col, {
  textAlign: "center",
  position: "relative",
  height: "240px",

  "&:not(:last-child):before": {
    content: "",
    position: "absolute",
    bottom: "5%",
    width: "60%",
    height: "1px",
    background: "$white",
    opacity: 0.4,
    left: "20%",

    "@lg": {
      width: "1px",
      height: "40%",
      top: "30%",
      right: 0,
      bottom: "unset",
      left: "unset",
    },
  },

  h4: {
    position: "absolute",
    zIndex: 2,
    display: "block",

    color: "$white",
    fontFamily: "$body",

    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },

  span: {
    display: "block",
    position: "absolute",
    fontSize: "16rem",

    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    opacity: 0.2,
    color: "$gray300",
    fontFamily: "$title",

    zIndex: 1,
  },
});
