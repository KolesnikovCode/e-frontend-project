import React from 'react';
import { Link } from 'react-router-dom';
import './product-card.scss';
import { ReactComponent as FavoriteIcon } from '../../../assets/images/buttons/favorite.svg';
import { ReactComponent as LikeIcon } from '../../../assets/images/buttons/like.svg';
import { ReactComponent as ArrowRightIcon } from '../../../assets/images/buttons/arrow-right.svg';
import { TProduct } from '../../models/product';
import { useSelector } from 'react-redux';
import { ReactComponent as CartIcon } from '../../../assets/images/buttons/cart.svg';

interface IProps {
    isBigCard?: boolean,
    product: TProduct
}

const ProductCard = ({ isBigCard = false, product }: IProps) => {
    // Redux
    const cartProducts = useSelector((state: any) => state.cartProducts)

    const checkProductExistInTheCart = (product: TProduct, cartProductsList: Array<TProduct>) => {
        return cartProductsList.some(prd => prd._id === product._id);
    };

    return (
        <div className={ isBigCard ? "product-card big-card": "product-card" }>

            {
                checkProductExistInTheCart(product, cartProducts) && (
                    <div className="product-card-exist-in-cart" title="Товар добавлен в корзину">
                        <CartIcon title="Товар добавлен в корзину" />
                    </div>
                )
            }

            <div className="product-card-image">
                <img src={ `http://api.youreasy.ru/files/${product.images[0]}` } alt="product" />
            </div>

            <div className="product-card-name">{ product.title }</div>

            <div className="product-card-brand">{ product.brand }</div>

            <div className="product-card-bottom">

                <div className="product-card-bottom-price">{ product.price }₽</div>

                <div className="product-card-bottom-actions">
                    <button className="product-card-bottom-actions__favorite">
                        <FavoriteIcon />
                    </button>
                    <button className="product-card-bottom-actions__like">
                        <LikeIcon />
                    </button>
                    <div className="product-card-bottom-actions__link">
                        <button title={`Перейти к продукту`}>
                            <Link to={`/product/${ product._id }`} />
                            <ArrowRightIcon />
                        </button>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default ProductCard;
