import React, {
  FC,
  ReactElement
} from 'react'
import classnames from 'classnames'

import styles from './styles.module.scss'

type Props = {
  HeaderLeft?: ReactElement;
  HeaderRight?: ReactElement;
}

const Header: FC<Props> = ({
  HeaderLeft,
  HeaderRight
}) =>
  <div className={styles.container}>
    <div className={styles.inner}>
      <div className={styles.control}>
        {HeaderLeft}
      </div>
      <div className={styles.titleWrapper}>
        <h2 className={classnames('h2', styles.title)}>Lunch Time</h2>
      </div>
      <div className={styles.control}>
        {HeaderRight}
      </div>
    </div>
  </div>

export default Header
