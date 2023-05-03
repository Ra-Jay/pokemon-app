import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'
import GLOBALS from '../../../app-globals'
import Button from '..'
import ButtonLink from '../Link'
// import buttonGroupTypes from '../constants/buttonGroupDirections'
import buttonTypes from '../constants/buttonTypes'
import styles from './styles.scss'

const ButtonGroup = ({ className, buttons, direction }) => (
  <div className={cn(className, styles[`ButtonGroup___${direction}`])}>
    {buttons &&
      buttons.map((data, index) =>
        data.to
          ? (
          <ButtonLink
            key={index}
            className={styles[`ButtonGroup___${direction}_button`]}
            dataTestId={data.dataTestId}
            disabled={data.disabled}
            icon={data.icon}
            id={data.id}
            tabIndex={data.tabIndex}
            to={data.to}
            type={data.type}
          >
            {data.text}
          </ButtonLink>
            )
          : (
          <Button
            key={index}
            className={cn(
              data.className,
              styles[`ButtonGroup___${direction}_button`]
            )}
            dataTestId={data.dataTestId}
            disabled={data.disabled}
            icon={data.icon}
            id={data.id}
            isLoading={data.isLoading}
            kind={data.kind || GLOBALS.BUTTON_KINDS.BUTTON}
            type={data.type}
            onClick={data.onClick}
          >
            {data.text}
          </Button>
            )
      )}
  </div>
)

ButtonGroup.defaultProps = {
  className: null,
  // direction: buttonGroupTypes.HORIZONTAL
}

ButtonGroup.propTypes = {
  className: PropTypes.string,
  buttons: PropTypes.arrayOf(
    PropTypes.oneOfType([
      // for the <Button>
      PropTypes.shape({
        dataTestId: PropTypes.string,
        className: PropTypes.string,
        kind: PropTypes.oneOf([
          GLOBALS.BUTTON_KINDS.BUTTON,
          GLOBALS.BUTTON_KINDS.SUBMIT,
          GLOBALS.BUTTON_KINDS.RESET
        ]),
        type: PropTypes.oneOf([
          buttonTypes.PRIMARY.RED,
          buttonTypes.PRIMARY.YELLOW,
          buttonTypes.TEXT.RED
        ]),
        onClick: PropTypes.func.isRequired,
        disabled: PropTypes.bool,
        isLoading: PropTypes.bool,
        id: PropTypes.string,
        icon: PropTypes.string,
        text: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
          .isRequired
      }),
      // for the <ButtonLink>
      PropTypes.shape({
        dataTestId: PropTypes.string,
        type: PropTypes.oneOf([
          buttonTypes.PRIMARY.RED,
          buttonTypes.PRIMARY.YELLOW,
          buttonTypes.TEXT.RED
        ]),
        to: PropTypes.string.isRequired,
        id: PropTypes.string,
        icon: PropTypes.string,
        tabIndex: PropTypes.number,
        disabled: PropTypes.bool,
        text: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
          .isRequired
      })
    ])
  ).isRequired,
  direction: PropTypes.oneOf([
    // buttonGroupTypes.HORIZONTAL,
    // buttonGroupTypes.VERTICAL
  ])
}

export default ButtonGroup
