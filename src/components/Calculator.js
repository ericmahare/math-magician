import React, { Component } from 'react';
import CalcUi from './CalcUi';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <CalcUi />
    );
  }
}

export default Calculator;
