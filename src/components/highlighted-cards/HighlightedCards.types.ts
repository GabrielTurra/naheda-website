import { LinkProps } from "@/src/@types/LinkProps";
import { StaticImageData } from "next/image";

export interface HighlightedImageCardProps {
  count: string;
  title: string;
  category: string;
  image: StaticImageData;
}

export interface HighlightedCounterItemProps {
  count: number;
  description: string;
}

export interface HighlightedCardsProps {
  title: string;
  subtitle: string;
  cards: HighlightedImageCardProps[];
  counters: HighlightedCounterItemProps[];
  cta: LinkProps;
}
