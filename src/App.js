import React, { Component } from 'react';
import Header from './components/Header';
import Cart from './components/Cart';
import Total from './components/Total';
import CustomizeSection from './components/CustomizeSection';


import './App.css';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  // this sets our state
  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
    console.log(selected)
  };


  render() {
    return (
      <div className="App">
        <Header />
        <main>

         <CustomizeSection 
         usCurrency={USCurrencyFormat}
         features={this.props.features}
         ourState={this.state.selected}
         updateFeature={this.updateFeature}
         />

          <section className="main__summary">
            <h2>Your cart</h2>
            <Cart cartSummary={this.state.selected}/>
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                <Total ourState={this.state.selected}/>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
