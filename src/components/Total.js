import React from 'react'

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

function Total(props) {
  const totalnum = Object.keys(props.ourState).reduce(
    (acc, curr) => acc + props.ourState[curr].cost,
    0
  );
  return (
    <div className="summary__total__value">
    {USCurrencyFormat.format(totalnum)}
  </div>
  )
}

export default Total
