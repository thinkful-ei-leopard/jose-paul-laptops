import React from 'react';
import Option from './Option';

function CustomizeSection(props) {
  const features = Object.keys(props.features).map((feature, idx) => {
    return (
      <Option
        key={idx}
        feature={feature}
        idx={idx}
        features={props.features}
        ourState={props.ourState}
        usCurrency={props.usCurrency}
        updateFeature={props.updateFeature}
      />
    );
  });
  return (
    <form className="main__form">
      <h2>Customize your laptop</h2>
      {features}
    </form>
  );
}

export default CustomizeSection;
