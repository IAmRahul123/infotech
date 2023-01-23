import React from 'react'
import "./Hero.css"
import hero from '../../Assets/pexelsemrecanacer2079293-1@2x.png'
import triangle from '../../Assets/rectangle-34.svg'
import Type from './Type'
function Hero() {
    return (
        <div className='hero'>
            <img
                className="hero-image"
                alt=""
                src={hero}
            />

            <img className="triangle-icon" alt="" src={triangle} />

            <div className="welcome-to-ajay-container">
                <p className="welcome-to">
                    <span>{`WELCOME TO `}</span>
                </p>
                <p className="ajay-infotech">
                    <span>AJAY INFOTECH</span>
                </p>
            </div>
            <div className="leading-top-software-container">
                <p className="ajay-infotech">{`Leading top software house `}</p>
                <div className='animated-text'>
                    <p className="we-offer-our">
                        We offer our services in
                    </p>
                    <p className="we-offer-our">
                        <Type />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Hero