import React from "react";
import { ButtonComponent, Icon } from "./Button.styles";
import { ButtonProps } from "./Button.types";
import Link from "next/link";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { cta, color, sizeWidth, icon, onlyIcon = false, disabled, ...props },
    forwardedRef,
  ) => (
    <ButtonComponent
      color={color}
      sizeWidth={sizeWidth}
      ref={forwardedRef}
      disabled={disabled}
      onlyIcon={onlyIcon}
      {...props}
    >
      <Link href={cta.url || ""} target={cta.target || ""}>
        <span>{cta.text}</span>
        {icon && (
          <Icon
            src={icon.src}
            width={12}
            height={12}
            alt=""
            onlyIcon={onlyIcon}
          />
        )}
      </Link>
    </ButtonComponent>
  ),
);
