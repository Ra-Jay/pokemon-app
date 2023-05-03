import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles.scss'

const Container = ({ children, className }) => {
  return (
    <div className={cn(styles.Container, className)}>
      {children}
    </div>
  )
}

Container.displayName = 'Container'

Container.defaultProps = {
  className: null,
  children: null
}

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
}

export default Container