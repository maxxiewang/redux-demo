/* 该文件用于暴露一个store对象，整个应用只有一个store对象 */
// 创建store对象
import { createStore, applyMiddleware } from 'redux'
// 引入reducer，默认暴露
import countReducer from './count_reducer'
// 引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'

export default createStore(countReducer, applyMiddleware(thunk))
