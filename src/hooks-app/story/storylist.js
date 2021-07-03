import React from 'react';
import Story from './story';

export default function StoryList (props) {
  return (
    <div className="container">
      <h1>Story List</h1>
      <ul>
        {
          props.data.map(story => <Story key={story.id} data={story} /> )
        }
      </ul>
    </div>
  )
}
