import * as ProductActions from '../product/types'
import axios from 'axios'

export const Product = () => async dispatch => {
        axios.get(`https://fakestoreapi.com/products`)
            .then(res => {
                if (res) {
                    dispatch(ProductActions.getProductSuccess(res.data))
                }
            })
            .catch(err => {
                dispatch(ProductActions.getProductFail(err))
            })
        dispatch(ProductActions.getProductRequest())
    // }
}

export const Addtocart = (id) => async dispatch => {
    dispatch(ProductActions.addToCartSuccess(id));
    
}

export const RemoveFromcart = (id) => async dispatch => {
    dispatch(ProductActions.RemoveCartSuccess(id));
    
}
export const Increament = (id) => async dispatch => {
    dispatch(ProductActions.IncreamentSuccess(id));
    
}

export const decrement = (id) => async dispatch => {
    dispatch(ProductActions.DecreamentSuccess(id));
    
}