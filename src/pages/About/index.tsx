import React from 'react'

import './style.css'

import imgMayconAbout from '../../assets/maycon.jpeg'

export default function About() {
    return (
        <section className="ma-section-about">
            <div className="ma-container-about">
                <div className="ma-about-left">
                    <div className="ma-about-img">
                        <img src={imgMayconAbout} />
                    </div>
                </div>
                <div className="ma-about-right">
                    <h2>About Me</h2>
                    <p>
                        Proin aliquet ante et elit faucibus placerat. Mauris ac placerat metus, vitae ultrices neque. Nunc consequat turpis nec mauris pulvinar dignissim.
                    </p>
                    <p>
                        Proin aliquet ante et elit faucibus placerat. Mauris ac placerat metus, vitae ultrices neque. Nunc consequat turpis nec mauris pulvinar dignissim.
                    </p>

                    <p>
                        Proin aliquet ante et elit faucibus placerat. Mauris ac placerat metus, vitae ultrices neque. Nunc consequat turpis nec mauris pulvinar dignissim.
                    </p>

                    <p>
                        Proin aliquet ante et elit faucibus placerat. Mauris ac placerat metus, vitae ultrices neque. Nunc consequat turpis nec mauris pulvinar dignissim.
                    </p>                    

                </div>
            </div>
        </section>
    )
}