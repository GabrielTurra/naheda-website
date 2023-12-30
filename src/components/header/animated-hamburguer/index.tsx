import React from "react";
import { AnimatedHamburguerComponent } from "./AnimatedHamburguer.styles";
import { AnimatedHamburguerProps } from "./AnimatedHamburguer.types";

export const AnimatedHamburguer = React.forwardRef<
  HTMLInputElement,
  AnimatedHamburguerProps
>(({ ...props }, forwardedRef) => {
  return (
    <AnimatedHamburguerComponent htmlFor="check">
      <input type="checkbox" id="check" ref={forwardedRef} {...props} />
      <span></span>
      <span></span>
      <span></span>
    </AnimatedHamburguerComponent>
  );
});
