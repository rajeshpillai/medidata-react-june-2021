import React from 'react';

export default function Story(props) {

  const editRef = React.createRef();
  
  const handleClick =() => {
    let response = window.confirm("Are you sure?");
    if (response) {
      props.onDelete(props.data.id);
    }
  }

  const handleCancel = () => {
    props.onCancel(props.data.id);
  }

  const onToggleEdit = () => {
    props.onToggleEdit(props.data.id);
  }

  const handleKeyDown = (e) => {
    // 13 -> enter key
    // 17 -> ESC
    const {id, title, cancel, edit} = props.data;
    console.log(e.keyCode);

    if (e.keyCode == 13) { // ENTER key
      props.onUpdates(id, editRef.current.value);
    } else if (e.keyCode == 17) {  // ESC key
      props.onToggleEdit(id);
    }
  }

  const {id, title, cancel, edit} = props.data;
  const cancelled = cancel ? "cancel-story": "";

  const editview = edit 
        ? <input onKeyDown={handleKeyDown} ref={editRef} defaultValue={title} /> 
        : <span>{title}</span>

  return (
    <li className={`story-item ${cancelled}` } key={id}>
      {editview}
      <button onClick={handleClick}>x</button>
      <button onClick={handleCancel}>cancel story</button>
      <button onClick={onToggleEdit}>edit story</button>
    </li>
  )
}