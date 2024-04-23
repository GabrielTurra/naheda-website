import { Col, Container, Row } from "@/src/styles/grid";
import { HighlightedCardsComponent } from "./HighlightedCards.styles";
import { HighlightedCardsProps } from "./HighlightedCards.types";

import { ImageCard } from "./image-card";
import { CounterItem } from "./counter-item";

import { Button } from "../lib";

export const HighlightedCards: React.FC<HighlightedCardsProps> = ({
  title,
  subtitle,
  cards,
  counters,
  cta,
}) => {
  return (
    <HighlightedCardsComponent className="global-section">
      <Container>
        <p>{title}</p>
        <h2>{subtitle}</h2>

        <Row className="px-xl-40 global-section">
          {cards.map((cardData, index) => (
            <Col size={12} md={6} lg={3} className="p-2">
              <ImageCard
                {...cardData}
                count={String(index + 1).padStart(2, "0")}
              />
            </Col>
          ))}
        </Row>

        <Row className="justify-center">
          {counters.map((counterData) => (
            <CounterItem {...counterData} />
          ))}
        </Row>

        <Button className="mt-8" color="secondary" cta={cta} />
      </Container>
    </HighlightedCardsComponent>
  );
};
