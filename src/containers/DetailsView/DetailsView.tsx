import React, {
  FC,
  useEffect
} from 'react'

import Header from '@layout/Header'
import { BackButton } from '@components/Button'
import Map from '@components/Map'
import { Restaurant } from '@models/restaurants'
import styles from './styles.module.scss'

type Props = {
  onBack: () => void;
  restaurant: Restaurant | null;
}

const DetailsView: FC<Props> = ({
  onBack,
  restaurant: {
    name,
    category,
    location,
    contact
  }
}) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <div className={styles.container}>
      <Header HeaderLeft={<BackButton onClick={onBack} />} />
      <div className={styles.inner}>
        <Map
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: '400px' }} />}
          mapElement={<div style={{ height: '100%' }} />}
          location={location}
          googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyBBR2GcF-OR0YSh9Yoqvn3ZGicnkLNVFsY&v=3.exp&libraries=geometry,drawing,places'
        />
        <div className={styles.head}>
          <h1 className={styles.title}>
            {name}
          </h1>
          <p className={styles.category}>
            {category}
          </p>
        </div>
        <div className={styles.description}>
          <p className={styles.text}>
            {location?.formattedAddress.join(', ')}
          </p>
          <p className={styles.text}>
            {contact?.formattedPhone}
          </p>
          <p className={styles.text}>
            {contact?.twitter}
          </p>
        </div>
      </div>
    </div>
  )
}

export default DetailsView
