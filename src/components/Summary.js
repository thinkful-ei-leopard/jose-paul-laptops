import React from 'react'
import Cart from './Cart'
import Total from './Total'


export default function Summary(props) {
   return (
    <section className="main__summary">
    <h2>Your cart</h2>
    <Cart cherries={props.cartSummary} />
    <div className="summary__total">
      <div className="summary__total__label">Total</div>
      <div className="summary__total__value">
        <Total blueberry={props.ourState} />
      </div>
    </div>
  </section>
   )
}
