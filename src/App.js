import React from 'react';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      output: ''
    };
  };
  render(){
    return (
      <div id="app">
        <div id="calculator">
          <div id="display"></div>
          <button id="zero">0</button>
          <button id="one">1</button>
          <button id="two">2</button>
          <button id="three">3</button>
          <button id="four">4</button>
          <button id="five">5</button>
          <button id="six">6</button>
          <button id="seven">7</button>
          <button id="eight">8</button>
          <button id="nine">9</button>
          <button id="clear">AC</button>
          <button id="add">+</button>
          <button id="subtract">-</button>
          <button id="multiply">x</button>
          <button id="divide">/</button>
          <button id="equals">=</button>
          <button id="decimal">.</button>
        </div>  
      </div>
      
    );
  }
  
}

export default App;
