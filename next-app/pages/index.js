import Head from 'next/head'
import Image from 'next/image'
import React from 'react';
import styles from '../styles/Home.module.css'

import { Product,Addtocart,RemoveFromcart } from '../store/product/action'
import { useSelector,useDispatch  } from 'react-redux'

import  Page  from '../modules/add-to-cart/index';

const Home=() =>{
  const dispatch = useDispatch()
  const product = useSelector((state) => state.product)
console.log('product',product);

  React.useEffect(() => {
    dispatch(Product());
    //  dispatch(Addtocart());
  }, []);

  const handleAddtoCart=(id)=>{
    dispatch(Addtocart(id));
  }

  return (
    <div className={styles.container}>
    <Page product={product}
    handleAddtoCart={handleAddtoCart}/>
    </div>
  )
}
export default Home;
