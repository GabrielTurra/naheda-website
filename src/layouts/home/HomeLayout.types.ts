import { BannerCarouselProps } from "@/src/components/banner-carousel/BannerCarousel.types";
import { DoubleSelectorProps } from "@/src/components/double-selector/DoubleSelector.types";
import { ImageDescriptionProps } from "@/src/components/image-description/ImageDescription.types";

export interface HomeLayoutContentProps {
  banner: BannerCarouselProps;
  imageDescription: ImageDescriptionProps;
  doubleSelector: DoubleSelectorProps;
}
