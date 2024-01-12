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
  useLazyGetCommentsByAdQuery,
} from '../../../services/adverts';
import { formatDate } from '../../../helpers/FormatDate';
import { baseUrl } from '../../../api/AdvApi';
import { useForm } from 'react-hook-form';
import { IComment } from '../../../types';
import { ErrorMessage } from '../../error/ErrorMessage';
import useGetWindowWidth from '../../../hooks/WindowWidth';
import { MOBILE } from '../../../constants/breakpoints';

type Props = {
  setReviewsPopup?: (reviewsPopup: boolean) => void;
  adId: number;
  comments: IComment[] | undefined;
};

type CommentText = {
  text: string;
};
const Reviews = ({ setReviewsPopup, adId, comments }: Props) => {
  const closeReviewsPopup = () => {
    if (setReviewsPopup) {
      setReviewsPopup(false);
    }
  };

  const isAuth = localStorage.getItem('auth');

  const [addCommentApi] = useAddCommentsByAdMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isDirty, errors },
  } = useForm<CommentText>();

  const [reviews, setReviews] = useState<IComment[] | undefined>(comments);

  const [getAllComments] = useLazyGetCommentsByAdQuery();

  const addNewComment = async (data: CommentText) => {
    try {
      await addCommentApi({ pk: adId, text: data.text })
        .unwrap()
        .then(() => {
          getAllComments({ pk: adId })
            .unwrap()
            .then((data) => {
              setReviews(data);
            });
          reset();
        });
    } catch (error) {
      console.log(error);
    }
    console.log(data);
  };

  const screenWidth = useGetWindowWidth();

  return (
    <S.ReviewsModal>
      <S.ReviewsContainer>
        <S.ReviewsMain>
          {screenWidth.width > MOBILE && (
            <CloseBlock>
              <CloseButton onClick={closeReviewsPopup}>
                <CloseButtonImg src="/img/close.png" alt="close" />
              </CloseButton>
            </CloseBlock>
          )}

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
                {errors.text && (
                  <ErrorMessage message={errors.text.message}></ErrorMessage>
                )}
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
