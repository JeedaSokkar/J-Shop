import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loading from '../../../components/loading/Loading';
import styleProduct from './products.module.css'

import Product from '../../../components/product/Product';

export default function Products() {
  const [Products, setProducts] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);

  const getProducts = async () => {
    try {
      const { data } = await axios.get(`https://ecommerce-node4.onrender.com/products?limit=10`);
      setProducts(data);
    }
    catch (error) {
      console.log(error);
    }
    finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    getProducts();
  }, [])

  if (isLoading) {
    return <Loading />
  }
  return (
    <section className={`${styleProduct.product} `}>
      <div className='container'>
        <div className={`${styleProduct.head} d-flex justify-content-center align-items-center mt-5 mb-3`}>
          <h2>All Products</h2>
        </div>
        <div className='row'>
          {Products?.products?.map((item) => (

            <div className='col-md-4' key={item._id}>
              <Product item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
