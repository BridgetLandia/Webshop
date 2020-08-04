import React, { useEffect, useState } from 'react'
import { Container } from 'reactstrap'
import biscuit from '../assets/biscuit.svg'
import AOS from 'aos';

export default function Home() {
  const [ ref, setRef ] = useState([]);

	useEffect(() => {
		AOS.init({
			duration: 3000
    })
  })
    return (
      <div>
        <Container fluid={true} className="mainContent">
        <div id="welcome_text_container">
          <div 
          ref={(ref) => {
            setRef(ref);
          }}
          data-aos="fade-up"
          className="welcome_text_title" >
          <h3><span id="bigger">Ü</span>dvözöllek Süti
          <span>
          <img id="biscuit" src={biscuit}></img>
          </span>Mama Kötödéjében!</h3></div>
          <div 
          ref={(ref) => {
            setRef(ref);
          }}
          data-aos="fade-right"
          className="welcome_text">
          Nézz körül a webshopomban, ahol már 
          elkészített darabjaim közül válogathatsz
          vagy add le egyedi megrendelésed.
          </div>
          <p 
          ref={(ref) => {
            setRef(ref);
          }}
          data-aos="fade-up"
          className="welcome_text_last">Itt minden Szeretettel,<br></br> meg némi fonallal készül.</p>
        </div>
        </Container>
        </div>
    )
}
