// External Dependencies
import React, { useState } from "react";
import Image from "next/image";

// Internal Dependencies
import { Col, Container, Row } from "@/src/styles/grid";
import { Button } from "../lib";

// Typings
import { BannerCarouselProps } from "./BannerCarousel.types";

// Styles
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
  ItemOverlay,
  TextTopic,
} from "./BannerCarousel.styles";

export const BannerCarousel: React.FC<BannerCarouselProps> = ({
  itemsCarousel,
}) => {
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
                src={itemsCarousel[itemSource].image.src}
                width={itemsCarousel[itemSource].image.width}
                height={itemsCarousel[itemSource].image.height}
                alt=""
                priority
              />
            </Col>
          </Row>
        </ImageContainer>
        <Container>
          <Row>
            <BannerContent size={12} xl={8} className="">
              <Row className="align-center pt-30 pt-xl-0 border-box">
                <div>
                  <BannerTitle key={`title-key-${itemSource}`}>
                    {itemsCarousel[itemSource].title}
                  </BannerTitle>
                  <Button
                    key={`button-key-${itemSource}`}
                    cta={itemsCarousel[itemSource].cta}
                  />
                  <PageCount key={`pageCount-key-${itemSource}`}>
                    <span>
                      {itemSource + 1}/{itemsCarousel.length}
                    </span>
                  </PageCount>
                </div>
              </Row>
            </BannerContent>
            <BannerInfo size={12} xl={4}>
              <Row className="text-white">
                <Col size={12} className="self-end">
                  <h2 key={`subtitle-key-${itemSource}`}>
                    {itemsCarousel[itemSource].subtitle}
                  </h2>
                  <p key={`paragraph-key-${itemSource}`}>
                    {itemsCarousel[itemSource].content}
                  </p>
                </Col>
                <Col size={12}>
                  <BannerSelectorContent>
                    {itemsCarousel.map((bannerItem, index) => (
                      <BannerItem
                        key={`slider-selector-${bannerItem.id}`}
                        onClick={() => updateBannerContent(index)}
                        className={`${itemSource === index ? "active" : ""}`}
                      >
                        <Image
                          src={bannerItem.image.src}
                          width={280}
                          height={320}
                          alt=""
                          priority
                        />
                        <ItemOverlay />
                        <TextTopic>
                          <h3>{bannerItem.topic}</h3>
                          {/* <p>{bannerItem.subtitle}</p> */}
                        </TextTopic>
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
