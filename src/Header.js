import React from 'react';

import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header(){
    return(
        <div className="header">
            <img src="/amazon_logo.png" className="header_logo" />
            <div className="header_search">
                <input type="text" className="header_searchInput" />
                <SearchIcon className="header_searchIcon" />
            </div>
            <div className="header_nav">
                <div className="header_option">
                    <span className="header_optionLineOne">
                        Hello Guest
                    </span>
                    <span className="header_optionLineTwo">
                        Sign In
                    </span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">
                        Return
                    </span>
                    <span className="header_optionLineTwo">
                        & Orders
                    </span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">
                        Your
                    </span>
                    <span className="header_optionLineTwo">
                        Prime
                    </span>
                </div>
                <div className="header_optionBasket">
                <ShoppingBasketIcon className='header_optionBasketIcon'/>
                
                <span className="header_optionLineTwo header_basketCount">0</span>
            </div>
            </div>
            
        </div>
    )
}

export default Header;