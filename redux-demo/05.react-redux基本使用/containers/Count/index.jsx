//引入Count的UI组件
import CountUI from '../../components/Count'
//引入connect 用于连接UI组件与redux
import {connect} from 'react-redux'
import {createIncrementAction,
        createDecrementAction,
        createAsyncrementAction} from '../../reduxs/action/count_action'


//此函数返回的对象中的key,value就作为传递个UI组件props的key,value
//本质就是带状态过去
const mapStateToProps = (state)=>{
  return {count: state}
}

//此函数返回的对象中的key,value就作为传递个UI组件props的key,value
//本质就是把操作状态的方法带过去
const mapDispatchToProps = (dispatch)=>{
  return {
    increment:data=>dispatch(createIncrementAction(data)),
    decrement:data=>dispatch(createDecrementAction(data)),
    createAsyncrement:(data, time)=>dispatch(createAsyncrementAction(data, time))
  }
}

//使用connect()()创建并暴露一个Count的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
