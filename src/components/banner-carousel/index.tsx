import {
  BannerCarouselComponent,
  BannerTitle,
  BannerContent,
  BannerInfo,
  ImageContainer,
  BannerCarouselBackground,
  BannerItem,
  BannerSelectorContent,
  PageCount,
} from "./BannerCarousel.styles";
import { BannerCarouselProps } from "./BannerCarousel.types";

import Image from "next/image";
import { Col, Container, Row } from "@/src/styles/grid";

import BannerImage1 from "@/public/example/example-image-01.jpg";
import BannerImage2 from "@/public/example/example-image-02.jpg";
import BannerImage3 from "@/public/example/example-image-03.jpg";

import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import { Button } from "../lib/button";
import { useState } from "react";

const BannerData = [
  {
    title: "Bem vindo a nossa fábrica!",
    subtitle: "Lorem Ipsum Subtitle",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Dolorem, qui ipsa et repellendus magni natus accusamus rem
              consectetur, corporis eligendi architecto alias debitis
              quisquam asperiores possimus a fugit hic fugiat.`,
    image: BannerImage1,
  },
  {
    title: "Outro Título bom bem aqui chefe!",
    subtitle: "Lorem Ipsum Subtitle",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Dolorem, qui ipsa et repellendus magni natus accusamus rem
              consectetur, corporis eligendi architecto alias debitis
              quisquam asperiores possimus a fugit hic fugiat.`,
    image: BannerImage2,
  },
  {
    title: "Eita, mais um título bom aqui!",
    subtitle: "Lorem Ipsum Subtitle",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Dolorem, qui ipsa et repellendus magni natus accusamus rem
              consectetur, corporis eligendi architecto alias debitis
              quisquam asperiores possimus a fugit hic fugiat.`,
    image: BannerImage3,
  },
];

export const BannerCarousel: React.FC<BannerCarouselProps> = () => {
  const [itemSource, setItemSource] = useState(0);

  const updateBannerContent = (index: number) => {
    setItemSource(index);
  };

  return (
    <BannerCarouselComponent>
      <BannerCarouselBackground>
        <ImageContainer>
          <Row>
            <Col size={12} xl={8}>
              <Image
                key={`image-key-${itemSource}`}
                src={BannerData[itemSource].image.src}
                width={BannerData[itemSource].image.width}
                height={BannerData[itemSource].image.height}
                alt=""
              />
            </Col>
          </Row>
        </ImageContainer>
        <Container>
          <Row>
            <BannerContent size={12} xl={8} className="">
              <Row className="align-center">
                <div>
                  <BannerTitle key={`title-key-${itemSource}`}>
                    {BannerData[itemSource].title}
                  </BannerTitle>
                  <Button
                    key={`button-key-${itemSource}`}
                    text="Faça seu orçamento!"
                  />
                  <PageCount key={`pageCount-key-${itemSource}`}>
                    <span>
                      {itemSource + 1}/{BannerData.length}
                    </span>
                  </PageCount>
                </div>
              </Row>
            </BannerContent>
            <BannerInfo size={12} xl={4}>
              <Row className="content-center text-white">
                <Col size={12}>
                  <h2 key={`subtitle-key-${itemSource}`}>
                    {BannerData[itemSource].subtitle}
                  </h2>
                  <p key={`paragraph-key-${itemSource}`}>
                    {BannerData[itemSource].content}
                  </p>
                </Col>
                <Col size={12}>
                  <BannerSelectorContent>
                    {BannerData.map((bannerItem, index) => (
                      <BannerItem onClick={() => updateBannerContent(index)}>
                        <Image
                          src={bannerItem.image.src}
                          width={bannerItem.image.width}
                          height={bannerItem.image.height}
                          alt=""
                        />
                      </BannerItem>
                    ))}
                  </BannerSelectorContent>
                </Col>
              </Row>
            </BannerInfo>
          </Row>
        </Container>
      </BannerCarouselBackground>
    </BannerCarouselComponent>
  );
};
