import React from 'react'
import { useDispatch } from 'react-redux'
import { incrementModalStep, setGender } from '../../../../../redux/actions'
import { EGenders } from '../../../../../core/models/filters'

const GenderStep = () => {

  const dispatch = useDispatch()

  const handleChoseGender = (gender: string) => {
    dispatch(setGender(gender))
    dispatch(incrementModalStep())
  }

  return (
    <div className="quiz-buttons-wrapper animate__animated animate__fadeIn">
      <button
        className="quiz-buttons-button"
        onClick={ () => handleChoseGender(EGenders.MALE) }
      >
        мужское
      </button>
      <button
        className="quiz-buttons-button"
        onClick={ () => handleChoseGender(EGenders.FEMALE) }
      >
        женское
      </button>
    </div>
  )
}

export default GenderStep
