import React, { Component } from 'react'
import './Gallery.css'
import {images} from './GetImages'
export default class Gallery extends Component {
  render() {
    const images_arr=images
    return (
      <div className="gallery-main-cont ">
        <div className="gallery-heading"><h6>Our Gallery</h6></div>
        <h1>Our Working Space</h1>
        <h5>Your eyes our lifes</h5>
        <div className='gallery-cont'>
        {
            images_arr.map((image)=>{
                return(
                    <div className="image-cont">
                        <img src={image} alt="" />
                    </div>
                )
            })
        }
      </div>
      </div>
    )
  }
}
