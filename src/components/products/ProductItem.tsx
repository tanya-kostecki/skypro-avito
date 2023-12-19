import React from 'react';
import './product.css'
import { products } from '../../constants/productsConst';

const ProductItem = () => {
  return (
    <>
    {products.map((card) => (
       <div className="cards__item" key={card.id}>
       <div className="cards__card card">
         <div className="card__image">
           <a href="#" target="_blank">
             <img src="#" alt="picture" />
           </a>
         </div>
         <div className="card__content">
           <a href="" target="_blank">
             <h3 className="card__title">
               {card.descriptionTitle}
             </h3>
           </a>
           <p className="card__price">{card.price}</p>
           <p className="card__place">{card.city}</p>
           <p className="card__date">{card.date}</p>
         </div>
       </div>
     </div>
    ))}
    </>
  );
};

export default ProductItem;
