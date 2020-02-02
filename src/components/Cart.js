import React from 'react';
import CartItem from './CartItem';
import Total from './Total';

function Cart(props) {
  const summary = Object.keys(props.ourState).map((feature, idx) => {
    return <CartItem
    key={idx}
      feature={feature}
      idx={idx}
      ourState={props.ourState}
      usCurrency={props.usCurrency}
    />;
  });
  return (
    <section className="main__summary">
      <h2>Your cart</h2>
      {summary}
      <Total ourState={props.ourState} usCurrency={props.usCurrency} />
    </section>
  );
}

export default Cart;
