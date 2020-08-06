import React, { FC } from 'react'

import Back from './images/back.png'
import styles from './styles.module.scss'

type Props = {
  onClick: () => void;
}

const BackButton: FC<Props> = ({ onClick }) =>
  <button
    onClick={onClick}
    type='button'
    className={styles.button}
  >
    <img
      src={Back}
      alt='back'
      className={styles.image}
    />
  </button>

export default BackButton
