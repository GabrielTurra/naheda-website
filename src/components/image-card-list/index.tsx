import { Col, Row } from "@/src/styles/grid";
import { ImageCard } from "../image-card";
import { ImageCardListComponent } from "./ImageCardList.styles";
import { ImageCardListProps } from "./ImageCardList.types";

export const ImageCardList: React.FC<ImageCardListProps> = ({ cards }) => {
  return (
    <ImageCardListComponent>
      <Row>
        {cards.map((cardData) => (
          <Col size={6} xl={3}>
            <ImageCard {...cardData} />
          </Col>
        ))}
      </Row>
    </ImageCardListComponent>
  );
};
