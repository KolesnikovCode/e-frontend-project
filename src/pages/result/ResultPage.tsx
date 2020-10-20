import React from 'react';
import './result-page.scss';
import { useSelector, useDispatch } from 'react-redux'
import LoaderWrapper from '../../core/components/loader-wrapper/LoaderWrapper';
import { useTitlePage } from '../../core/hooks';
import ResultPageContent from './ResultPageContent';
import ProductsAPI from '../../core/api/products';
import { filterProducts } from '../../core/api/utils';
import { setQuizFinished } from '../../redux/actions';
import { useHistory } from 'react-router-dom'

const ResultPage = () => {
  // Local state
  const [isLoaded, setIsLoaded] = React.useState<boolean>(false);

  // COMMON
  const dispatch = useDispatch();
  const routerHistory = useHistory()

  // STORE
  const filters = useSelector((state: any) => state.filters);
  const isQuizFinished = useSelector((state: any) => state.isQuizFinished);

  const fetchData = async () => {
    // TODO change products loading on looks loading
    try {
      setIsLoaded(false);

      const productsResponse = await ProductsAPI.getProducts();
      const filteredProducts = filterProducts(productsResponse.data, filters);
      console.log('filteredProducts', filteredProducts);

      setIsLoaded(true);
    } catch(e) {
      console.log(e);
      setIsLoaded(true);
    }
  };

  // Change title hook
  useTitlePage('E A S Y - Подбор образов');

  React.useEffect(() => {
    if (isQuizFinished) {
      fetchData();
    } else {
      routerHistory.push('/')
    }
    return () => {
      dispatch(setQuizFinished(false));
    }
  // eslint-disable-next-line
  }, []);

  return (
    <LoaderWrapper isLoaded={isLoaded}>
      <ResultPageContent
        looks={ [] }
      />
    </LoaderWrapper>
  )
}

export default ResultPage;
