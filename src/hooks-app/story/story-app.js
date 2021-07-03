import React, {useState, useEffect} from 'react';
import StoryList from './storylist';
import StoryContext from '../../context/story-context';

import '../../App.css';

const API_URL = "https://jsonplaceholder.typicode.com/posts";

function StoryApp() {
  const [state, setState] = useState({stories: []});
  const titleRef = React.createRef();
 

  useEffect(() => {
    // We will fetch the data here
    async function doFetch() {
      const response = await fetch(API_URL)
      const stories = await response.json();
      setState({
        stories: stories
      });
    }
    doFetch();
  },[])
    
  
  function handleSubmit(e) {
    e.preventDefault();
    let newStory = {
      id: +new Date(),
      title: titleRef.current.value,
      cancel: false
    }
    setState(prevState => {
      return {
        stories: [newStory, ...prevState.stories]
      }
    })
    
  }

  async function onDelete (id) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    });
    const status = await response.json();

    const updatedState = state.stories.filter(story => story.id != id);
    setState({
      stories: updatedState
    });
    
  }

  const  onCancel = (id) => {
    const updatedState = state.stories.map(story => {
      if (story.id == id) {
        story.cancel = !story.cancel;
      }
      return story;
    });

    setState({
      stories: updatedState
    });
  }

  const onToggleEdit = (id) => {
    const updatedState = state.stories.map(story => {
      if (story.id == id) {
        story.edit = !story.edit;
      }
      return story;
    });

    setState({
      stories: updatedState
    });
  }

  const onUpdates = (id, title) => {
    const updatedState = state.stories.map(story => {
      if (story.id == id) {
        story.edit = !story.edit;
        story.title = title;
      }
      return story;
    });

    setState({
      stories: updatedState
    });
  }

  const storyProvider = {
    state,
    onDelete,
    onUpdates,
    onToggleEdit,
    onCancel
  }


  return(
      <StoryContext.Provider value = {storyProvider}>
        <div>
          <form className="story-form" onSubmit={handleSubmit}>
            <label>New Story</label>
            <input ref={titleRef} />
            <button>Submit</button>
          </form>

          <StoryList data ={state.stories}/>  
        </div>
      </StoryContext.Provider>
    )
}


export default StoryApp;
