import React from 'react'
import { Link } from 'react-router-dom'
import './home.scss'
import cv from '../../assets/Resume1.pdf' 
const Cta = () => {
  
  return (
    <div className='cta'>
        <a href={cv} download className='btn'>Download CV</a>
        &nbsp;&nbsp;
       
        <Link className="btn-primary" to="/contacts">
        Let's Talk
            
        </Link>
    </div>
  )
}

export default Cta
