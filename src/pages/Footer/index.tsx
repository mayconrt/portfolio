import React from 'react'


import './style.css'

export default function Header() {
    return (
        <section className="ma-section-footer">
            <div className="ma-footer">
                <div className="footer-social">
                    <h5>Follow Us On</h5>	
                    <a href="#" target="_blank" className="fa fa-facebook" title="facebook">
                    <i className="fa fa-instagram"></i>
                    </a>			
                 </div>   
            </div>
        </section>
    )
}