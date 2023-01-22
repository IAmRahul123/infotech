/** @format */

import React from "react";
import "./Footer.css";
import fullLogo from "../../assets/Web Logo/full web logo.png";
const Footer = () => {
	return (
		<div className="rectangle-div1">
			<div className="rect-row">
				<div className="section-container">
					<div>
						<img
							src={fullLogo}
							className="company-img"
							style={{ height: "152px", width: "152px" }}
						/>
					</div>
					<div className="comapny-text1">
						Ajay Infotech Is A Software Development Organization Offering
						Top-Notch Services To Businesses Of All Kinds.
					</div>
				</div>
				<div className="section-container">
					<div className="f-our-service">
						<b className="f-company">Our Services</b>
						<div className="f-header-line" />
						<div className="f-about">Website Development</div>
						<div className="f-mobile-app-developement">
							Mobile App Developement
						</div>
						<div className="f-blogs">Game Development</div>
						<div className="f-articles">Wordpress Development</div>
						<div className="f-ui-ux">UI / UX Designs</div>
						{/* <div className="f-group-child11" /> */}
					</div>
				</div>
				<div className="section-container">
					<div className="f-our-service">
						<b className="f-company">Company</b>
						<div className="f-header-line" />
						<div className="f-about">About</div>
						<div className="f-mobile-app-developement">Services</div>
						<div className="f-blogs">Blogs</div>
						<div className="f-articles">Articles</div>
						<div className="f-ui-ux">Contact Us</div>
						{/* <div className="f-group-child11" /> */}
					</div>
				</div>
				<div className="section-container">
					<div className="f-our-service-contact">
						<b className="f-company">Contact Us</b>
						<div className="f-header-line" />
						<div className="f-about">Call: +92 9588 395 002</div>
						<div className="f-mobile-app-developement">
							Email: info@ajayinfotech.in
						</div>
						<div className="f-blogs">Adress: Panipat, Haryana (India)</div>
						<div className="f-articles">India 132103</div>
						{/* <div className="f-group-child11" /> */}
					</div>
				</div>
			</div>
			<div class="f-all-rights-reserved">
				©All Rights reserved by, Ajay Infotech 2023
			</div>
		</div>
	);
};

export default Footer;
