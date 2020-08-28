import React from 'react'

import { FaInstagram, FaFacebookF, FaLinkedin, FaMailBulk } from 'react-icons/fa'

import imgHome from '../../assets/capa1.jpg'
import imgPerfil from '../../assets/mayconperfil.jpeg'
import imgSocial from '../../assets/social.jpeg'
import imgFamily from '../../assets/family.jpeg'
import './style.css'

export default function Home() {
    return (
        <section className="ma-serction-div-home">
            <div className="ma-slider-main">
                <div className="ma-slider">
                    <img src={imgHome} />
                    <div className="ma-home-desc">
                        <h6>Maycon Albuquerque</h6>
                        <a href="#"><h2>Full Stack Web Developer</h2></a>
                        <p>I believe that together we can change the world, not only through software but with attitudes. <strong>Let's make a difference</strong></p>
                    </div>
                </div>
            </div>
            <div className="ma-card-home">

                <div className="ma-box ma-column-tree first">

                    <div className="ma-card-socials"><img alt="" src={imgPerfil} /></div>
                    <div className="ma-box-content">
                        <h4>Request a Budget</h4>
                        <p>It will be a pleasure to serve you. I will work hard to deliver as much value as possible</p>
                    </div>
                </div>

                <div className="ma-box ma-column-tree last_column second" >

                    <div className="ma-card-socials"><img alt="" src={imgSocial} /></div>
                    <div className="ma-box-content">
                        <h4>Social Networks</h4>
                        <p>I am available to answer questions and share knowledge</p>
                        <div className="ma-socials-default">
                            <div className="ma-icon">
                                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/maycon.albuquerque.39/" title="Facebook">< FaFacebookF size="20" /></a>
                            </div>
                            <div className="ma-icon">
                                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/maykinhomonstro/?hl=pt-br" title="Instagram">< FaInstagram size="20" /></a>
                            </div>
                            <div className="ma-icon">
                                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/maycon-albuquerque-a55010a2" title="Linkedin">< FaLinkedin size="20" /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ma-box ma-column-tree third" >

                    <div className="ma-card-socials"><img alt="" src={imgFamily} /></div>
                    <div className="ma-box-content">
                        <h4>Contacts</h4>
                        <p>I sent your idea or project so we can make a budget</p>
                        <div className="ma-socials-default">
                            <div className="ma-container-mail">
                                <div className="ma-icon">
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/maycon.albuquerque.39/" title="E-mail">< FaMailBulk size="20" /></a>
                                </div>
                                <h4>mrta.9372@gmail.com</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}