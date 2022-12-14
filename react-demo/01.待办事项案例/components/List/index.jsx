import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'
import Item from '../Item'

export default class List extends Component {

  //props接收类型限制
  static propTypes = {
    updateToDo: PropTypes.func.isRequired,
    delToDo: PropTypes.func.isRequired,
    todoObj:PropTypes.object.isRequired
  }

  render() {
    const {todoObj, updateToDo, delToDo} = this.props;
    return (
      <div className='todo-container'>
        <ul className='todo-list'>
          {
            todoObj.todos.map(todo=>{
              return <Item key={todo.id} {...todo} updateToDo={updateToDo} delToDo={delToDo}/>})
          }
        </ul>
      </div>
    )
  }
}
