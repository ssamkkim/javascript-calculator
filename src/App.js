import React from 'react';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formula: '',
      output: '0'
    };
    this.handleNum = this.handleNum.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
    this.handleEq = this.handleEq.bind(this);
    this.handleDec = this.handleDec.bind(this);
  };;

  handleNum(e) {
    if(e.target.value === "0" && this.state.formula === "0") {
      this.setState({
        formula: '0',
        output: e.target.value,
      });
    } else {
      if(this.state.formula === "0") {
        this.setState(prevState => ({
          formula: e.target.value,
          output: e.target.value,
        }));
      } else {
        if(/[0-9]/.test(this.state.output)) {
          this.setState(prevState => ({
            formula: prevState.formula + e.target.value,
            output: prevState.formula + e.target.value,
          }));
        } else {
          this.setState(prevState => ({
            formula: prevState.formula + e.target.value,
            output: e.target.value,
          }));
        }
      }
    }
  }

  handleClear() {
    this.setState({
      formula: '',
      output: '0'
    })
  };

  handleOperator(e) {
    this.setState(prevState => ({
      formula: prevState.formula + e.target.value,
      output: e.target.value
    }));
  }

  handleEq(e) {
    let str = this.state.formula.replace(/[^-()\d/*+.]/g, '');
    let formulaAns = eval(str);
    this.setState(prevState => ({
      formula: formulaAns,
      output: formulaAns
    }));
  }

  handleDec(e) {
    if(!this.state.output.includes(".")) {
      this.setState(prevState => ({
        formula: prevState.formula + e.target.value,
        output: prevState.output + e.target.value
      }));
    } 
  }

  render(){
    return (
      <div id="app">
        <div id="calculator">
        <div id="formula">{this.state.formula}</div>
          <div id="display">{this.state.output}</div>
          <button id="zero" value="0" onClick={this.handleNum}>0</button>
          <button id="one" value="1" onClick={this.handleNum}>1</button>
          <button id="two" value="2" onClick={this.handleNum}>2</button>
          <button id="three" value="3" onClick={this.handleNum}>3</button>
          <button id="four" value="4" onClick={this.handleNum}>4</button>
          <button id="five" value="5" onClick={this.handleNum}>5</button>
          <button id="six" value="6" onClick={this.handleNum}>6</button>
          <button id="seven" value="7" onClick={this.handleNum}>7</button>
          <button id="eight" value="8" onClick={this.handleNum}>8</button>
          <button id="nine" value="9" onClick={this.handleNum}>9</button>
          <button id="clear" value="clear" onClick={this.handleClear}>AC</button>
          <button id="add" value="+" onClick={this.handleOperator}>+</button>
          <button id="subtract" value="-" onClick={this.handleOperator}>-</button>
          <button id="multiply" value="*" onClick={this.handleOperator}>x</button>
          <button id="divide" value="/" onClick={this.handleOperator}>/</button>
          <button id="equals" value="=" onClick={this.handleEq}>=</button>
          <button id="decimal" value="." onClick={this.handleDec}>.</button>
        </div>  
      </div>
      
    );
  }
  
}

export default App;
