import React from 'react';
import { ClipLoader } from 'react-spinners';

const Loader = () => (
    <div className="flex items-center justify-center z-auto">
        <ClipLoader color="#4fa94d" loading={true} size={50} />
    </div>
);

export default Loader;