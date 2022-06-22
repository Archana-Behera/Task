import React from 'react';
import Image from 'next/image'
import { useSelector  } from 'react-redux'

const Cart =(props)=>{
    
    const product = useSelector((state) => state.product)
    console.log('props',product);
    return(
        <>
        {product && 
        product.cart && product.cart.length ? product.cart.map((products)=>{
            return(
                <div key={products.id} style={{marginTop:'50px'}}>
                <Image src={products.image} alt="Picture of the author"
      width={200}
      height={200}/>
                <h1>{products.category}</h1>
                <p>{products.description}</p>
                <p>price:{products.price}</p>
                <button style={{color:'white',backgroundColor:'black',width:'100px',height:'50px',cursor:'pointer'}}
                onClick={()=> props.handleRemoveCart(products.id)}>Remove from Cart</button>

                </div>

);
})
:'no item added '}
        </>
    )
}
export default Cart;