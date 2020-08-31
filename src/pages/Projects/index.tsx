import React from 'react'

import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

import './style.css'

import imgScheduling from '../../assets/img-project-scheduling.png'
import imgHolerite from '../../assets/img-project-gtaholerite.png'
import imgGtaSite from '../../assets/img-project-gtasite.png'
import imgFirstMillion from '../../assets/img-project-firstmillion.png'

export default function Projects() {
    return (
        <section id="ma-section-projects" className="ma-section-projects">
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
                                <img alt="Scheduling System" src={imgScheduling} />
                                <h4>Scheduling System</h4>
                                <p>Institutional website that allows you to schedule the service.</p>
                                
                            </div>


                            <div className="ma-card-img">
                                <div className="ma-img-slider">
                                    <img alt="Website with scheduling" src={imgHolerite} />
                                </div>

                                <div className="ma-text-slider">
                                    <h4>Website with scheduling</h4>
                                    <p>System for downloading holerites</p>
                                </div>
                            </div>

                            <div className="ma-card-img">
                                <div className="ma-img-slider">
                                    <img alt="Institutional website" src={imgGtaSite} />
                                </div>
                                <div className="ma-text-slider">
                                    <h4>Institutional website</h4>
                                    <p>Company website</p>
                                </div>
                            </div>

                            <div className="ma-card-img">
                                <div className="ma-img-slider">
                                    <img alt="Expense control system" src={imgFirstMillion} />
                                </div>
                                <div className="ma-text-slider">
                                    <h4>Expense control system</h4>
                                    <p>Control your personal expenses and know where your biggest expense is</p>
                                </div>
                            </div>

                        </div>

                        <div className="prevNext">
                            <div><a href="#s4"><FaArrowLeft size="30" /></a><a href="#s2">< FaArrowRight size="30" /></a></div>
                            <div><a href="#s1"><FaArrowLeft size="30" /></a><a href="#s3"><FaArrowRight size="30" /></a></div>
                            <div><a href="#2"><FaArrowLeft size="30" /></a><a href="#s4"><FaArrowRight size="30" /></a></div>
                            <div><a href="#s3"><FaArrowLeft size="30" /></a><a href="#s1"><FaArrowRight size="30" /></a></div>
                        </div>

                        <div className="bullets">
                            <a href="#s1">1</a>
                            <a href="#s2">2</a>
                            <a href="#s3">3</a>
                            <a href="#s4">4</a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}