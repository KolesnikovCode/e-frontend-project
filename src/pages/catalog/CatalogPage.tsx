import React from 'react';
import { useSelector } from 'react-redux'
import LoaderWrapper from '../../core/components/loader-wrapper/LoaderWrapper';
import CatalogPageContent from './CatalogPageContent';
import { useTitlePage } from '../../core/hooks'
import ProductsAPI from '../../core/api/products';
import { filterProducts } from '../../core/api/utils';

const CatalogPage = () => {
  // Local state
  const [isLoaded, setIsLoaded] = React.useState<boolean>(false);

  const filters = useSelector((state: any) => state.filters);

  const fetchData = async () => {
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
  }

  useTitlePage('E A S Y - Каталог');

  React.useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <LoaderWrapper isLoaded={isLoaded}>
      <CatalogPageContent />
    </LoaderWrapper>
  )
}

export default CatalogPage;