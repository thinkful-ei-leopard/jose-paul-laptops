import React from 'react'

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

function Cart(props) {

  const summary = Object.keys(props.cherries).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const selectedOption = props.cherries[feature];


    return (
      <div className="summary__option" key={featureHash}>
        <div className="summary__option__label">{feature} </div>
        <div className="summary__option__value">{selectedOption.name}</div>
        <div className="summary__option__cost">
          {USCurrencyFormat.format(selectedOption.cost)}
        </div>
      </div>
    );
  });

  console.log(summary)
  return summary
}

export default Cart
