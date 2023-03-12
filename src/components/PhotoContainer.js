import React from 'react';
import PhotoComponent from './PhotoComponent';
import NotFound from './NotFound';

const PhotoContainer = () => {
    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                <PhotoComponent />
                <PhotoComponent />
                <PhotoComponent />
                <PhotoComponent />
                <NotFound />
            </ul>
        </div>
    );
}

export default PhotoContainer;