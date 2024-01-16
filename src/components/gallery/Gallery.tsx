import React, { FC } from 'react';
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';
import { IImg } from '../../types';
import { baseUrl } from '../../api/AdvApi';
// import 'react-image-gallery/styles/css/image-gallery.css';
import './gallery.css'
import useGetWindowWidth from '../../hooks/WindowWidth';
import { MOBILE } from '../../constants/breakpoints';

interface Images {
  images: IImg[];
}
const Gallery: FC<Images> = (props) => {
  const images: ReactImageGalleryItem[] = [];
  const screen = useGetWindowWidth();

  const showImages = () => {
    images.push({
      original: props?.images[0]?.url
        ? `${baseUrl}${props?.images[0]?.url}`
        : '/img/no-image.png',
      thumbnail: props?.images[0]?.url
        ? `${baseUrl}${props?.images[0]?.url}`
        : '/img/no-image.png',
      originalWidth: screen.width > MOBILE ? 480 : 320,
      originalHeight: screen.width > MOBILE ? 480 : 320,
      thumbnailWidth: 88,
      thumbnailHeight: 88,
      bulletClass: 'bulletClass',
    });

    for (let i = 1; i < props.images.length; i++) {
      images.push({
        original: `${baseUrl}${props?.images[i]?.url}`,
        thumbnail: `${baseUrl}${props?.images[i]?.url}`,
        originalWidth: screen.width > MOBILE ? 480 : 320,
        originalHeight: screen.width > MOBILE ? 480 : 320,
        thumbnailWidth: 88,
        thumbnailHeight: 88,
        bulletClass: 'bulletClass',
      });
    }
    return images;
  }
  
  return (
    <ImageGallery
      items={showImages()}
      showPlayButton={true}
      showThumbnails={screen.width > MOBILE ? true : false}
    />
  );
};

export default Gallery;
