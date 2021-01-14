import React from 'react';
import { TProduct } from '../../../../core/models/product';
import './product-info-card.scss';
import { ReactComponent as FavoriteIcon } from '../../../../assets/images/buttons/favorite.svg';
import { ReactComponent as LikeIcon } from '../../../../assets/images/buttons/like.svg';
import { useTitlePage } from '../../../../core/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { addProductInTheCart, removeProductFromCart } from '../../../../redux/actions';
import { addProductIdInLocalStorage, removeProductIdInLocalStorage } from '../../../../core/utils/localStorage';

interface IProps {
    product: TProduct
}

const ProductInfoCard = ({ product }: IProps) => {
    // Local State
    const [activeImageurl, setActiveImageUrl] = React.useState<string>(product.images[0]);

    // Redux
    const dispatch = useDispatch();
    const cartProducts = useSelector((state: any) => state.cartProducts);

    // Methods
    const checkIsActiveImage = (url: string, activeUrl: string) => url === activeUrl;

    const changeActiveImage = (url: string) => setActiveImageUrl(url);

    const checkProductExistInTheCart = (product: TProduct, cartProductsList: Array<TProduct>) => {
        return cartProductsList.some(prd => prd._id === product._id);
    };

    const addProductInCart = (product: TProduct) => {
        dispatch(addProductInTheCart(product));
        addProductIdInLocalStorage(product._id);
    };

    const deleteProductFromCart = (product: TProduct) => {
        dispatch(removeProductFromCart(product));
        removeProductIdInLocalStorage(product._id);
    }
    
    useTitlePage(`E A S Y - ${ product.title }`);
    return (
        <div className="product-info">

            <div className="product-info-top-actions">
                <button className="product-card-bottom-actions__like">
                    <LikeIcon />
                </button>
                <button className="product-card-bottom-actions__favorite">
                    <FavoriteIcon />
                </button>
            </div>

            <div className="product-info-images">
                <div className="product-info-images__active">
                    <img src={ `http://api.youreasy.ru/files/${activeImageurl}` } alt="product" />
                </div>
                <div className="product-info-images__galery">
                    {
                        product.images.map(imgUrl => (
                            <div
                                key={ imgUrl }
                                onClick={ () => changeActiveImage(imgUrl) }
                                className={ checkIsActiveImage(imgUrl, activeImageurl) ? "product-info-images__galery__item active" : "product-info-images__galery__item" }
                            >
                                <img src={ `http://api.youreasy.ru/files/${imgUrl}` } alt="product" />
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="product-info-properties">

                <div className="product-info-properties__brand">{ product.brand }</div>
                <div className="product-info-properties__title">{ product.title }</div>
                <div className="product-info-properties__price">{ product.price }₽</div>
                <div className="product-info-properties__desc">{ product.description }</div>
                <div className="product-info-properties__props">!Тут будут размеры и цвета Андрей!</div>

                <div className="product-info-properties-actions">
                    <div className={ checkProductExistInTheCart(product, cartProducts) ? "product-info-properties-actions__to-cart remove" : "product-info-properties-actions__to-cart" }>
                        <button
                            type="button"
                            onClick={ () => checkProductExistInTheCart(product, cartProducts) ? deleteProductFromCart(product) : addProductInCart(product) }
                        >
                            { checkProductExistInTheCart(product, cartProducts) ? "удалить" : "в корзину" }
                        </button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ProductInfoCard;
