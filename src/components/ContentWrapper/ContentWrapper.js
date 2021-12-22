import React from 'react';
import './contentWrapper.css';

const ContentWrapper = ({children}) => {
  return (
    <div className='app-content-wrapper'>
      {children}
    </div>
  );
};

export default ContentWrapper;