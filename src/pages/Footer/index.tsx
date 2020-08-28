import React from 'react'

import { FaInstagram, FaFacebookF, FaLinkedin } from 'react-icons/fa'

import './style.css'

export default function Header() {
    return (
        <section className="ma-section-footer">
            <div className="ma-footer">
                <div className="footer-social">
                    <div className="ma-menu-footer-main">
                        <div className="ma-menu-footer">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Skills</a></li>
                                <li><a href="#">Projects</a></li>
                                <li><a href="#">Contacts</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="ma-text-follw"><h5>Follow Us On</h5></div>
                    <div className="ma-socials">
                        <div className="ma-socials-icon">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/maycon.albuquerque.39/" title="Facebook">< FaFacebookF size="30" /></a>
                        </div>
                        <div className="ma-socials-icon">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/maykinhomonstro/?hl=pt-br" title="Instagram">< FaInstagram size="30" /></a>
                        </div>
                        <div className="ma-socials-icon">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/maycon-albuquerque-a55010a2" title="Linkedin">< FaLinkedin size="30" /></a>
                        </div>
                    </div>
                    <div className="ma-text-copy"><p>2020 M.R.T.A. All Rights Reserved.</p></div>
                </div>
            </div>
        </section>
    )
}