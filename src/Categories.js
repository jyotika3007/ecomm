import React from 'react';
import './Categories.css';

function Categories({item_key, title, image}) {
	return (
		<div className="category">
      <div className="category__info">
        <h2>{title}</h2>
      </div>
      <img
        src={image}
        alt=""
        className="category__img"
      />
      <a href="#">See more</a>
    </div>
		)
}

export default Categories;