import React from 'react'
import InfoIcon from '../../../assets/images/info-icon.svg'
import './info-button.scss'

interface IProps {
  onClick: () => any
}

const InfoButton = ({ onClick }: IProps) => {
  return (
    <button
      className="info-button"
      onClick={ onClick }  
    >
      <img src={ InfoIcon } alt=""/>
    </button>
  )
}

export default InfoButton
