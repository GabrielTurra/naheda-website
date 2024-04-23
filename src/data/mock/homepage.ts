import { HomeLayoutContentProps } from "@/src/layouts/home/HomeLayout.types";

import BannerImage1 from "@/public/example/example-image-01.jpg";
import BannerImage2 from "@/public/example/example-image-02.jpg";
import BannerImage3 from "@/public/example/example-image-03.jpg";
import BannerImage4 from "@/public/example/example-image-04.jpg";
import BannerImage5 from "@/public/example/example-image-05.jpg";
import BannerImage6 from "@/public/example/example-image-06.jpg";

import ColeiraImage from "@/public/products/coleiras.jpg";
import CartuchoImage from "@/public/products/cartuchos.jpg";
import TubularImage from "@/public/products/tubulares.jpg";

const WhatsappCTA = {
  text: "Entre em Contato!",
  url: "https://wa.me/+5511969837062",
  target: "_blank",
};

export const HomeLayoutStaticData = {
  banner: {
    itemsCarousel: [
      {
        id: 1,
        title: "A melhor opção em aquecimento industrial!",
        subtitle: "Inovação em Resistências",
        content:
          "Explore o calor da inovação! Nossa fábrica é referência em resistências elétricas industriais, aquecendo seu sucesso com soluções personalizadas. Eficiência térmica que impulsiona seu negócio!",
        image: BannerImage4,
        topic: "Resistências",
        cta: WhatsappCTA,
      },
      {
        id: 2,
        title: "Conheça nossa linha residencial!",
        subtitle: "Soluções Elétricas personalizadas!",
        content:
          "Facilite seu dia a dia com nossa linha de equipamentos elétricos residenciais. Das resistências aos pequenos detalhes, proporcionamos soluções simples para tornar sua vida mais prática e confortável.",
        image: BannerImage5,
        topic: "Elétrica",
        cta: WhatsappCTA,
      },
      {
        id: 3,
        title: "Conheça a nossa fábrica!",
        subtitle: "Aquecendo a Inovação Industrial",
        content:
          "Bem-vindo à nossa fábrica de excelência em resistências elétricas industriais. Deixe-nos aquecer o caminho para o sucesso da sua produção com inovação e qualidade líderes no mercado.",
        image: BannerImage6,
        topic: "A Fábrica",
        cta: WhatsappCTA,
      },
    ],
  },
  imageDescription: {
    title: "Fabricamos todos os tipos de resistências industriais!",
    subtitle: "Nossos serviços",
    text: "Com anos de experiência e comprometimento com a qualidade, nossa fábrica de resistências industriais destaca-se pela precisão e durabilidade de nossos produtos. Cada resistência é cuidadosamente projetada para atender às demandas específicas da sua indústria, proporcionando desempenho consistente e eficaz. Conte conosco para elevar a eficiência térmica do seu processo produtivo, enquanto oferecemos suporte técnico especializado para garantir a máxima satisfação do cliente.",
    cta: WhatsappCTA,
    firstImage: BannerImage4,
    secondImage: BannerImage5,
  },
  doubleSelector: {
    items: [
      {
        title: "Linha Industrial",
        description:
          "Inovação térmica industrial: Eficiência energética em cada detalhe.",
        image: BannerImage4,
        cta: WhatsappCTA,
      },
      {
        title: "Linha Residencial",
        description:
          "Conforto elétrico residencial: Soluções simples para o seu dia a dia.",
        image: BannerImage5,
        cta: WhatsappCTA,
      },
    ],
  },
  highlightedCards: {
    title: "Nossos produtos",
    subtitle:
      "Poder Térmico Personalizado: Resistências Industriais e Residenciais de Alta Performance.",

    cards: [
      {
        title: "Coleiras",
        category: "Resistências",
        image: ColeiraImage,
      },
      {
        title: "Cartuchos",
        category: "Resistências",
        image: CartuchoImage,
      },
      {
        title: "Tubulares",
        category: "Resistências",
        image: TubularImage,
      },
      {
        title: "Microtubulares",
        category: "Resistências",
        image: BannerImage5,
      },
    ],

    counters: [
      {
        count: 9,
        description: "Anos de mercado",
      },
      {
        count: 143,
        description: "Clientes ativos",
      },
      {
        count: 82,
        description: "Tipos de resistência",
      },
    ],

    cta: WhatsappCTA,
  },
  imageCardList: {
    cards: [
      {
        title: "Pátio da Fábrica",
        subtitle: "Nossa linha de produção",
        image: BannerImage1,
        cta: WhatsappCTA,
      },
      {
        title: "Pátio da Fábrica",
        subtitle: "Nossa linha de produção",
        image: BannerImage2,
        cta: WhatsappCTA,
      },
      {
        title: "Pátio da Fábrica",
        subtitle: "Nossa linha de produção",
        image: BannerImage3,
        cta: WhatsappCTA,
      },
      {
        title: "Pátio da Fábrica",
        subtitle: "Nossa linha de produção",
        image: BannerImage1,
        cta: WhatsappCTA,
      },
    ],
  },
} as HomeLayoutContentProps;
