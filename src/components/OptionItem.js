import React from 'react';
import slugify from 'slugify';

function OptionItem(props) {
  const itemHash = slugify(JSON.stringify(props.item));
      return (
        <div key={itemHash} className="feature__item">
          <input
            type="radio"
            id={itemHash}
            className="feature__option"
            name={slugify(props.feature)}
            checked={props.item.name === props.ourState[props.feature].name}
            onChange={e => props.updateFeature(props.feature, props.item)}
          />
          <label htmlFor={itemHash} className="feature__label">
            {props.item.name} ({props.usCurrency.format(props.item.cost)})
          </label>
        </div>
  )
}

export default OptionItem
