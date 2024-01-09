import React, { useState } from 'react';
import * as S from './reviews.styles';
import {
  CloseBlock,
  CloseButton,
  CloseButtonImg,
  SettingsTitle,
  SettingsButton,
} from '../adv-settings/settings.styles';
import {
  useAddCommentsByAdMutation,
} from '../../../services/adverts';
import { formatDate } from '../../../helpers/FormatDate';
import { baseUrl } from '../../../api/AdvApi';
import { useForm } from 'react-hook-form';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { IComment } from '../../../types';

type Props = {
  setReviewsPopup: (reviewsPopup: boolean) => void;
  adId: number;
  reviews: IComment[] | undefined;
};

type CommentText = {
  text: string;
};
const Reviews = ({ setReviewsPopup, adId, reviews }: Props) => {
  const closeReviewsPopup = () => {
    setReviewsPopup(false);
  };

  const isAuth = localStorage.getItem('auth');

  const [addCommentApi, {isLoading}] = useAddCommentsByAdMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isDirty, errors },
  } = useForm<CommentText>();

  const addNewComment = async (data: CommentText) => {
    try {
      await addCommentApi({ pk: adId, text: data.text }).unwrap();
      console.log('ok-result')
   } catch (error) {
      console.log(error);
    }
    console.log(data)
  };

  return (
    <S.ReviewsModal>
      <S.ReviewsContainer>
        <S.ReviewsMain>
          <CloseBlock>
            <CloseButton onClick={closeReviewsPopup}>
              <CloseButtonImg src="/img/close.png" alt="close" />
            </CloseButton>
          </CloseBlock>
          <SettingsTitle>Отзывы о товаре</SettingsTitle>
          <S.ReviewsInfo>
            {isAuth && (
              <form
                className="reviews-add"
                onSubmit={handleSubmit(addNewComment)}
              >
                <S.ReviewAddTitle>Добавить отзыв</S.ReviewAddTitle>
                <S.ReviewsInput
                  placeholder="Введите отзыв"
                  {...register('text', {
                    required: 'Поле не может быть пустым',
                  })}
                  as={'textarea'}
                />
                <SettingsButton disabled={!isDirty}>
                  Опубликовать
                </SettingsButton>
              </form>
            )}

            <S.ReviewsComment>
              {reviews && reviews.length > 0 ? (
                reviews?.map((review) => (
                  <S.ReviewsTextBlock key={review.id}>
                    <div className="reviews-avatar">
                      {review.author.avatar ? (
                        <S.ReviewsAvatar
                          src={`${baseUrl}${review.author.avatar}`}
                        />
                      ) : (
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
                      )}
                    </div>
                    <div className="reviews-text-info">
                      <S.ReviewsName>{review.author.name}</S.ReviewsName>&nbsp;
                      <S.ReviewsDate>
                        {formatDate(review.created_on)}
                      </S.ReviewsDate>
                      <S.Comment>Комментарий</S.Comment>
                      <p className="comment-text">{review.text} </p>
                    </div>
                  </S.ReviewsTextBlock>
                ))
              ) : (
                <div>Здесь еще нет отзывов</div>
              )}
            </S.ReviewsComment>
          </S.ReviewsInfo>
        </S.ReviewsMain>
      </S.ReviewsContainer>
    </S.ReviewsModal>
  );
};

export default Reviews;
