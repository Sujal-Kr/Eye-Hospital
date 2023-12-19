import React, { Component } from 'react'
import Navbar from '../navbar/Navbar'
import Banner from '../banner/Banner'
import Features from '../features/Features'
import Who from '../who/Who'
import Team from '../team/Team'
import Footer from '../footer/Footer'
import Form from '../form/Form'
import Gallery from '../gallery/Gallery'
import AboutUs from '../aboutus/AboutUs'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Achivement from '../achivement/Achivement'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={
              <>
                <Banner/>
                <Features/>
                <Who/>
                <Team/>
                <Form/>
                <Gallery/>
              </>
            }></Route>
            <Route exact path='/about-us'  element={
              <>
                <AboutUs/>
              </>
            }>
            </Route>
            <Route path='/achivement' element={<>
              <Achivement/>
            </>}> 
            </Route>
          </Routes>
          <Footer/>
        </Router>

      </div>
    )
  }
}
