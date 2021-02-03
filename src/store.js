import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { loadingReducer } from './reducers/loaderReducer'
import {
  productDetailsReducer,
  productListReducer,
} from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  userListReducer,
  userDeleteReducer,
  userUpdateReducer,
} from './reducers/userReducers'
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
  orderListMyReducer,
} from './reducers/orderReducers'

const reducer = combineReducers({
  loader: loadingReducer,
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderListMy: orderListMyReducer,
})
const cartItemsFromLocalStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []
const userInfoFromLocalStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null
const shippingAddressFromLocalStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {}
const paymentMethodFromLocalStorage = localStorage.getItem('paymentMethod')
  ? JSON.parse(localStorage.getItem('paymentMethod'))
  : ''
const initialState = {
  cart: {
    cartItems: cartItemsFromLocalStorage,
    shippingAddress: shippingAddressFromLocalStorage,
    paymentMethod: paymentMethodFromLocalStorage,
  },
  userLogin: { userInfo: userInfoFromLocalStorage },
}
const middleware = [thunk]
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store