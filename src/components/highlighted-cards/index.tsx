import { Col, Container, Row } from "@/src/styles/grid";
import { HighlightedCardsComponent } from "./HighlightedCards.styles";
import { HighlightedCardsProps } from "./HighlightedCards.types";

import { Button } from "../lib";

import Image1 from "@/public/example/example-image-01.jpg";
import Image2 from "@/public/example/example-image-02.jpg";
import Image3 from "@/public/example/example-image-03.jpg";
import Image4 from "@/public/example/example-image-04.jpg";
import { ImageCard } from "./image-card";
import { CounterItem } from "./counter-item";

const cardsMockedData = {
  title: "Nossos produtos",
  subtitle:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis harum eos!",

  cards: [
    {
      title: "Coleiras",
      category: "Resistências",
      image: Image1,
    },
    {
      title: "Coleiras",
      category: "Resistências",
      image: Image2,
    },
    {
      title: "Coleiras",
      category: "Resistências",
      image: Image3,
    },
    {
      title: "Coleiras",
      category: "Resistências",
      image: Image4,
    },
  ],

  counters: [
    {
      count: 98,
      description: "Lorem ipsum dolor.",
    },
    {
      count: 33,
      description: "Lorem ipsum dolor.",
    },
    {
      count: 47,
      description: "Lorem ipsum dolor.",
    },
  ],

  cta: {
    text: "Faça seu Orçamento!",
    url: "/",
  },
};

export const HighlightedCards: React.FC<HighlightedCardsProps> = () => {
  return (
    <HighlightedCardsComponent className="global-section">
      <Container>
        <p>{cardsMockedData.title}</p>
        <h2>{cardsMockedData.subtitle}</h2>

        <Row className="px-xl-40 global-section">
          {cardsMockedData.cards.map((cardData, index) => (
            <Col size={6} xxl={3} className="p-2">
              <ImageCard
                {...cardData}
                count={String(index + 1).padStart(2, "0")}
              />
            </Col>
          ))}
        </Row>

        <Row className="justify-center">
          {cardsMockedData.counters.map((counterData) => (
            <CounterItem {...counterData} />
          ))}
        </Row>

        <Button className="mt-8" color="secondary" cta={cardsMockedData.cta} />
      </Container>
    </HighlightedCardsComponent>
  );
};
