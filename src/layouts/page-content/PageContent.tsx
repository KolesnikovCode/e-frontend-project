import React from 'react'
import './page-content.scss'

const PageContent = ({ children }: any) => {
  return (
    <div className="page-content">
      { children }
    </div>
  )
}

export default PageContent
