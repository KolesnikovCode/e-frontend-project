import React from 'react'
import './big-container.scss'

const BigContainer = ({ children }: any) => {
  return (
    <div className="big-container">
      { children }
    </div>
  )
}

export default BigContainer
