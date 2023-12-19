import React from 'react'
import { useState } from 'react'
import {CgChevronLeftR} from 'react-icons/cg'
import {RiMenu3Fill} from 'react-icons/ri'
import logo from '../Assets/sgeh logo.png'
import './Navbar.css'
import { Link } from 'react-router-dom'
export default function Navbar() {
    const [mode, setmode]=useState(false) 
    const [color, setColor] = useState(false)
    const changeNavbarColor = () =>{
      if(window.scrollY >= 300){
        setColor(true)
      }
      else{
        setColor(false)
      }
   }
   window.addEventListener('scroll', changeNavbarColor)
  return (
    <div className={color===false?'navbar-cont':'navbar-cont changeNav'}>
        <div className="logo-cont">
          <Link to='/'>
            <img src={logo} alt="" />
            <span>Shri Ganesh Eye Hospital</span>
          </Link>
        </div>
        <div className={mode===false?'navlist':'navlist active'}>
            <div className="gallery list" onClick={()=>setmode(false)}><Link to='/'>Home</Link></div>
            <div className="aboutus list" onClick={()=>setmode(false)}><Link to='/about-us'>About Us</Link></div>
            <div className="achivement list" onClick={()=>setmode(false)}><Link to='/achivement'>Achivements</Link></div>
            <div className='close-btn' onClick={()=>setmode(false)}>
                <CgChevronLeftR/>
            </div>
        </div>
        <div className="menu-btn" onClick={()=>setmode(true)}>
            <RiMenu3Fill/>

        </div>
        
      </div>
  )
}
