import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '0',
      currentNumber: '',
      prevNumber: '',
      operation:'',
      someOperation: true
    }
  }

  addValue = (value) => {
    if(this.state.someOperation === true) {
      this.setState({
        value: this.state.value === '0' ? String(value) : this.state.value + value
      })
    }
    else {
      this.setState({
        value: String(value),
        someOperation: true
      })
    }
    
  }

  addDot = (value) => {
    if(this.state.value.indexOf('.') === -1) {
      this.setState({
        value: this.state.value + value,
        someOperation: true
      })
    }
    if(this.state.someOperation === false) {
      this.setState({
        value: '0' + value,
        someOperation: true
      })
    }
  }

  clear = () => {
    this.setState({
      value: '0'
    })
  }

  addMinus = () => {
    if(this.state.value === '0') {
      return;
    }
    this.setState({
      value: this.state.value.charAt(0) === '-' ? this.state.value.substr(1) : '-' + this.state.value
    })
  }

  persentage = () => {
    this.setState({
      value: this.state.value / 100
    })
  }

 operations = (value) => {
    this.setState({
      operation: value,
      someOperation: false,
      prevNumber: this.state.value
    })
 }

  evaluate = () => {
    this.state.currentNumber = this.state.value;

    if(this.state.operation === '-') {
      this.setState({
        value: ((parseFloat(this.state.prevNumber) * 10) - parseFloat(this.state.currentNumber) * 10) / 10
      })
    }
    if(this.state.operation === '+') {
      this.setState({
        value: ((parseFloat(this.state.prevNumber) * 10) + parseFloat(this.state.currentNumber) * 10) / 10
      })
    }
    if(this.state.operation === '/') {
      this.setState({
        value: parseFloat(this.state.prevNumber) / parseFloat(this.state.currentNumber)
      })
    }
    if(this.state.operation === '*') {
      this.setState({
        value: parseFloat(this.state.prevNumber) * parseFloat(this.state.currentNumber)
      })
    }
  }


  render() {
    return (
      <div className='calculator'>
        <div className='input'>{this.state.value}</div>
        <div className='calculator-keypad'>
          <div className='upper-row'>
            <button className='key' onClick = {() => this.clear()}>AC</button>
            <button className='key' onClick = {() => this.addMinus()}>±</button>
            <button className='key' onClick = {() => this.persentage()}>%</button>
          </div>
          <div className='keypad'>
            <button className='key key-0' onClick = {() => this.addValue(0)}>0</button>
            <button className='key key-dot' onClick = {() => this.addDot('.')}>.</button>
            <button className='key' onClick = {() => this.addValue(1)}>1</button>
            <button className='key' onClick = {() => this.addValue(2)}>2</button>
            <button className='key' onClick = {() => this.addValue(3)}>3</button>
            <button className='key' onClick = {() => this.addValue(4)}>4</button>
            <button className='key' onClick = {() => this.addValue(5)}>5</button>
            <button className='key' onClick = {() => this.addValue(6)}>6</button>
            <button className='key' onClick = {() => this.addValue(7)}>7</button>
            <button className='key' onClick = {() => this.addValue(8)}>8</button>
            <button className='key' onClick = {() => this.addValue(9)}>9</button>
          </div>
          <div className='functional-buttons'>
            <button className='key key-fn' onClick = {() => this.operations('/')}>/</button>
            <button className='key key-fn' onClick = {() => this.operations('*')}>*</button>
            <button className='key key-fn' onClick = {() => this.operations('-')}>-</button>
            <button className='key key-fn' onClick = {() => this.operations('+')}>+</button>
            <button className='key key-fn' onClick = {() => this.evaluate()}>=</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
