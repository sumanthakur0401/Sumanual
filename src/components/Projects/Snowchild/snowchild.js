import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../../AnimatedLetters/animation"
import NavBar from '../../NavBar/navBar'
import snowchildtypo from '../../../assets/images/snowchildColoAndTypo.png'
import ScOne from '../../../assets/images/SnowChild/SnowChildOneScreen.png'
import ScTwo from '../../../assets/images/SnowChild/SnowChildTwoScreen.png'
import ScThree from '../../../assets/images/SnowChild/SnowChildThreeScreen.png'
import ScFour from '../../../assets/images/SnowChild/SnowChildFourScreen.png'
import myButton from '../../../assets/images/SnowChild/myButtonImg.png'
import popularBar from '../../../assets/images/SnowChild/popularBar.png'
import YODB from '../../../assets/images/SnowChild/snowChildLogoYODB.png'

import "./snowchild.scss";


const Snowchild = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
  
    useEffect(() => {
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }, [])
  
    return (
      <>
        <NavBar/>
        <div className="container snowchild-page">
         
            <section className='project-data'>
              <div className="TextZone">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['S', 'n', 'o', 'w', 'C', 'h', 'i', 'l', 'd']}
                    idx={15}
                    />
                </h1>
              </div> 
              <div className="techUsed">
                    <div className="lang-soft" id="java">
                      Java
                    </div>
                    <div className="lang-soft" id="xml">
                      XML
                    </div>
                    <div className="lang-soft" id="as">
                      AndroidStudio
                    </div>
                    <div className="lang-soft" id="git">
                      Git
                    </div>
                    <div className="lang-soft" id="photoshop">
                      Photoshop
                    </div>
                    <div className="lang-soft" id="xd">
                      XD
                    </div>
              </div>
              <p>
                The purpose of SnowChild is to help you engage with the people around the world without disclosing a space where a user feels at home.
              </p>
              <img src={snowchildtypo} alt="snpwchildTyp0" className="snowChildTypo"/>  
              <p>
               Welcome to SnowChild, a social media platform designed exclusively for creators who dare to dream and craft the extraordinary. At SnowChild, we believe in fostering a community where artistic expression knows no bounds, where creators connect, collaborate, and flourish without any intermediary barriers.
              </p>
              
              <div className="imageSet">
                <img src={ScOne} alt="screenOne" className="screen"/>
                <img src={ScTwo} alt="screenTwo" className="screen"/>
                <img src={ScThree} alt="screenThree" className="screen"/>
                <img src={ScFour} alt="screenFour" className="screen"/>
              </div>

              <p className="mainPoints">
                <h3>A Canvas for Unrestricted Collaboration:</h3>
                Snowchild provides a pristine canvas for creators to showcase their art and invites collaboration without the interference of third-party constraints. Whether you're a visual artist, musician, writer, or any form of creative mind, our platform is your stage to shine, share, and engage.
              </p>
              <p className="mainPoints">
                <h3>Empowering Connections, Igniting Collaborations:</h3>
                Break free from limitations as Snowchild enables creators to connect directly with one another. Collaborate seamlessly on projects, share insights, and fuel your creative journey in an environment built for unrestricted collaboration.
              </p>
              <p className="mainPoints">
                <h3>Engagement Beyond Boundaries:</h3>        
                Snowchild encourages a dynamic and vibrant community where creators and art enthusiasts come together. Express your appreciation through upvotes, share your thoughts, and immerse yourself in a world where every creation is celebrated.
              </p>

              <h3 className="headingText">Key Features:</h3>
              
              <img src={myButton} alt="myButton" className="myButton"/>

              <p className="mainPoints">
                <h3>My Button:</h3>        
                "My Button" serves as your compass, simplifying the way you navigate through Snowchild. With a single click, unlock a world of possibilities as a sleek and unobtrusive box gracefully appears, ready to guide you effortlessly through every corner of the app.
              </p>

              <img src={popularBar} alt="popularBar" className="popularBar"/>

              <p className="mainPoints">
                <h3>Popularity Bar:</h3>        
                The "Popularity Bar" is no ordinary loading bar; it's a fusion of algorithms that intelligently analyze upvotes, followers, thoughts, and collaborative endeavors. Each interaction propels the bar forward, painting a vivid picture of your evolving influence within the Snowchild ecosystem..
              </p>

              <img src={YODB} alt="YourOwn" className="yourOwn"/>  
            </section> 

        </div>
        <Loader type="pacman" />
      </>
    )
  }
  
  export default Snowchild