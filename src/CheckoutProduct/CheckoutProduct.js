import React from 'react';
import './CheckoutProduct.css';
import StarRateIcon from '@mui/icons-material/StarRate';
import { useStateValue } from '../StateProvider';

function CheckoutProduct({ id, title, image, price, rating }) {

	const [{basket}, dispatch] = useStateValue();

	const removeFromBasket = ()=>{

		console.log(id)

		//  remove an item from the basket
		dispatch({
			type: "REMOVE_FROM_BASKET",
			id: id
		})

	}


	return (
		<div className="checkoutProduct">
			<img className="checkoutProduct__image" src={image} alt=""/>

			<div className="checkoutProduct__info">
				<p className="checkoutProduct__title">{title}</p> 
				<p className="checkoutProduct__price">
					<small>$</small>
					<strong>{price}</strong>
				</p> 

				<div className="checkoutProduct__rating">
					{Array(rating).fill().map((_,i)=> (
							<StarRateIcon className="checkoutProduct__ratingstar" key={id} />
						))}
				</div>

				<button onClick={removeFromBasket}>Remove From Cart</button>


			</div>
		</div>
		)
}

export default CheckoutProduct;