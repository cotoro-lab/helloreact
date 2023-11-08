import React from 'react';

import { Image } from '../interface/ImageInterface';

type Props = {
    images: Image[]
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
        <div>
            <p>{images}</p>
        </div>
    )
};

export default ImageList;