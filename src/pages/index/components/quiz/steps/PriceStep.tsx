import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPriceCategory } from '../../../../../redux/actions'
import { EPrice } from '../../../../../core/models/filters'
import { useHistory } from 'react-router-dom'
import { stringify as queryStringify } from 'query-string'

const PriceStep = () => {
  const dispatch = useDispatch()
  const routerHistory = useHistory()
  const filters = useSelector((state: any) => state.filters)

  const handleChosePriceCategory = (priceCategory: string) => {
    dispatch(setPriceCategory(priceCategory))
  }

  React.useEffect(() => {
    if (filters.priceCategory !== EPrice.ANY) {
      routerHistory.push(`/catalog?${queryStringify(filters)}`)
    }
  }, [filters, routerHistory]);

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
