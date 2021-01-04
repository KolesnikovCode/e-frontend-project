import React from 'react';
import './result-page.scss';
import { useSelector, useDispatch } from 'react-redux'
import LoaderWrapper from '../../core/components/loader-wrapper/LoaderWrapper';
import { useTitlePage } from '../../core/hooks';
import ResultPageContent from './ResultPageContent';
import { setQuizFinished } from '../../redux/actions';
import { TLook } from '../../core/models/look';
import { mockLooks } from './mock';
// import { useHistory } from 'react-router-dom';

const ResultPage = () => {
  // Local state
  const [isLoaded, setIsLoaded] = React.useState<boolean>(false);
  const [looks, setLooks] = React.useState<Array<TLook | any>>();

  // COMMON
  const dispatch = useDispatch();
  // const routerHistory = useHistory();

  // STORE
  const isQuizFinished = useSelector((state: any) => state.isQuizFinished);

  const fetchData = async () => {
    // TODO change products loading on looks loading
    try {
      setIsLoaded(false);
      await new Promise(res => {
        setTimeout(() => res(true), 800)
      })
      setLooks(mockLooks);

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
      // routerHistory.push('/');
      fetchData();
    }
    return () => {
      dispatch(setQuizFinished(false));
    }
  // eslint-disable-next-line
  }, []);

  return (
    <LoaderWrapper isLoaded={isLoaded}>
      <ResultPageContent
        looks={ looks }
      />
    </LoaderWrapper>
  )
}

export default ResultPage;
