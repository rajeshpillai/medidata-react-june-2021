import React from 'react';

export default class Story extends React.Component {
  render() {
    const {id, title} = this.props.data;
    return (
      <li key={id}>{title}</li>
    )
  }
}