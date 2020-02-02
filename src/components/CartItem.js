import React from 'react';

function CartItem(props) {
 
    const featureHash = props.feature + '-' + props.idx;
    const selectedOption = props.ourState[props.feature];

    return (
        <div className="summary__option" key={featureHash}>
          <div className="summary__option__label">{props.feature}</div>
          <div className="summary__option__value">{selectedOption.name}</div>
          <div className="summary__option__cost">
            {props.usCurrency.format(selectedOption.cost)}
          </div>
        </div>
    );
  };

export default CartItem;
