import { ButtonHTMLAttributes } from "react";
import { StaticImageData } from "next/image";
import { LinkProps } from "@/src/@types/LinkProps";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  cta: LinkProps;
  color?: "white" | "green";
  sizeWidth?: "small" | "big" | "full";
  icon?: StaticImageData;
  onlyIcon?: boolean;
}
