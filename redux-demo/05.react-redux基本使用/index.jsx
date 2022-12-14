import React from 'react'
import ReactDOM from 'react-dom/client'
import stroe from './reduxs/store'
import App from './App'


const react = ReactDOM.createRoot(document.querySelector('#root'));
react.render(<App/>)

//监测redux中的状态的改变，如果redux的状态发生了改变，那么重新渲染组件
stroe.subscribe(()=>{
  react.render(<App/>)
})

