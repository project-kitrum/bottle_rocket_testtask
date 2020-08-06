import React, {
  FC,
  useEffect
} from 'react'
import {
  connect,
  ConnectedProps
} from 'react-redux'

import Header from '@layout/Header'
import RestaurantCard from './Restaurant'
import { fetchRestaurants } from '@store/actions/restaurants'
import { selectRestaurantsData } from '@store/selectors/restaurants'
import { RootState } from '@store/models'
import { Id } from '@models/common'
import styles from './styles.module.scss'

const connector = connect((state: RootState) => ({
  restaurants: selectRestaurantsData(state)
}), { fetchRestaurants })

type Props = ConnectedProps<typeof connector> & {
  onRestaurantClick: (id: Id) => void;
}

const ListView: FC<Props> = ({
  fetchRestaurants,
  restaurants,
  onRestaurantClick
}) => {
  useEffect(() => {
    fetchRestaurants()
  }, [fetchRestaurants])

  return (
    <>
      <Header />
      <div className={styles.cardList}>
        {restaurants.map(restaurant =>
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            onClick={onRestaurantClick}
          />)}
      </div>
    </>
  )
}

export default connector(ListView)
