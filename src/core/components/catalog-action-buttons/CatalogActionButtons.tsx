import React from 'react';
import { IconsEnum } from '../../models/icons';
import ActionButton from '../action-button/ActionButton';
import './catalogActionButtons.scss';
import { useHistory } from 'react-router-dom';

interface IProps {
  backButtonRoute: string;
  onClickToggleGridButton: () => void;
  isMinimizeGrid: boolean;
}

const CatalogActionButtons = ({ backButtonRoute, onClickToggleGridButton, isMinimizeGrid }: IProps) => {
  // common
  const routerHistory = useHistory();

  // Methods
  const handleClickToBackButton = () => {
    routerHistory.push(backButtonRoute);
  }

  const handleClickToToggleGridButton = () => {
    onClickToggleGridButton();
  }
  
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
        <ActionButton
          icon={ isMinimizeGrid ? IconsEnum.maximize_grid : IconsEnum.minimize_grid }
          onClick={ handleClickToToggleGridButton }
        />
      </div>
      <div className="catalog-action-buttons__right">
        Right btns
      </div>
    </div>
  )
};

export default CatalogActionButtons;
