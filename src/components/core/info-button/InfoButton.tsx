import React from 'react'
import InfoIcon from '../../../assets/images/info-icon.svg'
import './info-button.scss'
import { Popover, Position } from '@blueprintjs/core'

interface IProps {
  onClick: () => any
  popoverText: string
  popoverPosition?: Position
}

const popoverContentRenderer = (popoverText: string) => {
  return (
    <div className="info-button-content">
      { popoverText }
    </div>
  )
}

const InfoButton = ({
  onClick,
  popoverText,
  popoverPosition = Position.BOTTOM 
}: IProps) => {
  return (
    <Popover
      content={ popoverContentRenderer(popoverText) }
      position={ popoverPosition }
      canEscapeKeyClose
    >
      <button
        className="info-button"
        onClick={ onClick }
        title="Информация"
        type="button"
      >
        <img src={ InfoIcon } alt=""/>
      </button>
    </Popover>
  )
}

export default InfoButton
