import React from 'react';

export default class Counter extends React.Component {
  state = {
    counter: 0
  }

  handleIncrement = () => {
    this.setState(prevState => {
      return {
        counter: prevState.counter + 1
      }
    })
  }

  handleDecrement = () => {
    this.setState(prevState => {
      return {
        counter: prevState.counter - 1
      }
    })
  }

  render() {
    return (
      <div className="counter">
        <span>{this.state.counter}</span>
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    )
  }
}