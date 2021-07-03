import React from 'react';

export default class Counter extends React.Component {
  state = {
    counter: 0
  }

  // One time -> when component is mounted on DOM
  componentDidMount() {
    console.log("Counter: CDM")
  }

  // Good place to do network request when props and state changes
  componentDidUpdate(prevProps, prevState) {
    console.log("Counter: CDU", prevProps, prevState);
    // YOu can check the prev values
  }

  // When component is removed from the DOM tree
  // YOu can do clean up here like resetting timer, removing event handlers etc.
  componentWillUnmount() {
    console.log("Counter: CWUnmount");
  }

  // Not recommended much:  (PureComponent can be used here)
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Counter: SCU");
    return true;
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