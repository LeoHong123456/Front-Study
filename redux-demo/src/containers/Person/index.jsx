import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { createAddPersonAction } from '../../reduxs/action/person';
import { nanoid } from 'nanoid'

function Person(props) {
  const nameNode = useRef(null);
  const agetNode = useRef(null);

  function addPerson() {
    return () => {
      const username = nameNode.current.value;
      const age = agetNode.current.value * 1;
      const personObj = { id: nanoid(), username, age }
      props.addPerson(personObj);
      nameNode.current.value = '';
      agetNode.current.value = '';
    }
  }

  return (
    <div>
      <hr />
      <h2>person组件,count组件求和：{props.countSum}</h2>

      <div style={{ width: '500px', height: '40px', border: '1px solid #ccc', lineHeight: '40px' }}>
        <input ref={nameNode} type="text" placeholder='请输入姓名' />
        <input ref={agetNode} type="text" placeholder='请输入年龄' />
        <button onClick={addPerson()}>添加人员</button>
      </div>
      <div style={{ width: '500px', height: '500px', border: '1px solid #ccc' }}>
        <ul>
          {
            props.personArr.map((item) => {
              return (<li key={item.id}>姓名：{item.username} 年龄：{item.age} </li>)
            })
          }
        </ul>
      </div>
    </div>
  )
}


export default connect(
  state => ({
    personArr: state.persons,
    countSum: state.count
  }),
  {
    addPerson: createAddPersonAction
  }
)(Person)