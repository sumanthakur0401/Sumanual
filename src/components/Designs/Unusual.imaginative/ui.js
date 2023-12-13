import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../../AnimatedLetters/animation"
import NavBar from '../../NavBar/navBar'
import { Link } from 'react-router-dom'
import img1 from '../../../assets/images/UI/img1.jpg'
import img2 from '../../../assets/images/UI/img2.jpg'
import img3 from '../../../assets/images/UI/img3.jpg'
import img4 from '../../../assets/images/UI/img4.jpg'
import img5 from '../../../assets/images/UI/img5.jpg'
import img6 from '../../../assets/images/UI/img6.jpg'
import img7 from '../../../assets/images/UI/img7.jpg'
import img8 from '../../../assets/images/UI/img8.jpg'
import img9 from '../../../assets/images/UI/img9.jpg'
import img10 from '../../../assets/images/UI/img10.jpg'
import img11 from '../../../assets/images/UI/img11.jpg'

import "./ui.scss";


const UI = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
  
    useEffect(() => {
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }, [])
    
    const imgSet=[img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const changeImage = () => {
        // Increment the image index
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imgSet.length);
      };
    useEffect(() => {
        const intervalId = setInterval(changeImage, 3000);
    
        // Clear the interval when the component is unmounted
        return () => clearInterval(intervalId);
    }, []);

    return (
      <>
        <NavBar/>
        <div className="container ui-page">
         
            <section className='project-data'>
              <div className="TextZone">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['U', 'n', 'u', 's', 'u', 'a', 'l', '.', 'i','m', 'a', 'g', 'i', 'n', 'a', 't', 'i', 'v', 'e']}
                    idx={10}
                    />
                </h1>
              </div> 

              <div className="techUsed">
                    <div className="soft-used" id="photoshop">
                      Photoshop
                    </div>
              </div>

              <div className="img-gall">
                <Link to="https://www.instagram.com/unusual.imaginative/" className="img-link">
                    <img src={imgSet[currentImageIndex]} alt="Pic" className='myPic' id='img'/>
                </Link> 
              </div>

              <p className="about">
                Graphic designer and Photoshop enthusiast at <a href="https://www.instagram.com/unusual.imaginative/">unusual.imaginative</a>, showcasing a world where imagination takes the lead. 
                <br/><br/>
                🚀 Dive into a blend of vibrant visuals and purposeful designs that redefine the boundaries of creativity. Join me on this artistic journey! ✨
              </p>

            </section> 
        </div>
        <Loader type="pacman" />
      </>
    )
  }
  
  export default UI