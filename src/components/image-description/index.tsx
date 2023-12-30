// External Dependencies
import Image from "next/image";

// Internal Dependencies
import { Button } from "../lib";
import { Container, Row } from "@/src/styles/grid";

// Typings
import { ImageDescriptionProps } from "./ImageDescription.types";

// Styles
import {
  ImageDescriptionComponent,
  ImageContainer,
  InfoContainer,
  InfoSubtitle,
} from "./ImageDescription.styles";

export const ImageDescription: React.FC<ImageDescriptionProps> = ({
  title,
  subtitle,
  text,
  cta,
  firstImage,
  secondImage,
}) => {
  return (
    <ImageDescriptionComponent className="global-section">
      <Container>
        <Row>
          <ImageContainer className="mb-6 mb-xl-0" size={12} xl={6}>
            <div>
              <Image
                src={firstImage.src}
                width={firstImage.width}
                height={firstImage.height}
                alt=""
              />
            </div>
            <div>
              <Image
                src={secondImage.src}
                width={secondImage.width}
                height={secondImage.height}
                alt=""
              />
            </div>
          </ImageContainer>
          <InfoContainer size={12} xl={6}>
            <Row>
              <InfoSubtitle>{subtitle}</InfoSubtitle>
              <h2 className="h2">{title}</h2>
              <p>{text}</p>

              <Button cta={cta} />
            </Row>
          </InfoContainer>
        </Row>
      </Container>
    </ImageDescriptionComponent>
  );
};
