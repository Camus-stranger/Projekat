import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                    At Darkwood Furniture Store, we invite you to embark on a journey through exquisite craftsmanship and timeless elegance. Established in 2024, our legacy is rooted in a passion for creating furniture pieces that transcend trends, embodying enduring beauty and unparalleled quality.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            Kruševac, Serbia
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: 065-5155-200</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: dimideusking@gmail.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Kitchen</span>
                    <span className="text">Sets</span>
                    <span className="text">Living rooms</span>
                    <span className="text">Chest of drawers</span>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                        DARKWOOD FURNITURE STORE 2024 CREATED BY DIMITRIJE OBRADOVIC E-COMMERCE
                        SITE.
                    </span>
                    <img src={Payment}   alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Footer;
