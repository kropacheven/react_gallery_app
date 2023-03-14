import React from 'react';

const PhotoComponent = (props) => {
    let url = `https://live.staticflickr.com/${props.serverId}/${props.nameId}_${props.secret}_w.jpg`;
    console.log(url);
    return (
      <li>
        <img src={url} alt={props.title} />
      </li>
    );
}

export default PhotoComponent;