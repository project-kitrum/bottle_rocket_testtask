import React, { FC } from 'react'
import classnames from 'classnames'

import styles from './styles.module.scss'

type Props = {
  backgroundImage: string;
  title: string;
  subtitle: string;
  onClick?: () => void;
}

const Card: FC<Props> = ({
  backgroundImage,
  title,
  subtitle,
  onClick
}) =>
  <button
    className={styles.container}
    onClick={onClick}
    type='button'
  >
    <div className={styles.imageWrapper}>
      <img
        src={backgroundImage}
        alt={title}
        className={styles.image}
      />
    </div>
    <div className={styles.description}>
      <h2 className={classnames('h3', styles.title)}>{title}</h2>
      <h5 className={classnames(styles.subtitle)}>{subtitle}</h5>
    </div>
  </button>

export default Card
