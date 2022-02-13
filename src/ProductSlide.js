import React from 'react';

function ProductSlide({ image }){
	return (
		<div className="product">
      
      <img
        src={image}
        alt=""
        className="product__img"
      />
    </div>
		)
}


export default ProductSlide;