import { LinkProps } from "@/src/@types/LinkProps";
import { StaticImageData } from "next/image";

export interface DoubleSelectorProps {
  items: Array<{
    image: StaticImageData;
    cta: LinkProps;
  }>;
}
