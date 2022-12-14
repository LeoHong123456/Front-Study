import { INCREMENT, DECREMENT } from "../constant"

/**
 * 采用分别暴露的方式export
 * @param {} data 
 * @returns 
 */
//count减Action函数
export const increment = (data)=>({type: INCREMENT, data})

//count减Action函数
export const decrement = (data)=>({type: DECREMENT, data})


//count加异步Action函数(异步任务,需要引入中间件redux-thunk)
export const incrementAsync = (data,time)=>{
  return (dispatch)=>{
    setTimeout(()=>{
      dispatch(increment(data))
    },time);
  }
}

