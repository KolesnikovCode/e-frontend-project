import React from 'react';
import './actionButton.scss';
import { IconsEnum } from '../../../core/models/icons';
import { ReactComponent as ArrowBackIcon } from '../../../assets/images/buttons/arrow-back.svg';
import { ReactComponent as MinimizeGridIcon } from '../../../assets/images/buttons/minimize-grid.svg';
import { ReactComponent as MaximizeGridIcon } from '../../../assets/images/buttons/maximize-grid.svg';


interface IProps {
  onClick: () => any;
  icon: string;
}

const iconRenderer = (icon: string) => {
  switch (icon) {
    case IconsEnum.arrow_back:
      return <ArrowBackIcon />
    case IconsEnum.minimize_grid:
      return <MinimizeGridIcon />
    case IconsEnum.maximize_grid:
      return <MaximizeGridIcon />
    default:
      return undefined;
  }
}

const ActionButton = ({ onClick, icon }: IProps) => {
  return (
    <button
      className="action_button"
      type="button"
      onClick={ onClick }
    >
      { iconRenderer(icon) }
    </button>
  )
};

export default ActionButton;
