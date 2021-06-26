import React from 'react';
import Story from './story';

export default class StoryList extends React.Component {
  constructor() {
    super();
  }
  // Life cycle method
  componentDidMount() {
    console.log("CDM: fired");
  }
  
  render() {
    return (
      <div>
        <h1>Story List</h1>
        <ul>
          {
            this.props.data.map(story => <Story key={story.id} data={story} /> )
          }
        </ul>
      </div>
    )
  }
}
