import { Restaurant } from '@models/restaurants'

export interface IAction<E = any> {
  readonly type: string;
  readonly payload?: E;
}

export type DefaultState<D> = {
  readonly data: D;
  readonly pending: boolean;
}

export type ThunkResult<T extends (...args: any[]) => any> = ReturnType<ReturnType<T>>

export type RootState = {
  restaurants: DefaultState<RestaurantsData>;
}

export type RestaurantsData = Restaurant[]
