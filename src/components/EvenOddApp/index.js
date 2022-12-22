// Write your code here

import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, even: 'Count is Even'}

  onIncreamnet = () => {
    this.setState(() => {
      const ss = Math.ceil(Math.random() * 100)
      if (ss % 2 === 0) {
        return {count: ss, even: 'Count is Even'}
      }
      return {count: ss, even: 'Count is Odd'}
    })
  }

  render() {
    const {count, even} = this.state

    return (
      <div>
        <h1>shiva</h1>
        <div>
          <h1>Count {count}</h1>
          <p>{even}</p>
          <button onClick={this.onIncreamnet}>Increment</button>
          <p>Increase by Random number between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
