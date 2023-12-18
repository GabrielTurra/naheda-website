import { keyframes } from "@/stitches.config";

export const fadeIn = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

export const fadeInTop = keyframes({
  "0%": {
    opacity: 0,
    marginTop: "-100px",
  },
  "100%": {
    opacity: 1,
    marginTop: "0px",
  },
});

export const fadeInLeft = keyframes({
  "0%": {
    opacity: 0,
    marginRight: "-100px",
  },
  "100%": {
    opacity: 1,
    marginRight: "0px",
  },
});

export const fadeInBottom = keyframes({
  "0%": {
    opacity: 0,
    marginBottom: "-100px",
  },
  "100%": {
    opacity: 1,
    marginBottom: "0px",
  },
});

export const wave = keyframes({
  "50%": {
    clipPath:
      "polygon(0% 60%,15% 65%,34% 66%,51% 62%,67% 50%,84% 45%,100% 46%,100% 100%,0% 100%)",
  },
  "0%, 100%": {
    clipPath:
      "polygon(0% 45%,16% 44%,33% 50%,54% 60%,70% 61%,84% 59%,100% 52%,100% 100%,0% 100%)",
  },
});

export const enterToRight = keyframes({
  "0%": {
    opacity: 0,
    // marginLeft: "-50%",
    width: "0px",
  },

  "30%": {
    opacity: 1,
  },

  "100%": {
    opacity: 1,

    width: "100%",
    // marginLeft: "0",
  },
});
