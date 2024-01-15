import { StaticImageData } from "next/image";

export interface HighlightedCardsProps {}

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
