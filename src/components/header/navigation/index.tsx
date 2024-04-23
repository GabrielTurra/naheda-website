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
        {/* <li>
          <a href="#">Para Industria</a>
        </li>
        <li>
          <a href="#">Para Residência</a>
        </li>
        <li>
          <a href="#">Nossa Fábrica</a>
        </li> */}
        <li>
          <a target="_blank" href="https://wa.me/+5511969837062">
            Contate-nos
          </a>
        </li>
      </NavigationComponent>

      <CollapsibleNavigation isOpen={controlCollapsible.isOpen}>
        <ul>
          {/* <li>
            <a href="#">Para Industria</a>
          </li>
          <li>
            <a href="#">Para Residência</a>
          </li>
          <li>
            <a href="#">Nossa Fábrica</a>
          </li> */}
          <li>
            <a target="_blank" href="https://wa.me/+5511969837062">
              Contate-nos
            </a>
          </li>
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
