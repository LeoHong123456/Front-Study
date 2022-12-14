import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'


export default class App extends Component {
  state = {todos:[
    {id:1,content:'study react',todo:false},
    {id:2,content:'study flutter',todo:false},
    {id:3,content:'study html',todo:true},
    {id:4,content:'study css',todo:true}
  ]};

  addToDo = (todoObj)=>{
    const {todos} = this.state;
    const newToDos = [todoObj, ...todos];
    this.setState({todos:newToDos});
  }

  updateToDo = (id, done)=>{
    const {todos} = this.state;
    const newToDos = todos.map((todoObj)=>{
      if(todoObj.id === id) return {...todoObj, todo:done}
      else return todoObj
    })
    this.setState({todos:newToDos})
  }

  delToDo = (id)=>{
    console.log('id=', id)
    const {todos} = this.state;
    const newToDos = todos.filter((item)=>{
      return item.id !== id;
    })
    this.setState({todos:newToDos})
  }

  handleCheckAll = (flag)=>{
    const {todos} = this.state;
    const newToDos = todos.map((item)=>{
      return {...item,todo:flag}
    });
    this.setState({todos:newToDos});
  }

  clearDoneToDo = ()=>{
    const {todos} = this.state;
    const newToDos = todos.filter((item)=>!item.todo)
    this.setState({todos: newToDos})
  }

  render() {
    return (
      <div className='container'>
        <Header addToDo={this.addToDo}/>
        <List todoObj={this.state} updateToDo={this.updateToDo} delToDo={this.delToDo}/>
        <Footer todoObj={this.state} handleCheckAll={this.handleCheckAll}  clearDoneToDo={this.clearDoneToDo}/>
      </div>
    )
  }
}
