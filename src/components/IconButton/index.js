import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles.scss'

const IconButton = ({icon, onClick}) => {

  return (
      <button className="btn" onClick={onClick}>
        <FontAwesomeIcon icon={icon} />
      </button>
  ) 
}

export default IconButton