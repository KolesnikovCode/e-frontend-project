import React from 'react';
import ContentContainer from '../../core/layouts/content-container/ContentContainer';
import { TProduct } from '../../core/models/product';
import { Link } from 'react-router-dom';
import './cart-page.scss';
import routes from '../../core/routes';
import ProductCard from '../../core/components/product-card/ProductCard';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../redux/actions';
import { clearCartProductIdsFromLocalStorage } from '../../core/utils/localStorage';
import CatalogActionButtons from '../../core/components/catalog-action-buttons/CatalogActionButtons';

interface IProps {
    products: Array<TProduct>
}

const CartPageContent = ({ products }: IProps) => {
    // Redux
    const dispatch = useDispatch();
    // Methods
    const calculatePriceSum = (products: Array<TProduct>) => {
        return products.reduce((acc, curProd) => acc + curProd.price, 0);
    };

    const resetCart = () => {
        dispatch(clearCart());
        clearCartProductIdsFromLocalStorage();
        window.scrollTo(0, 0);
    }

    return (
        <div className="cart">
            <ContentContainer>

                <CatalogActionButtons
                    isVisibleCartButton={ false }
                />

                <div className="cart-wrapper">

                    {
                        products.length ? (
                            <>
                                <div className="cart-products">
                                    { products.map((product: TProduct) => <ProductCard key={ product._id } product={ product } />) }
                                </div>

                                <div className="cart-info">
                                    <div className="cart-info-block">
                                        <div>
                                            <button type="button" onClick={ () => resetCart() }>Очистить корзину</button>
                                        </div>
                                        <div className="cart-info-block__sum">
                                            <b>Сумма: { calculatePriceSum(products) } р</b>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="cart-empty">
                                <h3>У вас нет продуктов в корзине</h3>
                                <div>
                                    <Link to={ routes.CATALOG_PAGE }>Перейти в каталог</Link>
                                </div>
                            </div>
                        )
                    }

                </div>

            </ContentContainer>
        </div>
    )
}

export default CartPageContent;
