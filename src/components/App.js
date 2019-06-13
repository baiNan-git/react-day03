import React, { Component } from 'react';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      list: [
        {
          brand: '康师傅',
          data: ['老谭酸菜', '红烧牛肉', '鲜虾鱼板面', '小鸡炖蘑菇']
        },
        {
          brand: '统一',
          data: ['藤椒牛肉', '葱爆牛肉', '葱烧排骨面']
        }
      ]
    }
  }

  render () {
    let arr = [];
    this.state.list.map((item, index) => {
      let arrItem = [];
      item.data.map((ite, ind) => {
        arrItem.push(<li key = { ind }>{ ite }</li>)
      })
      arr.push(<li key = { index }>{ item.brand } <ul>{ arrItem }</ul></li>)
    })

    return (
      <ul>
        { arr }
      </ul>
    )
  }
}

export default App;