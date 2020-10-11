import React from 'react'
import { IconsEnum } from '../../../core/models/icons'
import ArrowBack from '../../../assets/images/buttons/arrow-back.svg'
import CloseBig from '../../../assets/images/buttons/close-big.svg'
import './circle-button.scss'

interface IProps {
  iconName: string
  onClick: () => void
}

const CircleButton = ({ iconName, onClick }: IProps) => {
  const iconRenderer = (iconName: string) => {
    switch (iconName) {
      case IconsEnum.arrow_back:
        return <img src={ ArrowBack } alt='' />
      case IconsEnum.close_big:
        return <img src={ CloseBig } alt='' />
      default:
        return undefined
    }
  }

  return (
    <button
      onClick={ () => onClick() }
      className="circle-button"
    >
      { iconRenderer(iconName) }
    </button>
  )
}

export default CircleButton
