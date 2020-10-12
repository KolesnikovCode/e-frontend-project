import React from 'react';

const useTitlePage = (title: string) => {
  React.useEffect(() => {
    document.title = title;
    // eslint-disable-next-line
  }, []);
};

export {
  useTitlePage
};
