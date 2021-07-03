import React, {Component} from 'react';
import Counter from '../../components/counter';

export default class CounterApp extends Component {
  state ={
    counters: 0
  }

  componentDidMount() {
    console.log("CounterApp: CDM")
  }

  addCounter = () => {
    this.setState(prevState => {
      return {
        counters: prevState.counters + 1
      }
    })
  }

  removeCounter = () => {
    this.setState(prevState => {
      return {
        counters: prevState.counters - 1
      }
    })
  }
  
  render() {
    let counters =[];
    for(let i = 0; i < this.state.counters; i++) {
      counters.push(<Counter key={i} index={i} />);
    }
    return (
      <div className="container">
        <h2>Class Component: Lifecycle example</h2>
        {counters}
        <button onClick={this.addCounter}>Add Counter</button>
        <button onClick={this.removeCounter}>Remove Counter </button>

      </div>
    )
  }
}