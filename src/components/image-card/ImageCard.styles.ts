import { fadeInBottom } from "@/src/styles/animations";
import { styled } from "@/stitches.config";

export const ImageCardComponent = styled("div", {
  position: "relative",
  height: "400px",
  cursor: "pointer",
  overflow: "hidden",

  img: {
    objectFit: "cover",
    width: "100%",
    height: "100%",
    transition: "all 0.3s ease",
    filter: "brightness(90%)",
  },

  "> div": {
    display: "none",
  },

  "&:hover": {
    img: {
      marginLeft: "-10%",
      marginTop: "-10%",
      width: "120%",
      height: "120%",
      filter: "brightness(70%) grayscale(40%)",
    },

    "> div": {
      display: "block",
    },
  },
});

export const ImageCardContent = styled("div", {
  width: "90%",
  marginLeft: "5%",
  textAlign: "center",
  position: "absolute",
  bottom: "5%",

  backgroundColor: "$white",
  padding: "$4",
  animation: `0.3s ease ${fadeInBottom} forwards`,

  h2: {
    color: "$primary",
  },

  p: {
    margin: 0,
  },
});
