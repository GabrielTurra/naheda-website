import { useCollapsiblenavigation } from "@/src/hooks/CollapsibleNavigation";
import {
  CollapsibleNavigation,
  CollapsibleOverlay,
  NavigationComponent,
  NavigationContent,
} from "../header.styles";
import { HeaderNavigationProps } from "../header.types";

import { FaXmark, FaBarsStaggered } from "react-icons/fa6";

const HeaderNavigation: React.FC<HeaderNavigationProps> = () => {
  const controlCollapsible = useCollapsiblenavigation();

  return (
    <NavigationContent>
      <NavigationComponent>
        <li>Para Industria</li>
        <li>Para Residência</li>
        <li>Nossa Fábrica</li>
        <li>Contate-nos</li>
      </NavigationComponent>

      <CollapsibleNavigation isOpen={controlCollapsible.isOpen}>
        <FaXmark
          size={25}
          onClick={() => controlCollapsible.closeCollapsiblenavigation()}
        />
        <ul>
          <li>Para Industria</li>
          <li>Para Residência</li>
          <li>Nossa Fábrica</li>
          <li>Contate-nos</li>
        </ul>
      </CollapsibleNavigation>

      <CollapsibleOverlay
        isOpen={controlCollapsible.isOpen}
        onClick={() => controlCollapsible.closeCollapsiblenavigation()}
      />

      <FaBarsStaggered
        onClick={() => controlCollapsible.toggleCollapsiblenavigation()}
        size={25}
      />
    </NavigationContent>
  );
};

export const Navigation = HeaderNavigation;
