import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { createIncrementAction, createDecrementAction, createAsyncrementAction } from '../../reduxs/action/count'

function Count(props) {
  const selectValue = useRef(null)
  function add() {
    return () => {
      const { current: { value } } = selectValue;
      props.increment(value * 1);
    }
  }
  function sub() {
    return () => {
      const { current: { value } } = selectValue;
      props.decrement(value * 1);
    }
  }
  function oddAdd() {
    return () => {
      const { current: { value } } = selectValue;
      if (props.count % 2 === 0) {
        props.increment(value * 1);
      }
    }
  }
  function asyncAdd() {
    return () => {
      const { current: { value } } = selectValue;
      props.createAsyncrement(value * 1, 1000);
    }
  }
  return (
    <div>
      <h2>Count组件,person组件统计：{props.personTotal}</h2>
      <h4>count: {props.count}</h4>

      <select ref={selectValue} style={{ width: 50 }}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>

      <button onClick={add()}>+</button>
      <button onClick={sub()}>-</button>
      <button onClick={oddAdd()}>偶数加</button>
      <button onClick={asyncAdd()}>异步加</button>
    </div>
  )
}

export default connect(
  state => ({ count: state.count, personTotal: state.person.length}),
  {
    increment: createIncrementAction,
    decrement: createDecrementAction,
    createAsyncrement: createAsyncrementAction
  }
)(Count)
