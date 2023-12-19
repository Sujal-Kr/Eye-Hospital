import React, { Component } from 'react'
import './Modal.css'
export default class Modal extends Component {
  render() {
    return (
        <div className="modal-cont">
            <div className="action-btn">
                <i className='bi bi-x'></i>
            </div>
            <div className="modal-cont-heading"><h6>Book My Appointment</h6></div>
            <h5>Shre Ganesh Eye Hospital</h5>
            <form action="" className='book-form-cont'>
                <div className="name-cont cont">
                    <input type="text" className="aname" required/>
                    <label htmlFor="aname">Full Name</label>
                </div>
                <div className="age-cont cont">
                    <input type="text" inputMode='Numeric' className="age" required pattern='[0-9]{2}'/>
                    <label htmlFor="aage">Age</label>
                </div>
                <div className="contact-details cont">
                    <input type="tel" className="aphone" inputMode='Numeric' required/>
                    <label htmlFor="aphone">Contact No</label>
                </div>
                <div className="date-cont cont">
                    <input type="datetime-local" className='date' required/>
                    <label htmlFor="data">Date</label>
                </div>
                <div className="btn-cont my-3">
                    <button className='a-btn' type="submit">Book Now</button>
                </div>

            </form>
        </div>
    )
  }
}
