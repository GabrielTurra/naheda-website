import Image from "next/image";
import { Card, TextCard } from "../HighlightedCards.styles";
import { HighlightedImageCardProps } from "../HighlightedCards.types";

export const ImageCard: React.FC<HighlightedImageCardProps> = ({
  count,
  title,
  category,
  image,
}) => {
  return (
    <Card>
      <span>{count}</span>
      <TextCard>
        <h3>{title}</h3>
        <p>{category}</p>
      </TextCard>
      <Image src={image.src} width={image.width} height={image.height} alt="" />
    </Card>
  );
};
