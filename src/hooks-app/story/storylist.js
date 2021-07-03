import React from 'react';
import Story from './story';

export default function StoryList (props) {
  
  const onDelete = (id) => {
    props.onDelete(id);
  }

  const onCancel = (id) => {
    props.onCancel(id);
  }

  const onToggleEdit = (id) => {
    props.onToggleEdit(id);
  }

  const onUpdates = (id, title) => {
    props.onUpdates(id, title);
  }
  
  return (
    <div className="container">
      <h1>Story List</h1>
      <ul>
        {
          props.data.map(story => <Story onUpdates={onUpdates} 
                onToggleEdit={onToggleEdit} onCancel={onCancel} 
                onDelete={onDelete} key={story.id} data={story} /> )
        }
      </ul>
    </div>
  )
}
