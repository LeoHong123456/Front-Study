import React, { Component } from 'react'
import Store from '../../reduxs/store'

export default class Count extends Component {
  
/*   componentDidMount(){
    Store.subscribe(()=>{
      this.setState({})
    })
  } */
  
  add=()=>{
    const {value} = this.selectValue
    Store.dispatch({type:'increment',data: value * 1})
  }

  sub=()=>{
    const {value} = this.selectValue;
    Store.dispatch({type:'decrement',data: value * 1})
  }

  subOdd=()=>{
    const {value} = this.selectValue;
    const count = Store.getState();
    if(count % 2 !== 0){
      Store.dispatch({type:'increment',data: value * 1})
    }
  }

  addAnys=()=>{
    const {value} = this.selectValue;
    setTimeout(()=>{
      Store.dispatch({type:'increment',data:value * 1})
    },500);

  }
  render() {
    return (
      <div>
        <h2>count:{Store.getState()}</h2>
        <select ref={c=> this.selectValue = c} name="pets" id="selectNumber" style={{width:60}}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>&nbsp;&nbsp;

        <button onClick={this.add}>+</button>&nbsp;&nbsp;
        <button onClick={this.sub}>-</button>&nbsp;&nbsp;
        <button onClick={this.subOdd}>奇数加</button>&nbsp;&nbsp;
        <button onClick={this.addAnys}>延迟加</button>
    </div>
    )
  }
}