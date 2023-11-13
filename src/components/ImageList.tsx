import React from 'react';
import Masonry from 'react-masonry-component';

import { Image } from '../interface/ImageInterface';
import '../styles/ImageList.css';

type Props = {
    images: Image[]
};

const masonryOptions = {
    transitionDuration: 10
};


const ImageList = (props: Props) => {
    const images = props.images.map((image) => {
        return (
            <a href={image.pageURL}
                key={image.id}
                target='_blunk'
                rel='noopener noreferrer'
                className='ui medium image'>
                <img src={image.webformatURL} alt={image.tags} />
            </a>
        )
    });

    return (
        <Masonry
            className='image-list' 
            elementType='ul'
            options={masonryOptions}
            disableImagesLoaded={false}
            updateOnEachImageLoad={false}
        >
            {images}
        </Masonry>
    );
};

export default ImageList;
