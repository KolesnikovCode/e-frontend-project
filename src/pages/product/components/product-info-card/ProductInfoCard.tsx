import React from 'react';
import { TProduct } from '../../../../core/models/product';
import './product-info-card.scss';
import { ReactComponent as FavoriteIcon } from '../../../../assets/images/buttons/favorite.svg';
import { ReactComponent as LikeIcon } from '../../../../assets/images/buttons/like.svg';
import { useTitlePage } from '../../../../core/hooks';

interface IProps {
    product: TProduct
}

const ProductInfoCard = ({ product }: IProps) => {
    // Local State
    const [activeImageurl, setActiveImageUrl] = React.useState<string>(product.images[0]);

    // Methods
    const checkIsActiveImage = (url: string, activeUrl: string) => url === activeUrl;

    const changeActiveImage = (url: string) => setActiveImageUrl(url);

    
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
            </div>

        </div>
    )
}

export default ProductInfoCard;
