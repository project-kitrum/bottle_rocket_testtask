import { createSelector } from 'reselect'

import { RootState } from '@store/models'

const selectRestaurantsStore = (state: RootState) => state.restaurants

export const selectRestaurantsPending = createSelector(
  selectRestaurantsStore,
  store => store.pending
)

export const selectRestaurantsData = createSelector(
  selectRestaurantsStore,
  store => store.data
)
