import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import SmallLogo from '../../../assets/images/small-logo.svg';
import BigContainer from '../../layouts/big-container/BigContainer';
import { TUser } from '../../models/user';
import './header.scss';

const navRenderer = (user: TUser) => {
  return (
    <nav className="header-nav">
      <NavLink to="/" exact>главная</NavLink>
      <NavLink to="/catalog" exact>каталог</NavLink>
      <NavLink to="/result" exact>тест</NavLink>
      <NavLink to="/feed" exact>лента</NavLink>
      {
        !!user ? (
          <NavLink to="/cabinet">
            <img
              src={ user.image }
              alt={ user.nickname }
            />
          </NavLink>
        ) : <NavLink to="/login">войти</NavLink>
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
            <NavLink to="/">
              <img src={SmallLogo} alt="logo"/>
            </NavLink>
          </div>

          { navRenderer(user) }

        </div>
        
      </BigContainer>
    </header>
  )
};

export default Header;
