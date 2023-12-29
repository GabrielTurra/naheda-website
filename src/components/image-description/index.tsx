// External Dependencies
import Image from "next/image";

// Internal Dependencies
import { Button } from "../lib/button";
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

// Example Static Content
import BannerImage1 from "@/public/example/example-image-03.jpg";
import BannerImage2 from "@/public/example/example-image-01.jpg";

export const ImageDescription: React.FC<ImageDescriptionProps> = () => {
  return (
    <ImageDescriptionComponent className="global-section">
      <Container>
        <Row>
          <ImageContainer className="mb-6 mb-xl-0" size={12} xl={6}>
            <div>
              <Image
                src={BannerImage1.src}
                width={BannerImage1.width}
                height={BannerImage1.height}
                alt=""
              />
            </div>
            <div>
              <Image
                src={BannerImage2.src}
                width={BannerImage2.width}
                height={BannerImage2.height}
                alt=""
              />
            </div>
          </ImageContainer>
          <InfoContainer size={12} xl={6}>
            <Row>
              <InfoSubtitle>Nossos serviços</InfoSubtitle>
              <h2 className="h2">
                Fabricamos todos os tipos de resistências industriais!
              </h2>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                dolorem est nostrum asperiores odio dolores voluptas iusto nemo,
                optio nam eius veniam soluta, quibusdam commodi minus animi
                provident placeat inventore tempora possimus voluptates alias.
                Repellat, saepe! Quasi iusto, velit dolorum laboriosam id neque.
                Voluptatem repudiandae dolorem aliquid blanditiis ullam.
              </p>

              <Button
                cta={{
                  text: "Faça seu orçamento!",
                  url: "/",
                }}
              />
            </Row>
          </InfoContainer>
        </Row>
      </Container>
    </ImageDescriptionComponent>
  );
};
