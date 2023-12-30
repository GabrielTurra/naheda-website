import { Col } from "@/src/styles/grid";
import { styled } from "@/stitches.config";
import CogsPattern from "@/public/patterns/floating-cogs.svg";
import { fadeInTop } from "@/src/styles/animations";

export const ImageDescriptionComponent = styled("div", {
  backgroundImage: `linear-gradient(rgba(255,255,255, 1), rgba(255,255,255,0.8)), url(${CogsPattern.src});`,
});

export const ImageContainer = styled(Col, {
  position: "relative",
  minHeight: "calc(280px + 150px)",
  opacity: 0,
  animation: `0.5s ease 0.6s ${fadeInTop} forwards`,

  "@xl": {
    minHeight: "calc(400px + 250px)",
  },

  "> div": {
    position: "absolute",

    width: "75%",
    height: "280px",
    maxWidth: "65%",
    overflow: "hidden",

    display: "flex",
    justifyContent: "center",

    "@xl": {
      height: "400px",
    },

    img: {
      objectFit: "cover",
      objectAlign: "center",
      height: "100%",
      width: "auto",
    },

    "&:nth-child(2)": {
      top: "150px",
      right: "0px",

      "@xl": {
        top: "250px",
      },
    },
  },
});

export const InfoContainer = styled(Col, {
  opacity: 0,
  animation: `0.5s ease 0.6s ${fadeInTop} forwards`,

  "@xl": {
    padding: "0 $section",
  },

  "> div": {
    alignContent: "center",
  },

  p: {
    fontWeight: "$bold",
  },
});

export const InfoSubtitle = styled("p", {
  fontSize: "$md",
  fontWeight: "$bold",
  textTransform: "uppercase",
  color: "$primary",
  marginBottom: "$2 !important",
  width: "100%",
});
