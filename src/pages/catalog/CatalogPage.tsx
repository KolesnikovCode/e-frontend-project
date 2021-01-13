import React from 'react';
import { useSelector } from 'react-redux'
import LoaderWrapper from '../../core/components/loader-wrapper/LoaderWrapper';
import CatalogPageContent from './CatalogPageContent';
import { useTitlePage } from '../../core/hooks'
import { filterProducts } from '../../core/api/utils';

const CatalogPage = () => {
  
  // Redux
  const products = useSelector((state: any) => filterProducts(state.products, state.filters));

  // Local state
  const [isLoaded, setIsLoaded] = React.useState<boolean>(false);

  useTitlePage('E A S Y - Каталог');

  React.useEffect(() => {
    setIsLoaded(true);
    // eslint-disable-next-line
  }, []);

  return (
    <LoaderWrapper isLoaded={isLoaded}>
      <CatalogPageContent products={ products } />
    </LoaderWrapper>
  )
}

export default CatalogPage;