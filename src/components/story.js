import React from 'react';

export default class Story extends React.Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.onToggleEdit = this.onToggleEdit.bind(this);
    this.editRef = React.createRef();
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

  onToggleEdit() {
    this.props.onToggleEdit(this.props.data.id);
  }

  handleKeyDown = (e) => {
    // 13 -> enter key
    // 17 -> ESC
    const {id, title, cancel, edit} = this.props.data;
    console.log(e.keyCode);

    if (e.keyCode == 13) { // ENTER key
      this.props.onUpdates(id, this.editRef.current.value);
    } else if (e.keyCode == 17) {  // ESC key
      this.props.onToggleEdit(id);
    }
  }

  render() {
    const {id, title, cancel, edit} = this.props.data;
    const cancelled = cancel ? "cancel-story": "";

    const editview = edit 
          ? <input onKeyDown={this.handleKeyDown} ref={this.editRef} defaultValue={title} /> 
          : <span>{title}</span>

    return (
      <li className={`story-item ${cancelled}` } key={id}>
        {editview}
        <button onClick={this.handleClick}>x</button>
        <button onClick={this.handleCancel}>cancel story</button>
        <button onClick={this.onToggleEdit}>edit story</button>
      </li>
    )
  }
}