import React from 'react';
import * as S from './products.styles';
import { IAdv } from '../../types';
import { baseUrl } from '../../api/AdvApi';

const ProductItem = (props: IAdv) => {
  return (
    <S.Card key={props.id}>
      {props.images.length !== 0 ? (
        <S.CardImg>
          <a className="card__link" href="#">
            <S.CardImgImg
              className="card__img_img"
              src={`${baseUrl}` + props?.images[0]?.url}
              alt="card"
            />
          </a>
        </S.CardImg>
      ) : (
        <S.CardImg>
          <a className="card__link" href="#">
            <img className="card__img_img" src="" alt="" />
          </a>
        </S.CardImg>
      )}

      <S.CardDescription>
        <a href="#" className="card__description_link">
          <S.CardDescriptionTitle>{props.title}</S.CardDescriptionTitle>
        </a>
        <S.CardPrice>{props.price} P</S.CardPrice>
        <S.CardCity>{props?.user?.city}</S.CardCity>
        <S.CardDate>{props.created_on}</S.CardDate>
      </S.CardDescription>
    </S.Card>
  );
};

export default ProductItem;
