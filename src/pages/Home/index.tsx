import React from 'react'

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
                    <div className="ma-box-content"><h3>Request a Budget</h3>
                    </div>
                </div>

                <div className="ma-box ma-column-tree last_column second" >

                    <div className="ma-card-socials"><img alt="" src={imgSocial} /></div>
                    <div className="ma-box-content"><h3>Social Networks</h3>
                    </div>
                </div>

                <div className="ma-box ma-column-tree third" >

                    <div className="ma-card-socials"><img alt="" src={imgFamily} /></div>
                    <div className="ma-box-content"><h3>Hobbies</h3>
                        <p>I love programming my happiness and developing a new app. But I also like sports and enjoy with my family</p>
                    </div>
                </div>
            </div>
        </section>
    )
}