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
        <section id="ma-section-skills" className="ma-section-skills">
            <div className="ma-container-skills">
                <div className="ma-div-half ">
                    <h2 className="ma-section_title">A little Of My Knowledge</h2>
                    <div className="ma-text-skills">
                        <h4>Scrum</h4>
                        <p>Scrum experience working as a development analyst. During the 5 year period</p>
                        <p>I was able to learn agile management techniques, participating in rites such as daily, retrospectives and Sprint I also developed the ability to perform analysis of indicators and promote continuous improvement through the realization of kaizens</p>
                        <p><strong>Certifications: </strong>SFC - ScrumStudy  SMPC - CertiProf</p>
                    </div>
                    <div className="ma-text-skills">
                        <h4>Node Js</h4>
                        <p>Practice creating APIs using the REST standard. All my projects described in the next section, were using the node to create the APIs responsible for consuming the data base.</p>
                    </div>
                    <div className="ma-text-skills">
                        <h4>React Js</h4>
                        <p>Creation of applications using framwork such as AdminLTE and Material, or just with pure HTML and CSS.</p>
                    </div>
                    <div className="ma-text-skills">
                        <h4>Data Base</h4>
                        <p>Practices in creating procudural programs, such as functions, triggers and procedures, in addition to ease with data modeling and query creation. I started my career in the development area working as a PLSQL developer.</p>
                    </div>
                </div>
                <div className="ma-div-half">
                    <div className="ma-img-second">
                        <img alt="JS Icon" src={jsIcon} />
                        <img alt="HTML Icon" src={htmlIcon} />
                        <img alt="CSS Icon" src={cssIcon} />
                    </div>
                    <div className="ma-img-first">
                        <img alt="Scrum Icon" src={scrumIcon} />
                    </div>
                    <div className="ma-img-second">
                        <img alt="Mongo Icon" src={mongoIcon} />
                        <img alt="Oracle Icon" src={oracleIcon} />
                        <img alt="NodeJs Icon" src={nodeIcon} />
                    </div>
                </div>
            </div>
        </section>
    )
}