import React from 'react'
import { useDispatch } from 'react-redux'
import { setQuizPriceCategory, setQuizFinished } from '../../../../../redux/actions'
import { EPrice } from '../../../../../core/models/filters'
import { useHistory } from 'react-router-dom'

const PriceStep = () => {
  const dispatch = useDispatch()
  const routerHistory = useHistory()

  const handleChosePriceCategory = (priceCategory: string) => {
    dispatch(setQuizPriceCategory(priceCategory));
    dispatch(setQuizFinished(true));
    routerHistory.push(`/result`);
  }

  return (
    <div className="quiz-buttons-wrapper animate__animated animate__fadeIn">
      <button
        className="quiz-buttons-button"
        onClick={ () => handleChosePriceCategory(EPrice.ECONOM) }
      >
        эконом
      </button>
      <button
        className="quiz-buttons-button"
        onClick={ () => handleChosePriceCategory(EPrice.STANDARD) }
      >
        стандарт
      </button>
      <button
        className="quiz-buttons-button"
        onClick={ () => handleChosePriceCategory(EPrice.LUXE) }
      >
        люкс
      </button>
    </div>
  )
}

export default PriceStep
