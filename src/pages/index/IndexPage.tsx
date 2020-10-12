import React from 'react';
import './index-page.scss';
import { useTitlePage } from '../../core/hooks';
import IndexPageContent from './IndexPageContent';
import LoaderWrapper from '../.././core/components/loader-wrapper/LoaderWrapper';


const IndexPage = () => {
  const [isLoaded, setIsLoaded] = React.useState<boolean>(false);
  // Change title
  useTitlePage('E A S Y - меняться - легко');

  React.useEffect(() => {
    window.scrollTo(0, 0)
    setTimeout(() => {
      setIsLoaded(true);
    }, 4000);
  }, []);

  return (
    <LoaderWrapper isLoaded={ isLoaded }>
      <IndexPageContent />
    </LoaderWrapper>
  )
}

export default IndexPage;
