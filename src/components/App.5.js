import React, { Component } from 'react';

class App extends Component {
  constructor (props) {
    super(props);
    console.log('1', this);
  }
  clickFn (event, id) {
    console.log(id, this)
  }
  render () {
    let _this = this;
    return (
      <div>
        <button onClick = { function (e) {return _this.clickFn(e, 11)} }>react按钮</button>
        <button onClick = { (e) => {_this.clickFn(e, 22)}}>react按钮2</button>
      </div>
    )
  }
}

export default App;