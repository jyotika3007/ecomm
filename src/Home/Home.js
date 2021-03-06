import { render } from '@testing-library/react';
import React from 'react';
import '../Home/Home.css';
import NavBar from '../NavBar/NavBar';
import Product from '../Product/Product';
import ProductSlide from '../ProductSlide/ProductSlide';
import Categories from '../Categories/Categories';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import { useStateValue } from '../StateProvider';
import MiniCart from '../MiniCart/MiniCart';

 
function Home(){

    const [{ basket, user }, dispatch] = useStateValue();
    const basketLength = basket?.length
    let miniCart;

    if(basket && basketLength>0){
        miniCart = basket.map((item) => (
                    <MiniCart
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                />
                ))
    }
    else{
        miniCart = <></>
    }
    

    return(
        <div className='home'>
            <div className='home_container'>

                <NavBar />


                <div className="home__miniCart">
                        {miniCart}
                </div>


                    <img src="https://m.media-amazon.com/images/I/6138dCMwqPL._SX3000_.jpg" alt="BG Image" className='home_image' />
                                
                    <div className='home__row'>
                        <h4 className="home__tagline">
                            You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery. <Link to="/">Click here to go to amazon-clone</Link>
                        </h4>
                    </div>
                    
                    {/* Row 1 */}

                    <div className='home__row'>
                        <Product id="1111" title="OnePlus Nord True Wireless Earbud Headphones-Touch Control with Charging Case" price={995.53} image="https://images-na.ssl-images-amazon.com/images/I/51UK5KJM+VL._AC_UL160_SR160,160_.jpg" rating={2} />
                        <Product id="3111" title="OnePlus 9 True Wireless Earbud Headphones-Touch Control with Charging Case" price={850.53} image="https://images-na.ssl-images-amazon.com/images/I/611YaIo9DYL._AC_UL160_SR160,160_.jpg" rating={5} />
                        <Product id="2111" title="OnePlus 10 Glacial Green,??? 5G Unlocked Android Smartphone U.S Version" price={999.53} image="https://images-na.ssl-images-amazon.com/images/I/61nyAhwVK8L._AC_UL160_SR160,160_.jpg" rating={3} />
                        <Product id="4111" title="OnePlus 8 Glacial Green,??? 5G Unlocked Android Smartphone U.S Version" price={1001.53} image="https://m.media-amazon.com/images/I/51uEwkqjZTL._AC_SX679_.jpg" rating={4} />
                    </div>


                    {/* Row 2 */}

                    {/*<div className='home__rowSlideProduct'>*/}
                    <div className='home__row home__rowSlideProduct'>
                        {/*<div className="home__rowHeading">
                            <h2>Popular Products in Women's Clothing </h2>
                        </div>*/}
                        <br />
                        {/*<div className="home__row">*/}
                            <Product id="12345" title="Women Trouser with black shade" image="https://m.media-amazon.com/images/I/61pqkgeQKmL._AC_UL320_.jpg" price={102.09} rating={4} />
                            <Product id="34567" title="Below knees dress for in/out" image="https://m.media-amazon.com/images/I/71tOqSpSShL._MCnd_AC_UL320_.jpg" price={122.09} rating={3} />
                            <Product id="45678" title="Women Trouser with black shade" image="https://m.media-amazon.com/images/I/71Baq7E2tML._MCnd_AC_UL320_.jpg" price={96.09} rating={5} />
                            <Product id="23412" title="Women Trouser with black shade" image="https://m.media-amazon.com/images/I/71hwiN0YWLL._MCnd_AC_UL320_.jpg" price={150.09} rating={4} />
                            <Product id="23482" title="Women Trouser with black shade" image="https://m.media-amazon.com/images/I/719spZ0T2XL._AC_UL320_.jpg" price={85.09} rating={3} />
                            <Product id="56712" title="Women Trouser with black shade" image="https://m.media-amazon.com/images/I/615pGP-cPsL._MCnd_AC_UL320_.jpg" price={112.09} rating={4} />
                        {/*</div>*/}
                    </div>

                    
                    {/* Row 3 */}

                    <div className='home__row'>
                        <Product id="1222" title="OnePlus Buds Z2 True Wireless Earbud Headphones-Touch Control with Charging Case" price={101.53} image="https://images-na.ssl-images-amazon.com/images/I/51UK5KJM+VL._AC_UL160_SR160,160_.jpg" rating={2} />
                        <Product id="3222" title="OnePlus Buds Z2 True Wireless Earbud Headphones-Touch Control with Charging Case" price={101.53} image="https://images-na.ssl-images-amazon.com/images/I/611YaIo9DYL._AC_UL160_SR160,160_.jpg" rating={2} />
                        <Product id="2222" title="OnePlus Buds Z2 True Wireless Earbud Headphones-Touch Control with Charging Case" price={101.53} image="https://images-na.ssl-images-amazon.com/images/I/61nyAhwVK8L._AC_UL160_SR160,160_.jpg" rating={2} />
                        <Product id="4222" title="OnePlus 8 Glacial Green,??? 5G Unlocked Android Smartphone U.S Version, 8GB RAM+128GB Storage" price={1001.53} image="https://m.media-amazon.com/images/I/51uEwkqjZTL._AC_SX679_.jpg" rating={4} />
                    </div>

  
                    


                    {/* Row 4 */}
                    
                    <div className='home__row home__singleSlideProduct'>
                        <Product id="8" title="SAMSUNG 65-Inch Class Crystal UHD AU8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN65AU8000FXZA, 2021 Model), Black" price={999.99} image="https://m.media-amazon.com/images/I/71LJJrKbezL._AC_SX679_.jpg" rating={5}/>
                    </div>
            </div>
        </div>
    )
}

export default Home;