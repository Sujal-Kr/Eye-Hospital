import React, { Component } from 'react'
import  './AboutUs.css'
import  image1 from '../Assets/1slit lamp.jpg'
import image2 from '../Assets/2topcon ark.jpg'
import image3 from '../Assets/3cot.jpg'
import image4 from '../Assets/4agrus.jpg'
import image5 from '../Assets/5laser.jpg'
import image6 from '../Assets/6yag laser.jpg'
import image7 from '../Assets/7laueate.png'
import image8 from '../Assets/8Topcon microscope.png'
import image9 from '../Assets/9lenso.jpg'
import image10 from '../Assets/10final.webp'
export default class AboutUs extends Component {
  render() {
    return (
      <div className='about-us-cont'>
        <div className="heading-cont"><h6>About Us</h6></div>
        <div className="sub-head"><h5>We are specialzed in medical Diagonstics </h5></div>
        <div className="content">
        <p>
        Shri Ganesh Eye Hospital has been established in 2018 with a Vision to provide dedicated and quality eye care to patients.</p>

<p>A comprehensive eye facility with the use of latest technological inventions like 2.2 mm Suturless Phaco Emulsification Techniques is being provided here. It’s only kind of infrastructure in Jharkhand which provides enhanced patient care with homely treatment.</p>

<p>Established by Dr. Amit Kr. Jayswal, MS(Eye),FRCS(I) Glasgow with an wide experience of Cataract & Refractive Surgery at SGVEH Raipur, Medical Retina at Aravind Eye Hospital Pondicherry, Advanced Phaco Emulsification Training at Susrut Eye Hospital Kolkata. He was also a Consultant at Shreshtha Netra Chikitsalaya Ranchi. Dr. Amit has performed above 20000+ Cataract Surgeries.</p>

<p>With such a wide gamut of experience, the team at Shri Ganesh Eye Hospital is dedicated to provide quality care as well as the most advanced eye care with personalised attention.</p>
        </div>
        
        <div className="eq-main-cont">
          <div className="heading-cont my-5"><h2 className='eq-heading'>Some cutting-edge equipment that we utilise</h2></div>
          <div className="eq-cont my-3">
            <div className="eq-image">
              <img src={image1} alt="" />
            </div>
            <div className="eq-desc" >
              <h4 style={{color:"#219ebc"}}>Slit Lamp Microscopy</h4>
              <p>Slit lamp microscopy is a versatile tool used in ophthalmology for a detailed examination of the anterior segment of the eye. It combines a microscope and a slit lamp, which emits a thin, intense beam of light. The slit lamp allows the ophthalmologist to view and evaluate the structures at the front of the eye, including the cornea, conjunctiva, iris, and lens. By adjusting the angle and intensity of the slit, the ophthalmologist can examine these structures in high detail, aiding in the diagnosis of conditions such as corneal ulcers, cataracts, iritis, and other anterior segment abnormalities.</p>
              
            </div>
          </div>
          <div className="eq-cont my-3">
            <div className="eq-image">
              <img src={image2} alt="" />
            </div>
            <div className="eq-desc" >
              <h4 style={{color:"#219ebc"}}>Topcon A Machine</h4>
              <p>The Topcon ARK (Auto Ref-Keratometer) machine is a diagnostic device that measures the refractive power and astigmatism of the eye, along with corneal curvature. It operates by projecting an image onto the patient's retina and analyzing the reflected light to calculate the eye's refractive power and astigmatism. Additionally, it uses a keratometer to measure the curvature of the cornea. The data obtained from the ARK machine assists in determining the appropriate prescription for eyeglasses or contact lenses, ensuring accurate vision correction.</p>
            </div>
          </div>

          <div className="eq-cont my-3">
            <div className="eq-image">
              <img src={image3} alt="" />
            </div>
            <div className="eq-desc" >
              <h4 style={{color:"#219ebc"}}>OCT Machine</h4>
              <p>Optical Coherence Tomography (OCT) is an imaging technique that provides high-resolution cross-sectional images of the retina, optic nerve, and other structures within the eye. It utilizes low-coherence interferometry to measure the backscattered light from the eye. OCT captures detailed images of the various layers of the retina, allowing ophthalmologists to assess the thickness, integrity, and morphology of retinal structures. It plays a crucial role in the diagnosis, monitoring, and management of conditions such as macular degeneration, diabetic retinopathy, glaucoma, and other retinal disorders.</p>
              </div>
          </div>

          <div className="eq-cont my-3">
            <div className="eq-image">
              <img src={image4} alt="" />
            </div>
            <div className="eq-desc ">
              <h4 style={{color:"#219ebc"}}>Argus Optical Biometer</h4>
              <p>The Argus Optical Biometer is a device used to measure the axial length of the eye. It employs optical interference technology to accurately determine the distance between the cornea and the retina, providing precise measurements of the eye's length. This information is crucial for calculating the power and selection of intraocular lenses (IOLs) used in cataract surgery. Accurate measurements obtained from the Argus Optical Biometer aid in achieving optimal post-operative refractive outcomes and improved vision for cataract surgery patients.</p>
              </div>
          </div>

          <div className="eq-cont my-3">
            <div className="eq-image">
              <img src={image5} alt="" />
            </div>
            <div className="eq-desc ">
              <h4 style={{color:"#219ebc"}}>Green Laser</h4>
              <p> Green lasers in ophthalmology refer to lasers emitting green light with a specific wavelength, typically 532 nanometers. They are commonly used in procedures like retinal photocoagulation, where precise delivery of laser energy to the retina is required. The green laser's wavelength allows it to be selectively absorbed by specific target tissues in the eye, such as abnormal blood vessels in conditions like diabetic retinopathy, retinal vein occlusion, or retinal tears. By selectively targeting and treating these abnormal structures, green laser therapy helps to seal leaking blood vessels, stabilize the retina, and prevent further vision loss.</p>
              </div>
          </div>

          <div className="eq-cont my-3">
            <div className="eq-image">
              <img src={image6} alt="" />
            </div>
            <div className="eq-desc ">
              <h4 style={{color:"#219ebc"}}>Nd-YAG Capsulotomy Laser</h4>
              <p>Nd-YAG capsulotomy laser is a specialized laser used after cataract surgery to treat a condition called posterior capsule opacification (PCO). PCO occurs when the posterior capsule, which holds the intraocular lens implant in place, becomes cloudy or wrinkled, causing visual disturbances. The Nd-YAG capsulotomy laser creates a small opening in the cloudy posterior capsule, allowing light to pass through unimpeded and restoring clear vision. This laser treatment is safe and quick, usually completed in a matter of minutes without requiring incisions or anesthesia.</p>
              </div>
          </div>

          <div className="eq-cont my-3">
            <div className="eq-image">
              <img src={image7} alt="" />
            </div>
            <div className="eq-desc ">
              <h4 style={{color:"#219ebc"}}>Laureate Phaco Machine</h4>
              <p>The Laureate Phaco Machine is an advanced system used during cataract surgery. It utilizes a technique called phacoemulsification, which involves breaking up the cataractous lens using ultrasonic vibrations and emulsifying it for easy removal. The Laureate Phaco Machine offers precise control over the ultrasonic energy and suction used in the process, allowing for efficient and safe removal of the cataract. It features various modes and settings to adapt to different cataract types and densities, providing ophthalmic surgeons with enhanced surgical capabilities and improving patient outcomes.</p>
              </div>
          </div>


          <div className="eq-cont my-3">
            <div className="eq-image">
              <img src={image8} alt="" />
            </div>
            <div className="eq-desc ">
              <h4 style={{color:"#219ebc"}}>Topcon Microscope</h4>
              <p>The TOPCON microscope is a high-quality surgical microscope used in ophthalmic surgeries. It provides exceptional visualization and magnification of the surgical field, allowing ophthalmologists to perform intricate procedures with precision. TOPCON microscopes are specifically designed for ophthalmic surgery, offering excellent depth perception, clarity, and detailed imaging. They feature adjustable illumination, binocular viewing systems, and various accessories to meet the specific needs of different ophthalmic procedures.</p>
              </div>
          </div>

          <div className="eq-cont my-3">
            <div className="eq-image">
              <img src={image9} alt="" />
            </div>
            <div className="eq-desc">
              <h4 style={{color:"#219ebc"}}>Lensometer</h4>
              <p>A Lensometer, also known as a lensmeter or focimeter, is a device used to measure the power and prescription of eyeglass lenses. It verifies the lens power, cylinder axis, prism values, and other parameters, ensuring accurate prescription verification and lens fitting. A Lensometer utilizes principles such as the focimetry technique or the lens neutralization method to determine the precise power of lenses. It is an essential tool in optometry practices and optical dispensaries for verifying and adjusting corrective lenses.</p>
            </div>
          </div>
          
          <div className="eq-cont my-3">
            <div className="eq-image">
              <img src={image10} alt="" />
            </div>
            <div className="eq-desc ">
              <h4 style={{color:"#219ebc"}}>Biomedix A-Scan</h4>
              <p>Biomedix A-scan is an ultrasound-based device used to measure the axial length of the eye. It employs high-frequency sound waves that reflect off the internal structures of the eye, allowing for accurate measurement of the distance between the cornea and the retina. This measurement is crucial for determining the appropriate power of intraocular lenses (IOLs) used in cataract surgery. A-scan technology provides precise and reliable measurements, aiding in the selection of the correct IOL power and achieving optimal visual outcomes for cataract surgery patients.</p>
              </div>
          </div>

        </div>
      </div>
    )
  }
}
