import React from 'react';
import './RecentlyViewed.css';

import Product from '../Product/Product';

function RecentlyViewed(argument) {
	return (
		<div className="recentlyViewed">
			<h4>Your recently viewed items</h4>

			<Product id="1111" title="OnePlus Nord True Wireless Earbud Headphones-Touch Control with Charging Case" price={995.53} image="https://images-na.ssl-images-amazon.com/images/I/51UK5KJM+VL._AC_UL160_SR160,160_.jpg" rating={2} />
            <Product id="23482" title="Women Trouser with black shade" image="https://m.media-amazon.com/images/I/719spZ0T2XL._AC_UL320_.jpg" price={85.09} rating={3} />
            <Product id="3111" title="OnePlus 9 True Wireless Earbud Headphones-Touch Control with Charging Case" price={850.53} image="https://images-na.ssl-images-amazon.com/images/I/611YaIo9DYL._AC_UL160_SR160,160_.jpg" rating={5} />
                           
		</div>
		)
}

export default RecentlyViewed;