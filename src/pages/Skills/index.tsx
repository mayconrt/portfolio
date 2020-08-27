import React from 'react'
import './style.css'

import scrumIcon from '../../assets/scrum-icon.png'
//import reactIcon from '../../assets/reactjs-icon.png'
import jsIcon from '../../assets/js-icon.png'
import htmlIcon from '../../assets/html-icon.png'
import cssIcon from '../../assets/css3-icon.png'
import mongoIcon from '../../assets/mongo-icon.png'
import oracleIcon from '../../assets/oracle-icon.png'
import nodeIcon from '../../assets/nodejs-icon.png'

export default function Skills() {
    return (
        <section className="ma-section-skills">
            <div className="ma-container-skills">
                <div className="ma-div-half ">
                    <h2 className="ma-section_title">A little Of My Knowledge</h2>
                    <div className="ma-text-skills"><h4>Scrum</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A.</p></div>
                    <div className="ma-text-skills"><h4>Node Js</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A.</p></div>
                    <div className="ma-text-skills"><h4>React Js</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A.</p></div>
                    <div className="ma-text-skills"><h4>Data Base</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A.</p></div>
                </div>
                <div className="ma-div-half">
                    <div className="ma-img-second">
                        <img src={jsIcon} />
                        <img src={htmlIcon} />
                        <img src={cssIcon} />
                    </div>
                    <div className="ma-img-first">
                        <img src={scrumIcon} />
                    </div>
                    <div className="ma-img-second">
                        <img src={mongoIcon} />
                        <img src={oracleIcon} />
                        <img src={nodeIcon} />
                    </div>
                </div>
            </div>
        </section>
    )
}