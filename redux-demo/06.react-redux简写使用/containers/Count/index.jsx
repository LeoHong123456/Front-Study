//引入Count的UI组件
import CountUI from '../../components/Count'
//引入connect 用于连接UI组件与redux
import {connect} from 'react-redux'
import {createIncrementAction,createDecrementAction,createAsyncrementAction} from '../../reduxs/action/count_action'


//使用connect()()创建并暴露一个Count的容器组件
export default connect(
    state=>({count: state}),
    //mapDispatchToProps一般写法
    /* dispatch=>({
        increment:data=>dispatch(createIncrementAction(data)),
        decrement:data=>dispatch(createDecrementAction(data)),
        createAsyncrement:(data, time)=>dispatch(createAsyncrementAction(data, time))
      })*/
      
      //mapDispatchToProps精简写法
      {
        increment:createIncrementAction,
        decrement:createDecrementAction,
        createAsyncrement:createAsyncrementAction
      }
   )(CountUI)
