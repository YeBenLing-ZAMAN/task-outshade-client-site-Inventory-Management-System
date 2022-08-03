import React from 'react';
import { Rings } from  'react-loader-spinner'

const Loading = () => {
    return (
        <div className='h-screen flex justify-center items-center '>
            <Rings color="#ff0000" height={80} width={80} />
        </div>
    );
};

export default Loading;