import React, { useState, useCallback } from 'react'
import { CSSTransition } from 'react-transition-group'
import { useSelector } from 'react-redux'

import ListView from '@containers/ListView'
import DetailsView from '@containers/DetailsView'
import { Id } from '@models/common'
import styles from './styles.module.scss'

const App = () => {
  const restaurants = useSelector<{ restaurants: any }>(
    state => state.restaurants.data
  ) as object

  const [selectedRestaurant, setRestaurant] = useState<Id | null>(null)
  const handleBack = useCallback(() => setRestaurant(null), [])

  return (
    <div className={styles.container}>
      <CSSTransition
        in={selectedRestaurant !== null}
        timeout={200}
        classNames={{
          enterActive: styles.detailsEnterActive,
          enterDone: styles.detailsEnterDone,
          exitActive: styles.detailsExit,
          exitDone: styles.detailsExitActive
        }}
        mountOnEnter
        unmountOnExit
      >
        <div className={styles.details}>
          <DetailsView
            onBack={handleBack}
            restaurant={selectedRestaurant ? restaurants[selectedRestaurant] : {}}
          />
        </div>
      </CSSTransition>
      <ListView onRestaurantClick={setRestaurant} />
    </div>
  )
}

export default App
