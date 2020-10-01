import React from 'react'
import { Link } from 'react-router-dom'
import SmallLogo from '../../assets/images/small-logo.svg'

const Header = () => {
  return (
    <header className="header">
      <div className="big-container">
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
      </div>
    </header>
  )
}

export default Header
