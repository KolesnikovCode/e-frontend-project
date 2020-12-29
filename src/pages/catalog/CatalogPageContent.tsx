import React from 'react';
import CatalogActionButtons from '../../core/components/catalog-action-buttons/CatalogActionButtons';
import ContentContainer from '../../core/layouts/content-container/ContentContainer';
import routes from '../../core/routes';

const CatalogPageContent = () => {

  const [isMinimizeGrid, setIsMinimizeGrid] = React.useState<boolean>(false);

  return (
    <div className="catalog">

      <ContentContainer>
        <CatalogActionButtons
          backButtonRoute={ routes.MAIN_PAGE }
          onClickToggleGridButton={ () => setIsMinimizeGrid(!isMinimizeGrid) }
          isMinimizeGrid={ isMinimizeGrid }
        />
      </ContentContainer>
    </div>
  )
};

export default CatalogPageContent;