export const GET_PRODUCT_REQUEST = "GET_PRODUCT_REQUEST";
export const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS";
export const GET_PRODUCT_FAIL = "GET_PRODUCT_FAIL";

export const ADD_TO_CART_SUCCESS='ADD_TO_CART_SUCCESS'
export const REMOVE_FROM_CART_SUCCESS='REMOVE_FROM_CART_SUCCESS'

export const INCREAMENT_QUANTITY_SUCCESS='INCREAMENT_QUANTITY_SUCCESS'
export const DECREAMENT_QUANTITY_SUCCESS='DECREAMENT_QUANTITY_SUCCESS'

export const getProductRequest = () => ({
    type: GET_PRODUCT_REQUEST
  });
  
  export const getProductSuccess = (product) => ({
    type: GET_PRODUCT_SUCCESS,
    payload: product
  });
  
  export const getProductFail = (error) => ({
    type: GET_PRODUCT_FAIL,
    payload: error
  });
// add to cart success

export const addToCartSuccess = (id) => ({
  type: ADD_TO_CART_SUCCESS,
  payload: id
});

//Remove from cart

export const RemoveCartSuccess = (id) => ({
  type: REMOVE_FROM_CART_SUCCESS,
  payload: id
});

//incremet quantity

export const IncreamentSuccess = (id) => ({
  type: INCREAMENT_QUANTITY_SUCCESS,
  payload: id
});

//decrement quantity

export const DecreamentSuccess = (id) => ({
  type: DECREAMENT_QUANTITY_SUCCESS,
  payload: id
});