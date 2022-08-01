import './index.scss'
import LogoS from '../../assets/images/S.png'
import LogoSubtitle from '../../assets/images/shashank.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import linkedin from '../../assets/images/linkedin.png'
import github from '../../assets/images/github.png'
import Instagram from '../../assets/images/Instagram-Icon.png'
import { faHome, faUser, faEnvelope, faFileContract } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'


const Sidebar = () => {
  
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="Logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="Shashank" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>

        <NavLink activeclassname="active" className="project-link" to="/projects">
          <FontAwesomeIcon icon={faFileContract} color="#4d4d4e" />
        </NavLink>
      </nav>

      <ul id='links'>
            <li>
                <a target="_blank" rel="noreferer" href='https://www.linkedin.com/in/shashank-c-8651971b6/'>
                    <img src={linkedin} alt=" linkedin" ></img>
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferer" href='https://github.com/shashankusinggithub'>
                    <img src={github} alt=" github" ></img>
                </a>
            </li>
      <li>
                <a target="_blank" rel="noreferer" href='https://www.instagram.com/shashank_using_insta/'>
                    <img src={Instagram} alt=" instagram" ></img>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar
