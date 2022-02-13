import { render } from '@testing-library/react';
import React from 'react';
import './Home.css';
import Product from './Product.js';
import ProductSlide from './ProductSlide.js';
import NavBar from './NavBar.js'

function Home(){
    return(
        <div className='home'>
            <div className='home_container'>

                <NavBar />

                    <img src="https://m.media-amazon.com/images/I/6138dCMwqPL._SX3000_.jpg" alt="BG Image" className='home_image' />
            

                    <div className='home__row'>
                        <h4 className="home__tagline">
                        You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery. Click here to go to amazon.in
                         </h4>
                    </div>


                    {/* Row 1 */}

                    <div className='home__row'>
                        <Product item_key="1" title="OnePlus Buds Z2 True Wireless Earbud Headphones-Touch Control with Charging Case" price={101.53} image="https://images-na.ssl-images-amazon.com/images/I/51UK5KJM+VL._AC_UL160_SR160,160_.jpg" rating={2} />
                        <Product item_key="3" title="OnePlus Buds Z2 True Wireless Earbud Headphones-Touch Control with Charging Case" price={101.53} image="https://images-na.ssl-images-amazon.com/images/I/611YaIo9DYL._AC_UL160_SR160,160_.jpg" rating={2} />
                        <Product item_key="2" title="OnePlus Buds Z2 True Wireless Earbud Headphones-Touch Control with Charging Case" price={101.53} image="https://images-na.ssl-images-amazon.com/images/I/61nyAhwVK8L._AC_UL160_SR160,160_.jpg" rating={2} />
                        <Product item_key="4" title="OnePlus 8 Glacial Green,​ 5G Unlocked Android Smartphone U.S Version, 8GB RAM+128GB Storage" price={1001.53} image="https://m.media-amazon.com/images/I/51uEwkqjZTL._AC_SX679_.jpg" rating={4} />
                    </div>


                    {/* Row 2 */}

                    <div className=' home__rowSlideProduct'>
                        <div className="home__rowHeading">
                            <h2>Popular Products in Women's Clothing </h2>
                        </div>
                        <br />
                        <div className="home__row">
                            <ProductSlide image="https://m.media-amazon.com/images/I/61pqkgeQKmL._AC_UL320_.jpg" />
                            <ProductSlide image="https://m.media-amazon.com/images/I/71hwiN0YWLL._MCnd_AC_UL320_.jpg" />
                            <ProductSlide image="https://m.media-amazon.com/images/I/71tOqSpSShL._MCnd_AC_UL320_.jpg" />
                            <ProductSlide image="https://m.media-amazon.com/images/I/71Baq7E2tML._MCnd_AC_UL320_.jpg" />
                            <ProductSlide image="https://m.media-amazon.com/images/I/719spZ0T2XL._AC_UL320_.jpg" />
                            <ProductSlide image="https://m.media-amazon.com/images/I/615pGP-cPsL._MCnd_AC_UL320_.jpg" />
                            <ProductSlide image="https://m.media-amazon.com/images/I/719spZ0T2XL._AC_UL320_.jpg" />
                        </div>
                    </div>



                    
                    {/* Row 3 */}

                    <div className='home__row'>
                        <Product item_key="1" title="OnePlus Buds Z2 True Wireless Earbud Headphones-Touch Control with Charging Case" price={101.53} image="https://images-na.ssl-images-amazon.com/images/I/51UK5KJM+VL._AC_UL160_SR160,160_.jpg" rating={2} />
                        <Product item_key="3" title="OnePlus Buds Z2 True Wireless Earbud Headphones-Touch Control with Charging Case" price={101.53} image="https://images-na.ssl-images-amazon.com/images/I/611YaIo9DYL._AC_UL160_SR160,160_.jpg" rating={2} />
                        <Product item_key="2" title="OnePlus Buds Z2 True Wireless Earbud Headphones-Touch Control with Charging Case" price={101.53} image="https://images-na.ssl-images-amazon.com/images/I/61nyAhwVK8L._AC_UL160_SR160,160_.jpg" rating={2} />
                        <Product item_key="4" title="OnePlus 8 Glacial Green,​ 5G Unlocked Android Smartphone U.S Version, 8GB RAM+128GB Storage" price={1001.53} image="https://m.media-amazon.com/images/I/51uEwkqjZTL._AC_SX679_.jpg" rating={4} />
                    </div>


                    {/* Row 4 */}
                    
                    <div className='home__row'>
                        <Product item_key="8" title="Product 1 having ear buds" price={11.53} image="https://m.media-amazon.com/images/I/7120GgUKj3L._AC_SX466_.jpg" rating={5}/>
                    </div>
            </div>
        </div>
    )
}

export default Home;