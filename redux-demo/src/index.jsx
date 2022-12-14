import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import store from './reduxs/store'
import App from './App'


const react = ReactDOM.createRoot(document.querySelector('#root'));
react.render(

  //此处需要用Provider包裹App,目的是让App所有的后代容器组件都能接受到store
  <Provider store={store}>
    <App/>
  </Provider>)

//监测redux中的状态的改变，如果redux的状态发生了改变，那么重新渲染组件
// react-redux不需要手工监测,容器自动监测
/* stroe.subscribe(()=>{
  react.render(<App/>)
}) */

