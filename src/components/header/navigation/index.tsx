import { useCollapsiblenavigation } from "@/src/hooks/CollapsibleNavigation";
import {
  CollapsibleNavigation,
  CollapsibleOverlay,
  NavigationComponent,
  NavigationContent,
} from "../header.styles";
import { HeaderNavigationProps } from "../header.types";

import { AnimatedHamburguer } from "../animated-hamburguer";

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

      <AnimatedHamburguer
        checked={controlCollapsible.isOpen}
        onClick={() => controlCollapsible.toggleCollapsiblenavigation()}
      />
    </NavigationContent>
  );
};

export const Navigation = HeaderNavigation;
