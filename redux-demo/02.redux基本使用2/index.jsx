import React from 'react'
import ReactDOM from 'react-dom/client'
import stroe from './reduxs/store'
import App from './App'


const react = ReactDOM.createRoot(document.querySelector('#root'));
react.render(<App/>)

stroe.subscribe(()=>{
  react.render(<App/>)
})

