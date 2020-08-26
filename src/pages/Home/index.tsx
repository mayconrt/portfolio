import React from 'react'

import imgHome from '../../assets/capa1.jpg'
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
            <div className="pagearea-inner">

                <div className="fourbox three_column first">

                    <div className="thumbbx"><img alt="" src="http://flythemesdemo.net/gosporty/wp-content/themes/gosporty-pro/images/feature1.png" /></div>
                    <div className="fourbxcontent"><h3>Hobbies</h3>
                        <p>I love programming my happiness and developing a new app. But I also like sports and enjoy with my family</p>
                    </div>
                </div>

                <div className="fourbox three_column last_column second" >

                    <div className="thumbbx"><img alt="" src="http://flythemesdemo.net/gosporty/wp-content/themes/gosporty-pro/images/feature2.png" /></div>
                    <div className="fourbxcontent"><h3>Social Networks</h3>                        
                    </div>
                </div>

                <div className="fourbox three_column third" >

                    <div className="thumbbx"><img alt="" src="http://flythemesdemo.net/gosporty/wp-content/themes/gosporty-pro/images/feature3.png" /></div>
                    <div className="fourbxcontent"><h3>Request a Budget</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}