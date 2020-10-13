import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SmallLogo from '../../../assets/images/small-logo.svg';
import BigContainer from '../../layouts/big-container/BigContainer';
import { TUser } from '../../models/user';
import './header.scss';

const navRenderer = (user: TUser) => {
  return (
    <nav className="header-nav">
      <Link to="/feed">лента</Link>
      {
        !!user ? (
          <Link to="/cabiner">
            <img
              src={ user.image }
              alt={ user.nickname }
            />
          </Link>
        ) : <Link to="/login">войти</Link>
      }
    </nav>
  )
};

const Header = () => {

  const user = useSelector((state: any) => state.user);

  return (
    <header className="header">
      <BigContainer>

        <div className="header-content">

          <div className="header-logo">
            <Link to="/">
              <img src={SmallLogo} alt="logo"/>
            </Link>
          </div>

          { navRenderer(user) }

        </div>
        
      </BigContainer>
    </header>
  )
};

export default Header;
