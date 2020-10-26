import React from 'react';
import './result-look-card.scss';
import FavoriteIcon from '../../../../assets/images/buttons/favorite.svg';
import LikeIcon from '../../../../assets/images/buttons/like.svg';
import ArrowRightIcon from '../../../../assets/images/buttons/arrow-right.svg';

const ResultLookCard: React.FC = () => {
  return (
    <div className="result-look">

      <div className="result-look-content">

        <div className="result-look-content-main">

          <div className="result-look-content-main__top">
            <img draggable="false" src="https://ae01.alicdn.com/kf/HTB1ekdHbojrK1RkHFNRq6ySvpXa1.jpg" alt=""/>
          </div>

          <div className="result-look-content-main__bottom">
            <img draggable="false" src="https://main-cdn.goods.ru/big2/hlr-system/154356986/100025046025b0.jpg" alt=""/>
          </div>

          <div className="result-look-content-main__shoes">
            <img draggable="false" src="https://cdn.butik.ru/imgstore/2/0/b/6/20b606d4-a5b9-48e8-94d6-acfd84cb0b07-orig.jpg?height=907&width=576" alt=""/>
          </div>

          <div className="result-look-content-main__accessory">
            <img draggable="false" src="https://cdn-images.farfetch-contents.com/15/56/33/19/15563319_27960340_1000.jpg" alt=""/>
          </div>

        </div>

        <div className="result-look-content-additional">

          <div className="result-look-content-additional__accessory">
            <img draggable="false" src="https://officialpsds.com/imageview/rn/64/rn64j1_large.png?1521316493" alt=""/>
          </div>

          <div className="result-look-content-additional__shirt">
            <img draggable="false" src="https://cdn-images.farfetch-contents.com/15/10/32/15/15103215_25622875_300.jpg" alt=""/>
          </div>

        </div>
      </div>

      <div className="result-look-bottom">

        <div className="result-look-bottom-price">
          123456₽
        </div>

        <div className="result-look-bottom-actions">
          <div className="result-look-bottom-actions__favorite">
            <button>
              <img src={ FavoriteIcon } alt="favorite"/>
            </button>
          </div>
          <div className="result-look-bottom-actions__like">
            <button>
              <img src={ LikeIcon } alt=""/>
            </button>
          </div>
          <div className="result-look-bottom-actions__link">
            <button title="Перейти к образу">
              <img src={ ArrowRightIcon } alt=""/>
            </button>
          </div>
        </div>

      </div>

    </div>
  )
};

export default ResultLookCard;
