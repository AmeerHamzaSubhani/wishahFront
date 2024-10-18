import React from 'react';
import { ClipLoader } from 'react-spinners';

const SaveLoader = () => (
    <div className="flex items-center justify-center">
        <ClipLoader color="#4fa94d" loading={true} size={50} />
        <span className="ml-3">Saving</span>
    </div>
);

export default SaveLoader;