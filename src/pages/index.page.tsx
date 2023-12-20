import { HomeLayout } from "@/src/layouts/home";
import { GetStaticProps } from "next";
import { LayoutProps } from "../@types/LayoutProps";
import { HomeLayoutContentProps } from "../layouts/home/HomeLayout.types";

import BannerImage1 from "@/public/example/example-image-04.jpg";
import BannerImage2 from "@/public/example/example-image-05.jpg";
import BannerImage3 from "@/public/example/example-image-06.jpg";
import { BannerCarouselProps } from "../components/banner-carousel/BannerCarousel.types";

const HomeLayoutStaticData = {
  banner: {
    itemsCarousel: [
      {
        id: 1,
        title: "As melhores resistências do mercado!",
        subtitle: "Lorem Ipsum Subtitle",
        content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolorem, qui ipsa et repellendus magni natus accusamus rem
                  consectetur, corporis eligendi architecto alias debitis
                  quisquam asperiores possimus a fugit hic fugiat.`,
        image: BannerImage1,
        topic: "Resistências",
      },
      {
        id: 2,
        title: "Conheça a nossa fábrica!",
        subtitle: "Lorem Ipsum Subtitle",
        content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolorem, qui ipsa et repellendus magni natus accusamus rem
                  consectetur, corporis eligendi architecto alias debitis
                  quisquam asperiores possimus a fugit hic fugiat.`,
        image: BannerImage2,
        topic: "A Fábrica",
      },
      {
        id: 3,
        title: "Eita, mais um título bom aqui!",
        subtitle: "Lorem Ipsum Subtitle",
        content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolorem, qui ipsa et repellendus magni natus accusamus rem
                  consectetur, corporis eligendi architecto alias debitis
                  quisquam asperiores possimus a fugit hic fugiat.`,
        image: BannerImage3,
        topic: "Tópico Extra",
      },
    ],
  } as BannerCarouselProps,
} as HomeLayoutContentProps;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      route: {
        title: "Homepage",
        layout: "HomeLayout",
        path: "/",
        content: HomeLayoutStaticData,
      },
    },
  };
};

const Home = ({ ...props }: LayoutProps) => {
  return <HomeLayout {...props} />;
};

export default Home;
