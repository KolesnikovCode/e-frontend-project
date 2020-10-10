import React from 'react'
import { Link } from 'react-router-dom'
import SmallLogo from '../../../assets/images/small-logo.svg'
import BigContainer from '../../layouts/big-container/BigContainer'
import './header.scss'

const Header = () => {
  return (
    <header className="header">
      <BigContainer>

        <div className="header-content">

          <div className="header-logo">
            <Link to="/">
              <img src={SmallLogo} alt="logo"/>
            </Link>
          </div>

          <nav className="header-nav">
            <Link to="/feed">лента</Link>
            <Link to="/login">войти</Link>
          </nav>

        </div>
        
      </BigContainer>
    </header>
  )
}

export default Header
