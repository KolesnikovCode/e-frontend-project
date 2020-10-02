import React from 'react'
import './content-container.scss'

const ContentContainer = ({ children }: any) => {
  return (
    <div className="container">
      { children }
    </div>
  )
}

export default ContentContainer
