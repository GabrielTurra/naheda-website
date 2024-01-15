import { LinkProps } from "@/src/@types/LinkProps";
import { StaticImageData } from "next/image";

export interface ImageCardProps {
  title: string;
  subtitle: string;
  image: StaticImageData;
  cta: LinkProps;
}
