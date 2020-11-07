import React from 'react';
import './result-page.scss';
import ContentContainer from '../../core/layouts/content-container/ContentContainer';
import ResultLookCard from './components/result-look-card/ResultLookCard';
import CatalogActionButtons from '../../core/components/catalog-action-buttons/CatalogActionButtons';
import { TLook } from '../../core/models/look';

interface IProps {
  looks: Array<TLook>
}

const ResultPageContent = ({ looks }: IProps) => {
  
  return (
    <div className="result">
      <ContentContainer>
        <CatalogActionButtons />
        <div className="result-grid">
          {
            looks.map(look => {
              return <ResultLookCard look={ look } key={ look.id } />
            })
          }
        </div>
      </ContentContainer>
    </div>
  )
}

export default ResultPageContent;
