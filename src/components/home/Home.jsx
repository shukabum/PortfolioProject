import React ,{useEffect, useState}from 'react'
import './home.scss'
import 'animate.css'
import Cta from './Cta'
import Loader from 'react-loaders'
import Skills from '../Skills/Skills'




const Home = () => {
    
  
    
   
  return (
      <>
          <div className='hcontainer home-page'>
            <div className='text-zone'>
                <h3 className='text'>Hi!I'am </h3>
                <h1 className='myname animate__animated animate__bounceInLeft  animate__slow animate__delay-1.999s'>👋<br />Shußham Shaɤma</h1> 
                <h4 className='role'>Web Developer</h4>
                <Cta />
              
                
            </div >
            <Loader  type="pacman" />
          </div>
          <div>
            <Skills />
          </div>

    </>
    
  )
  
}

export default Home
