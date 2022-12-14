import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'
import './App.css'

export default class App extends Component {
  state = {users:[],isFirst:true,isLoading:false,error:''}
  constructor(props){
    super(props)
    this.setState(this.state)
  }

  updateAppState = (stateObj)=>{
    this.setState(stateObj)
  }

  render() {
    return (
      <React.StrictMode>
        <div className='wrapper'>
          <Search updateAppState={this.updateAppState}/>
          <List {...this.state}/>
        </div>
      </React.StrictMode>
    )
  }
}
