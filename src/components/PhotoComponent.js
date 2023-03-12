import React from 'react';

const PhotoComponent = (props) => {
    return (
      <li>
        <img src={props.src} alt="" />
      </li>
    );
}

export default PhotoComponent;