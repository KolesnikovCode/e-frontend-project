import React from 'react';
import CatalogActionButtons from '../../core/components/catalog-action-buttons/CatalogActionButtons';
import ContentContainer from '../../core/layouts/content-container/ContentContainer';
import { TProduct } from '../../core/models/product';
import ProductInfoCard from './components/product-info-card/ProductInfoCard';
import './product-page.scss';

interface IProps {
    product: TProduct
}

const ProductPageContent = ({ product }: IProps) => {
    return (
        <ContentContainer>

            <CatalogActionButtons />

            <div className="product-info-container">
                <ProductInfoCard product={ product } />
            </div>
            
        </ContentContainer>
    )
};

export default ProductPageContent;
