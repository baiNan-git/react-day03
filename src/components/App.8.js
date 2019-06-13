import React, { Component } from 'react';

class App extends Component {
  constructor (props) {
    super(props);
    this.changeState = this.changeStateFn.bind(this) 
    this.state = {
      msg: 'hello state'
    }
  }
  changeStateFn () {
    console.log('1')
    this.setState({
      msg: 'hello setstate'
    }) 
  }
  render () {
    return (
      <div>
        { this.state.msg}
        <button onClick = { this.changeState }>react按钮</button>
      </div>
    )
  }
}

export default App;