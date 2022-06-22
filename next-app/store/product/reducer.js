import {
    GET_PRODUCT_REQUEST,
     GET_PRODUCT_SUCCESS,
      GET_PRODUCT_FAIL,
      ADD_TO_CART_SUCCESS,
      REMOVE_FROM_CART_SUCCESS
   } from './types'

const initialState = {
    isLoading: null,
    product: [],
    cart:[],
    error: {},
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        // Start  request to get product list
        case GET_PRODUCT_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: {}
            }
        //get product list success
        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                product: action.payload,
                error: {}
            }
       //get product list fail
        case GET_PRODUCT_FAIL:
            return {
                ...state,
                isLoading: false,
                product: {},
                error: action.payload || {}
            }

            // add to cart success

            case ADD_TO_CART_SUCCESS:
                console.log('action',action.payload)
              const  cartlist= state.product.find((product) => product.id === action.payload)
              console.log(cartlist)
                return {
                    ...state,
                    isLoading: false,
                    cart: [...state.cart,cartlist],
                    error: {}
                }

                  // Rmove from cart success

            case REMOVE_FROM_CART_SUCCESS:
                
               const  filtercart= state.cart.filter((product) => product.id !== action.payload)
              console.log(cartlist)
                return {
                    ...state,
                    isLoading: false,
                    cart: filtercart,
                    error: {}
                }

        default: return state
    }
}

export default productReducer