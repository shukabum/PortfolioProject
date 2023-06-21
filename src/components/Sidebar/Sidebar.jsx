import React ,{useState}from 'react'
import './sidebar.scss'
import { Link, NavLink } from 'react-router-dom'
import s from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {   faArrowDown, faBars, faBarsStaggered, faEnvelope,faHamburger,faHome,faMarsAndVenus,faMoon,faSun, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
    const[pagenum , setpagenum] = useState('/');

    //const [first, setfirst]=useState(faSun);
   // const [mode,setmode]=useState(0);//0 for night/ dark mode;
    const [themestate, settheme]=useState("nav-bar1");
    const handleScroll=()=>{
        const next= document.getElementsByClassName('Space');
        if(next){
            window.scrollTo({top:820, behavior: 'smooth'});
        }
    };
    const [ele,setele] = useState(0);
    const handleMenu=()=>{
        if(ele===0)
        {
            document.querySelector('.nav-links-block').style.visibility="visible";
            document.querySelector('.nav-links-block').classList.add('menu');
            setele(1);


        }
        else if(ele==1)
        {
            document.querySelector('.nav-links-block').style.visibility='hidden';
            document.querySelector('.nav-links-block').classList.remove('menu');
            
            setele(0);
            
        }
       



    }

  return (
    <div className={themestate}  >
        <Link className="logo" to={pagenum}>
            <img className='image-s' src={s} alt="logo"/>
            <p className='text1'>Shubham</p>
        </Link>
        <nav>
            
                <div className='linkeds'>
                    <div className='nav-links-block'>
                        <NavLink exact="true" activeclassname="active"  to="/" >
                        <FontAwesomeIcon icon={faHome}  />
                        
                        </NavLink>
                        <NavLink exact="true" activeclassname="active" className="about-link " to="/about"  >
                        <FontAwesomeIcon icon={faUserAlt}  />
                        
                        </NavLink>
                        <NavLink exact="true" activeclassname="active" className="contact-link " to="/contacts"  >
                        <FontAwesomeIcon icon={faEnvelope} />
                        
                        </NavLink>
                    </div> 
                   
                    <button onClick={handleMenu}className='buttt' ><FontAwesomeIcon icon ={faHamburger} className='checks' /></button>
                    
                    
            </div> 
            
        </nav>
        <div className='contact-list'>
            <ul className='svg'>
                    <li>
                        <a target="_blank"
                            rel="noreferrer"
                            href="https://github.com/shukabum"
                        >
                            <FontAwesomeIcon icon={faGithub}  />
                        </a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/shubham-sharma-49b54b248/"
                        >
                            <FontAwesomeIcon icon={faLinkedin}  />
                        </a>
                    </li>
                    <li>
                        <a target="_blank"
                                rel="noreferrer"
                                href="https://www.instagram.com/shubham_._97/"
                        >
                            <FontAwesomeIcon icon={faInstagram}  />
                        </a>
                    </li>
                    <li className='arrowdown'>
                        <a rel="noreferrer" href="#" onClick={handleScroll}><FontAwesomeIcon icon={faArrowDown} /></a>
                        
                    </li>   
            </ul>
        </div>
     
    </div>
  )
}
export default Sidebar
