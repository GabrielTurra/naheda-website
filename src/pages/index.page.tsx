import { HomeLayout } from "@/src/layouts/home";
import { GetStaticProps } from "next";

interface RouteProps {}

export const getStaticProps: GetStaticProps<RouteProps> = async () => {
  return {
    props: {},
  };
};

const Home = ({ ...props }: RouteProps) => {
  return <HomeLayout {...props} />;
};

export default Home;
