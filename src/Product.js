import React from "react";
import StarRateIcon from '@mui/icons-material/StarRate';
import "./Product.css";

function Product({ item_key, title, price, image, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating).fill().map((_,i)=>(
            <StarRateIcon className="product__ratingStar" key={item_key+i}/>
          ))}          
        </div>
      </div>
      <img
        src={image}
        alt=""
        className="product__img"
      />
      <button>Add To Basket</button>
    </div>
  );
}

export default Product;
