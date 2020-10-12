import React from 'react';
import { Link } from 'react-router-dom';
import SmallLogo from '../../../assets/images/small-logo.svg';
import SocialLink from '../social-link/SocialLink';
import { IconsEnum } from '../../models/icons';
import './footer.scss';
import BigContainer from '../../layouts/big-container/BigContainer';

const Footer = () => {

  const socialLinks = [
    {
      link: 'http://instagram.com/',
      icon: IconsEnum.instagram
    },
    {
      link: 'http://youtube.com/',
      icon: IconsEnum.youtube
    },
    {
      link: 'http://vk.com/',
      icon: IconsEnum.vk
    },
    {
      link: 'http://facebook.com/',
      icon: IconsEnum.facebook
    }
  ];

  return (
    <footer className="footer">
      <BigContainer>

        <div className="footer-content">

          <div className="footer-content-left">
            <div className="footer-content-left__logo">
              <img src={ SmallLogo } alt="logo"/>
            </div>
            <div className="footer-content-left__links">
              <Link to="/">О нас</Link>
              <Link to="/">Вакансии</Link>
              <Link to="/">FAQ</Link>
              <Link to="/">Разработчикам</Link>
              <Link to="/">Контакты</Link>
            </div>
          </div>

          <div className="footer-content-right">
            {
              socialLinks.map(link => {
                return (
                  <div className="footer-content-right__link" key={link.icon}>
                    <SocialLink link={link.link} icon={ link.icon } />
                  </div>
                )
              })
            }
          </div>

        </div>
        
      </BigContainer>
    </footer>
  )
}

export default Footer;
