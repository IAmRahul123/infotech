/** @format */

import React from "react";
import BgImage from "../../Assets/rectangle-44@2x.png";
import BgImage2 from "../../Assets/pexelsemrecanacer2079293-3@2x.png";
import "./GetInTouch.css";
const GetInTouch = () => {
	return (
		<div className="get-main-container">
			<img className="get-bg-img" alt="" src={BgImage} />
			<img className="get-bg-img2" alt="" src={BgImage2} />
			<div className="get-title">Get in touch</div>
			<div className="get-dont-miss">
				<div className="get-dont-miss-text">
					Don’t miss any update about new offers & Discounts
				</div>
			</div>
			<form className="get-form">
				<div className="get-input-container" />
				<button className="get-btn-container">
					<div className="get-btn" />
					<b className="subscribe">Subscribe</b>
				</button>
				<input placeholder="Enter Your Email Address" className="get-input" />
				<img className="get-mail-icon" alt="" src="../group-1000003862.svg" />
			</form>
		</div>
	);
};

export default GetInTouch;
