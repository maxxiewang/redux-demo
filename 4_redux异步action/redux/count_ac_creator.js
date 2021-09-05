// 该文件专门为Count组件生成action对象
import { DECREMENT, INCREMENT } from './constant'
// import store from './store'

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

// 同步的都是返回object一般对象，而异步是返回一个function
// 异步action的标准是能够开启一个异步任务，异步action中，一般都会调用同步action
export const asycCreateIncrementAction = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      // 通知redux加data
      dispatch(createIncrementAction(data))
    }, time)
  }
}
