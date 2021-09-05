/* 该文件用于暴露一个store对象，整个应用只有一个store对象 */
// 创建store对象
import { createStore } from 'redux'
// 引入reducer，默认暴露
import countReducer from './count_reducer'

export default createStore(countReducer)
