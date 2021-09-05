// 该文件专门为Count组件生成action对象
import { DECREMENT, INCREMENT } from './constant'

// function createIncrementAction(data) {
//   return { type: 'increment', data: data }
// }

// function createDecrementAction(data) {
//   return { type: 'decrement', data: data }
// }

// 无法自动返回一个对象，不想写return，外面包一个小括号解决
export const createIncrementAction = (data) => ({
  type: INCREMENT,
  data: data,
})

export const createDecrementAction = (data) => ({
  type: DECREMENT,
  data: data,
})
