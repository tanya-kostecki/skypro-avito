import React, { useEffect, useState } from 'react';
import * as S from '../../add-adv/image.styles';
import {
  useAddImageToAdvMutation,
  useDeleteImageMutation,
  useLazyGetAdvertsByIdQuery,
} from '../../../services/adverts';
import { baseUrl } from '../../../api/AdvApi';

type Props = {
  advertId: number;
  imageIndex: number;
};
const EditImageForm = ({ advertId, imageIndex }: Props) => {
  const [getAdverts, { data: advert }] = useLazyGetAdvertsByIdQuery();
  const [imgSrc, setImgSrc] = useState<string>();
  const [addImgToAdv] = useAddImageToAdvMutation();
  const [deleteImgApi] = useDeleteImageMutation();

    useEffect(() => {
      getAdverts(advertId).unwrap()
    }, [])

  const uploadImg = async (image: File) => {
    if (image) {
      try {
        addImgToAdv({ pk: advertId, image: image })
          .unwrap()
          .then(() => {
            getAdverts(advertId).unwrap();
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const deleteImage = async (pk: number, file_url: string) => {
    try {
      deleteImgApi({ pk, file_url }).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  const addImageHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event?.target.files ? event.target.files[0] : null;
    if (file) {
      uploadImg(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImgSrc(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const deleteImageHandler = () => {
    if (advert?.images[imageIndex].url) {
      deleteImage(advertId, advert?.images[imageIndex].url);
    }
    setImgSrc('');
  };

  return (
    <S.ImageItem>
      {imgSrc || advert?.images[imageIndex]?.url ? (
        <S.DeleteImgContainer onClick={deleteImageHandler}>
          <S.DeleteImg></S.DeleteImg>
        </S.DeleteImgContainer>
      ) : null}

      <S.ImageInput
        type="file"
        id="advphoto"
        accept="image/*"
        onChange={(event) => addImageHandler(event)}
      />
      <S.FormItemImg src={
            advert?.images[imageIndex]?.url
              ? `${baseUrl}${advert?.images[imageIndex]?.url}` 
              : imgSrc
                ? imgSrc
                : '/img/add-image.png'
          }/>
    </S.ImageItem>
  );
};

export default EditImageForm;
