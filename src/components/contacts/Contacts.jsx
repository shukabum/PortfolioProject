import React, { useRef } from 'react'
import Loader from 'react-loaders'
import './contacts.scss'
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faStamp } from '@fortawesome/free-solid-svg-icons'
import stamp from '../../assets/images/stamp.png'
import stamp2 from '../../assets/images/stamp2.png'
const Contacts = () => {
  const refForm= useRef();
  const sendEmail=(e)=>{
    e.preventDefault();
    emailjs
      .sendForm(
        "service_f1vptu1",
        'template_kbe9qfe',
        refForm.current,
        'lu70Or_rzWmeiolFv'
      )
      .then(()=>{
          alert("The email has been sent succesfully");
          window.location.reload(false)
        },
        ()=>{
          alert("Message was not sent, please try again.")
        }
      )
  }
 

  
  return (
    <div className='wholebox'>
      <div className='title'>
        <h1><b>Contact Me</b></h1>
      </div>
      <div className="contact-form">
        <form ref={refForm} onSubmit={sendEmail}>
        <div className='stamp'><img src={stamp} height={100} width={100} /></div>
        <div className='stamp2'><img src={stamp2} height={100} width={120} /></div>
          <div >
            
            <ul>
            <li className='name'>
              <input type="text" name="from_name"  placeholder='Name' required />
            </li>
            <li className='email'>
              <input type="email" name="email_id" placeholder="Email"required /> 
            </li>
          </ul>

          </div>
          <div>
          <ul>
            <li>
              <input  type="text" name="subject" placeholder="Subject" required />
            </li>
            </ul>
            <ul>
            <li className='message'>
              <textarea placeholder='Message' name="message" required className='textarea'></textarea>

            </li>
            <button className="sendbut">
              <FontAwesomeIcon icon={faPaperPlane} className='send' aria-hidden="true"/>
              <FontAwesomeIcon icon={faPaperPlane} className='send2' aria-hidden="true"/>
          
            <p>Send</p></button>
            

           

          </ul>
          

          </div>
          
        
             
            
        </form>
      </div>
      <Loader type="pacman" />
      
      
  </div>
  
    
  )
}

export default Contacts
