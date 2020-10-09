import React from 'react'
import ContentContainer from '../../layouts/content-container/ContentContainer'
import InfoButton from '../../components/core/info-button/InfoButton'
import BigLogo from '../../assets/images/big-logo.svg'

const IndexPageContent: React.FC = () => {
  const handleInfoBtnClick = () => {
    console.log('Info button click');
  };
  
  return  (
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
            <button type="button">
              <span>начать</span>
            </button>
          </div>

        </div>

      </ContentContainer>

    </div>
  )
}

export default IndexPageContent