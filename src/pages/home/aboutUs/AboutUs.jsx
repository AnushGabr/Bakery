import React from 'react';
import './aboutUs.css';

const AboutUs = () => {
    return (
        <section className="about-us">
                <div className="container">
                    <div className="inner">
                        <img src="images/aboutus.jpg" />
                        <div className="content1">
                            <h2>About Us</h2>
                            <p>
                                Marush Sweets Boutique has been opening its doors to its guests since 2017 and still continues to provide sweet moments to its customers.
                                In 2019, the second branch was opened at 65 Teryan Street to be closer to its beloved customers.
                                The preconditions of our work և the best quality և the ideal combination and preservation of taste, it is not accidental that our customers, for years, trust us in the most important events and celebrations of their lives.
                            </p>
                            <a href='http://localhost:3002/AboutUs' className="btn">About Us</a>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default AboutUs;