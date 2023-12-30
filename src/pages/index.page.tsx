import { HomeLayout } from "@/src/layouts/home";
import { GetStaticProps } from "next";
import { LayoutProps } from "../@types/LayoutProps";

import { HomeLayoutStaticData } from "@/src/data/mock/homepage";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      route: {
        title: "Homepage",
        layout: "HomeLayout",
        path: "/",
        content: HomeLayoutStaticData,
      },
    },
  };
};

const Home = ({ ...props }: LayoutProps) => {
  return <HomeLayout {...props} />;
};

export default Home;
