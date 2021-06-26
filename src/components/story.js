import React from 'react';

export default class Story extends React.Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  handleClick() {
    
    // alert(`Please delete me! My id is ${this.props.data.id}`);
    let response = window.confirm("Are you sure?");
    if (response) {
      this.props.onDelete(this.props.data.id);
    }
  }

  handleCancel() {
    this.props.onCancel(this.props.data.id);
  }

  render() {
    const {id, title, cancel} = this.props.data;
    const cancelled = cancel ? "cancel-story": "";
    return (
      <li className={`story-item ${cancelled}` } key={id}>
        {title}
        <button onClick={this.handleClick}>x</button>
        <button onClick={this.handleCancel}>cancel story</button>
      </li>
    )
  }
}