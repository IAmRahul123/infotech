/** @format */

import React, { useEffect, useState } from "react";
import "./Carousel.css";
import img1 from "../../Assets/0ac54341e91108beebc0f0350c3b4fe3-1@2x.png";
import img2 from "../../Assets/0ea3b60e97625384dd97690963e609ad-1@2x.png";
import img3 from "../../Assets/3e00174ca1dc5c97c74fca97583d0d19-1@2x.png";
import img4 from "../../Assets/24d452e8cbc8d61372743a076220fbd2-1@2x.png";
import img5 from "../../Assets/3e00174ca1dc5c97c74fca97583d0d19-1@2x.png";
import img6 from "../../Assets/70732b203e3eddd2b6624686e026ddca-1@2x.png";
import img7 from "../../Assets/3f3a8b832d996ee58c09eb06640d230d@2x.png";
import img8 from "../../Assets/9c3ed4527615b832ff909e1d2736c89c@2x.png";
import iconL from "../../Assets/stylelinear1.svg";
import iconR from "../../Assets/stylelinear.svg";

function Carousel() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const images = [img1, img2, img3, img4, img5, img6, img7, img8];

	// function to handle next button click
	const handleNextClick = () => {
		setCurrentIndex(currentIndex + 1);
		if (currentIndex + 5 >= images.length) {
			setCurrentIndex(0);
		}
	};

	// function to handle prev button click
	const handlePrevClick = () => {
		setCurrentIndex(currentIndex - 1);
		if (currentIndex - 1 < 0) {
			setCurrentIndex(images.length - 6);
		}
	};
	const handleDotClick = (index) => {
		setCurrentIndex(index);
	};
	useEffect(() => {
		const intervalId = setInterval(() => {
			handleNextClick();
		}, 5000);
		return () => clearInterval(intervalId);
	}, [currentIndex]);

	let totalDots = Math.ceil(images.length / 5);
	return (
		<div className="car-main-container">
			<div className="carousel-container">
				<button onClick={handlePrevClick} className="car-btn">
					<img src={iconL} />
				</button>
				<div className="carousel-slider">
					{images.slice(currentIndex, currentIndex + 5).map((image, index) => (
						<div className="car-img-container">
							<img key={index} src={image} alt="slide" />
						</div>
					))}
				</div>
				<button className="car-btn" onClick={handleNextClick}>
					<img src={iconR} />
				</button>
				<div className="dots-container">
					{console.log(currentIndex, "current")}
					{Array.from({ length: totalDots }, (_, i) => (
						<span
							key={i}
							className={`dot ${i === currentIndex ? "active" : ""}`}
							onClick={() => handleDotClick(i)}
						>
							&bull;
						</span>
					))}
				</div>
			</div>
		</div>
	);
}

export default Carousel;
