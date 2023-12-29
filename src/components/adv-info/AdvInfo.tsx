import React, { useEffect } from 'react';
import * as S from './adv.styles';
import { ADV_PAGE } from '../../constants/pagesConst';
import { useState } from 'react';
import AdvSettings from '../modals/adv-settings/AdvSettings';
import Reviews from '../modals/reviews/Reviews';
import useGetWindowWidth from '../../hooks/WindowWidth';
import { useNavigate } from 'react-router-dom';
import { Page } from '../../types';
import { baseUrl, getAdverts } from '../../api/AdvApi';
import { IAdv } from '../../types';

const AdvInfo = ({ namePage, adId }: Page) => {
  const [settingsPopup, setSettingsPopup] = useState<boolean>(false);
  const [reviewsPopup, setReviewsPopup] = useState<boolean>(false);

  const screenSize = useGetWindowWidth();
  const navigate = useNavigate();

  const showSettingsPopup = () => {
    if (screenSize.width > 480) {
      setSettingsPopup(true);
    } else {
      navigate('/adv-settings');
    }
  };

  const showReviewsPopup = () => {
    if (screenSize.width > 480) {
      setReviewsPopup(true);
    } else {
      navigate('/reviews');
    }
  };

  const [adv, setAdv] = useState<IAdv[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAdverts();
        setAdv(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const currentAdv = adv.find((elem) => elem.id === adId);

  return (
    <S.AdvContainer>
      <S.Adv>
        <S.AdvImages>
          {currentAdv?.images.length !== 0 ? (
            <S.ImageBig src={`${baseUrl}` + currentAdv?.images[0]?.url} />
          ) : (
            <S.ImageBig />
          )}

          {/* <S.SmallImages>
            <S.ImageSmall />
            <S.ImageSmall />
            <S.ImageSmall />
            <S.ImageSmall />
            <S.ImageSmall />
          </S.SmallImages> */}
        </S.AdvImages>

        <S.AdvMain>
          <S.AdvTitle>{currentAdv?.title}</S.AdvTitle>
          <S.AdvP>{currentAdv?.created_on}</S.AdvP>
          <S.AdvP>{currentAdv?.user?.city}</S.AdvP>
          <S.AdvReviews>
            <S.AdvREviewLink onClick={showReviewsPopup}>
              23 отзыва
            </S.AdvREviewLink>
          </S.AdvReviews>
          <S.AdvPrice>{currentAdv?.price} P</S.AdvPrice>
          {namePage === ADV_PAGE ? (
            <div className="adv__description_buttons">
              <S.AdvButton>
                Показать телефон {currentAdv?.user?.phone}
              </S.AdvButton>
            </div>
          ) : (
            <S.AdvButtons>
              <S.AdvButton onClick={showSettingsPopup}>
                Редактировать
              </S.AdvButton>
              <S.AdvButton>Снять с публикации</S.AdvButton>
            </S.AdvButtons>
          )}
          <S.AdvSeller>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle id="Ellipse 2" cx="20" cy="20" r="20" fill="#F0F0F0" />
            </svg>
            <S.AdvSellerInfo>
              <S.AdvSellerName>{currentAdv?.user?.name}</S.AdvSellerName>
              <S.AdvSellerDate>Продает товары с мая 2022</S.AdvSellerDate>
            </S.AdvSellerInfo>
          </S.AdvSeller>
        </S.AdvMain>
      </S.Adv>

      <S.ProductDescription>
        <S.ProductTitle>Описание товара</S.ProductTitle>
        <S.ProductText>{currentAdv?.description}</S.ProductText>
      </S.ProductDescription>

      {settingsPopup ? (
        <AdvSettings setSettingsPopup={setSettingsPopup} />
      ) : null}
      {reviewsPopup ? <Reviews setReviewsPopup={setReviewsPopup} /> : null}
    </S.AdvContainer>
  );
};

export default AdvInfo;
