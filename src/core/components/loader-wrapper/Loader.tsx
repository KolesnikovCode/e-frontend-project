import React from 'react';
import './loader.scss';

const Loader = ({ loaderRef }: any) => {
  return (
    <div ref={ loaderRef } className="loader-wrapper animate__animated animate__faster animate__fadeIn">
      <div className="loader-body">
        <div>E</div>
        <div>A</div>
        <div>S</div>
        <div>Y</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
      </div>
    </div>
  )
};

export default Loader;
