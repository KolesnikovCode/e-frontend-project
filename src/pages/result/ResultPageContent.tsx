import React from 'react';
import './result-page.scss';

interface IProps {
  looks: Array<any>
}

const ResultPageContent = ({ looks }: IProps) => {
  console.log('looks', looks);
  
  return (
    <div>result</div>
  )
}

export default ResultPageContent;
