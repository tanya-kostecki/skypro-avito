import React from 'react';
import * as S from './settings.styles';
import {
  useChangeAdvertMutation,
  useGetAdvertsByIdQuery,
} from '../../../services/adverts';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '../../error/ErrorMessage';

type Props = {
  setSettingsPopup: (settingsPopup: boolean) => void;
  advertId: number;
};

interface AdvertForm {
  title: string;
  description: string;
  price: number;
  images?: File[];
}
const AdvSettings = ({ setSettingsPopup, advertId }: Props) => {
  const closePopup = () => {
    setSettingsPopup(false);
  };

  const { data: currentAdv } = useGetAdvertsByIdQuery(advertId);
  const [changeAdvertApi] = useChangeAdvertMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AdvertForm>({
    defaultValues: {
      title: currentAdv?.title,
      description: currentAdv?.description,
      price: currentAdv?.price,
    },
  });

  const editAdvert = (data: AdvertForm) => {
    const { title, description, price } = data;
    changeAdvertApi({ title, description, price, pk: advertId }).unwrap()
    setSettingsPopup(false)
  };

  return (
    <S.SettingsContainer>
      <S.SettingsMain>
        <S.CloseBlock>
          <S.CloseButton onClick={closePopup}>
            <S.CloseButtonImg src="/img/close.png" alt="close" />
          </S.CloseButton>
        </S.CloseBlock>
        <S.SettingsTitle>Редактировать объявление</S.SettingsTitle>
        <form onSubmit={handleSubmit(editAdvert)}>
          <S.SettingsInfo>
            <div>
              <S.SettingsName>Название</S.SettingsName>
              <S.SettingsNameBlock
                id="title"
                type="text"
                defaultValue={currentAdv?.title}
                placeholder="Введите название"
                {...register('title', {
                  required: 'Поле не может быть пустым',
                })}
              />
              {errors.title && (<ErrorMessage message={errors.title.message}/>)}
            </div>
            <div>
              <S.SettingsName>Описание</S.SettingsName>
              <S.SettingsDescriptionBlock
                id="description"
                defaultValue={currentAdv?.description}
                placeholder="Введите описание"
                {...register('description')}
              />
            </div>
            <div>
              <S.SettingsName>Фотографии товара</S.SettingsName>
              <S.SettingsImagesBlock>
                <S.SettingsImg />
                <S.SettingsImg />
                <S.SettingsImg />
                <S.SettingsImg />
                <S.SettingsImg />
              </S.SettingsImagesBlock>
            </div>
          </S.SettingsInfo>
          <S.SettingsPrice>
            <S.SettingsName>Цена</S.SettingsName>
            <S.SettingsPriceBlock
              id="price"
              defaultValue={currentAdv?.price}
              placeholder=" "
              {...register('price')}
            />
          </S.SettingsPrice>
          <S.SettingsButton type="submit">Сохранить</S.SettingsButton>
        </form>
      </S.SettingsMain>
    </S.SettingsContainer>
  );
};

export default AdvSettings;
