import {
  RESTAURANTS_SET,
  RESTAURANTS_PENDING
} from '../actionTypes'
import {
  DefaultState,
  IAction,
  RestaurantsData
} from '../models'

const initialState: DefaultState<RestaurantsData> = {
  data: [],
  pending: false
}

const restaurants = (state: DefaultState<RestaurantsData> = initialState, action: Partial<IAction> = {}): DefaultState<RestaurantsData> => {
  switch (action.type) {
    case RESTAURANTS_PENDING:
      return {
        data: state.data,
        pending: action.payload
      }
    case RESTAURANTS_SET:
      return {
        data: [...action.payload],
        pending: false
      }
    default:
      return state
  }
}

export default restaurants
