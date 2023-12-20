import { StaticImageData } from "next/image";

export interface BannerCarouselProps {
  itemsCarousel: Array<{
    id: number;
    topic: string;
    title: string;
    subtitle: string;
    content: string;
    image: StaticImageData;
  }>;
}
