import React from 'react';

import './footer.scss';

import { Link } from 'react-router-dom';

import logo from '../../assets/play.png';

import bg from '../../assets/footer-bg.jpg';

const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage: `url(${bg})`}}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <Link to="/">Movie App</Link>
                    </div>
                </div>
                <div className="footer__content__menus">
                        <Link to="/">Home</Link>
                        <Link to="/">Contact us</Link>
                        <Link to="/">About us</Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;
