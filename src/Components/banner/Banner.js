import React, { Component } from 'react'
import bottomImage from '../Assets/image-removebg-preview.png'
import './Banner.css'
import { Link } from 'react-router-dom'
// import bannerimage from '../Assets/DrawKit Vector Illustrations COVID-19 & Vaccinations (8).png'
export default class Banner extends Component {

  render() {

    return (
      <div className='banner-cont'>
        <div className="content">
            <div className="heading">Shri Ganesh Eye Hospital</div>
            <div className="subheading">Quality and Affordable Eye Care</div>
        </div>
        <div className="action-cont my-3">
          <button className='explore-btn' ><Link to='/about-us'>Explore</Link> </button>
          <button className='contact-btn'onClick={() => window.location.href='tel:+919262723333'} >Contact</button>
        </div>
      
        <div className="side-image">
          <img src={bottomImage} alt="" />
        </div>
      </div>
    )
  }
}
