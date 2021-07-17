import React, {useState, useEffect} from 'react';
import {useFetch} from '../hooks/use-fetch';

export default function UseFetchDemo() {

  const [products, setProducts] = useState([]);
  
  // const [isLoading, setIsLoading] = useState(false);

  const [{isLoading, response, error}, doFetch] = useFetch(`https://fakestoreapi.com/products`);

  const [{isLoading: isCategoryLoading, response:categoryResponse}, fetchCategories] = 
    useFetch(`https://fakestoreapi.com/products/categories`);


  useEffect(() => {
    doFetch({
      method: "GET",
    });

    fetchCategories({
      method: "GET",
    });
  },[]);

  return (
    <div>
      <h2>Use Fetch</h2>
      {isCategoryLoading && <p>Loading categories...</p>}
      
      {!isCategoryLoading && 
        categoryResponse.map(category =>
          <a key={category} href="#">{category}</a>  
        )
      }

      {isLoading && <p>Loading...</p>}
      {error && <h2>Error in API call</h2>}
      {!isLoading &&
        response.map((product, index) => (  
          <div key={index}> 
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))
      }
    </div>
  )
}