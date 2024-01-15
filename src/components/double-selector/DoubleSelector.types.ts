import { LinkProps } from "@/src/@types/LinkProps";
import { StaticImageData } from "next/image";

export interface DoubleSelectorProps {
  items: Array<{
    title: string;
    description: string;
    image: StaticImageData;
    cta: LinkProps;
  }>;
}
