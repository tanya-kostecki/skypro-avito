import React, { useState, useEffect } from 'react';
import * as S from './adv.styles';
import AdvSettings from '../modals/adv-settings/AdvSettings';
import Reviews from '../modals/reviews/Reviews';
import useGetWindowWidth from '../../hooks/WindowWidth';
import { useNavigate, useParams } from 'react-router-dom';
import { baseUrl } from '../../api/AdvApi';
import { formatDate } from '../../helpers/FormatDate';
import {
  useDeleteAdvertMutation,
  useGetAdvertsByIdQuery,
  useGetCommentsByAdQuery,
  useLazyGetCurrentUserAdvertsQuery,
} from '../../services/adverts';
import { Link } from 'react-router-dom';
import { Loader } from '../loader/Loader';
import { MOBILE } from '../../constants/breakpoints';
import Gallery from '../gallery/Gallery';

const AdvInfo = () => {
  const params = useParams();
  const advertId = Number(params.id);

  const { data: currentAdv, isLoading } = useGetAdvertsByIdQuery(advertId);

  const { data: reviews } = useGetCommentsByAdQuery({ pk: advertId });

  const [currentUserAdverts, { data: currentUser }] =
    useLazyGetCurrentUserAdvertsQuery();
  const isAuth = localStorage.getItem('auth');

  useEffect(() => {
    if (isAuth) {
      currentUserAdverts(null).unwrap();
    }
  }, [currentUser, currentUserAdverts, isAuth]);

  const [deleteAdvApi] = useDeleteAdvertMutation();

  const deleteAdvert = (id: number) => {
    deleteAdvApi(id).unwrap();
    window.location.href = '/profile';
  };

  const [settingsPopup, setSettingsPopup] = useState<boolean>(false);
  const [reviewsPopup, setReviewsPopup] = useState<boolean>(false);

  const screenSize = useGetWindowWidth();
  const navigate = useNavigate();

  const showSettingsPopup = () => {
    if (screenSize.width > MOBILE) {
      setSettingsPopup(true);
    } else {
      navigate(`/adv-settings/${advertId}`);
    }
  };

  const showReviewsPopup = () => {
    if (screenSize.width > MOBILE) {
      setReviewsPopup(true);
    } else {
      navigate(`/reviews/${advertId}`);
    }
  };

  const [phoneNumber, setPhoneNumber] = useState<boolean>(false);
  const showPhoneNumber = () => {
    setPhoneNumber(true);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
        {currentAdv ? (
          <S.AdvContainer>
          <S.Adv>
            <S.AdvImages>
              {currentAdv?.images && <Gallery images={currentAdv?.images} />}
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
              {isAuth && currentUser?.find(({ id }) => id === advertId) ? (
                <S.AdvButtons>
                  <S.AdvButton onClick={showSettingsPopup}>
                    Редактировать
                  </S.AdvButton>
                  <S.AdvButton onClick={() => deleteAdvert(advertId)}>
                    Снять с публикации
                  </S.AdvButton>
                </S.AdvButtons>
              ) : (
                <div className="adv__description_buttons">
                  <S.AdvButton onClick={showPhoneNumber}>
                    {!phoneNumber
                      ? 'Показать телефон'
                      : currentAdv?.user?.phone}
                  </S.AdvButton>
                </div>
              )}
              {currentAdv?.user?.id ? (
                <S.AdvSeller>
                  {currentAdv?.user?.avatar ? (
                    <S.AdvSellerImg
                      src={`${baseUrl}${currentAdv?.user?.avatar}`}
                    />
                  ) : (
                    <S.AdvSellerImg />
                  )}
                  {isAuth && currentUser?.find(({ id }) => id === advertId) ? (
                    <Link to="/profile">
                      <S.AdvSellerInfo>
                        <S.AdvSellerName>
                          {currentAdv?.user?.name}
                        </S.AdvSellerName>
                        <S.AdvSellerDate>
                          Продает товары с {currentAdv?.user?.sells_from}
                        </S.AdvSellerDate>
                      </S.AdvSellerInfo>
                    </Link>
                  ) : (
                    <Link to={`/seller-profile/${currentAdv?.user?.id}`}>
                      <S.AdvSellerInfo>
                        <S.AdvSellerName>
                          {currentAdv?.user?.name}
                        </S.AdvSellerName>
                        <S.AdvSellerDate>
                          Продает товары с {currentAdv?.user?.sells_from}
                        </S.AdvSellerDate>
                      </S.AdvSellerInfo>
                    </Link>
                  )}
                </S.AdvSeller>
              ) : (
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
                      <S.AdvSellerName>
                        {currentAdv?.user?.name}
                      </S.AdvSellerName>
                      <S.AdvSellerDate>
                        Продает товары с {currentAdv?.user?.sells_from}
                      </S.AdvSellerDate>
                    </S.AdvSellerInfo>
                  </Link>
                </S.AdvSeller>
              )}
            </S.AdvMain>
          </S.Adv>

          <S.ProductDescription>
            <S.ProductTitle>Описание товара</S.ProductTitle>
            <S.ProductText>{currentAdv?.description}</S.ProductText>
          </S.ProductDescription>

          {settingsPopup ? (
            <AdvSettings
              setSettingsPopup={setSettingsPopup}
              advertId={advertId}
            />
          ) : null}
          {reviewsPopup ? (
            <Reviews
              adId={advertId}
              setReviewsPopup={setReviewsPopup}
              comments={reviews}
            />
          ) : null}
        </S.AdvContainer>
        ) : <div>Page not found</div>}
        </>
      )}
    </>
  );
};

export default AdvInfo;
