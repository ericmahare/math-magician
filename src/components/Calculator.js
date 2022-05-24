import React, { Component } from 'react';
import calculate from '../logic/Calculate';
// import operate from '../logic/Operate';

import CalcUi from './CalcUi';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  handleKeyPress = (buttonName) => {
    this.setState((state) => calculate(state, buttonName));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <CalcUi
        operate={this.handleKeyPress}
        total={total}
        next={next}
        operation={operation}
      />
    );
  }
}

export default Calculator;
