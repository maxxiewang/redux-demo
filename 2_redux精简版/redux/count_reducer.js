/* 
  创建一个为Count组件服务的reducer,reducer的本质就是一个函数
  reducer函数会接到两个参数，之前的状态与动作对象
*/
const initState = 0
// 采用形参默认值的方式进行状态的初始化
export default function countReducer(preState = initState, action) {
  // console.log('preState:', preState, 'action:', action)

  // if (preState === undefined) preState = 0
  const { type, data } = action
  // 根据type决定如何加工数据
  switch (type) {
    case 'increment':
      return preState + data
    case 'decrement':
      return preState - data

    default:
      return preState
  }
}
