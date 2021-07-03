import React from 'react';
import Tag from '../components/tag';

export default function TagList({onDeleteTag, tags}) {
  let tagsUI = tags.map(tag => {
    return (
      <Tag key={tag} value={tag} onDeleteTag = {() => onDeleteTag(tag)} />
    );
  })
  return (
    <div>
      {tagsUI}
    </div>
  );
}