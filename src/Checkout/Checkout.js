import React from 'react';
import './Checkout.css'; 
import Subtotal from '../Subtotal/Subtotal.js'; 
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct.js'; 
import { useStateValue } from '../StateProvider';
import RecentlyViewed from '../RecentlyViewed/RecentlyViewed';
import { Link } from 'react-router-dom';

function Checkout(argument) {
	
	const [{basket, user}, dispatch] = useStateValue();	
	let emptyCart;

		if(basket && basket.length == 0){
			emptyCart = <div className="empty__basket">
				<Link to="/">
					<h4> No item in your basket.  <p> Continue Shopping </p></h4>
				</Link>
			</div>
		}
		else{
			emptyCart=<></>
		}

	return (


		<div className="checkout">
			
			<div className="checkout__left">
				<img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/I/7191qk-xnFL.jpg" alt="" />
				
				<h3>Hello {user?.email}</h3>

				<h2 className="checkout__title"> Your Shopping Basket </h2>

				{emptyCart}
				
				{ basket.map((item) => (

				<CheckoutProduct
					id={item.id}
					title={item.title}
					image={item.image}
					price={item.price}
					rating={item.rating}
				 />


					)) }


			</div>

			<div className="checkout__right">
				
				<Subtotal />

				<RecentlyViewed />

			</div>
		</div>
		)
}

export default Checkout