import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '0',
      currentNumber: '',
      prevNumber: '',
      operation:''
    }
  }

  addValue = (value) => {
    this.setState({
      value: this.state.value === '0'? String(value) : this.state.value + value
    })
  }

  addDot = (value) => {
    if(this.state.value.indexOf('.') === -1) {
      this.setState({
        value: this.state.value + value
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
            <button className='key key-fn'>/</button>
            <button className='key key-fn'>*</button>
            <button className='key key-fn'>-</button>
            <button className='key key-fn'>+</button>
            <button className='key key-fn'>=</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
