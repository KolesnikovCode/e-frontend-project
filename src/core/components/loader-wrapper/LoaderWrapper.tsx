import React from 'react';
import Loader from './Loader';

interface IProps {
  isLoaded: boolean;
  hasError?: boolean;
  children: React.ReactChildren
}

const LoaderWrapper = ({ isLoaded, children, hasError = false }: any) => {
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
      { isLoaded && !hasError && <>{ children }</> }
      { isLoaded && hasError && <h1 style={{ textAlign: "center", color: "red" }}>Произошла ошибка при загрузке данных</h1> }
      { !isHiddenLoader && <Loader loaderRef={ loaderRef } /> }
    </>
  )
};

export default LoaderWrapper;

