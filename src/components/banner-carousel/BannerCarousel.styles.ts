import {
  enterToRight,
  fadeInLeft,
  fadeInTop,
  fadeIn,
} from "@/src/styles/animations";
import { Col, Container } from "@/src/styles/grid";
import { styled } from "@/stitches.config";

export const BannerCarouselComponent = styled("div", {
  background: "$primary",
});

export const BannerCarouselBackground = styled("div", {
  position: "relative",
});

export const BannerContent = styled(Col, {
  zIndex: 3,
  minHeight: "400px",
  alignContent: "center",

  "@md": {
    minHeight: "500px",
  },

  "@xl": {
    minHeight: "900px",
    paddingTop: "0",
  },

  button: {
    opacity: 0,
    animation: `0.5s ease 0.8s ${fadeInLeft} forwards`,
  },
});

export const ImageContainer = styled(Container, {
  position: "absolute",
  left: "0",
  padding: "0",

  overflow: "hidden",

  img: {
    objectFit: "cover",
    width: "100%",
    height: "100%",
    filter: "brightness(55%)",
    top: 0,

    animation: `0.7s ${enterToRight} forwards`,
  },

  "[class*='-size-12']": {
    width: "100% !important",
    maxWidth: "100% !important",
    flex: "0 0 100% !important",

    "@xl": {
      maxWidth: "calc(66.6667% + ((100vw - 1216px) / 2)) !important",
      flex: "0 0 calc(66.6667% + ((100vw - 1216px) / 2)) !important",
    },

    "@xxl": {
      maxWidth: "calc(66.6667% + ((100vw - 1600px) / 2)) !important",
      flex: "0 0 calc(66.6667% + ((100vw - 1600px) / 2)) !important",
    },
  },
});

export const BannerTitle = styled("h1", {
  fontSize: "$6xl",
  color: "$white",
  opacity: 0,

  animation: `0.5s ease ${fadeInTop} forwards`,

  "@sm": {
    maxWidth: "70%",
  },

  "@md": {
    fontSize: "$8xl",
  },

  "@xxl": {
    fontSize: "$9xl",
  },

  "@el": {
    fontSize: "$10xl",
  },
});

export const BannerInfo = styled(Col, {
  boxSizing: "border-box",
  padding: "$5 0",
  zIndex: 3,

  "@xl": {
    background: "$primary",
    paddingLeft: "$10",
    paddingRight: "0",
    marginTop: "$40",
    textAlign: "end",
  },

  h2: {
    fontSize: "$2xl",
    marginBottom: "15px",
    opacity: 0,
    animation: `0.5s ease 0.6s ${fadeInLeft} forwards`,

    display: "none",

    "@md": {
      fontSize: "$3xl",
    },

    "@xl": {
      fontSize: "$4xl",
      display: "block",
    },

    "@xxl": {
      fontSize: "$5xl",
    },
  },

  p: {
    fontWeight: "bold",
    opacity: 0,
    animation: `0.5s ease 1s ${fadeIn} forwards`,
    display: "flex",

    "@md": {
      width: "70%",
    },

    "@xl": {
      width: "100%",
    },
  },
});

export const BannerSelectorContent = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(3, 180px)",
  gridGap: "10px",

  maxWidth: "105%",
  width: "105%",
  overflowX: "auto",
  marginTop: "$6",

  "@sm": {
    maxWidth: "calc(100% + ((100vw - 540px) /2))",
    width: "calc(100% + ((100vw - 540px) /2))",
  },

  "@md": {
    maxWidth: "calc(100% + ((100vw - 672px) /2))",
    width: "calc(100% + ((100vw - 672px) /2))",
    gridTemplateColumns: "repeat(3, 250px)",
  },

  "@lg": {
    maxWidth: "100%",
    width: "100%",
  },

  "@xl": {
    gridTemplateColumns: "repeat(3, 250px)",
    marginLeft: "calc((-$30 + -125px))",
    justifyContent: "end",
    marginTop: "$8",

    width: "unset",
    maxWidth: "unset",
    overflowX: "unset",
  },
});

export const ItemOverlay = styled("div", {
  width: "100%",
  height: "100%",

  position: "absolute",
  top: 0,
  left: 0,

  opacity: 0,
  backgroundColor: "$primary",
  transition: "all 0.3s ease",
});

export const TextTopic = styled("div", {
  position: "absolute",
  left: "$4",
  bottom: 0,
  textAlign: "left",

  opacity: 0,
  transition: "all 0.3s ease",

  h3: {
    transition: "all 0.3s ease",
    fontFamily: "$body",
    fontSize: "$lg",
  },

  p: {
    fontWeight: "$regular",
    fontSize: "$md",
    display: "none",

    "@lg": {
      display: "block",
    },
  },
});

export const BannerItem = styled(Col, {
  position: "relative",

  "&.active": {
    [`${ItemOverlay}`]: {
      opacity: 0.5,
    },

    [`${TextTopic}`]: {
      opacity: 1,
      bottom: "$4",
    },
  },

  img: {
    objectFit: "cover",
    objectPosition: "center",

    transition: "all 0.3s ease",
    width: "100%",
    maxHeight: "100%",
    height: "auto",

    "@xl": {
      height: "280px",
    },

    "@xxl": {
      height: "320px",
    },
  },

  "&:not(.active)": {
    cursor: "pointer",

    "&:hover": {
      "@md": {
        [`${ItemOverlay}, img`]: {
          marginTop: "-20px",
        },

        [`${ItemOverlay}`]: {
          opacity: 0.2,
        },

        [`${TextTopic}`]: {
          opacity: 1,
          bottom: "calc($4 + 20px)",
        },
      },
    },
  },

  "&:nth-child(1)": {
    opacity: 0,
    animation: `0.5s ease 1.2s ${fadeInTop} forwards`,
  },

  "&:nth-child(2)": {
    opacity: 0,
    animation: `0.5s ease 1.4s ${fadeInTop} forwards`,
  },

  "&:nth-child(3)": {
    opacity: 0,
    animation: `0.5s ease 1.6s ${fadeInTop} forwards`,
  },
});

export const PageCount = styled("div", {
  color: "$gray400",
  marginTop: "$4",
  position: "absolute",

  fontSize: "$lg",

  opacity: 0,
  animation: `0.5s ease 0.8s ${fadeIn} forwards`,

  "@md": {
    fontSize: "$2xl",
    marginTop: "$8",
  },
});
