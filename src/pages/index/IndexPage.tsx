import React from 'react'
import './index-page.scss'
import { useTitlePage } from '../../hooks'
import IndexPageContent from './IndexPageContent'


const IndexPage = () => {
  const [isLoaded, setIsLoaded] = React.useState<boolean>(false)
  // Change title
  useTitlePage('E A S Y - меняться - легко')

  React.useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoaded(true)
  }, [])

  return (
    isLoaded ? <IndexPageContent /> : <div>Loader coming soon...</div>
  )
}

export default IndexPage
