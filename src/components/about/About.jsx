import React from 'react'
import Loader from 'react-loaders'
import './About.scss'
const About = () => {
  return (
    <>
      <div className='content'>
        <section>
          <p className='hello'>
            Hello

          </p>
         
        </section>
        <p className='aboutme'>
          make this section from chat gpt

        </p>

      </div>
     <Loader type="pacman" />
    </>
  )
}

export default About
