import React from 'react'
import { useDispatch } from 'react-redux'
import { decrementModalStep } from '../../../../redux/actions'
import { useSelector } from 'react-redux'
import './quiz.scss'
import InfoButton from '../../../../core/components/info-button/InfoButton'
import CircleButton from '../../../../core/components/circle-button/CircleButton'
import { IconsEnum } from '../../../../core/models/icons'

import GenderStep from './steps/GenderStep'
import ConstitutionStep from './steps/ConstitutionStep'
import EventStep from './steps/EventStep'
import ToneStep from './steps/ToneStep'
import PriceStep from './steps/PriceStep'

interface IProps {
  onClose: () => void
}

const Quiz = ({ onClose }: IProps) => {

  const dispatch = useDispatch()

  // Selector
  const modalStep = useSelector((state: any) => state.modalStep)
  const filters = useSelector((state: any) => state.filters)

  console.log(filters);
  

  const allSteps = {
    gender: {
      info: 'выберите гендерную принадлежность',
      component: <GenderStep />
    },
    constitution: {
      info: 'easy подберёт наиболее подходящий и выгодный комплект для выбранной категории',
      component: <ConstitutionStep />
    },
    event: {
      info: 'выберите для какого повода easy подберёт вам образ',
      component: <EventStep />
    },
    tone: {
      info: 'выберите в какой цветовой гамме easy подберёт вещи',
      component: <ToneStep />
    },
    price: {
      info: `В категорию "эконом" входят неизвестные бренды молодых дизайнеров и не только. Ценовая категория: до 15 тысяч рублей за образ.
      В категорию "стандарт" входят известные всем бренды. Ценовая категория: до 25 тысяч рублей.
      В категорию "люкс" входят известные и дорогие марки и не только. Ценовая категория: без ограничения цены.`,
      component: <PriceStep />
    }
  }
  
  // TOP BUTTONS
  const topButtonsRenderer = () => {
    const buttonsRenderer = () => {
      switch (modalStep) {
        // GENDER
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
        // CONSTITUTION
        case 1:
          return (
            <>
              <CircleButton
                onClick={ handleClickPrevStepBtn }
                iconName={ IconsEnum.arrow_back }
              />
              <InfoButton
                popoverText={ allSteps.constitution.info }
              />
            </>
          )
        // EVENT
        case 2:
          return (
            <>
              <CircleButton
                onClick={ handleClickPrevStepBtn }
                iconName={ IconsEnum.arrow_back }
              />
              <InfoButton
                popoverText={ allSteps.event.info }
              />
            </>
          )
        // EVENT
        case 3:
          return (
            <>
              <CircleButton
                onClick={ handleClickPrevStepBtn }
                iconName={ IconsEnum.arrow_back }
              />
              <InfoButton
                popoverText={ allSteps.tone.info }
              />
            </>
          )
        // PRICE
        case 4:
          return (
            <>
              <CircleButton
                onClick={ handleClickPrevStepBtn }
                iconName={ IconsEnum.arrow_back }
              />
              <InfoButton
                popoverText={ allSteps.price.info }
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
      // GENDER
      case 0:
        return allSteps.gender.component
      // CONSTITUTION
      case 1:
        return allSteps.constitution.component
      // EVENT
      case 2:
        return allSteps.event.component
      // TONE
      case 3:
        return allSteps.tone.component
      // PRICE
      case 4:
        return allSteps.price.component
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

  // HANDLERS
  const handleEscPress = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }

  const handleClickPrevStepBtn = () => {
    dispatch(decrementModalStep())
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
