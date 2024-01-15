import { HighlightedItem } from "../HighlightedCards.styles";
import { HighlightedCounterItemProps } from "../HighlightedCards.types";

export const CounterItem: React.FC<HighlightedCounterItemProps> = ({
  count,
  description,
}) => {
  return (
    <HighlightedItem size={12} lg={4} xl={3}>
      <h4>{description}</h4>
      <span>{count}</span>
    </HighlightedItem>
  );
};
