import { ImageCardComponent, ImageCardContent } from "./ImageCard.styles";
import { ImageCardProps } from "./ImageCard.types";

import Image from "next/image";

export const ImageCard: React.FC<ImageCardProps> = ({
  title,
  subtitle,
  image,
  // cta,
}) => {
  return (
    <ImageCardComponent>
      <Image src={image.src} width={image.width} height={image.height} alt="" />
      <ImageCardContent>
        <h2 className="h5">{title}</h2>
        <p>{subtitle}</p>
      </ImageCardContent>
    </ImageCardComponent>
  );
};
