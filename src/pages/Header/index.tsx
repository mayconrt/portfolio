import React from 'react'
import { FaBars } from 'react-icons/fa'

import imgLog from '../../assets/C3RInnovation.svg'

import './style.css'

export default function Header() {
    return (
        <div className="ma-div-header">
            <div className="ma-div-header-logo">
                <div className="ma-logo"><img alt="Logo" src={imgLog} /></div>
            </div>

            <div className="ma-div-header-menu">
                <div className="ma-menu-min-icon">
                    <a  href="#ma-section-skills" title="Facebook">< FaBars size="30" /></a>
                </div>
                <div className="ma-menu-max">
                    <ul>
                        <li><a href="#ma-serction-home">Home</a></li>
                        <li><a href="#ma-section-about">About</a></li>
                        <li><a href="#ma-section-skills">Skills</a></li>
                        <li><a href="#ma-section-projects">Projects</a></li>
                        <li><a href="#ma-serction-home">Contacts</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}