import React from 'react';
export default function Tag({onDeleteTag, value}) {

  const tagStyle ={
    background: "yellow",
    border: "1px solid lightblue",
    color:"black",
    userselect: "none"
  }


  let tag = (
    <div className="tag-item">
      <span onClick={() => onDeleteTag(value)} style={tagStyle}>
        &#x2716; {" "}
      </span>
      {value}
    </div>
  )
  return (
    <React.Fragment>
      {tag}
    </React.Fragment>
  )
}