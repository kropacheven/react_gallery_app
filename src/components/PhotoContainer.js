import React from 'react';
import PhotoComponent from './PhotoComponent';
import NotFound from './NotFound';

const PhotoContainer = () => {
    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                <PhotoComponent src="https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg"/>
                <PhotoComponent src="https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg"/>
                <PhotoComponent src="https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg"/>
                <PhotoComponent src="https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg"/>
                <NotFound />
            </ul>
        </div>
    );
}

export default PhotoContainer;