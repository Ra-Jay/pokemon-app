import React from 'react'
import Text from '../Text'
import { textTypes } from '../constants'
import './styles.scss'

const Spinner = () => {
  return (
    <div class="center-on-page">
        <Text
          type={textTypes.HEADING.XXL}
          className='text'
        >
          Loading...
        </Text>
        <div class="pokeball">
          <div class="pokeball__button"></div>
        </div>
    </div>
  )
}

export default Spinner