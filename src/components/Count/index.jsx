import React, { Component } from 'react'
import { Button, Space, Select } from 'antd'
// 引入store，用于获取redux中保存的状态
import store from '../../redux/store'
import './index.css'
const { Option } = Select

export default class Count extends Component {
  state = { carName: 'benz', num: 1 } //需要暴露的再放redux里面

  // 监测redux中状态的变化，要只变化，就调render
  componentDidMount() {
    // redux中任何值发生改变，都会调这个回调
    store.subscribe(() => {
      //这真是一个流氓的写法
      this.setState({})
    })
  }
  handleChange = (value) => {
    this.setState({ num: value })
  }
  increment = () => {
    store.dispatch({ type: 'increment', data: this.state.num - 0 })
  }
  decrement = () => {
    store.dispatch({ type: 'decrement', data: this.state.num - 0 })
  }
  decrementIfOdd = () => {
    const count = store.getState()
    if (count % 2 !== 0) {
      store.dispatch({ type: 'increment', data: this.state.num - 0 })
    }
  }
  render() {
    return (
      <div className="div">
        <div>
          <h1>当前求和为：{store.getState()}</h1>
        </div>
        <div>
          <Space>
            <Select
              defaultValue="1"
              style={{ width: 120 }}
              onChange={this.handleChange}
            >
              <Option value="1">1</Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
            </Select>
            {/* <select ref={(c) => (this.selectNumber = c)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select> */}
            <Button type="primary" onClick={this.increment}>
              +
            </Button>
            <Button type="primary" onClick={this.decrement}>
              -
            </Button>
            <Button type="danger" onClick={this.decrementIfOdd}>
              当前求和为奇数再加
            </Button>
            <Button type="danger">异步加</Button>
          </Space>
        </div>
      </div>
    )
  }
}
