import { Restaurant } from '@models/restaurants'

export type RestaurantResponse = Exclude<Restaurant, 'id'>

export type GetRestaurantsResponseData = {
  restaurants: RestaurantResponse[];
}
