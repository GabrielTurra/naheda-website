import { HomeLayoutContentProps } from "@/src/layouts/home/HomeLayout.types";

import BannerImage1 from "@/public/example/example-image-04.jpg";
import BannerImage2 from "@/public/example/example-image-05.jpg";
import BannerImage3 from "@/public/example/example-image-06.jpg";
import BannerImage4 from "@/public/example/example-image-03.jpg";
import BannerImage5 from "@/public/example/example-image-02.jpg";
import BannerImage6 from "@/public/example/example-image-01.jpg";

export const HomeLayoutStaticData = {
  banner: {
    itemsCarousel: [
      {
        id: 1,
        title: "A melhor opção em aquecimento industrial!",
        subtitle: "Inovação em Resistências Elétricas",
        content:
          "Explore o calor da inovação! Nossa fábrica é referência em resistências elétricas industriais, aquecendo seu sucesso com soluções personalizadas. Eficiência térmica que impulsiona seu negócio!",
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
        subtitle: "Soluções Elétricas para você!",
        content:
          "Facilite seu dia a dia com nossa linha de equipamentos elétricos residenciais. Das resistências aos pequenos detalhes, proporcionamos soluções simples para tornar sua vida mais prática e confortável.",
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
        subtitle: "Aquecendo a Inovação Industrial",
        content:
          "Bem-vindo à nossa fábrica de excelência em resistências elétricas industriais. Deixe-nos aquecer o caminho para o sucesso da sua produção com inovação e qualidade líderes no mercado.",
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
    text: "Com anos de experiência e comprometimento com a qualidade, nossa fábrica de resistências industriais destaca-se pela precisão e durabilidade de nossos produtos. Cada resistência é cuidadosamente projetada para atender às demandas específicas da sua indústria, proporcionando desempenho consistente e eficaz. Conte conosco para elevar a eficiência térmica do seu processo produtivo, enquanto oferecemos suporte técnico especializado para garantir a máxima satisfação do cliente.",
    cta: {
      text: "Faça seu orçamento!",
      url: "/",
    },
    firstImage: BannerImage1,
    secondImage: BannerImage2,
  },
  doubleSelector: {
    items: [
      {
        title: "Linha Industrial",
        description:
          "Inovação térmica industrial: Eficiência energética em cada detalhe.",
        image: BannerImage1,
        cta: {
          text: "Faça seu Orçamento!",
          url: "/",
        },
      },
      {
        title: "Linha Residencial",
        description:
          "Conforto elétrico residencial: Soluções simples para o seu dia a dia.",
        image: BannerImage2,
        cta: {
          text: "Faça seu Orçamento!",
          url: "/",
        },
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
        image: BannerImage1,
      },
      {
        title: "Coleiras",
        category: "Resistências",
        image: BannerImage2,
      },
      {
        title: "Coleiras",
        category: "Resistências",
        image: BannerImage3,
      },
      {
        title: "Coleiras",
        category: "Resistências",
        image: BannerImage4,
      },
    ],

    counters: [
      {
        count: 8,
        description: "Anos de mercado",
      },
      {
        count: 82,
        description: "Tipos de resistência",
      },
      {
        count: 64,
        description: "Clientes ativos",
      },
    ],

    cta: {
      text: "Faça seu Orçamento!",
      url: "/",
    },
  },
  imageCardList: {
    cards: [
      {
        title: "Pátio da Fábrica",
        subtitle: "Nossa linha de produção",
        image: BannerImage6,
        cta: {
          text: "Faça seu Orçamento!",
          url: "/",
        },
      },
      {
        title: "Pátio da Fábrica",
        subtitle: "Nossa linha de produção",
        image: BannerImage5,
        cta: {
          text: "Faça seu Orçamento!",
          url: "/",
        },
      },
      {
        title: "Pátio da Fábrica",
        subtitle: "Nossa linha de produção",
        image: BannerImage4,
        cta: {
          text: "Faça seu Orçamento!",
          url: "/",
        },
      },
      {
        title: "Pátio da Fábrica",
        subtitle: "Nossa linha de produção",
        image: BannerImage5,
        cta: {
          text: "Faça seu Orçamento!",
          url: "/",
        },
      },
    ],
  },
} as HomeLayoutContentProps;
