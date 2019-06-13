import React, { Component } from 'react';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      msg: 'hello state'
    }
  }
  render () {
    return (
      <div>
        { this.state.msg}
        <button onClick = { () => {
          this.setState({
            msg: 'hello setstate'
          })
        } }>react按钮</button>
      </div>
    )
  }
}

export default App;