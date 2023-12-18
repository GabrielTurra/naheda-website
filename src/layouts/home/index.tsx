import { BannerCarousel } from "@/src/components/banner-carousel";
import { HomeComponent } from "./HomeLayout.styles";
import { HomeLayoutProps } from "./HomeLayout.types";

export const HomeLayout: React.FC<HomeLayoutProps> = () => {
  return (
    <HomeComponent>
      <BannerCarousel />
    </HomeComponent>
  );
};
