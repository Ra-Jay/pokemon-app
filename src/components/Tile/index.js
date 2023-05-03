import React from 'react'
import Text from '../Text'
import textTypes from '../../components/Text/constants/textTypes'
import './styles.scss'

const Tile = ({title, image, onClick, className}) => {
  return (
    <div className={`tile ${className}`} onClick={onClick}>
        <img className='tile-image' src={image} alt=''/>
        <Text
          className='tile-title'
          type={textTypes.HEADING.XXXS}
        >
          {title}
        </Text>
    </div>
  )
}

export default Tile