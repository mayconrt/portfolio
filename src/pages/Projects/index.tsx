import React from 'react'

import './style.css'

import imgScheduling from '../../assets/img-project-scheduling.png'
import imgHolerite from '../../assets/img-project-gtaholerite.png'
import imgGtaSite from '../../assets/img-project-gtasite.png'
import imgFirstMillion from '../../assets/img-project-firstmillion.png'

export default function Projects() {
    return (
        <section className="ma-section-projects">
            <div className="ma-container-projects">
                <h1>My Projects</h1>
                <div className="ma-projects">


                    <div className="CSSgal">

                        <s id="s1"></s>
                        <s id="s2"></s>
                        <s id="s3"></s>
                        <s id="s4"></s>

                        <div className="slider">

                            <div className="ma-card-img">
                                <img src={imgScheduling} />
                                <h4>Site de Agendamento</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A.</p>
                                
                            </div>


                            <div className="ma-card-img">
                                <div className="ma-img-slider">
                                    <img src={imgHolerite} />
                                </div>

                                <div className="ma-text-slider">
                                    <h4>Site de Agendamento</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A.</p>
                                </div>
                            </div>

                            <div className="ma-card-img">
                                <div className="ma-img-slider">
                                    <img src={imgGtaSite} />
                                </div>
                                <div className="ma-text-slider">
                                    <h4>Site de Agendamento</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A.</p>
                                </div>
                            </div>

                            <div className="ma-card-img">
                                <div className="ma-img-slider">
                                    <img src={imgFirstMillion} />
                                </div>
                                <div className="ma-text-slider">
                                    <h4>Site de Agendamento</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A.</p>
                                </div>
                            </div>

                        </div>

                        <div className="prevNext">
                            <div><a href="#s4"></a><a href="#s2"></a></div>
                            <div><a href="#s1"></a><a href="#s3"></a></div>
                            <div><a href="#s2"></a><a href="#s4"></a></div>
                            <div><a href="#s3"></a><a href="#s1"></a></div>
                        </div>

                        <div className="bullets">
                            <a href="#s1">1</a>
                            <a href="#s2">2</a>
                            <a href="#s3">3</a>
                            <a href="#s4">4</a>
                        </div>

                    </div>


                    {/* <div className="ma-card-img">
                        <img src={imgHolerite} />
                        <h4>Download Holerite</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A.</p>
                    </div>
                    <div className="ma-card-img">
                        <img src={imgGtaSite} />
                        <h4>Site Institucional</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A.</p>
                    </div> */}
                    {/* <div className="ma-card-img">
                        <img src={imgFirstMillion} />
                    </div> */}
                </div>
            </div>
        </section>
    )
}