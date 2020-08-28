import React from 'react'
import { FaInstagram, FaFacebookF, FaLinkedin, FaMailBulk, FaBars } from 'react-icons/fa'

import imgLog from '../../assets/C3RInnovation.svg'

import './style.css'

export default function Header() {
    return (
        <div className="ma-div-header">
            <div className="ma-div-header-logo">
                <div className="ma-logo"><img src={imgLog} /></div>
            </div>

            <div className="ma-div-header-menu">
                <div className="ma-menu-min-icon">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/maycon.albuquerque.39/" title="Facebook">< FaBars size="30" /></a>
                </div>
                <div className="ma-menu-max">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Skills</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Contacts</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}