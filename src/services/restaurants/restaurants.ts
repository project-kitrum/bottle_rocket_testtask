import http from '../http'
import { GetRestaurantsResponseData } from './models'

export const getRestaurants = () => http.get<GetRestaurantsResponseData>('/BR_iOS_CodingExam_2015_Server/restaurants.json')
