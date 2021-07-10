import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';

export default function ViewStory() {
  const [story, setStory] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  let history = useHistory();
  let {id} = useParams();

  console.log({id});

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => { 
        console.log(data);
        setStory(data)
        setIsLoading(false);
    });
  },[id]);
  
  return (
    <>
      {isLoading && <h2>Loading...</h2>}
      {!isLoading &&
       <article className="story">
        <h2>{story.title}</h2>
        <div>
          {story.body}
        </div>
        <h4>Authored by: {story.userId}</h4>
      </article>
      }
    </>
  )
}