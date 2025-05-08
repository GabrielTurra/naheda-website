import { LayoutProps } from "@/src/@types/LayoutProps";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      route: {
        title: "Test",
        layout: "Test",
        path: "/blog/test",
        content: {},
      },
    },
  };
};

const Test = () => {
  return <h1>Teste</h1>;
};

export default Test;