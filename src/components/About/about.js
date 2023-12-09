import { useEffect, useState } from 'react'
import {faCss3,faJs,faHtml5,faAndroid,faReact,faJava} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/animation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import NavBar from '../NavBar/navBar'
import './about.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
    <NavBar/>
      <div className="container about-page">
        
        <section className='SectionOne'>
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ',' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Hi there! 👋 I'm a tech enthusiast with a Master's in Computer Applications, currently diving into the world of full-stack development. With a background in freelance graphic design, I thrive on combining sleek designs with powerful code to deliver exceptional results.
          </p>
          <p align="LEFT">
            Passionate about creating innovative digital solutions, I'm on the lookout for exciting opportunities to collaborate on impactful projects with forward-thinking companies. Let's connect!!! 🚀💻
          </p>
          
          <Link to="" className="Coder-side">
            70% Coder
          </Link>
          <Link to="" className="Designer-side">
            30% Designer
          </Link>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJava} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faAndroid} color="#a4c639" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faJs} color="#EC4D28" />
            </div>
          </div>
        </div>
        </section> 
  

      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
