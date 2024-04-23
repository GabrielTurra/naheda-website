import { Col, Container, Row } from "@/src/styles/grid";
import { FooterComponent, Logo } from "./Footer.styles";
import { FooterProps } from "./Footer.types";
import { FaInstagram } from "react-icons/fa";

import LogoImage from "@/public/naheda_logo.png";

export const Footer: React.FC<FooterProps> = () => {
  return (
    <FooterComponent className="bg-gray800">
      <Container className="global-section">
        <Row>
          <Col size={12} xl={4} className="my-8 my-xl-0">
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
            <span>Naheda Resistências e elétrica © 2015</span>
          </Col>
          <Col size={12} xl={4} className="my-8 my-xl-0">
            <Row>
              <Col size={12}>
                {/* <span>Vila Itapoan, 07124460</span> */}
                <p>Guarulhos, SP</p>
              </Col>
              <Col size={12} className="my-4">
                <p>(11) 2937-9630</p>
              </Col>
              <Col size={12}>
                <a href="mailto:vendas@nahedaresistencias.com.br">
                  comercial@nahedaresistencias.com.br
                </a>
              </Col>
            </Row>
          </Col>
          <Col size={12} xl={4} className="my-8 my-xl-0">
            <a
              target="_blank"
              href="https://www.instagram.com/nahedaresistencias/"
            >
              <FaInstagram size={35} />
            </a>
          </Col>
        </Row>
      </Container>
      <div className="bg-black py-2"></div>
    </FooterComponent>
  );
};
