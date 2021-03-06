import React from 'react';
import LoaderWrapper from '../../core/components/loader-wrapper/LoaderWrapper';
import LookPageContent from './LookPageContent';
import { useTitlePage } from '../../core/hooks'
import { useParams } from 'react-router-dom';
import { TLook } from '../../core/models/look';
import { mockLooks } from '../result/mock';

const LookPage = () => {
  // Local state
  const [isLoaded, setIsLoaded] = React.useState<boolean>(false);
  const [loadingError, setLoadingError] = React.useState<boolean>(false);
  const [look, setLook] = React.useState<TLook | any>(null);

  const { id: lookId }: any = useParams();

  const fetchData = async () => {
    try {
      setIsLoaded(false);
      setLoadingError(false);
      const foundLook = mockLooks.find(look => String(look.id) === lookId);
      setLook(foundLook);
      
      setIsLoaded(true);
    } catch(e) {
      console.log(e);
      setLoadingError(true)
      setIsLoaded(true);
    }
  }

  useTitlePage('E A S Y - Каталог');

  React.useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <LoaderWrapper isLoaded={ isLoaded } hasError={ loadingError } >
      <LookPageContent look={ look } />
    </LoaderWrapper>
  )
}

export default LookPage;