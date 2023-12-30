import { HomeLayoutContentProps } from "@/src/layouts/home/HomeLayout.types";

import BannerImage1 from "@/public/example/example-image-04.jpg";
import BannerImage2 from "@/public/example/example-image-05.jpg";
import BannerImage3 from "@/public/example/example-image-06.jpg";

export const HomeLayoutStaticData = {
  banner: {
    itemsCarousel: [
      {
        id: 1,
        title: "A melhor opção em aquecimento industrial!",
        subtitle: "Lorem Ipsum Subtitle",
        content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolorem, qui ipsa et repellendus magni natus accusamus rem
                  consectetur, corporis eligendi architecto alias debitis
                  quisquam asperiores possimus a fugit hic fugiat.`,
        image: BannerImage1,
        topic: "Resistências",
        cta: {
          text: "Entre em contato!",
          url: "/",
        },
      },
      {
        id: 2,
        title: "Conheça nossa linha residencial!",
        subtitle: "Lorem Ipsum Subtitle",
        content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolorem, qui ipsa et repellendus magni natus accusamus rem
                  consectetur, corporis eligendi architecto alias debitis
                  quisquam asperiores possimus a fugit hic fugiat.`,
        image: BannerImage2,
        topic: "Elétrica",
        cta: {
          text: "Faça seu orçamento!",
          url: "/",
        },
      },
      {
        id: 3,
        title: "Conheça a nossa fábrica!",
        subtitle: "Lorem Ipsum Subtitle",
        content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolorem, qui ipsa et repellendus magni natus accusamus rem
                  consectetur, corporis eligendi architecto alias debitis
                  quisquam asperiores possimus a fugit hic fugiat.`,
        image: BannerImage3,
        topic: "A Fábrica",
        cta: {
          text: "Veja os detalhes!",
          url: "/",
        },
      },
    ],
  },
  imageDescription: {
    title: "Fabricamos todos os tipos de resistências industriais!",
    subtitle: "Nossos serviços",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            dolorem est nostrum asperiores odio dolores voluptas iusto nemo,
            optio nam eius veniam soluta, quibusdam commodi minus animi
            provident placeat inventore tempora possimus voluptates alias.
            Repellat, saepe! Quasi iusto, velit dolorum laboriosam id neque.
            Voluptatem repudiandae dolorem aliquid blanditiis ullam.`,
    cta: {
      text: "Faça seu orçamento!",
      url: "/",
    },
    firstImage: BannerImage1,
    secondImage: BannerImage2,
  },
} as HomeLayoutContentProps;
