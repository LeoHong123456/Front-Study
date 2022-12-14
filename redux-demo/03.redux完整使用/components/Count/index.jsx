import React,{useRef} from 'react'
import store from '../../reduxs/store'
//引入actionCreator 用于创建action对象
import {createIncrementAction, createDecrementAction} from '../../reduxs/action/count_action'

export default function Count() {

  const selectValue = useRef(null)

  function add(){
    return ()=>{
      const {current:{value}} = selectValue;
      store.dispatch(createIncrementAction(value*1))
    }
  } 
  
  function sub(){
    return ()=>{
      const {current:{value}} = selectValue;
      store.dispatch(createDecrementAction(value*1))
    }
  }

  function oddAdd(){  
    return ()=>{
      const count = store.getState();
      const {current:{value}} = selectValue;
      if(count % 2 ===0){
        store.dispatch(createIncrementAction(value*1))
      }
    }
  }

  function anysAdd(){
    return ()=>{
      const {current:{value}} = selectValue;
      setTimeout(()=>{
        store.dispatch(createIncrementAction(value*1))
      },500)
    }
  }

  return (
    
    <div>
      <h2>count: {store.getState()}</h2>
      <select ref={selectValue} style={{width:50}}>  
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>

      <button onClick={add()}>+</button>
      <button onClick={sub()}>-</button>
      <button onClick={oddAdd()}>偶数加</button>
      <button onClick={anysAdd()}>异步加</button>
    </div>
  )
}
