import React from 'react';
import StoryList from './components/storylist';
import './App.css';

const API_URL = "https://jsonplaceholder.typicode.com/posts";

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      stories: [],
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.titleRef = React.createRef();
  }

  async componentDidMount() {
    // We will fetch the data here
    const response = await fetch(API_URL)
    const stories = await response.json();
    this.setState({
      stories: stories
    })
  }
  
  handleSubmit(e) {
    e.preventDefault();
    let newStory = {
      id: +new Date(),
      title: this.titleRef.current.value,
      cancel: false
    }
    // this.setState({
    //   stories:[...this.state.stories, newStory]
    // })

    // this.setState();
    // this.setState();

    
    this.setState(prevState => {
      return {
        stories: [newStory, ...prevState.stories]
        // stories: prevState.stories.concat(newStory)
      }
    })
    
  }

  onDelete = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    });
    const status = await response.json();

    const updatedState = this.state.stories.filter(story => story.id != id);
    this.setState({
      stories: updatedState
    });

    console.log("DELETE: ", status);
  }

  onCancel = (id) => {
    // alert(`Story is being cancelled ${id}`);

    // text-decoration: line-through;
    const updatedState = this.state.stories.map(story => {
      if (story.id == id) {
        story.cancel = !story.cancel;
      }
      return story;
    });

    this.setState({
      stories: updatedState
    });
  }

  onToggleEdit = (id) => {
    // alert(`Story is being cancelled ${id}`);

    // text-decoration: line-through;
    const updatedState = this.state.stories.map(story => {
      if (story.id == id) {
        story.edit = !story.edit;
      }
      return story;
    });

    this.setState({
      stories: updatedState
    });
  }

  onUpdates = (id, title) => {
    // alert(`Story is being cancelled ${id}`);

    // text-decoration: line-through;
    const updatedState = this.state.stories.map(story => {
      if (story.id == id) {
        story.edit = !story.edit;
        story.title = title;
      }
      return story;
    });

    this.setState({
      stories: updatedState
    });
  }


  render() {
    console.log(this.state);
    return (
      <div>
        <form className="story-form" onSubmit={this.handleSubmit}>
          <label>New Story</label>
          <input ref={this.titleRef} />
          <button>Submit</button>
        </form>
        <StoryList 
          onUpdates = {this.onUpdates}
          onToggleEdit = {this.onToggleEdit} 
          onCancel={this.onCancel} 
          onDelete={this.onDelete} 
          data ={this.state.stories}/>  
      </div>
    )
  }
}



export default App;
