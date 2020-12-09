import React from 'react';
import CartContext from 'context/CartContext';
import { CartItem, CartHeader, CartFooter, Footer } from './styles';
import { QuantityAdjuster } from '../QuantityAdjuster';
import { RemoveLineItem } from '../RemoveLineItem';
import { navigate } from '@reach/router';
import { Button } from '../Button';

export function CartContents() {
  const { checkout, updateLineItem } = React.useContext(CartContext);
  const handleAdjustQuantity = ({ quantity, variantId }) => {
    updateLineItem({ quantity, variantId });
  };
  return (
    <section>
      <h1>Your cart</h1>
      {!!checkout?.lineItems && (
        <CartHeader>
          <div>Product</div>
          <div>Unit price</div>
          <div>Quantity</div>
          <div>Amount</div>
        </CartHeader>
      )}
      {checkout?.lineItems?.map(lineItem => (
        <CartItem key={lineItem.variant.id}>
          <div>
            <div>{lineItem.title}</div>
            <div>{lineItem.variant.title}</div>
          </div>
          <div>￥{lineItem.variant.price}</div>
          <div>
            <QuantityAdjuster
              lineItem={lineItem}
              onAdjust={handleAdjustQuantity}
            />
          </div>
          <div>￥{(lineItem.quantity * lineItem.variant.price).toFixed(2)}</div>
          <div>
            <RemoveLineItem lineItemId={lineItem.id} />
          </div>
        </CartItem>
      ))}
      {!!checkout?.lineItems && (
        <CartFooter>
          <div>
            <strong>Total:</strong>
          </div>
          <div>
            <span>￥{checkout?.totalPrice}</span>
          </div>
        </CartFooter>
      )}
      {!checkout?.lineItems && <h5>カートの中身は空です</h5>}
      <Footer>
        <div>
          <Button onClick={() => navigate(-1)}>Continue shopping</Button>
        </div>
        <div>
          {!!checkout?.webUrl && (
            <Button
              onClick={() => {
                window.location.href = checkout.webUrl;
              }}
            >
              Checkout
            </Button>
          )}
        </div>
      </Footer>
    </section>
  );
}
