import axios from 'axios';
import React, { useEffect, useState } from 'react'
import style from './categories.module.css'
import Loading from '../../../components/loading/Loading';
import { Link } from 'react-router-dom';



import Button from 'react-bootstrap/Button';

export default function Categories() {
  const [Categories, setGetCategories] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);
  const getCategories = async () => {
    try {
      const { data } = await axios.get(`https://ecommerce-node4.onrender.com/categories/active`);
      setGetCategories(data);
    }
    catch (error) {
      console.log(error);
    }
    finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    getCategories();
  }, [])
  if (isLoading) {
    return <Loading />
   
  }

  return (
    <section className='categories container'>
      <div className={`${style.title} d-flex justify-content-center align-items-center mt-5 mb-3`}>
        <h2>What are you shopping for today?</h2>
      </div>

      <div className='row'>
        {Categories?.categories?.map((item) => (
          <div className='col-md-3' key={item._id}>
           <Link to={`/categories/${item._id}`}>
              <div className='category'>
                  <img className={`${style.item}`} src={item.image.secure_url} alt={item.name} />
              </div>
              </Link>
            </div>
        
        ))}
      </div>


    </section>
  )
}
/*

         <div className={`${style.item} rounded-5 shadow-sm p-3`}>
            <img  src={item.image?.secure_url}  alt={item.name} />
            <button className={`${style.button} text-center`}>{item.name}</button>
         </div>


*/