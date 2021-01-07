import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CatalogActionButtons from '../../core/components/catalog-action-buttons/CatalogActionButtons';
import ProductCard from '../../core/components/product-card/ProductCard';
import ContentContainer from '../../core/layouts/content-container/ContentContainer';
import { TProduct } from '../../core/models/product';
import routes from '../../core/routes';
import { incrementShowItemsInCatalog, resetShowItemsInCatalog } from '../../redux/actions';
import './catalog-page.scss';

interface IProps {
  products: Array<TProduct>
}

const CatalogPageContent = ({ products }: IProps) => {
  // Local State
  const [isMinimizeGrid, setIsMinimizeGrid] = React.useState<boolean>(false);

  // Redux
  const dispatch = useDispatch();
  const showItemsInCatalogCount = useSelector((state: any) => state.showItemsInCatalogCount)

  const incrementShowItemsCoutOnScroll = () => {
    console.log((window.innerHeight + window.scrollY) >= document.body.offsetHeight);
    if ((window.innerHeight + window.scrollY + 2) >= document.body.offsetHeight) {
      dispatch((incrementShowItemsInCatalog()));
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', incrementShowItemsCoutOnScroll);

    return () => {
      window.removeEventListener('scroll', incrementShowItemsCoutOnScroll);
      dispatch(resetShowItemsInCatalog());
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className="catalog">

      <ContentContainer>
        <CatalogActionButtons
          backButtonRoute={ routes.MAIN_PAGE }
          onClickToggleGridButton={ () => setIsMinimizeGrid(!isMinimizeGrid) }
          isMinimizeGrid={ isMinimizeGrid }
        />

        <div className={ isMinimizeGrid ? "catalog-grid minimize_grid" : "catalog-grid" }>

          {
            products.slice(0, showItemsInCatalogCount).map(product => <ProductCard product={ product } isBigCard={ isMinimizeGrid } key={ product._id } />)
          }

        </div>

      </ContentContainer>
      
    </div>
  )
};

export default CatalogPageContent;