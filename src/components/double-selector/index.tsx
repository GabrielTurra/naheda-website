import { Col, Container, Row } from "@/src/styles/grid";
import { DoubleSelectorComponent } from "./DoubleSelector.styles";
import { DoubleSelectorProps } from "./DoubleSelector.types";

export const DoubleSelector: React.FC<DoubleSelectorProps> = () => {
  return (
    <DoubleSelectorComponent>
      <Container fluid>
        <Row>
          <Col size={6}>a</Col>
          <Col size={6}>a</Col>
        </Row>
      </Container>
    </DoubleSelectorComponent>
  );
};
