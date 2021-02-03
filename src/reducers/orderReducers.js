import {
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_PAY_RESET,
  ORDER_PAY_REQUEST,
  ORDER_LIST_MY_SUCCESS,
  ORDER_LIST_MY_FAIL,
  ORDER_LIST_MY_RESET,
} from '../constants/orderConstants'

export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_CREATE_SUCCESS:
      return {
        success: true,
        order: action.payload,
      }
    case ORDER_CREATE_FAIL:
      return {
        error: action.payload,
      }
    default:
      return state
  }
}

export const orderDetailsReducer = (
  state = { orderItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case ORDER_DETAILS_SUCCESS:
      return {
        order: action.payload,
      }
    case ORDER_DETAILS_FAIL:
      return {
        error: action.payload,
      }
    default:
      return state
  }
}

export const orderPayReducer = (
  state = { loading: false, success: false },
  action
) => {
  switch (action.type) {
    case ORDER_PAY_REQUEST:
      return {
        loading: true,
      }
    case ORDER_PAY_SUCCESS:
      return {
        loading: false,
        success: true,
      }
    case ORDER_PAY_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    case ORDER_PAY_RESET:
      return {}
    default:
      return state
  }
}

export const orderListMyReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case ORDER_LIST_MY_SUCCESS:
      return {
        orders: action.payload,
      }
    case ORDER_LIST_MY_FAIL:
      return {
        error: action.payload,
      }
    case ORDER_LIST_MY_RESET:
      return {
        orders: [],
      }
    default:
      return state
  }
}