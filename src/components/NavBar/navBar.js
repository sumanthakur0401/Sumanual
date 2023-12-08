import './navBar.scss'
import { useState } from 'react'
import fullSumanual from '../../assets/images/greyFullSumanual.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXTwitter,faLinkedin,faGithub,faStackOverflow,faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faHome,faUser,faEnvelope,faSuitcase,faBars,faClose,} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
      <Link 
        className="logo"
        to="/"
        onClick={() => setShowNav(false)}>
        <img src={fullSumanual} alt="Logo" />
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink 
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faHome} color="#8b8a91" />
        </NavLink>
        
        <NavLink 
          activeclassname="active"
          className="about-link"
          to="/about"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faUser} color="#8b8a91" />
        </NavLink>

        <NavLink
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faSuitcase} color="#8b8a91" />
        </NavLink>

        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#8b8a91" />
        </NavLink>

        <FontAwesomeIcon 
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className='close-icon' />
      </nav>
      <ul>
      <li>
          <a
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faXTwitter}
              color="#8b8a91"
              className="anchor-icon-x"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/iam.yash.thakur/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              color="#8b8a91"
              className="anchor-icon-instagram"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/sumanthakur0401"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#8b8a91"
              className="anchor-icon-github"
            />
          </a>
        </li>
        <li>
          <a
            href="" rel="noreferrer" target="_blank">
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#8b8a91"
              className="anchor-icon-linkedin"
            />
          </a>
        </li>
        <li>
          <a href="" rel="noreferrer" target="_blank">
            <FontAwesomeIcon
              icon={faStackOverflow}
              color="#8b8a91"
              className="anchor-icon-stackoverflow"
            />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' />
    </div>
  )
}

export default NavBar
