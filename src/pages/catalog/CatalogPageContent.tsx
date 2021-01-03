import React from 'react';
import CatalogActionButtons from '../../core/components/catalog-action-buttons/CatalogActionButtons';
import ProductCard from '../../core/components/product-card/ProductCard';
import ContentContainer from '../../core/layouts/content-container/ContentContainer';
import { TProduct } from '../../core/models/product';
import routes from '../../core/routes';
import './catalog-page.scss';

interface IProps {
  products: Array<TProduct>
}

const CatalogPageContent = ({ products }: IProps) => {

  const [isMinimizeGrid, setIsMinimizeGrid] = React.useState<boolean>(false);

  console.log(products);
  

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
            products.map(product => <ProductCard product={ product } isBigCard={ isMinimizeGrid } key={ product._id } />)
          }

        </div>

      </ContentContainer>
      
    </div>
  )
};

export default CatalogPageContent;