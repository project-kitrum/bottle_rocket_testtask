import React, {
  FC,
  useCallback
} from 'react'

import RestaurantCard from '@components/Card'
import { Restaurant } from '@models/restaurants'
import { Id } from '@models/common'

type Props = {
  restaurant: Restaurant;
  onClick: (id: Id) => void;
}

const Restaurants: FC<Props> = ({
  restaurant,
  onClick
}) => {
  const handleClick = useCallback(() => onClick(restaurant.id), [onClick, restaurant.id])

  return (
    <RestaurantCard
      backgroundImage={restaurant.backgroundImageURL}
      title={restaurant.name}
      subtitle={restaurant.category}
      onClick={handleClick}
    />)
}

export default Restaurants
