import React from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>The product info</p>
        <p className="product__price">
          <small>$</small>
          <strong>11.99</strong>
        </p>
        <div className="product__rating">
          <StarRateIcon className="product__ratingStar" />
        </div>
      </div>
      <img
        src="https://m.media-amazon.com/images/I/7120GgUKj3L._AC_SX466_.jpg"
        alt=""
        className="product__img"
      />
      <button>Add To Basket</button>
    </div>
  );
}

export default Product;
