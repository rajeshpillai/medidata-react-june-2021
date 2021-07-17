import {useState, useEffect} from 'react';
export function useLocalStorage(key, intitialValue = {}) {
  const [value, setValue] = useState(() => {
    let data = localStorage.getItem(key) || intitialValue;
    console.log("ulc: ", data);
    return JSON.parse(data) || intitialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value]);

  return [value, setValue];
}