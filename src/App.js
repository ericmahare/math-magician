import React from 'react';
import './assets/main.css';
import Calculator from './components/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <section className="app-container">
          <Calculator />
        </section>
      </div>
    );
  }
}

export default App;
