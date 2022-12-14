import { INCREMENT, DECREMENT } from "../constant"
/**
 * 采用分别暴露的方式export
 * @param {} data 
 * @returns 
 */
//count减Action函数
export const createIncrementAction = (data)=>({type: INCREMENT, data})

//count减Action函数
export const createDecrementAction = (data)=>({type: DECREMENT, data})

