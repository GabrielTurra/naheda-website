import { HomeLayout } from "@/src/layouts/home";
import { GetServerSideProps } from "next";

interface RouteProps {}

export const getServerSideProps: GetServerSideProps<RouteProps> = async () => {
  return {
    props: {},
  };
};

const Home = ({ ...props }: RouteProps) => {
  return <HomeLayout {...props} />;
};

export default Home;
