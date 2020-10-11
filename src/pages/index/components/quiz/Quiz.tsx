import React from 'react'
import GenderStep from './steps/GenderStep'
import { useSelector } from 'react-redux'
import './quiz.scss'
import InfoButton from '../../../../core/components/info-button/InfoButton'
import CircleButton from '../../../../core/components/circle-button/CircleButton'
import { IconsEnum } from '../../../../core/models/icons'

interface IProps {
  onClose: () => void
}

const Quiz = ({ onClose }: IProps) => {

  // Selector
  const modalStep = useSelector((state: any) => state.modalStep)

  const allSteps = {
    gender: {
      info: 'Выберите гендерную принадлежность',
      component: <GenderStep />
    }
  }
  
  // TOP BUTTONS
  const topButtonsRenderer = () => {
    const buttonsRenderer = () => {
      switch (modalStep) {
        case 0:
          return (
            <>
              <CircleButton
                onClick={ onClose }
                iconName={ IconsEnum.close_big }
              />
              <InfoButton
                popoverText={ allSteps.gender.info }
              />
            </>
          )
        default:
          return undefined;
      }
    }
  
    return (
      <div className="quiz-top-buttons animate__animated animate__fadeIn">
        { buttonsRenderer() }
      </div>
    )
  }
  
  // STEPS
  const stepRenderer = () => {
    switch (modalStep) {
      case 0:
        return allSteps.gender.component
        default:
          return undefined
    }
  }
  
  // PROGRESS
  const progressStepRenderer = () => {
    const steps = [0,1,2,3,4];
  
    return (
      <div className="quiz-progress-wrapper animate__animated animate__fadeInUp">
        {
          steps.map((stepIndex: number) => {
            return (
              <div
                key={stepIndex}
                className={ stepIndex <= modalStep ? 'quiz-progress-circle passed' : 'quiz-progress-circle' }
              ></div>
            )
          })
        }
      </div>
    )
  }

  const handleEscPress = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }
  // Subscribe on ppress Escape btn
  React.useEffect(() => {
    document.addEventListener('keydown', handleEscPress)
    return () => {
      document.removeEventListener('keydown', handleEscPress)
    }
  })

  return (
    <div className="quiz-wrapper">

      { topButtonsRenderer() }

      { stepRenderer() }

      { progressStepRenderer() }
      
    </div>
  )
}

export default Quiz
