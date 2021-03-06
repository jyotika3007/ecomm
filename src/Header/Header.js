import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider'
import { auth } from '../Firebase/firebase';
import MenuIcon from '@mui/icons-material/Menu';

function Header(){

    const [{basket, user}, dispatch] = useStateValue();

    console.log(user)

    const handleAuthentication = () =>{
        if(user){
            auth.signOut();
        }
    }


    return(
        <div className="header">
        <Link to="/">
            <img src="/amazon_logo.png" className="header_logo" />
            </Link>
            <div className="header_search">
                <input type="text" className="header_searchInput" />
                <SearchIcon className="header_searchIcon" />
            </div>
            <div className="header_nav">
                <Link to='/login'>
                    <div onClick={handleAuthentication} className="header_option">
                        <span className="header_optionLineOne">
                            Hello {user?user.email:'Guest'}
                        </span>
                        <span className="header_optionLineTwo">
                            { user? 'Sign Out': 'Sign In'}
                        </span>
                    </div>
                </Link>
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

                <Link to="/checkout">
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon className='header_optionBasketIcon'/>
                    
                        <span className="header_optionLineTwo header_basketCount">

                            {basket?.length}

                        </span>
                    </div>
           
                 </Link>
            </div>
             <div className="header__mobileNav">
                <MenuIcon className="header__navMenu"/>
            </div>
            
        </div>
    )
}

export default Header;