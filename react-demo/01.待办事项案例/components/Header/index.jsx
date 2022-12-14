import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {

  handleKeyUp = (event)=>{
    const value = event.target.value;
    const key = event.key;
    if(key !== 'Enter') return ;
    if(value.trim() === ''){
      alert('请输入待办事项！')
      return
    }
    const todoObj = {id:nanoid(), content:value, done:false};
    //将todoObj传递给父组件方法
    this.props.addToDo(todoObj);
    //清空输入框
    event.target.value = "";
  }

  //对接受的props类型是否必须限制
  static propTypes={
    addToDo: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="search-container">
        <label>添加待办事项：</label>
        <input className='todo-input' type='text' onKeyUp={this.handleKeyUp} placeholder="请输入待办事项" />
      </div>
    )
  }
}
