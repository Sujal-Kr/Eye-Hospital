import React, { Component } from 'react'
import './Achivement.css'
import {achImages} from './getAchivement'
export default class Achivement extends Component {
  render() {
    const image_arr=achImages
    return (
      <div className='achivement-cont'>
        <div className="heading-cont"><h6>Achivement</h6></div>
        <div className="sub-head"><h5>Let's Witness some of our achivements</h5></div>
        <div className="ach-item-cont">
                {
                    image_arr.map((image)=>{
                        return(
                            <div className="ach-item">
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
