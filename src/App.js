import React from 'react';
import StoryList from './components/storylist';
import './App.css';

const stories =  [
  {id: 1, title: "Story 1"},
  {id: 2, title: "Story 2"},
  {id: 3, title: "Story 3"},
];

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      stories: stories,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.titleRef = React.createRef();
  }
  
  handleSubmit(e) {
    e.preventDefault();
    let newStory = {
      id: +new Date(),
      title: this.titleRef.current.value
    }
    // this.setState({
    //   stories:[...this.state.stories, newStory]
    // })

    // this.setState();
    // this.setState();

    this.setState(prevState => {
      return {
        //stories: [newStory, ...prevState.stories]
        stories: prevState.stories.concat(newStory)
      }
    })
    
  }
  
  render() {
    console.log(this.state);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>New Story</label>
          <input ref={this.titleRef} />
          <button>Submit</button>
        </form>
        <StoryList data ={this.state.stories}/>  
      </div>
    )
  }
}



export default App;
