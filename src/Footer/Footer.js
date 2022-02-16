import React from 'react';
import './Footer.css';

function Footer(argument) {
	return (
		<div className="footer">
			<div className="footer__backToTop">

				<a href="#"> Back To Top </a>

			</div>

			<div className="footer__links">
					
				<div className="footer__linksList">
					<ul>
						<li className="footer__linksListHeading">Get to Know Us</li>
						<li>Careers</li>
						<li>Blogs</li>
						<li>About Amazon Clone</li>
						<li>Sustainability</li>
						<li>Press Center</li>
						<li>Investor Relations</li>
						<li>Amazon Devices</li>
						<li>Amazon Science</li>
					</ul>
				
				<ul>
					<li className="footer__linksListHeading">Make Money with Us</li>
						<li>Sell products on Amazon</li>
						<li>Sell apps on amazon</li>
						<li>Become an Affiliate</li>
						<li>Become a Delivery Driver</li>
						<li>Start a package delivery business</li>
						<li>Advertise Your Products</li>
						<li>Self-Publish with Us</li>
						<li>Host an Amazon Hub</li>
						<li>>See More Ways to Make Money</li>
					</ul>
				
				<ul>
					<li className="footer__linksListHeading">Amazon Payment Products</li>
						<li>Amazon Rewards Visa Signature Cards</li>
						<li>Amazon.com Store Card</li>
						<li>Amazon Secured Card</li>
						<li>Amazon Business Card</li>
						<li>Amazon Business Line of Credit</li>
						<li>Shop with Points</li>
						<li>Credit Card Marketplace</li>
						<li>Reload Your Balance</li>
						<li>Amazon Currency Converter</li>
					</ul>
				
					<ul>
					<li className="footer__linksListHeading">Let Us Help You</li>
						<li>Amazon and COVID-19</li>
						<li>Your Account</li>
						<li>Your Orders</li>
						<li>Shipping Rates & Policeis</li>
						<li>Amazon Prime</li>
						<li>Returns & Replacements</li>
						<li>Manage Your Content and Devices</li>
						<li>Amazon Assistant</li>
						<li>Help</li>
					</ul>
				</div>
			</div>

			<div className="footer__bottom">

				<img src="amazon_logo.png" alt="" className="footer_bottomLogo" />

				<div className="footer__bottomLinks">

					<ul>
						<li>Conditions of Use</li>
						<li>Privacy Notice</li>
						<li>Interest-Based Ads</li>
					</ul>

				</div>

			</div>

		</div>
		)
}

export default Footer;