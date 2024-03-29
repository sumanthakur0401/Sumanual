import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters/animation";
import snowChild from "../../assets/images/snowChildOpening.png"
import frontPage_s from '../../assets/images/Sumanual_frontpage.png'
import frontPage_a from '../../assets/images/Amazon_frontpage.png'
import frontPage_n from '../../assets/images/Netflix_frontpage.png'
import profilePictureUI from '../../assets/images/UI/profilePictureUI.jpg'
import profilePictureAI from '../../assets/images/profilePictureAi.jpg'
import { Link,} from 'react-router-dom'
import NavBar from '../NavBar/navBar'
import "./portfolio.scss";


const Portfolio = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')
  
    useEffect(() => {
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }, [])
  
    return (
      <>

        <NavBar/>
        
        <div className="container portfolio-page">
            
            <section className='coder'>
              <div className="TextZone">
              <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['C', 'o', 'd', 'e', 'r']}
                    idx={15}
                    />
              </h1>
              </div> 
               
              <div className="knowTag">
                <p>Things I know...</p>
                <div className="cards">
                    <div className="lang-soft" id="java">
                      Java
                    </div>
                    <div className="lang-soft" id="html">
                      Html
                    </div>
                    <div className="lang-soft" id="css">
                      Css
                    </div>
                    <div className="lang-soft" id="js">
                      JavaScript
                    </div>
                    <div className="lang-soft" id="react">
                      React
                    </div>
                    <div className="lang-soft" id="as">
                      AndroidStudio
                    </div>
                    <div className="lang-soft" id="git">
                      Git
                    </div>
                    <div className="lang-soft" id="mysql">
                      MySQL
                    </div>
                    <div className="lang-soft" id="mongodb">
                      MongoDB
                    </div>
                 </div>
              </div> 

              <p className="projectTag">
                  Projects
                </p>
              <div className="project-section">
                <Link to="/snowchild" className="project-card" >
                  <div className="imgContainer">
                    <img src={snowChild} alt="sc" className="scImg"/>
                    <div className="projectNameContainer">
                      <p>
                        SnowChild
                      </p>
                    </div>
                  </div>  
                </Link>

                <Link to="https://github.com/sumanthakur0401/Sumanual" className="project-card" >
                  <div className="imgContainer">
                    <img src={frontPage_s} alt="sc" className="scImg"/>
                    <div className="projectNameContainer">
                      <p>
                        Sumanual
                      </p>
                    </div>
                  </div>  
                </Link>

                <Link to="https://github.com/sumanthakur0401/Amazon-Clone" className="project-card" >
                  <div className="imgContainer">
                    <img src={frontPage_a} alt="amazon" className="scImg"/>
                    <div className="projectNameContainer">
                      <p>
                        Amazon Clone 
                      </p>
                    </div>
                  </div>  
                </Link>

                <Link to="https://github.com/sumanthakur0401/Netflix-Clone" className="project-card" >
                  <div className="imgContainer">
                    <img src={frontPage_n} alt="netflix" className="scImg"/>
                    <div className="projectNameContainer">
                      <p>
                        Netflix Clone
                      </p>
                    </div>
                  </div>  
                </Link>
              </div>
            </section> 

            <hr/>

            <section className='designer'>
            <div className="TextZone">
              <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['D', 'e', 's', 'i', 'g', 'n', 'e', 'r']}
                    idx={15}
                    />
              </h1>
              </div> 

              <div className="knowTag">
                <p>Things I know...</p>
                <div className="cards">
                    <div className="lang-soft" id="photoshop">
                      Photoshop
                    </div>
                    <div className="lang-soft" id="illustrator">
                      Illustrator
                    </div>
                    <div className="lang-soft" id="xd">
                      XD
                    </div>
                    <div className="lang-soft" id="figma">
                      Figma
                    </div>
                    <div className="lang-soft" id="uxui">
                      UX/UI
                    </div>
                    <div className="lang-soft" id="logos">
                      Logos
                    </div>
                 </div>
              </div>

              <p className="workTag">
                  Designs
              </p>
              <div className="work-section">
                <Link to="/UI" className="work-card">
                  <div className="imgContainer">
                    <img src={profilePictureUI} alt="sc" className="uiImg"/>
                    <div className="workNameContainer">
                      <p>
                        Unusual.imaginative
                      </p>
                    </div>
                  </div>  
                </Link>

                <Link to="https://www.instagram.com/unusual.ai/?hl=en" className="work-card">
                  <div className="imgContainer">
                    <img src={profilePictureAI} alt="sc" className="uiImg"/>
                    <div className="workNameContainer">
                      <p>
                        Unusual.ai
                      </p>
                    </div>
                  </div>  
                </Link>
              </div>  
            </section> 
        </div>
        <Loader type="pacman" />
      </>
    )
  }
  
  export default Portfolio