import React, { Component } from 'react'
import './Team.css'
import doc from '../Assets/doc.jpg'
export default class Team extends Component {
  render() {
    return (
      <div className='team-cont'>
        <div className="team-heading">
            <h6>Our team</h6>
        </div>
        <h1 className="sub-head">Docters In Our Hospital </h1>
        <h5>Improved Vision for An Improved Life</h5>
        <div className="doc-outer-cont">
            <div className="doc-inner-cont">
                <div className="doc-image">
                    <img src={doc} alt="" />
                </div>
                <div className="doc-desc">
                    <h4 className='doc-name' style={{color:"#219ebc"}}>Dr. Amit Kr Jayswal</h4>
                    <h6 className='doc-oct'>Consultant Ophthalmologist</h6>
                Established by Dr. Amit Kr. Jayswal, MS(Eye),FRCS(I) Glasgow with an wide experience of Cataract & Refractive Surgery at SGVEH Raipur, Medical Retina at Aravind Eye Hospital Pondicherry, Advanced Phaco Emulsification Training at Susrut Eye Hospital Kolkata. He was also a Consultant at Shreshtha Netra Chikitsalaya Ranchi. Dr. Amit has performed above 10000 Cataract Surgeries.
                </div>
            </div>
        </div>
      </div>
    )
  }
}
