import React from 'react';
import * as S from '../modals/reviews/reviews.styles';
import {
  CloseBlock,
  CloseButton,
  CloseButtonImg,
  SettingsButton,
  SettingsTitle,
} from '../modals/adv-settings/settings.styles';
import { reviews } from '../../constants/reviewsConst';

const MobileReviews = () => {
  return (
    <S.ReviewsModal>
      <S.ReviewsContainer>
        <S.ReviewsMain>
          <CloseBlock>
            <CloseButton>
              <CloseButtonImg src="/img/close.png" alt="close" />
            </CloseButton>
          </CloseBlock>
          <SettingsTitle>Отзывы о товаре</SettingsTitle>
          <S.ReviewsInfo>
            <S.ReviewsAdd>
              <S.ReviewAddTitle>Добавить отзыв</S.ReviewAddTitle>
              <S.ReviewsInput placeholder="Введите отзыв" />
              <SettingsButton>Опубликовать</SettingsButton>
            </S.ReviewsAdd>

            <S.ReviewsComment>
              {reviews.map((review) => (
                <S.ReviewsTextBlock key={review.id}>
                  <div className="reviews-avatar">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        id="Ellipse 3"
                        cx="20"
                        cy="20"
                        r="20"
                        fill="#F0F0F0"
                      />
                    </svg>
                  </div>
                  <div className="reviews-text-info">
                    <S.ReviewsName>{review.name}</S.ReviewsName>&nbsp;
                    <S.ReviewsDate>{review.date}</S.ReviewsDate>
                    <S.Comment>Комментарий</S.Comment>
                    <p className="comment-text">{review.text} </p>
                  </div>
                </S.ReviewsTextBlock>
              ))}
            </S.ReviewsComment>
          </S.ReviewsInfo>
        </S.ReviewsMain>
      </S.ReviewsContainer>
    </S.ReviewsModal>
  );
};

export default MobileReviews;
