import React, {useContext} from 'react';
import {Link} from 'react-router-dom';


import StoryContext from '../../context/story-context';
import ThemeContext from '../../context/theme-context';

export default function Story(props) {
  const {onDelete, onCancel, onToggleEdit,onUpdates} = useContext(StoryContext);
  const editRef = React.createRef();
  const theme = useContext(ThemeContext);
  
  const handleClick =() => {
    let response = window.confirm("Are you sure?");
    if (response) {
      onDelete(props.data.id);
    }
  }

  const handleCancel = () => {
    onCancel(props.data.id);
  }

  const handleEdit = () => {
    onToggleEdit(props.data.id);
  }

  const handleKeyDown = (e) => {
    // 13 -> enter key
    // 17 -> ESC
    const {id, title, cancel, edit} = props.data;
    console.log(e.keyCode);

    if (e.keyCode == 13) { // ENTER key
      onUpdates(id, editRef.current.value);
    } else if (e.keyCode == 17) {  // ESC key
      onToggleEdit(id);
    }
  }

  const {id, title, cancel, edit} = props.data;
  const cancelled = cancel ? "cancel-story": "";

  const editview = edit 
        ? <input onKeyDown={handleKeyDown} ref={editRef} defaultValue={title} /> 
        : <span>{title}</span>

  return (
    <li className={`story-item ${cancelled} ${theme}` } key={id}>
      {editview}
      <button onClick={handleClick}>x</button>
      <button onClick={handleCancel}>cancel story</button>
      <button onClick={handleEdit}>edit story</button>
      <Link to={`/story/view/${id}`} className="view-story-link">view story</Link>     
    </li>
  )
}