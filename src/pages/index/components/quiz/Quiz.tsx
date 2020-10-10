import React from 'react'
import GenderStep from './steps/GenderStep'
import { useSelector } from 'react-redux'
import './quiz.scss'

interface IProps {
  onClose: () => void
} 

const stepRenderer = (step: number) => {
  switch (step) {
    case 0:
      return <GenderStep />
    default:
      break;
  }
}

const progressStepRenderer = (currentModalStep: number) => {
  const steps = [0,1,2,3,4];

  return (
    <>
      {
        steps.map((stepIndex: number) => {
          return (
            <div
              key={stepIndex}
              className={ stepIndex <= currentModalStep ? 'quiz-progress-circle passed' : 'quiz-progress-circle' }
            ></div>
          )
        })
      }
    </>
  )
}

const Quiz = ({ onClose }: IProps) => {

  // Selector
  const modalStep = useSelector((state: any) => state.modalStep)

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
      { stepRenderer(modalStep) }
      <div className="quiz-progress-wrapper animate__animated animate__fadeInUp">
        { progressStepRenderer(modalStep) }
      </div>
    </div>
  )
}

export default Quiz
