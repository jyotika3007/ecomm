import { render } from '@testing-library/react';
import React from 'react';
import './Home.css';
import Product from './Product.js';

function Home(){
    return(
        <div className='home'>
            <div className='home_container'>
                    <img src="https://m.media-amazon.com/images/I/6138dCMwqPL._SX3000_.jpg" alt="BG Image" className='home_image' />
            
                    <div className='home__row'>
                        <Product />
                        <Product />
                    </div>
                    <div className='home__row'>
                        <Product />
                        <Product />
                        <Product />
                    </div>
                    <div className='home__row'>
                        <Product />
                    </div>
            </div>
        </div>
    )
}

export default Home;