import React from 'react';
import { useSelector } from 'react-redux';
import './error.css';

const Error = () => {
  const error = useSelector(state => state.data.error);
  return (
    <div className='error-text'>
      An error has occurred {error[1]}
    </div>
  );
};

export default Error;