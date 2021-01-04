import React from 'react';
import './result-page.scss';
import ContentContainer from '../../core/layouts/content-container/ContentContainer';
import ResultLookCard from './components/result-look-card/ResultLookCard';
import CatalogActionButtons from '../../core/components/catalog-action-buttons/CatalogActionButtons';
import { TLook } from '../../core/models/look';
import routes from '../../core/routes';

interface IProps {
  looks: Array<TLook> | any
}

const ResultPageContent = ({ looks }: IProps) => {
  const [isMinimizeGrid, setIsMinimizeGrid] = React.useState<boolean>(false);

  return (
    <div className="result">
      <ContentContainer>
        <CatalogActionButtons
          backButtonRoute={ routes.MAIN_PAGE }
          isMinimizeGrid={ isMinimizeGrid }
          onClickToggleGridButton={ () => setIsMinimizeGrid(!isMinimizeGrid) }
        />
        <div className={ isMinimizeGrid ? "result-grid minimize_result" : "result-grid" }>
          {
            looks.map((look: any) => {
              return <ResultLookCard look={ look } key={ look.id } />
            })
          }
        </div>
      </ContentContainer>
    </div>
  )
}

export default ResultPageContent;
