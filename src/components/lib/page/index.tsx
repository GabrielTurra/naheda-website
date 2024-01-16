import React from "react";
import { Content, PageComponent } from "./Page.styles";
import { PageProps } from "./Page.types";
import { Header } from "@/src/components/header";
import { Footer } from "../../footer";

export const Page = React.forwardRef<HTMLDivElement, PageProps>(
  ({ children }, forwardedRef) => {
    return (
      <PageComponent ref={forwardedRef}>
        <Header />
        <Content id="content" tabIndex={0}>
          {children}
        </Content>
        <Footer />
      </PageComponent>
    );
  },
);
