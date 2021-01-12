import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import LoaderWrapper from '../../core/components/loader-wrapper/LoaderWrapper';
import CatalogPageContent from './CatalogPageContent';
import { useTitlePage } from '../../core/hooks'
import ProductsAPI from '../../core/api/products';
import { setProducts } from '../../redux/actions';
import { filterProducts } from '../../core/api/utils';

const CatalogPage = () => {
  
  // Redux
  const dispatch = useDispatch();
  const products = useSelector((state: any) => filterProducts(state.products, state.filters));

  // Local state
  const [isLoaded, setIsLoaded] = React.useState<boolean>(false);


  const fetchData = async () => {
    try {
      setIsLoaded(false);

      const productsResponse = await ProductsAPI.getRealProducts();
      
      dispatch(setProducts(productsResponse.data));

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
      <CatalogPageContent products={ products } />
    </LoaderWrapper>
  )
}

export default CatalogPage;