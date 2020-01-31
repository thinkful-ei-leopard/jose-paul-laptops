import React, { Component } from 'react';
import Header from './components/Header';
import Option from './components/Option';
import Cart from './components/Cart';
import Total from './components/Total';


import './App.css';

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
          <form className="main__form">
            <h2>Customize your laptop</h2>
            <Option updated={this.updateFeature} optionState={this.props.features} currentState={this.state.selected}/>
          </form>
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
