import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/animation'
import MyPic from '../../assets/images/me.jpg'
import Per from '../../assets/images/percent.png'
import './home.scss'
import NavBar from '../NavBar/navBar'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = [' ',' ','S','u', 'm', 'a', 'n', ' ',' ', 'T', 'h', 'a', 'k', 'u', 'r']
  const jobArray = ['C','o','d','e','r',' ',' ','&',' ',' ','D','e','s','i','g','n','e','r']
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <NavBar/>
      <div className="container home-page">
        
        <div className="text-zone">
          <h1>
            <span className={letterClass} id='light'>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <span className='one'>
            <AnimatedLetters className="one"
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            </span>
            
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={18}
            />
          </h1>
          <h2>Full-Stack Developer / Android & Web Solutions / Graphic Designer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>

          <Link to="/about" className="image-zone">
              <img src={MyPic} alt="Pic" className='myPic' id='img'/>
          </Link>
                
      </div>

      <Loader type="pacman"/>
    </>
  )
}

export default Home
