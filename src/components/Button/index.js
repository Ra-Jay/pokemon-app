import React from 'react'

import cn from 'classnames'
import PropTypes from 'prop-types'

import GLOBALS from '../../app-globals'
import { buttonTypes } from '../constants'
import styles from './styles.scss'

const Button = ({
  children,
  className,
  dataTestId,
  disabled,
  icon,
  iconClassName,
  id,
  innerRef,
  isLoading,
  isLocked,
  kind,
  lockedIconClassName,
  tabIndex,
  tooltipContent,
  tooltipLink,
  type,
  wrapperClassName,
  onClick
}) => {
  const button = (
    <button
      ref={e => {
        if (innerRef) {
          innerRef.current = e
        }
      }}
      className={cn(className, styles[`Button___${type}`], {
        [styles.Button___withIcon]: icon !== null,
        [styles.Button___disabled]: isLoading
      })}
      data-test={dataTestId}
      disabled={disabled || isLocked || isLoading}
      id={id}
      tabIndex={tabIndex}
      type={kind}
      onClick={!isLocked ? onClick : () => {}}
    >
       {/* {isLoading
         ? (
        <Spinner
          colorName={GLOBALS.COLOR_NAMES.WHITE}
          data-test="loadingSpinner"
          size={spinnerSizes.SM}
        />
           )
         : (
        <>
          {icon && (
            <Icon
              className={cn(styles.Button___withIcon_icon, iconClassName)}
              icon={icon}
            />
          )}
          {children}
        </>
           )} */}
        {children}
    </button>
  )

  // eslint-disable-next-line multiline-ternary
  return !isLocked ? (button) : (
    <span
      // className={cn(wrapperClassName, styles.Button_wrapper)}
      data-test={dataTestId}
    >
      {button}
      {/* <Tooltip
        content={
          tooltipContent || GLOBALS.MESSAGES.PREMIUM_FEATURE_LOCK_MESSAGE
        }
      >
        <a
          href={tooltipLink}
          rel="noreferrer"
          target={'_self'}
        >
          <Icon
            className={cn(styles.Button_lockedIcon, lockedIconClassName)}
            icon="lock"
          />
        </a>
      </Tooltip> */}
    </span>
  )
}

Button.defaultProps = {
  className: null,
  dataTestId: null,
  disabled: false,
  icon: null,
  id: null,
  isLoading: false,
  isLocked: false,
  kind: GLOBALS.BUTTON_KINDS.BUTTON,
  lockedIconClassName: null,
  tabIndex: 0,
  type: buttonTypes.PRIMARY.YELLOW,
  wrapperClassName: null,
  onClick: () => {}
}

Button.propTypes = {
  kind: PropTypes.oneOf([
    GLOBALS.BUTTON_KINDS.BUTTON,
    GLOBALS.BUTTON_KINDS.SUBMIT,
    GLOBALS.BUTTON_KINDS.RESET
  ]),
  type: PropTypes.oneOf([
    buttonTypes.PRIMARY.RED,
    buttonTypes.PRIMARY.YELLOW,
    buttonTypes.TEXT.RED,
    buttonTypes.TEXT.YELLOW,
    buttonTypes.TEXT.GRAY
  ]),
  innerRef: PropTypes.any,
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  icon: PropTypes.string,
  tabIndex: PropTypes.number,
  dataTestId: PropTypes.string,
  isLocked: PropTypes.bool,
  iconClassName: PropTypes.string,

  // these can only have values if `isLocked` is true
  tooltipContent: PropTypes.string,
  tooltipLink: PropTypes.string,
  wrapperClassName: PropTypes.string,
  lockedIconClassName: PropTypes.string,
  isLoading: PropTypes.bool
}

export default Button
