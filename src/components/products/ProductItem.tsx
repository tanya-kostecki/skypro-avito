import React from 'react';
import * as S from './products.styles';

interface Product {
    id: number;
    descriptionTitle: string;
    price: string;
    city: string;
    date: string;
}

const ProductItem = (props: Product) => {
  return (
    <S.Card key={props.id}>
      <S.CardImg>
        <a className="card__link" href="#">
          <img className="card__img_img" src="" alt="card" />
        </a>
      </S.CardImg>
      <S.CardDescription>
        <a href="#" className="card__description_link">
          <S.CardDescriptionTitle>
            {props.descriptionTitle}
          </S.CardDescriptionTitle>
        </a>
        <S.CardPrice>{props.price}</S.CardPrice>
        <S.CardCity>{props.city}</S.CardCity>
        <S.CardDate>{props.date}</S.CardDate>
      </S.CardDescription>
    </S.Card>
  );
};

export default ProductItem;
