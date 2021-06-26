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

  onDelete = (id) => {
    this.props.onDelete(id);
  }

  onCancel = (id) => {
    this.props.onCancel(id);
  }
  
  render() {
    return (
      <div className="container">
        <h1>Story List</h1>
        <ul>
          {
            this.props.data.map(story => <Story onCancel={this.onCancel} onDelete={this.onDelete} key={story.id} data={story} /> )
          }
        </ul>
      </div>
    )
  }
}
