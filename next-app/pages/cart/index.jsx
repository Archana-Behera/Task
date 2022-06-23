import Cart from '../../modules/add-to-cart/Cart'
import { useDispatch  } from 'react-redux'

import { RemoveFromcart,Increament,decrement } from '../../store/product/action'


const Cartpage=() =>{
    const dispatch = useDispatch()

    const handleRemoveCart=(id)=>{
        dispatch(RemoveFromcart(id));
      }
//increment quantity
      const handleIncrement=(id)=>{
        dispatch(Increament(id));
      }

      //decreament quantity
      const handleDecreamnet=(id)=>{
        dispatch(decrement(id));
      }

  return (
    <div >
    <Cart handleRemoveCart={handleRemoveCart}
    handleIncrement={handleIncrement}
    handleDecreamnet={handleDecreamnet} />
    </div>
  )
}
export default Cartpage;
