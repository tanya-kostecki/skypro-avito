import React, { useState } from 'react';
import * as S from './adv.styles';
import AdvSettings from '../modals/adv-settings/AdvSettings';
import Reviews from '../modals/reviews/Reviews';
import useGetWindowWidth from '../../hooks/WindowWidth';
import { useNavigate, useParams } from 'react-router-dom';
import { Page } from '../../types';
import { baseUrl } from '../../api/AdvApi';
import { formatDate } from '../../helpers/FormatDate';
import {
  useGetAdvertsQuery,
  useGetCommentsByAdQuery,
} from '../../services/adverts';
import { Link } from 'react-router-dom';
import { Loader } from '../loader/loader.styles';
import { useGetCurrentUserQuery } from '../../services/user';

const AdvInfo = ({ adId }: Page) => {
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

  const { data: adv, isLoading } = useGetAdvertsQuery(null);

  const currentAdv = adv?.find((elem) => elem.id === adId);

  const [phoneNumber, setPhoneNumber] = useState<boolean>(false);
  const showPhoneNumber = () => {
    setPhoneNumber(true);
  };

  const params = useParams();
  const advertId = Number(params.id);

  const { data: reviews } = useGetCommentsByAdQuery({ pk: advertId })

  const { data: currentUser } = useGetCurrentUserQuery(null)

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
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
              {currentAdv && (
                <S.AdvP>{formatDate(currentAdv?.created_on)}</S.AdvP>
              )}
              <S.AdvP>{currentAdv?.user?.city}</S.AdvP>
              <S.AdvReviews>
                <S.AdvREviewLink onClick={showReviewsPopup}>
                  Отзывы
                </S.AdvREviewLink>
              </S.AdvReviews>
              <S.AdvPrice>{currentAdv?.price} P</S.AdvPrice>
              {currentUser?.id !== currentAdv?.user?.id ? (
                <div className="adv__description_buttons">
                  <S.AdvButton onClick={showPhoneNumber}>
                    {!phoneNumber
                      ? 'Показать телефон'
                      : currentAdv?.user?.phone}
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
                {currentAdv?.user?.avatar ? (
                  <S.AdvSellerImg
                    src={`${baseUrl}${currentAdv?.user?.avatar}`}
                  />
                ) : (
                  <S.AdvSellerImg />
                )}

                <Link to={`/seller-profile/${currentAdv?.user?.id}`}>
                  <S.AdvSellerInfo>
                    <S.AdvSellerName>{currentAdv?.user?.name}</S.AdvSellerName>
                    <S.AdvSellerDate>Продает товары с мая 2022</S.AdvSellerDate>
                  </S.AdvSellerInfo>
                </Link>
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
          {reviewsPopup ? (
            <Reviews
              adId={advertId}
              setReviewsPopup={setReviewsPopup}
              reviews={reviews}
            />
          ) : null}
        </S.AdvContainer>
      )}
    </>
  );
};

export default AdvInfo;
