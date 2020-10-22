import React from 'react';
import { useDispatch } from 'react-redux';
import ContentContainer from '../../core/layouts/content-container/ContentContainer';
import InfoButton from '../../core/components/info-button/InfoButton';
import BigLogo from '../../assets/images/big-logo.svg';
import Quiz from './components/quiz/Quiz';
import { resetToDefaultModalState } from '../../redux/actions';

const IndexPageContent: React.FC = () => {
  // LocalState
  const [isQuizView, setIsQuizView] = React.useState<boolean>(false);

  const dispatch = useDispatch();

  const handleStartButtonClick = () => {
    setIsQuizView(true);
  };

  const handleCloseQuiz = () => {
    setIsQuizView(false);
    dispatch(resetToDefaultModalState());
  };

  React.useEffect(() => {
    dispatch(resetToDefaultModalState())
    // eslint-disable-next-line
  }, []);
  
  return  (
    <div className="index-page-content">
      <div className="home animate__animated animate__fadeIn">
        {
          !isQuizView ? (
            <>
              <div className="info-btn-wrapper animate__animated animate__fadeIn">
                <InfoButton
                  popoverText="easy изучит ваш уникальный стиль и подберёт идеально подходящие вещи"
                />
              </div>
              <ContentContainer>
                <div className="home-logo-btn">

                  <div className="home-logo-btn__logo animate__animated animate__fadeInLeft">
                    <img src={BigLogo} alt="logo"/>
                  </div>

                  <div className="home-logo-btn__btn animate__animated animate__fadeInRight">
                    <button
                      type="button"
                      onClick={ handleStartButtonClick }
                    >
                      <span>начать</span>
                    </button>
                  </div>

                </div>
              </ContentContainer>
            </>
          ) : (
            <Quiz
              onClose={ handleCloseQuiz }
            />
          )
        }
      </div>
    </div>
  )
}

export default IndexPageContent;