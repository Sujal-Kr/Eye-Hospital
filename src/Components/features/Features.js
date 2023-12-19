import React, { Component } from 'react'
import './Features.css'
export default class Features extends Component {
  render() {
    return (
      <div className='features-cont my-5  lg-my-3  md-my-1'>
        <div className="heading"><h6>OUR SERVICES</h6></div>
        <div className="desc">
          <h1>Our Special Services For You</h1>
          <p>Quality and Afordable eye care. Eye Hospital with advanced facilities now in your city </p>
        </div>
        <div className="service-list ">
        <div className="list">
            <div className="icon-cont">
              <i class="bi bi-capsule-pill"></i>
            </div>
            <h3 className="list-name my-3">Diagonosis</h3>
            <div className="list-desc">
              <li>Fundus Photography</li>
              <li>Thorough Retinal examination/diagonosis by an expert in the field </li>
              <li>Injections into the for various retinal conditions</li>
            </div>
          </div>
          <div className="list">
            <div className="icon-cont">
              <i class="bi bi-clipboard2-pulse"></i>
            </div>
            <h3 className="list-name my-3">Medication</h3>
            <div className="list-desc">
              <li>Advanced Micro-incision catract surgery.</li>
              <li>Complete Eye Examination</li>
              <li>Catract Operations by Phaco</li>
            </div>
          </div>
          
          <div className="list">
            <div className="icon-cont">
              <i class="fa-solid fa-syringe"></i>
            </div>
            <h3 className="list-name my-3">Expertise</h3>
            <div className="list-desc">
              <li>Retinal laser treatment including diabetic retinopathy</li>
              <li>OCT:Optical coherence tomography</li>
              <li>Nd:Yag Capsulotomy:Removal of membrane from behind less</li>
            </div>
          </div>
          {/* <div className="list">
            <div className="icon-cont">
              <i class="bi bi-activity"></i>
            </div>
            <h3 className="list-name my-3">Health Program</h3>
            <div className="list-desc">
              <li>Star Health and Alied Insurance</li>
              <li>ICICI lombard health care</li>
              <li>Family Health plan insurance TPA pvt</li>
              <li>Heritage health insurance TPA pvt ltd.</li>
              <li>Bajaj Aliance General Insurance etc.</li>
            </div>
          </div> */}
        </div>
      </div>
    )
  }
}
