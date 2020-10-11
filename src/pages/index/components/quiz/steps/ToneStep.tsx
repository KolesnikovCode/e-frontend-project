import React from 'react'
import { useDispatch } from 'react-redux'
import { incrementModalStep, setTone } from '../../../../../redux/actions'
import { ETone } from '../../../../../core/models/filters'

const ToneStep = () => {

  const dispatch = useDispatch()

  const handleChoseTone = (gender: string) => {
    dispatch(setTone(gender))
    dispatch(incrementModalStep())
  }

  return (
    <div className="quiz-buttons-wrapper animate__animated animate__fadeIn">
      <button
        className="quiz-buttons-button"
        onClick={ () => handleChoseTone(ETone.LIGHT) }
      >
        светлый
      </button>
      <button
        className="quiz-buttons-button"
        onClick={ () => handleChoseTone(ETone.DARK) }
      >
        тёмный
      </button>
      <button
        className="quiz-buttons-button"
        onClick={ () => handleChoseTone(ETone.BRIGHT) }
      >
        яркий
      </button>
      <button
        className="quiz-buttons-button"
        onClick={ () => handleChoseTone(ETone.ANY) }
      >
        любой
      </button>
    </div>
  )
}

export default ToneStep
