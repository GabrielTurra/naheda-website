import { BannerCarousel } from "@/src/components/banner-carousel";
import { HomeComponent } from "./HomeLayout.styles";
import { HomeLayoutContentProps } from "./HomeLayout.types";
import { LayoutProps } from "@/src/@types/LayoutProps";
import { ImageDescription } from "@/src/components/image-description";
import { DoubleSelector } from "@/src/components/double-selector";
import { HighlightedCards } from "@/src/components/highlighted-cards";

export const HomeLayout: React.FC<LayoutProps> = ({ ...props }) => {
  const content = props.route.content as HomeLayoutContentProps;

  return (
    <HomeComponent>
      <BannerCarousel {...content.banner} />
      <ImageDescription {...content.imageDescription} />
      <DoubleSelector {...content.doubleSelector} />
      <HighlightedCards />
    </HomeComponent>
  );
};
