import React from 'react';
import loading from './loading.gif';

const Spinner = () => {

    return (
      <div className='text-center'>
        <img src={loading} alt='loading' height={"100px"}/>
      </div>
    );
  }

export default Spinner;
