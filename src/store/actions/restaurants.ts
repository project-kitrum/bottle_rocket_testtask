import { getRestaurants } from '@services/restaurants'
import { normalizeRestaurants } from '@utils/normalizers/restaurants'
import {
  RESTAURANTS_PENDING,
  RESTAURANTS_SET
} from '../actionTypes'
import { Restaurant } from '@models/restaurants'

const setRestaurantsPending = (status: boolean) => ({
  type: RESTAURANTS_PENDING,
  payload: status
})

const setRestaurants = (restaurants: Restaurant[]) => ({
  type: RESTAURANTS_SET,
  payload: restaurants
})

export const fetchRestaurants = () => async dispatch => {
  try {
    dispatch(setRestaurantsPending(true))
    const restaurantsResponse = await getRestaurants()
    const restaurants = normalizeRestaurants(restaurantsResponse.restaurants)
    dispatch(setRestaurants(restaurants))
  } catch (e) {
    dispatch(setRestaurantsPending(true))
  }
}
