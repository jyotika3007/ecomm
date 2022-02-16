import React from "react";
import "./NavBar.css";
import MenuIcon from '@mui/icons-material/Menu';

function NavBar({ title, price, image, rating }) {
  return (
    <div className="home__nav">
                <ul className="home__navList">
                    <li><MenuIcon className="home__navMenu"/>All</li>
                    <li>Today's Deals</li>
                    <li>Customer Service</li>
                    <li>Registry</li>
                    <li>Gift Cards</li>
                    <li>Sell</li>
                </ul>
            </div>
  );
}

export default NavBar;
