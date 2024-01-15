import React, { useState } from 'react';
import * as S from './image.styles';

interface AddImg {
  advImg: File[];
  setAdvImg: React.Dispatch<React.SetStateAction<File[]>>;
  index: number;
}
const ImageForm = ({ advImg, setAdvImg, index }: AddImg) => {
  const [imgSrc, setImgSrc] = useState<string>();

  const handleAddImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      setAdvImg([...advImg, file]);
      const reader = new FileReader();
      reader.onload = (event) => {
        setImgSrc(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = () => {
    const updatedImages = [...advImg];
    updatedImages.splice(index, 1);
    setAdvImg(updatedImages);
    setImgSrc('');
  };

  return (
    <S.ImageItem>
      {imgSrc ? (
        <S.DeleteImgContainer onClick={handleDeleteImage}>
          <S.DeleteImg></S.DeleteImg>
        </S.DeleteImgContainer>
      ) : null}

      <S.ImageInput
        type="file"
        id="advphoto"
        accept='image/*'
        onChange={(event) => handleAddImage(event)}
      />
        <S.FormItemImg src={imgSrc ? imgSrc : '/img/add-image.png'}/>
    </S.ImageItem>
  );
};

export default ImageForm;
