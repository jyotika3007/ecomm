import React from  'react';
import './Payment.css';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import { useStateValue } from '../StateProvider';
import { Link } from 'react-router-dom';

function Payment(argument) {

	const [{ basket, user }, dispatch] = useStateValue();

	return (
		<div className="payment">

			<div className="payment__container" >
				<h1>
					Checkout (
						<Link to='/checkout'> {basket?.length} items </Link>
						)
				</h1>
				
				{/* Payment Section - Delivery Address */}
				<div className="payment__section">
					<div className="payment__title">
						<h3>Deliveery Address</h3>
					</div>
					<div className="payment__address">
						<p>{user?.email}</p>
						<p>123 React Lane</p>
						<p>Los Angles, CA</p>
					</div>
				</div>

				{/* Payment Section - Review Items */}
				<div className="payment__section">
					<div className="payment__title">
						<h3>Review items and delivery</h3>
					</div>
					<div className="payment__items">
						{basket.map((item) => (
							<CheckoutProduct
								id={item.id}
								title={item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
							 />
							))}
					</div>
				</div>

				{/* Payment Section - Payment method */}
				<div className="payment__section">
					<div className="payment__title">
						<h3>Payment Method</h3>
					</div>
					<div className="payment__details">
						{/* Stripe logic will go here */}
						
					</div>
						
				</div>
			</div>
		</div>
		)
}


export default Payment;