import React from 'react'
import { useDispatch } from 'react-redux'
import { setPriceCategory } from '../../../../../redux/actions'
import { EPrice } from '../../../../../core/models/filters'
import { useHistory } from 'react-router-dom'

const PriceStep = () => {

  const dispatch = useDispatch()
  const routerHistory = useHistory()

  const handleChosePriceCategory = (priceCategory: string) => {
    dispatch(setPriceCategory(priceCategory))
    routerHistory.push('/catalog')
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
        onClick={ () => handleChosePriceCategory(EPrice.STANDART) }
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
