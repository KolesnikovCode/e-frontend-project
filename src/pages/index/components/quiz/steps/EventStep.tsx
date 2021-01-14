import React from 'react'
import { useDispatch } from 'react-redux'
import { incrementModalStep, setQuizEvent } from '../../../../../redux/actions'
import { EEvent } from '../../../../../core/models/filters'

const EventStep = () => {

  const dispatch = useDispatch()

  const handleChoseEvent = (event: string) => {
    dispatch(setQuizEvent(event))
    dispatch(incrementModalStep())
  }

  return (
    <div className="quiz-buttons-wrapper animate__animated animate__fadeIn">
      <button
        className="quiz-buttons-button"
        onClick={ () => handleChoseEvent(EEvent.PARTY) }
      >
        вечеринка
      </button>
      <button
        className="quiz-buttons-button"
        onClick={ () => handleChoseEvent(EEvent.WORK) }
      >
        работа
      </button>
      <button
        className="quiz-buttons-button"
        onClick={ () => handleChoseEvent(EEvent.EVERYDAY) }
      >
        на каждый день
      </button>
      <button
        className="quiz-buttons-button"
        onClick={ () => handleChoseEvent(EEvent.ANY) }
      >
        любой
      </button>
    </div>
  )
}

export default EventStep
