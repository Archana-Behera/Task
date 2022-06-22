import Cart from '../../modules/add-to-cart/Cart'
import { useDispatch  } from 'react-redux'

import { RemoveFromcart } from '../../store/product/action'


const Cartpage=() =>{
    const dispatch = useDispatch()

    const handleRemoveCart=(id)=>{
        dispatch(RemoveFromcart(id));
      }

  return (
    <div >
    <Cart handleRemoveCart={handleRemoveCart}/>
    </div>
  )
}
export default Cartpage;
