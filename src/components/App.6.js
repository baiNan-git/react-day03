import React, { Component } from 'react';

class App extends Component {
  constructor (props) {
    super(props);
    console.log('1', this);
  }
  clickFn (id) {
    console.log(id, this)
  }
  render () {
    let _this = this;
    return (
      <div>
        <button onClick = { this.clickFn.bind(this, 33) }>react按钮</button>
      </div>
    )
  }
}

export default App;