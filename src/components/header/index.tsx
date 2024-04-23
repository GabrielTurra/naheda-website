import { useCallback, useEffect, useState } from "react";
import {
  AccessibilityButton,
  HeaderComponent,
  Logo,
  ReturnToTop,
} from "./header.styles";
import { HeaderProps } from "./header.types";

import { Col, Container, Row } from "@/src/styles/grid";
import { Navigation } from "./navigation";

import LogoImage from "@/public/naheda_logo.png";

import { GoMoveToTop } from "react-icons/go";

import { debounce } from "@/src/utils/debounce";

export const Header: React.FC<HeaderProps> = () => {
  const [isPageScrolled, setIsPageScrolled] = useState(false);

  const monitorScrollbarPosition = useCallback(
    debounce(() => {
      setIsPageScrolled(window.scrollY > 200);
    }, 300),
    [],
  );

  useEffect(() => {
    document.addEventListener("scroll", monitorScrollbarPosition);
  }, []);

  return (
    <>
      <HeaderComponent active={isPageScrolled}>
        <Container>
          <AccessibilityButton
            onClick={() => document.getElementById("content")?.focus()}
          >
            Ir para o conteúdo
          </AccessibilityButton>
          <Row>
            <Col size={2}>
              <a href="/">
                <Logo
                  quality={100}
                  src={LogoImage.src}
                  width={LogoImage.width}
                  height={LogoImage.height}
                  alt="Naheda Brand Logo"
                  priority
                />
              </a>
            </Col>
            <Col size={8}>
              <Navigation />
            </Col>
          </Row>
        </Container>
      </HeaderComponent>

      <ReturnToTop
        isVisible={isPageScrolled}
        onClick={() => window.scrollTo(0, 0)}
      >
        <GoMoveToTop size={25} />
      </ReturnToTop>
    </>
  );
};
