import React, { Component } from 'react';

class App extends Component {
  constructor (props) {
    super(props);
    this.btnClickFun = this.btnClick.bind(this)
    console.log('1', this);
  }
  btnClick () {
    console.log('2', this); 
  }
  render () {
    return (
      <div>
        <button onClick = { this.btnClickFun }>react按钮</button>
      </div>
    )
  }
}

export default App;