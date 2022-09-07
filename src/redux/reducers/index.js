import { combineReducers } from 'redux'
import auth from './authReducer'
import alert from './alertReducer'
import homeProduct from './productReducer'
import status from './statusReducer'
import detailProduct from './detailProductReducer'

export default combineReducers({
  auth,
  alert,
  homeProduct,
  status,
  detailProduct,
})
