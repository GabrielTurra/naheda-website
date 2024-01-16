import { LinkProps } from "@/src/@types/LinkProps";
import { StaticImageData } from "next/image";

export interface ClientsCarousselProps {
  clients: Array<{
    cta: LinkProps;
    image: StaticImageData;
  }>;
}
