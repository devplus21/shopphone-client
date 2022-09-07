import { PRODUCT_TYPES } from '../actions/productAction'
import { EditData } from '../actions/globalTypes'

const detailProductReducer = (state = [], action) => {
  switch (action.type) {
    case PRODUCT_TYPES.GET_PRODUCT:
      return [...state, action.payload]
    case PRODUCT_TYPES.UPDATE_PRODUCT:
      return EditData(state, action.payload._id, action.payload)
    default:
      return state
  }
}

export default detailProductReducer
