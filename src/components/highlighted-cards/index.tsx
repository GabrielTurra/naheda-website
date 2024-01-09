import { Col, Container, Row } from "@/src/styles/grid";
import {
  Card,
  HighlightedCardsComponent,
  TextCard,
} from "./HighlightedCards.styles";
import { HighlightedCardsProps } from "./HighlightedCards.types";
import Image from "next/image";

import Image1 from "@/public/example/example-image-01.jpg";
import Image2 from "@/public/example/example-image-02.jpg";
import Image3 from "@/public/example/example-image-03.jpg";
import Image4 from "@/public/example/example-image-04.jpg";
import { zeroPad } from "@/src/utils/zeroPad";

const cardsMockedData = [
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
];

export const HighlightedCards: React.FC<HighlightedCardsProps> = () => {
  return (
    <HighlightedCardsComponent className="global-section">
      <Container>
        <p>Nossos produtos</p>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          harum eos rerum officiis iusto sed, quos officia!
        </h2>

        <Row className="px-xl-40 global-section">
          {cardsMockedData.map((cardData, index) => (
            <Col size={6} xxl={3} className="p-2">
              <Card>
                <span>{zeroPad(index + 1, 2)}</span>
                <TextCard>
                  <h3>{cardData.title}</h3>
                  <p>{cardData.category}</p>
                </TextCard>
                <Image
                  src={cardData.image.src}
                  width={cardData.image.width}
                  height={cardData.image.height}
                  alt=""
                />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </HighlightedCardsComponent>
  );
};
