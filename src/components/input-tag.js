import React, {useState, useEffect} from 'react';
import TagList from '../components/tag-list';
export default function InputTag({onDeleteTag, onAddTag, defaultTags}) {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    setTags(defaultTags);
  }, [defaultTags])

  const onKeyUp = (e) => {
    if (e.which == 188 || e.which === 13) {
      let input = e.target.value.trim().split(',');
      if (input.length === 0 || input[0] === "") return;

      onAddTag(input);
      e.target.value = "";
    }
  }

  const tagContainer ={
    background: "gray",
    border: "1px solid lightblue",
    overflow: "auto",
    width: "300px"
  }

  return (
    <div style={tagContainer}>
      <TagList tags = {tags}  onDeleteTag={onDeleteTag} />
      <input type="text" 
        placeholder="enter tags separated by comma"
        onKeyUp = {(e) => onKeyUp(e)}
      />

    </div>
  );
}