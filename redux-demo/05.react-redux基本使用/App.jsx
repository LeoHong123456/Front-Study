import React from 'react'
import Count from './containers/Count'
import store from './reduxs/store'

export default function App() {
  return (
    <div>
      <Count store={store}/>
    </div>
  )
}
