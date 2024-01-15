import { fadeInBottom, fadeInTop } from "@/src/styles/animations";
import { Col } from "@/src/styles/grid";
import { styled } from "@/stitches.config";

export const HighlightedCardsComponent = styled("div", {
  background: "$primary",
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='496' height='413.3' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='0.06'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/svg%3E\")",
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

    opacity: 0.4,
    color: "$gray300",
    fontFamily: "$title",

    zIndex: 1,
  },
});
