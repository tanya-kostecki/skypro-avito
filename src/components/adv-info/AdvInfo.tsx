import React from 'react';
import * as S from './adv.styles';
import { ADV_PAGE } from '../../constants/pagesConst';
import { useState } from 'react';
import AdvSettings from '../modals/adv-settings/AdvSettings';
import Reviews from '../modals/reviews/Reviews';

const AdvInfo = ({ namePage }: Page) => {
  const [settingsPopup, setSettingsPopup] = useState<boolean>(false);
  const [reviewsPopup, setReviewsPopup] = useState<boolean>(false);

  const showSettingsPopup = () => {
    setSettingsPopup(true);
  };

  const showReviewsPopup = () => {
    setReviewsPopup(true);
  };

  return (
    <S.AdvContainer>
      <S.Adv>
        <S.AdvImages>
          <S.ImageBig />
          <S.SmallImages>
            <S.ImageSmall />
            <S.ImageSmall />
            <S.ImageSmall />
            <S.ImageSmall />
            <S.ImageSmall />
          </S.SmallImages>
        </S.AdvImages>

        <S.AdvMain>
          <S.AdvTitle>
            Ракетка для большого тенниса <br /> Triumph Pro STС Б/У
          </S.AdvTitle>
          <S.AdvP>Сегодня в 10:45</S.AdvP>
          <S.AdvP>Санкт-Петербург</S.AdvP>
          <S.AdvReviews>
            <S.AdvREviewLink onClick={showReviewsPopup}>
              23 отзыва
            </S.AdvREviewLink>
          </S.AdvReviews>
          <S.AdvPrice>2200 P</S.AdvPrice>
          {namePage === ADV_PAGE ? (
            <div className="adv__description_buttons">
              <S.AdvButton>Показать телефон 8 905 ХХХ ХХ ХХ</S.AdvButton>
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
              <S.AdvSellerName>Антон</S.AdvSellerName>
              <S.AdvSellerDate>Продает товары с мая 2022</S.AdvSellerDate>
            </S.AdvSellerInfo>
          </S.AdvSeller>
        </S.AdvMain>
      </S.Adv>

      <S.ProductDescription>
        <S.ProductTitle>Описание товара</S.ProductTitle>
        <S.ProductText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </S.ProductText>
      </S.ProductDescription>

      {settingsPopup ? (
        <AdvSettings setSettingsPopup={setSettingsPopup} />
      ) : null}
      {reviewsPopup ? <Reviews setReviewsPopup={setReviewsPopup}/> : null}
    </S.AdvContainer>
  );
};

export default AdvInfo;
