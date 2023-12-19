import React, { Component } from 'react'
import './Form.css'

export default class Form extends Component {
  render() {
    return (
      <div className='contact-cont container my-5' id="contact-sec">
        <div className="contact-heading"><h6>Contact</h6></div>
        <h1>Get in touch with us</h1>
        <div className="contact-box my-5">
          <div className="address-cont">
            <div className="loc-cont">
              <div className="contact-icon-cont">
                <i class="bi bi-geo-alt"></i>
              </div>
              <div className="desc">
                <h4 style={{color:"#219ebc"}}>Location</h4>
                <h6>Near Jayswal Petrol pump above IDBI bank ratu road,ranchi</h6>
              </div>
            </div>
            <div className="email-cont">
              <div className="contact-icon-cont">
                <i class="bi bi-envelope-at"></i>
              </div>
              <div className="desc">
                <h4 style={{color:"#219ebc"}}>Mail</h4>
                <h6>shriganesheyehospital@gmail.com</h6>
              </div>
            </div>
            <div className="call-cont">
            <div className="contact-icon-cont">
                <i class="bi bi-telephone"></i>
              </div>
              <div className="desc">
                <h4 style={{color:"#219ebc"}}>Call</h4>
                <h6>9262723333  </h6>
              </div>
            </div>
          </div>
          <div className="form-cont">
            <div className="name-mail-cont my-3">
              <input type="text" className='ename' placeholder='Jhon Doe'/>
              <input type="text"  className='mail' placeholder='xyz@gmail.com'/>
            </div>
            <div className="phone-cont my-3">
              <input type="tel" name="" id="phoneno" placeholder='+91 9111111110'/>
            </div>
            <div className="msg-cont my-3">
              <textarea name="" id="" cols="30" rows="10" placeholder='Your Message'></textarea>
            </div>
            <div className="action-btn">
              <button type='submit'>Book Now</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
