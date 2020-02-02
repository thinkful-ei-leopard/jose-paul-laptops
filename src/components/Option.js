import React from 'react';
import OptionItem from './OptionItem';

function Option(props) {
  const featureHash = props.feature + '-' + props.idx;
  const options = props.features[props.feature].map(item => {
    return (
      <OptionItem
        item={item}
        feature={props.feature}
        features={props.features}
        ourState={props.ourState}
        usCurrency={props.usCurrency}
        updateFeature={props.updateFeature}
      />
    );
  });
  return (
    <fieldset className="feature" key={featureHash}>
      <legend className="feature__name">
        <h3>{props.feature}</h3>
      </legend>
      {options}
    </fieldset>
  );
}

export default Option;
