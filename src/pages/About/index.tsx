import React from 'react'

import './style.css'

import imgMayconAbout from '../../assets/maycon.jpeg'

export default function About() {
    return (
        <section id="ma-section-about" className="ma-section-about">
            <div className="ma-container-about">
                <div className="ma-about-left">
                    <div className="ma-about-img">
                        <img alt="Maycon Albuquerque" src={imgMayconAbout} />
                    </div>
                </div>
                <div className="ma-about-right">
                    <h2>About Me</h2>
                    <p>I am a cheerful, fun, collaborative, proactive person and I find it easy to work in teams. For me, people are always first.</p>
                    <p>Self-taught, I am always looking for knowledge. I study daily to perfect the technologies already known and learn new technologies.</p>
                    <p>A differential is that in addition to developing I have knowledge in agile management techniques, this improves the quality of my development even more, as I am always looking for continuous improvement and adding value to the client.</p>
                </div>
            </div>
        </section>
    )
}