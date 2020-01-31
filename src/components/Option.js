// import React from 'react'
// import slugify from 'slugify';

// const USCurrencyFormat = new Intl.NumberFormat('en-US', {
//   style: 'currency',
//   currency: 'USD'
// });

// function Option(props) {
//   const features = Object.keys(features).map((feature, idx) => {
//     const featureHash = feature + '-' + idx;
//     const options = props.features[feature].map(item => {
//       const itemHash = slugify(JSON.stringify(item));
//       return (
//         <div key={itemHash} className="feature__item">
//           <input
//             type="radio"
//             id={itemHash}
//             className="feature__option"
//             name={slugify(feature)}
//             checked={item.name === props.state.selected[feature].name}
//             onChange={e => props.updated(feature, item)}
//           />
//           <label htmlFor={itemHash} className="feature__label">
//             {item.name} ({USCurrencyFormat.format(item.cost)})
//           </label>
//         </div>
//       );
//     });

//     return (
//       <fieldset className="feature" key={featureHash}>
//         <legend className="feature__name">
//           <h3>{feature}</h3>
//         </legend>
//         {options}
//       </fieldset>
//     );
//   });
// }

// export default Option
