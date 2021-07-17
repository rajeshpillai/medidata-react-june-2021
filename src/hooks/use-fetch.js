import {useState, useEffect} from 'react';
import {useLocalStorage} from './use-localstorage';

export function useFetch(url) {
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState({});


  const [token] =  useLocalStorage("medi-auth-key");

  console.log("token: ", token);

  const doFetch = (options = {}) => {
    setIsLoading(true);
  }

  // Make API calls here
  useEffect(() => { 
    if (!isLoading) return;

    fetch(url, {
      ...options, 
      mode: 'cors',
      headers: {
        "Content-type": "application/json; charset=UTf-8",
        "Access-Control-Allow-Origin":"*",
        "Authorization": token ? `Token ${token}` : ''
      }
      })
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