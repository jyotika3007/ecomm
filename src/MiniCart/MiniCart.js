import React from 'react';
import "./MiniCart.css";
import CloseIcon from '@mui/icons-material/Close';
import DeleteForeverIcon from '@mui/icons-material/Delete';
import {useStateValue} from '../StateProvider'; 

function MiniCart({ id, title, image, price }) {
const [{basket}, dispatch] = useStateValue();

const audio = new Audio('/notify/Delete.mp3')

const removeItemFromBasket = () => {
	//  remove an item from the basket
		dispatch({
			type: "REMOVE_FROM_BASKET",
			id: id
		})

		audio.play();

}

	return (

		<div className="minicart" id={id} key={id}>
			<img src={image} alt="" />
			<p>{title.substring(0,25)+ '...'}</p>
			<br/>
			<p>$<strong>{price}</strong></p>
			<DeleteForeverIcon className="minicart__trash" onClick={removeItemFromBasket} title="Remove item from Basket" />		
		</div>

		)
}


export default MiniCart;