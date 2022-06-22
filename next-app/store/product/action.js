import getConfig from 'next/config';
import * as ProductActions from '../product/types'
const { publicRuntimeConfig } = getConfig();
// const ISSERVER = typeof window === "undefined";

import axios from 'axios'

export const Product = () => async dispatch => {
        axios.get(`https://fakestoreapi.com/products`)
            .then(res => {
                console.log(res);
                if (res) {
                    // toast.success('User Setting updated successfully', { position: "top-right" });
                    dispatch(ProductActions.getProductSuccess(res.data))
                }
            })
            .catch(err => {
                // toast.error("Failed", { position: "top-right" });
                dispatch(ProductActions.getProductFail(err))
            })
        dispatch(ProductActions.getProductRequest())
    // }
}

// export const Addtocart = (id) => async dispatch => {
//     axios.get(`https://fakestoreapi.com/products`)
//         .then(res => {
//             console.log(res);
//             if (res) {
//                 // toast.success('User Setting updated successfully', { position: "top-right" });
//                 dispatch(ProductActions.getProductSuccess(res.data))
//             }
//         })
//         .catch(err => {
//             // toast.error("Failed", { position: "top-right" });
//             dispatch(ProductActions.getProductFail(err))
//         })
//     dispatch(ProductActions.getProductRequest())
// // }
// }

export const Addtocart = (id) => async dispatch => {
    dispatch(ProductActions.addToCartSuccess(id));
    
}

export const RemoveFromcart = (id) => async dispatch => {
    dispatch(ProductActions.RemoveCartSuccess(id));
    
}