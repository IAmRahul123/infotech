import React from 'react'
import logo from '../../assets/Web Logo/full web logo.png'
import watermark from '../../Assets/vector-1.svg'
import "./About.css"
function About() {
    return (
        <div className='about-content'>
            <img src={watermark} alt="example image" />
            <img src={logo} alt="example image" />
            <p>Welcome to Ajay Infotech - Fast Growing IT Company</p>
            <p>Ajay Infotech is an IT Software Company. We are offering multiple services in Website Development, Graphic Designing, Game Development, WordPress Development, and Mobile Apps Development. We make CMS, CRM and provide ERP solutions. Ajay Infotech is a top software house in India and also a registered company in India. Additional services that we provide include website Designing, API's Development and app development. We have highly experienced web developers who have successfully launched various huge projects and proved their skills in many projects. We are responsible for the working, and we try to keep the best relationship with our customers. As a Leading Software house in India. We have designed several of Websites, Mobile Apps, Logos and Icons for our clients with a unique research-based process. Our software house is spreading the best services in the industry of IT from last two years.</p>
        </div>
    )
}

export default About