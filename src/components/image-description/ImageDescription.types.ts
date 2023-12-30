import { LinkProps } from "@/src/@types/LinkProps";
import { StaticImageData } from "next/image";

export interface ImageDescriptionProps {
  title: string;
  subtitle: string;
  text: string;
  cta: LinkProps;
  firstImage: StaticImageData;
  secondImage: StaticImageData;
}
