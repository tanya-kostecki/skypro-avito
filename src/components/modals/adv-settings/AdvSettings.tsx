import React from 'react';
import * as S from './settings.styles';
import {
  useChangeAdvertMutation,
  useGetAdvertsByIdQuery,
} from '../../../services/adverts';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '../../error/ErrorMessage';
import { Link, useNavigate } from 'react-router-dom';
import useGetWindowWidth from '../../../hooks/WindowWidth';
import { MOBILE } from '../../../constants/breakpoints';
import EditImageForm from './EditImageForm';

type Props = {
  setSettingsPopup?: (settingsPopup: boolean) => void;
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
    if (setSettingsPopup) setSettingsPopup(false);
  };

  const { data: currentAdv } = useGetAdvertsByIdQuery(advertId);
  const [changeAdvertApi] = useChangeAdvertMutation();

  const navigate = useNavigate()

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
    changeAdvertApi({ title, description, price, pk: advertId }).unwrap();
    if (screenWidth.width > MOBILE) {
      if (setSettingsPopup) {
        setSettingsPopup(false);
      }
    } else {
      navigate(`/adv/${advertId}`)
    }
   
  };

  const screenWidth = useGetWindowWidth();

  return (
    <S.SettingsContainer>
      <S.SettingsMain>
        <S.CloseBlock>
          <S.CloseButton onClick={closePopup}>
            <S.CloseButtonImg src="/img/close.png" alt="close" />
          </S.CloseButton>
        </S.CloseBlock>
        <S.MobileSvg>
          {screenWidth.width < MOBILE && (
            <Link to={`/adv/${advertId}`}>
              <svg
                width="12"
                height="21"
                viewBox="0 0 12 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="12" height="21" fill="#C4C4C4" />
                <g
                  id="mob &#226;&#128;&#148; seller profile page"
                  clipPath="url(#clip0_0_1)"
                >
                  <rect
                    width="320"
                    height="1241"
                    transform="translate(-18 -89)"
                    fill="white"
                  />
                  <g id="Frame 62" clipPath="url(#clip1_0_1)"></g>
                  <path
                    id="Vector 4082"
                    d="M11 1.5L2 10.5L11 19.5"
                    stroke="black"
                    strokeWidth="2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_1">
                    <rect
                      width="320"
                      height="1241"
                      fill="white"
                      transform="translate(-18 -89)"
                    />
                  </clipPath>
                  <clipPath id="clip1_0_1">
                    <rect
                      width="278"
                      height="388"
                      fill="white"
                      transform="translate(2 -4)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </Link>
          )}
          <S.SettingsTitle>Редактировать объявление</S.SettingsTitle>
        </S.MobileSvg>
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
              {errors.title && <ErrorMessage message={errors.title.message} />}
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
                <EditImageForm advertId={advertId} imageIndex={0}/>
                <EditImageForm advertId={advertId} imageIndex={1}/>
                <EditImageForm advertId={advertId} imageIndex={2}/>
                <EditImageForm advertId={advertId} imageIndex={3}/>
                <EditImageForm advertId={advertId} imageIndex={4}/>
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
