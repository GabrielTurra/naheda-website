import { AccessibilityButton, HeaderComponent, Logo } from "./header.styles";
import { HeaderProps } from "./header.types";

import { Col, Container, Row } from "@/src/styles/grid";
import { Navigation } from "./navigation";

import LogoImage from "@/public/naheda_logo.png";

export const Header: React.FC<HeaderProps> = () => {
  return (
    <HeaderComponent>
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
  );
};
