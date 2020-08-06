import { RestaurantResponse } from '@services/restaurants'

export const normalizeRestaurants = (restaurants: RestaurantResponse[]) => restaurants.map((restaurant, index) => ({
  id: `${index}`,
  ...restaurant
}))
