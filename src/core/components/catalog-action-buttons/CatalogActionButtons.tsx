import React from 'react';
import { IconsEnum } from '../../models/icons';
import ActionButton from '../action-button/ActionButton';
import './catalogActionButtons.scss';
import { useHistory } from 'react-router-dom';
import routes from '../../routes';
import { useSelector } from 'react-redux';

interface IProps {
  backButtonRoute?: string;
  onClickBackButton?: () => void;
  onClickToggleGridButton?: () => void;
  isMinimizeGrid?: boolean;
  isVisibleFiltersButton?: boolean;
  isVisibleCartButton?: boolean;
  onClickFiltersButton?: () => void
}

const CatalogActionButtons = ({
  backButtonRoute,
  onClickBackButton = undefined,
  onClickToggleGridButton,
  isMinimizeGrid,
  isVisibleFiltersButton,
  isVisibleCartButton = true,
  onClickFiltersButton
}: IProps) => {
  // common
  const routerHistory = useHistory();
  // Redux
  const cartProducts = useSelector((state: any) => state.cartProducts)
  // Local State
  const [isFixedPosition, setIsFixedPosition] = React.useState<boolean>(false);

  // Methods
  const handleClickToBackButton = () => {
    if (backButtonRoute) {
      routerHistory.push(backButtonRoute);
    } else {
      return routerHistory.length > 2 ? routerHistory.goBack() : routerHistory.push('/');
    }
  };

  const handleClickToToggleGridButton = () => {
    if (typeof onClickToggleGridButton === 'function') {
      onClickToggleGridButton();
    }
  };

  const handleClickToFiltersButton = () => {
    if (typeof onClickFiltersButton === 'function') {
      onClickFiltersButton();
    }
  };

  const handleClickToCartButton = () => {
    routerHistory.push(routes.CART);
  };

  const handleScroll = () => {
    if (window.scrollY >= 30) {
      setIsFixedPosition(true);
    } else {
      setIsFixedPosition(false);
    }
  };
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  React.useEffect(() => {
    handleScroll();
  }, []);

  return (
    <div className={isFixedPosition ? "catalog-action-buttons fixed" : "catalog-action-buttons"}>
      <div className="catalog-action-buttons__left">
        <ActionButton
          icon={ IconsEnum.arrow_back }
          onClick={ onClickBackButton ? onClickBackButton : handleClickToBackButton }
        />
        {
          onClickToggleGridButton && (
            <ActionButton
              icon={ isMinimizeGrid ? IconsEnum.maximize_grid : IconsEnum.minimize_grid }
              onClick={ handleClickToToggleGridButton }
            />
          )
        }
        {
          isVisibleFiltersButton && (
            <ActionButton
              icon={ IconsEnum.filters }
              onClick={ handleClickToFiltersButton }
            />
          )
        }
      </div>
      <div className="catalog-action-buttons__right">
        {
          isVisibleCartButton && (
            <div className="catalog-action-buttons__right__cart">
              <ActionButton
                icon={ IconsEnum.cart }
                onClick={ handleClickToCartButton }
              />
              {
                cartProducts.length > 0 && (
                  <div
                    className="catalog-action-buttons__right__cart__counter"
                    title={ `${cartProducts.length} товаров в корзине` }
                  >
                    { cartProducts.length < 10 ? cartProducts.length : '9+' }
                  </div>
                )
              }
            </div>
          )
        }
      </div>
    </div>
  )
};

export default CatalogActionButtons;
