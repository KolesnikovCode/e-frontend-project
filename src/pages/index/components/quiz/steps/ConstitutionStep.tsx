import React from 'react'
import { useDispatch } from 'react-redux'
import { incrementModalStep, setQuizConstitution } from '../../../../../redux/actions'
import { EConstitution } from '../../../../../core/models/filters'

const ConstitutionStep = () => {

  const dispatch = useDispatch()

  const handleChoseConstitution = (constitution: string) => {
    dispatch(setQuizConstitution(constitution))
    dispatch(incrementModalStep())
  }

  return (
    <div className="quiz-buttons-wrapper animate__animated animate__fadeIn">
      <button
        className="quiz-buttons-button"
        onClick={ () => handleChoseConstitution(EConstitution.SLIM) }
      >
        стройное
      </button>
      <button
        className="quiz-buttons-button"
        onClick={ () => handleChoseConstitution(EConstitution.AVERAGE) }
      >
        среднее
      </button>
      <button
        className="quiz-buttons-button"
        onClick={ () => handleChoseConstitution(EConstitution.LARGE) }
      >
        крупное
      </button>
    </div>
  )
}

export default ConstitutionStep
