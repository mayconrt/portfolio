import React from 'react'

import imgLog from '../../assets/C3RInnovation.svg'

import './style.css'

export default function Header() {
    return (
        <div className="ma-div-header">
            <div className="ma-div-header-logo">
              <div className="ma-logo"><img src={imgLog}/></div>
            </div>
            <div className="ma-div-header-menu">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contacts</a></li>
                    <li><a href="#">Clients</a></li>
                </ul>
            </div>
        </div>
    )
}