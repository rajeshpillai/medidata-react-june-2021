import React, {useState, useEffect} from 'react';


export default function UseFetchDemo() {

  const [products, setProducts] = useState([]);
  
  const [isLoading, setIsLoading] = useState(false);

  // const [{isLoading, response, error}, doFetch] = useFetch(`https://fakestoreapi.com/products`);

  useEffect(() => {

    async function doFetch() {
      setIsLoading(true);
      const response = await fetch('https://fakestoreapi.com/products');
      const products = await response.json();
      setProducts(products);
      setIsLoading(false);
    }

    doFetch();
  }, []);

  return (
    <div>
      <h2>Use Fetch</h2>
      {isLoading && <p>Loading...</p>}
      {!isLoading &&
        products.map((product, index) => (  
          <div key={index}> 
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))
      }
    </div>
  )
}