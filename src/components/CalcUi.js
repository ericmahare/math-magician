import React, { Component } from 'react';

class CalcUi extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="calc-container">
        <span className="result">0</span>
        <span className="content-span position">
          AC
        </span>
        <span className="content-span position">+/-</span>
        <span className="content-span position">%</span>
        <span className="position aside">/</span>
        <span className="content-span position">7</span>
        <span className="content-span position">8</span>
        <span className="content-span position">9</span>
        <span className="position aside">x</span>
        <span className="content-span position">4</span>
        <span className="content-span position">5</span>
        <span className="content-span position">6</span>
        <span className="position aside">-</span>
        <span className="content-span position">1</span>
        <span className="content-span position">2</span>
        <span className="content-span position">3</span>
        <span className="position aside">+</span>
        <span className="zero position">0</span>
        <span className="content-span position">.</span>
        <span className="position aside">=</span>
      </div>
    );
  }
}

export default CalcUi;
