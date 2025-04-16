import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../../../components/loading/Loading';

import Product from '../../../components/product/Product';

export default function CategoryProducts() {
  const { categoryId } = useParams();
  const [CategoryProducts, setCategoryProducts] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);

  const product = async () => {
    try {
      const { data } = await axios.get(`https://ecommerce-node4.onrender.com/products/category/${categoryId}`);
      setCategoryProducts(data);
    }
    catch (error) {
      console.log(error);
    }
    finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    product();
  }, [])
  if (isLoading) {
    return <Loading />

  }
  return (
    <section className='container mt-3'>
      <div className='row'>
        {CategoryProducts?.products?.map(item =>

          <div className='col-md-4' key={item._id}>
            <Product item={item} />
          </div>
        )}
      </div>
    </section>
  )
}
