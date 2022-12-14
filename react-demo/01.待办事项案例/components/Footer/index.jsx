import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
  
  handleCheck = (event)=>{
    const flag = event.target.checked;
    this.props.handleCheckAll(flag);
  }
  
  handleClearDoneToDo = ()=>{
    this.props.clearDoneToDo()
  }

  render() {
    const {todos} = this.props.todoObj;
    const todoCount  = todos.length;
    const doneCount = todos.reduce((pre, curObj)=>pre + (curObj.todo ? 1 : 0), 0)
    return (
      <div className='footer-container'>
        <label>
          <input type="checkbox" onChange={this.handleCheck} checked={todoCount === doneCount && todoCount !== 0 ? true : false}/>
        </label>
        <span>总计/已完成:{todoCount} / {doneCount}</span>
        <button onClick={this.handleClearDoneToDo}>清除已完成的待办事项</button>
      </div>
    )
  }
}
