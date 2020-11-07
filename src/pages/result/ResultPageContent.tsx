import React from 'react';
import './result-page.scss';
import ContentContainer from '../../core/layouts/content-container/ContentContainer';
import ResultLookCard from './components/result-look-card/ResultLookCard';
import CatalogActionButtons from '../../core/components/catalog-action-buttons/CatalogActionButtons';

interface IProps {
  looks: Array<any>
}

const ResultPageContent = ({ looks }: IProps) => {
  console.log('looks', looks);
  
  return (
    <div className="result">
      <ContentContainer>
        <CatalogActionButtons />
        <div className="result-grid">
          {
            [0,1,2,3,4,5,6,7,8].map(num => {
              return <ResultLookCard key={num} />
            })
          }
        </div>
      </ContentContainer>
    </div>
  )
}

export default ResultPageContent;
