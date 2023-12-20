import { BannerCarousel } from "@/src/components/banner-carousel";
import { HomeComponent } from "./HomeLayout.styles";
import { HomeLayoutContentProps } from "./HomeLayout.types";
import { LayoutProps } from "@/src/@types/LayoutProps";

export const HomeLayout: React.FC<LayoutProps> = ({ ...props }) => {
  const content = props.route.content as HomeLayoutContentProps;

  return (
    <HomeComponent>
      <BannerCarousel itemsCarousel={content.banner.itemsCarousel} />
    </HomeComponent>
  );
};
