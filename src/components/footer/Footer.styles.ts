import { styled } from "@/stitches.config";
import Image from "next/image";

export const FooterComponent = styled("div", {
  textAlign: "center",

  svg: {
    transition: "all 0.3s ease",
    fill: "$white",

    "&:hover": {
      fill: "$primary",
    },
  },
  a: {
    display: "block",
    color: "$white",
    textDecoration: "none",
    transition: "color 0.3s ease",

    fontSize: "1.2rem",

    letterSpacing: "1px",
    marginBottom: "10px",
    margin: 0,

    "&:hover": {
      color: "$primary",
    },
  },

  span: {
    color: "$gray300",
  },

  p: {
    color: "$white",
    fontSize: "1.2rem",

    letterSpacing: "1px",
    marginBottom: "10px",
    margin: 0,
  },
});

export const Logo = styled(Image, {
  width: "100px",
  height: "auto",
});
