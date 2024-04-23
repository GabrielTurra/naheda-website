import { styled } from "@/stitches.config";

export const AnimatedHamburguerComponent = styled("label", {
  display: "flex",
  flexDirection: "column",
  width: "40px",
  cursor: "pointer",
  zIndex: "10",

  "@lg": {
    display: "none",
  },

  span: {
    background: "#fff",
    borderRadius: "10px",
    height: "4px",
    margin: " 4px 0",
    transition: " .3s  cubic-bezier(0.68, -0.6, 0.32, 1.6)",

    "&:nth-of-type(1)": {
      width: "50%",
    },

    "&:nth-of-type(2)": {
      width: "100%",
    },

    "&:nth-of-type(3)": {
      width: "75%",
    },
  },

  'input[type="checkbox"]': {
    display: "none",

    "&:checked ~ span:nth-of-type(1)": {
      transformOrigin: "bottom",
      transform: "rotatez(45deg) translate(4px,0px)",
    },

    "&:checked ~ span:nth-of-type(2)": {
      transformOrigin: "top",
      transform: "rotatez(-45deg)",
    },

    "&:checked ~ span:nth-of-type(3)": {
      transformOrigin: "bottom",
      width: "50%",
      transform: "translate(17px,-7px) rotatez(45deg)",
    },
  },
});
