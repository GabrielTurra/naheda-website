import { Row } from "@/src/styles/grid";
import {
  ContentSection,
  DoubleSelectorComponent,
  SelectorCol,
} from "./DoubleSelector.styles";
import { DoubleSelectorProps } from "./DoubleSelector.types";
import Image from "next/image";

export const DoubleSelector: React.FC<DoubleSelectorProps> = ({ items }) => {
  return (
    <DoubleSelectorComponent>
      <div>
        <Row>
          {items.map((selectorItemData) => (
            <SelectorCol>
              <ContentSection>
                <h2>{selectorItemData.title}</h2>
                <p>{selectorItemData.description}</p>
              </ContentSection>
              <Image
                src={selectorItemData.image.src}
                width={selectorItemData.image.width}
                height={selectorItemData.image.height}
                alt=""
              />
            </SelectorCol>
          ))}
        </Row>
      </div>
    </DoubleSelectorComponent>
  );
};
