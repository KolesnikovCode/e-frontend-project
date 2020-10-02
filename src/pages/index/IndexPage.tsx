import React from 'react'
import './index-page.scss'
import BigLogo from '../../assets/images/big-logo.svg'
import { useTitlePage } from '../../hooks'

const IndexPage = () => {
  // Change title
  useTitlePage('E A S Y - меняться - легко')

  return (
    <div className="home animate__animated animate__fadeIn">
      <div className="container">

        <div className="home-logo-btn">

          <div className="home-logo-btn__logo animate__animated animate__fadeInLeft">
            <img src={BigLogo} alt="logo"/>
          </div>

          <div className="home-logo-btn__btn animate__animated animate__fadeInRight">
            <button>начать</button>
          </div>

        </div>

      </div>

    </div>
  )
}

export default IndexPage
