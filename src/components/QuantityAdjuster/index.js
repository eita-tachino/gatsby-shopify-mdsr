import React from 'react';
import { QuantityAdjusterWrapper, AdjusterButton } from './styles';

export function QuantityAdjuster({ lineItem, onAdjust }) {
  const { quantity } = lineItem;

  const handleDecrementQuantity = () => {
    onAdjust({ variantId: lineItem.variant.id, quantity: -1 });
  };
  const handleIncrementQuantity = () => {
    onAdjust({ variantId: lineItem.variant.id, quantity: 1 });
  };
  return (
    <QuantityAdjusterWrapper>
      <AdjusterButton onClick={handleDecrementQuantity}>-</AdjusterButton>
      <div>{quantity}</div>
      <AdjusterButton onClick={handleIncrementQuantity}>+</AdjusterButton>
    </QuantityAdjusterWrapper>
  );
}
