import {useState, useEffect} from 'react';

export function useFetch(url) {
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState({});

  const doFetch = (options = {}) => {
    setIsLoading(true);
  }

  // Make API calls here
  useEffect(() => { 
    if (!isLoading) return;

    fetch(url, {...options})
      .then(response => {
        return response.json();
      })
      .then(json => {
        setResponse(json);
        console.log("RESP: ", json);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      }) 
  }, [isLoading, url, options]);


  return [{isLoading, response,error}, doFetch];
}