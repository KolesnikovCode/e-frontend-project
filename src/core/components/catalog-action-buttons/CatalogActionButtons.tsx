import React from 'react';
import './catalogActionButtons.scss';

const CatalogActionButtons: React.FC = () => {

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

  return (
    <div className={isFixedPosition ? "catalog-action-buttons fixed" : "catalog-action-buttons"}>
      <div className="catalog-action-buttons__left">
        Left btns
      </div>
      <div className="catalog-action-buttons__right">
        Right btns
      </div>
    </div>
  )
};

export default CatalogActionButtons;
