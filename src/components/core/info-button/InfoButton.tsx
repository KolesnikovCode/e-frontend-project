import React from 'react'
import InfoIcon from '../../assets/images/info-icon.svg'

interface IProps {
  onClick: () => any
}

const InfoButton = ({ onClick }: IProps) => {
  return (
    <button className="info-button">
      <img src={ InfoIcon } alt=""/>
    </button>
  )
}

export default InfoButton
