import React from 'react';
import Image from 'next/image'

const ProductList =(props)=>{
    console.log('props',props);
    return(
        <>
        {props.productlist && 
        props.productlist.product && props.productlist.product.length ? props.productlist.product.map((products)=>{
            return(
                <div key={products.id} style={{marginTop:'50px'}}>
                <Image src={products.image} alt="Picture of the author"
      width={200}
      height={200}/>
                <h1>{products.category}</h1>
                <p>{products.description}</p>
                <p>price:{products.price}</p>
                <button style={{color:'white',backgroundColor:'black',width:'100px',height:'50px',cursor:'pointer'}}
                onClick={()=> props.handleAddtoCart(products.id)}>Add to Cart</button>

                </div>

);
})
:null}
        </>
    )
}
export default ProductList;