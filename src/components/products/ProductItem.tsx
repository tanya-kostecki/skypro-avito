import React from 'react';
import * as S from './products.styles';
import { IAdv } from '../../types';
import { baseUrl } from '../../api/AdvApi';
import { NavLink } from 'react-router-dom';

const ProductItem = (props: IAdv) => {
  return (
    <NavLink to={`/adv/${props.id}`} style={{ textDecoration: 'none' }}>
      <S.Card key={props.id}>
        {props.images.length !== 0 ? (
          <S.CardImg>
            <S.CardImgImg
              className="card__img_img"
              src={`${baseUrl}` + props?.images[0]?.url}
              alt="card"
            />
          </S.CardImg>
        ) : (
          <S.CardImg>
            <img className="card__img_img" src="" alt="" />
          </S.CardImg>
        )}

        <S.CardDescription>
          <S.CardDescriptionTitle>{props.title}</S.CardDescriptionTitle>
          <S.CardPrice>{props.price} P</S.CardPrice>
          <S.CardCity>{props?.user?.city}</S.CardCity>
          <S.CardDate>{props.created_on}</S.CardDate>
        </S.CardDescription>
      </S.Card>
    </NavLink>
  );
};

export default ProductItem;
