import React, { Component } from 'react';

class App extends Component {
  constructor (props) {
    super(props);
    console.log('1', this);
  }
  btnClick () {
    console.log('2', this);
  }
  render () {
    return (
      <div>
        <button onClick = { this.btnClick }>react按钮</button>
      </div>
    )
  }
}

export default App;