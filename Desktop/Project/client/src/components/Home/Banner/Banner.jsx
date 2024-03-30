import React from "react";

import "./Banner.scss";
import BannerImg from "../../../assets/collov-home-design-4_jQL4JCS98-unsplash.jpg";

const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>SALES</h1>
                    <p>
                        THE OFFER IS NEW AT A GOOD PRICE OF $549.99!!! PROMOTION ENDS UNTIL 04/11/2024!!
                        HURRY WE ARE WAITING FOR YOU!!!
                    </p>
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2">Shop Now</div>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} alt="" /> 
            </div>
        </div>
    );
};

export default Banner;
