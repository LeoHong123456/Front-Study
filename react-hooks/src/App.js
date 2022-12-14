import React, { Component } from 'react'
import SetStateHook from './components/1_setState'
import RouterHook from './components/2_lazyLoad'

export default class App extends Component {
  render() {
    return (
      <div>
        <SetStateHook/>
        <RouterHook/>
      </div>
    )
  }
}
