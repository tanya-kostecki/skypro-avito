import React, { useState } from 'react';
import * as S from '../modals/adv-settings/settings.styles';
import {
  useAddAdvWithoutImageMutation,
  useAddImageToAdvMutation,
  useLazyGetAdvertsQuery,
} from '../../services/adverts';
import { useForm } from 'react-hook-form';
import ImageForm from './ImageForm';
import useGetWindowWidth from '../../hooks/WindowWidth';
import { MOBILE } from '../../constants/breakpoints';
import { Link } from 'react-router-dom';


type Props = {
  setNewAdv?: (newAdv: boolean) => void;
};

interface AdvForm {
  title: string;
  description: string;
  price: number;
  images: File[] | null
}

const AddNewAdv = ({ setNewAdv }: Props) => {
  const closeNewAdv = () => {
    if (setNewAdv) {
      setNewAdv(false);
    }
  };

  const [addAdvWithoutImg] = useAddAdvWithoutImageMutation();
  const [addImgToAdv] = useAddImageToAdvMutation();
  const { register, handleSubmit } = useForm<AdvForm>();
  const [advImg, setAdvImg] = useState<File[]>([]);

  const [getAllAdverts] = useLazyGetAdvertsQuery();

  const addNewAdv = async (data: AdvForm) => {
    const { title, description, price } = data;
    addAdvWithoutImg({ title, description, price })
      .unwrap()
      .then((response) => {
        if (advImg) {
          for (let i = 0; i < advImg.length; i++) {
            addImgToAdv({ pk: response.id, image: advImg[i] })
              .unwrap()
              .then(() => getAllAdverts(null));
          }
        }
        closeNewAdv();
      });
  };

  const screenWidth = useGetWindowWidth();
  return (
    <S.SettingsContainer>
      <S.SettingsMain>
        <S.CloseBlock>
          <S.CloseButton onClick={closeNewAdv}>
            <S.CloseButtonImg src="/img/close.png" alt="close" />
          </S.CloseButton>
        </S.CloseBlock>
        <S.MobileSvg>
          {screenWidth.width < MOBILE && (
            <Link to="/profile">
              <img src='/img/vector.svg'/>
            </Link>
          )}
          <S.SettingsTitle>Новое объявление</S.SettingsTitle>
        </S.MobileSvg>
    
        <form onSubmit={handleSubmit(addNewAdv)}>
          <S.SettingsInfo>
            <div>
              <S.SettingsName>Название</S.SettingsName>
              <S.SettingsNameBlock
                id="title"
                type="text"
                placeholder="Введите название"
                {...register('title', {
                  required: 'Поле не может быть пустым',
                })}
              />
            </div>
            <div>
              <S.SettingsName>Описание</S.SettingsName>
              <S.SettingsDescriptionBlock
                id="description"
                placeholder="Введите описание"
                {...register('description')}
              />
            </div>
            <div>
              <S.SettingsName>Фотографии товара</S.SettingsName>
              <S.SettingsImagesBlock>
                <ImageForm advImg={advImg} setAdvImg={setAdvImg} index={0} />
                <ImageForm advImg={advImg} setAdvImg={setAdvImg} index={1} />
                <ImageForm advImg={advImg} setAdvImg={setAdvImg} index={2} />
                <ImageForm advImg={advImg} setAdvImg={setAdvImg} index={3} />
                <ImageForm advImg={advImg} setAdvImg={setAdvImg} index={4} />
              </S.SettingsImagesBlock>
            </div>
          </S.SettingsInfo>
          <S.SettingsPrice>
            <S.SettingsName>Цена</S.SettingsName>
            <S.SettingsPriceBlock
              id="price"
              placeholder=" "
              {...register('price')}
            ></S.SettingsPriceBlock>
          </S.SettingsPrice>
          <S.SettingsButton type="submit">Сохранить</S.SettingsButton>
        </form>
      </S.SettingsMain>
    </S.SettingsContainer>
  );
};

export default AddNewAdv;
