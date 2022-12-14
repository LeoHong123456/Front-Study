import React, { Component } from 'react'

export default class SetStateHook extends Component {

  state = {count: 0}

  add=()=>{
    //对象语法糖写法
    // this.setState({count:this.state.count + 1})

    // 对象写法,setState是react异步执行的，第二个参数【可选参数】回调方法等页面渲染完成才会执行
    // this.setState({count:this.state.count +1}, ()=>{
    //   console.log('Count='+ this.state.count);
    // })

    //函数式写法
    this.setState(state=>({count:state.count + 1}), ()=>{
      console.log('Count='+ this.state.count);
    })
  }
  
  render() {
    return (
      <div>
        <h2>当前COUNT值: {this.state.count}</h2>
        <button onClick={this.add}>点击加1</button>
      </div>
    )
  }
}
