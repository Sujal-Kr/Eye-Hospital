import React, { Component } from 'react'
import './Who.css'
import logo from '../Assets/Doctor_Outline.png'
import { Link } from 'react-router-dom'
export default class Who extends Component {
  render() {
    return (
      <div className='who-cont container'>
        <div className="image-cont">
            <img src={logo} alt="some doctor" />
        </div>
        <div className="who-content-cont">
            <div className="heading"><h6>ABout us</h6></div>
            <h1 className="subhead">We Are Specialize in Medical Diagnositics</h1>
            <div className="desc">
                <p>Shri Ganesh Eye Hospital has been established in 2018 with a Vision to provide dedicated and quality eye care to patients.</p>
                
                <p>A comprehensive eye facility with the use of latest technological inventions like 2.2 mm Suturless Phaco Emulsification Techniques is being provided here. It’s only kind of infrastructure in Jharkhand which provides enhanced patient care with homely treatment</p>
                <p>Established by Dr. Amit Kr. Jayswal, MS(Eye),FRCS(I) Glasgow with an wide experience of Cataract & Refractive Surgery at SGVEH Raipur, Medical Retina at Aravind Eye Hospital Pondicherry, Advanced Phaco Emulsification Training at Susrut Eye Hospital Kolkata. He was also a Consultant at Shreshtha Netra Chikitsalaya Ranchi. Dr. Amit has performed above 20000+ Cataract Surgeries.</p>
            </div>
            <div className="action-btn">
                <button><Link to='/about-us'>See more</Link> </button>
            </div>
        </div>
      </div>
    )
  }
}
