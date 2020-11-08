import React from 'react';
import { Link } from 'react-router-dom';
import './result-look-card.scss';
import { ReactComponent as FavoriteIcon } from '../../../../assets/images/buttons/favorite.svg';
import { ReactComponent as LikeIcon } from '../../../../assets/images/buttons/like.svg';
import { ReactComponent as ArrowRightIcon } from '../../../../assets/images/buttons/arrow-right.svg';
import { TLook } from '../../../../core/models/look';


interface IResultLookCardProps {
  look: TLook
}

const ResultLookCard = ({ look }: IResultLookCardProps) => {
  return (
    <div className="result-look">

      <div className="result-look-content">
        <div className="result-look-content-main">

          <div className="result-look-content-main__top">
            <img draggable="false" src={look.mainProducts.topProduct.image} alt=""/>
          </div>

          <div className="result-look-content-main__bottom">
            <img draggable="false" src={look.mainProducts.bottomProduct.image} alt=""/>
            <img draggable="false" src="" alt=""/>
          </div>

          <div className="result-look-content-main__shoes">
            <img draggable="false" src={look.mainProducts.shoesProduct.image} alt=""/>
          </div>

          {
            !!look.mainProducts.accessoryProduct && (
              <div className="result-look-content-main__accessory">
                <img draggable="false" src={look.mainProducts.accessoryProduct.image} alt=""/>
              </div>
            )
          }
          
        </div>

        {
          look.additionalProducts && (
            <div className="result-look-content-additional">

              <div className="result-look-content-additional__accessory">
                <img draggable="false" src="https://officialpsds.com/imageview/rn/64/rn64j1_large.png?1521316493" alt=""/>
              </div>

              <div className="result-look-content-additional__shirt">
                <img draggable="false" src="https://cdn-images.farfetch-contents.com/15/10/32/15/15103215_25622875_300.jpg" alt=""/>
              </div>

            </div>
          )
        }
      </div>

      <div className="result-look-bottom">

        <div className="result-look-bottom-price">
          { look.price }₽
        </div>

        <div className="result-look-bottom-actions">
          <div className="result-look-bottom-actions__favorite">
            <button className={ look.isBookmarkedLook ? "bookmarked" : "" }>
              <FavoriteIcon />
            </button>
          </div>
          <div className="result-look-bottom-actions__like">
            <button className={ look.isLikedLook ? "liked" : "" }>
              <LikeIcon />
            </button>
          </div>
          <div className="result-look-bottom-actions__link">
            <button title={`Перейти к образу: ${ look.name }`}>
              <Link to={`/look/${look.id}`} />
              <ArrowRightIcon />
            </button>
          </div>
        </div>

      </div>

    </div>
  )
};

export default ResultLookCard;
