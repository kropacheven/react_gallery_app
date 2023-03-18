import React from 'react';
import PhotoComponent from './PhotoComponent';
import NotFound from './NotFound';

const PhotoContainer = (props) => {
    const results = props.data;
    let photos;
    //console.log(results);
    if (results.length > 0) {
        photos = results.map(photo => <PhotoComponent serverId={photo.server} nameId={photo.id} secret={photo.secret} key={photo.id} title={photo.title}/>)
    } else {
        photos = <NotFound />;
    }
    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                {photos}
                {/* <PhotoComponent src="https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg"/>
                <PhotoComponent src="https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg"/>
                <PhotoComponent src="https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg"/>
                <PhotoComponent src="https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg"/>
                <NotFound /> */}
            </ul>
        </div>
    );
}

export default PhotoContainer;