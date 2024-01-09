import { Container, Row } from "@/src/styles/grid";
import {
  DoubleSelectorComponent,
  SelectorCol,
  SelectorTitle,
} from "./DoubleSelector.styles";
import { DoubleSelectorProps } from "./DoubleSelector.types";
import Image from "next/image";

import Image1 from "@/public/example/example-image-01.jpg";
import Image2 from "@/public/example/example-image-03.jpg";

export const DoubleSelector: React.FC<DoubleSelectorProps> = () => {
  return (
    <DoubleSelectorComponent>
      <div>
        <Row>
          <SelectorCol>
            <SelectorTitle>Linha Industrial</SelectorTitle>
            <Image
              src={Image1.src}
              width={Image1.width}
              height={Image1.height}
              alt=""
            />
          </SelectorCol>
          <SelectorCol>
            <SelectorTitle>Linha Residencial</SelectorTitle>
            <Image
              src={Image2.src}
              width={Image2.width}
              height={Image2.height}
              alt=""
            />
          </SelectorCol>
        </Row>
      </div>
    </DoubleSelectorComponent>
  );
};
