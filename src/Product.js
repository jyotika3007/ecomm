import React from "react";
import StarRateIcon from '@mui/icons-material/StarRate';
import "./Product.css";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Product({ id, title, price, image, rating }) {
  
  // Here despatch means how we manipulate the data
  const [{basket, user}, dispatch] = useStateValue();

  console.log("This is the basket")

  const addToBasket = ()=>{
    // Dispatch item into dataLayer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      }
    })
  }


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
            <StarRateIcon className="product__ratingStar" key={id+i}/>
          ))}          
        </div>
      </div>
      <img
        src={image}
        alt=""
        className="product__img"
      />
      <button onClick={addToBasket} >Add To Basket</button>
    </div>
  );
}

export default Product;
