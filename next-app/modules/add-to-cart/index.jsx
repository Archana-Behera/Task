import React from 'react';
import ProductList from './ProductList'
import Header from './Header';

const Page =(props)=>{
    console.log('props',props);
    return(
        <>
        <Header cartlist={props.product}/>
        <ProductList productlist={props.product && props.product}
        handleAddtoCart={props.handleAddtoCart}/>
        </>
    )
}
export default Page;