import React from 'react'
import './index-page.scss'
import BigLogo from '../../assets/images/big-logo.svg'
import { useTitlePage } from '../../hooks'
import ContentContainer from '../../layouts/content-container/ContentContainer'
import InfoButton from '../../components/core/info-button/InfoButton'

const IndexPage = () => {
  // Change title
  useTitlePage('E A S Y - меняться - легко')

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const handleInfoBtnClick = () => {
    console.log('Info button click');
  };

  return (
    <div className="home animate__animated animate__fadeIn">
      
      <div className="info-btn-wrapper">
        <InfoButton
          popoverText="easy изучит ваш уникальный стиль и подберёт идеально подходящие вещи"
          onClick={ handleInfoBtnClick }
        />
      </div>

      <ContentContainer>

        <div className="home-logo-btn">

          <div className="home-logo-btn__logo animate__animated animate__fadeInLeft">
            <img src={BigLogo} alt="logo"/>
          </div>

          <div className="home-logo-btn__btn animate__animated animate__fadeInRight">
            <button>начать</button>
          </div>

        </div>

      </ContentContainer>

    </div>
  )
}

export default IndexPage
