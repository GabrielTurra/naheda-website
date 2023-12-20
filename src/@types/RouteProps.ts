import { HomeLayoutContentProps } from "../layouts/home/HomeLayout.types";

export interface RouteProps {
  title: string;
  path: string;
  layout: string;
  content: HomeLayoutContentProps;
  // seo: SeoProps;
  // breadcrumbs?: LinkProps[];
}
