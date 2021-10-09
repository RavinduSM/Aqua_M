import React, { useEffect, useState } from 'react';
import Products from '../components/Products';
import axios from 'axios';

export default function HomeScreen() {
  const [products, setproducts] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try{
        setloading(true);
        const{data} =await axios.get('/api/products');
        setloading(false);
        setproducts(data);
      } catch (err) {
        seterror(err.message);
        setloading(false);
      }
    };
    fetchData();
  }, [])
  return (
    <div className="row center">
      {
          products.map((product) => (
          <Products key={product._id} product={product}/>
        ))
      }
    </div>
  );
}
