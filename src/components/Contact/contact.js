import React, { useEffect, useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import Loader from "react-loaders";
import AnimatedLetters from '../../components/AnimatedLetters/animation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXTwitter,faLinkedin,faGithub,faStackOverflow,faInstagram,faHackerrank} from '@fortawesome/free-brands-svg-icons'
import NavBar from '../../components/NavBar/navBar'

import "./contact.scss";

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
  
    useEffect(() => {
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }, [])

    const [nameField, setNameField] = useState("");
    const [emailField, setEmailField] = useState("");
    const [messageField, setMessageField] = useState("");

    const form = useRef();

      const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_efxwscv', 'template_bpycjrj', form.current, 'tjB3LkghUZLSqg7N7')
          .then((result) => {
              console.log(result.text);
              alert('Recieved! Will contact you soon, Thankyou');
              setNameField(" ");
              setEmailField(" ");
              setMessageField(" ");

          }, (error) => {
              console.log(error.text);
          });
      };
  
    return (
      <>
        <NavBar/>
        <div className="container contact-page">
         
            <section className='contact-data'>
              <div className="TextZone">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ',' ', 'M', 'e']}
                    idx={15}
                    />
                </h1>
              </div>
              <div className="getInTouch">
                Get in touch with me via social media or email.
              </div> 

              <div className="socialMediaContainer">
                  <div className="socialMedia">
                    <a
                         href="https://twitter.com/thakur0401"
                         target="_blank"
                         rel="noreferrer"
                         id="tx"
                     >
                         <FontAwesomeIcon
                         icon={faXTwitter}
                         color="#8b8a91"
                         className="anchor-icon"
                         id="x"
                     />
                      X
                        </a> 
                  </div>

                  <div className="socialMedia">
                    <a
                         href="https://www.instagram.com/iam.yash.thakur/"
                         target="_blank"
                         rel="noreferrer"
                         id="ig"
                     >
                         <FontAwesomeIcon
                         icon={faInstagram}
                         color="#8b8a91"
                         className="anchor-icon"
                         id="instagram"
                     />
                      Instagram
                        </a>
                  </div>

                  <div className="socialMedia">
                    <a
                         href="https://github.com/sumanthakur0401"
                         target="_blank"
                         rel="noreferrer"
                         id="gh"
                     >
                         <FontAwesomeIcon
                         icon={faGithub}
                         color="#8b8a91"
                         className="anchor-icon"
                         id="github"
                     />
                      Github
                        </a>
                  </div>

                  <div className="socialMedia">
                    <a
                         href="https://www.linkedin.com/in/iamsumanthakur/"
                         target="_blank"
                         rel="noreferrer"
                         id="li"
                     >
                         <FontAwesomeIcon
                         icon={faLinkedin}
                         color="#8b8a91"
                         className="anchor-icon"
                         id="linkedin"
                     />
                      LinkedIn 
                      </a> 
                  </div>

              </div>
            </section>

            <section className="form-section">
              <hr/>
              <div className="form-top-text">
                Send me an email.
              </div>

              <form ref={form} onSubmit={sendEmail}>
                <section className="main-tag">
                  <section className="name-email-tag">
                      <div>
                        <div className="tag-text">
                        Name
                        </div> 
                      <input type="text" name="from_name" value={nameField} onChange={(e) => setNameField(e.target.value)}/>
                      </div>

                      <div>
                        <div className="tag-text">
                        Email
                        </div> 
                      <input type="email" name="from_email" value={emailField} onChange={(e) => setEmailField(e.target.value)}/>
                      </div>
                  </section>
                    
                  <section className="message-tag">
                      <div>
                        <div className="name-tag">
                        Message
                        </div> 
                        <textarea name="message" value={messageField} onChange={(e) => setMessageField(e.target.value)}/>
                      </div>
                  </section>
                </section>
                <div className="button">
                  <input type="submit" value="Send email" />
                </div>
              </form>
            </section>
            
       </div>
        <Loader type="pacman" />
      </>
    )
  }
  
  export default Contact