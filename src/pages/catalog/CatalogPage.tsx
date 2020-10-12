import React from 'react';
import { useSelector } from 'react-redux'
import LoaderWrapper from '../../core/components/loader-wrapper/LoaderWrapper';
import CatalogPageContent from './CatalogPageContent';
import { useTitlePage } from '../../core/hooks'

const CatalogPage = () => {
  // Local state
  const [isLoaded, setIsLoaded] = React.useState<boolean>(false);

  const filters = useSelector((state: any) => state.filters);

  console.log(filters);

  useTitlePage('E A S Y - Каталог');

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
  }, []);

  return (
    <LoaderWrapper isLoaded={isLoaded}>
      <CatalogPageContent />
    </LoaderWrapper>
  )
}

export default CatalogPage;