import React from 'react';
import { IconsEnum } from '../../models/icons';
import ActionButton from '../action-button/ActionButton';
import './catalogActionButtons.scss';
import { useHistory } from 'react-router-dom';

interface IProps {
  backButtonRoute: string;
  onClickToggleGridButton?: () => void;
  isMinimizeGrid?: boolean;
  isVisibleFiltersButton?: boolean;
  onClickFiltersButton?: () => void
}

const CatalogActionButtons = ({ backButtonRoute, onClickToggleGridButton, isMinimizeGrid, isVisibleFiltersButton, onClickFiltersButton }: IProps) => {
  // common
  const routerHistory = useHistory();

  // Methods
  const handleClickToBackButton = () => {
    routerHistory.push(backButtonRoute);
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
  
  // Fixed buttons position
  const [isFixedPosition, setIsFixedPosition] = React.useState<boolean>(false);

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
          onClick={ handleClickToBackButton }
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
        Right btns
      </div>
    </div>
  )
};

export default CatalogActionButtons;
