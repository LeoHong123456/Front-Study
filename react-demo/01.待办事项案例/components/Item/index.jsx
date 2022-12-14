import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  state = {mouse:false}

  handleMouse = (flag)=>{
    return ()=>{
      this.setState({mouse: flag});
    }
  }

  handleCheck=(id)=>{
    return (event)=>{
      const checked = event.target.checked;
      this.props.updateToDo(id, checked);
    }
  }

  handleDel= (id)=>{
    if(window.confirm('你确定删除该待办事项吗?')){
      this.props.delToDo(id);
    }
  }
  
  render() {
    const {id,content,todo} = this.props;
    const {mouse} = this.state;
    return (
      /*handleMouse带小括号react会立即执行，需要返回一个函数*/
      <li style={{backgroundColor: mouse ? "#ddd" : "white"}} className='item' onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label><input type="checkbox" checked={todo} onChange={this.handleCheck(id)}/></label>
        <span>{content}</span>
        <button className='del-danger' onClick={()=>this.handleDel(id)} style={{display : mouse ? 'block' : 'none'}}>删除</button>
      </li>
    )
  }
}
