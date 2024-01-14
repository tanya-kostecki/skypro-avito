import React, { FC } from 'react';
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';
import { IImg } from '../../types';
import { baseUrl } from '../../api/AdvApi';
import 'react-image-gallery/styles/css/image-gallery.css';

interface Images {
  images: IImg[];
}
const Gallery: FC<Images> = (props) => {
  const images: ReactImageGalleryItem[] = [];
  const showImages = () => {
    images.push({
      original: props?.images[0]?.url
        ? `${baseUrl}${props?.images[0]?.url}`
        : '/img/no-image.png',
      thumbnail: props?.images[0]?.url
        ? `${baseUrl}${props?.images[0]?.url}`
        : '/img/no-image.png',
      originalWidth: 480,
      originalHeight: 480,
      thumbnailWidth: 88,
      thumbnailHeight: 88,
    });

    for (let i = 1; i < props.images.length; i++) {
      images.push({
        original: `${baseUrl}${props?.images[i]?.url}`,
        thumbnail: `${baseUrl}${props?.images[i]?.url}`,
        originalWidth: 480,
        originalHeight: 480,
        thumbnailWidth: 88,
        thumbnailHeight: 88,
      });
    }
    return images;
  }
  
  return (
    <ImageGallery items={showImages()} showPlayButton={true} showThumbnails={true} />
  );
};

export default Gallery;
