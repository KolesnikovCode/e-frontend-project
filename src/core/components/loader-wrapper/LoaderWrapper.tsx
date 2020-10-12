import React from 'react';
import Loader from './Loader';

const LoaderWrapper = ({ isLoaded, children }: any) => {
  const [isHiddenLoader, setIsHiddenLoader] = React.useState(false);
  const loaderRef = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    if (isLoaded) {
      loaderRef.current?.classList.add("animate__fadeOut");
      setTimeout(() => {
        setIsHiddenLoader(true);
      }, 500);
    }
  }, [isLoaded]);
  return (
    <>
      { isLoaded && <>{ children }</> }
      { !isHiddenLoader && <Loader loaderRef={ loaderRef } /> }
    </>
  )
};

export default LoaderWrapper;

