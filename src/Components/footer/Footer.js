import React, { Component } from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
export default class Footer extends Component {
  render() {
    return (
      <div className='footer-cont'>
        <h4 className="footer-name">Shri Ganesh Eye Hospital</h4>
        <div className="footer-links">
            <div className="home"><Link to='/'>Home</Link> </div>|
            <div className="about"><Link to='/about-us'>About Us</Link></div>|
            <div className="achivement"><Link to='/achivement'>Achivement</Link> </div>
        </div>
        <div className="social-links">
            <a href='https://wa.link/qojln1'><i class="bi bi-whatsapp"></i></a>
            <i class="bi bi-facebook"></i>
            <i class="bi bi-instagram"></i>
        </div>
        <div className="footer-liner" style={{textAlign:'center'}}>Copyright ©2023 All rights reserved |Developed by Refresh InfraTech and Team(Sujal & Shivam)</div>
      </div>
    )
  }
}
