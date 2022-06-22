import React from 'react';
import Link from 'next/link'


const Header =(props)=>{
    console.log('pr',props);
    return(
        
        <div style={{width:'100%',height:'100px',backgroundColor:'black',margin:'0'}}>
         <div style={{float:'right',display:'flex',flexDirection:'row'}}>
            <Link href='/cart'>
            <h3 style={{color:'white',textAllign:'right'}}>Add to cart</h3>
            </Link>
         <div style={{width:'30px',height:'30px',backgroundColor:"white",borderRadius:'100%',marginTop:'15px',marginLeft:'10px'}}>
            <h3 style={{color:'black',margin:'10px'}}>{props.cartlist && props.cartlist.cart && props.cartlist.cart.length}</h3>
         </div>
         </div>
        </div>

    )
}
export default Header;