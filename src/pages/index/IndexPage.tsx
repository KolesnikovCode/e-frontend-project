import React from 'react';
import './index-page.scss';

import { useTitlePage } from '../../core/hooks';
import IndexPageContent from './IndexPageContent';


const IndexPage = () => {
  // Change title hook
  useTitlePage('E A S Y - меняться - легко');

  return <IndexPageContent />
}

export default IndexPage;
