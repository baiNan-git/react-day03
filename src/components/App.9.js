import React, { Component } from 'react';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      msg: 'hello state'
    }
  }
  changeState () {
    this.setState({
      msg: 'hello setstate'
    }) 
  }
  render () {
    return (
      <div>
        { this.state.msg}
        <button onClick = { () => this.changeState() }>react按钮</button>
      </div>
    )
  }
}

export default App;