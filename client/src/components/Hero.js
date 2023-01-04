import React from 'react'
import brand1 from '../Images/obey.png'
import brand2 from '../Images/amazon.png'
import brand3 from '../Images/levis.png'
import brand4 from '../Images/puma.png'
import brand5 from '../Images/shopify.png'
function Hero() {
  return (
    <>
    <div className="container hero-grid">
      <div className="hero-text">
        <p>Let's <br/>Explore <br/><span className='span-text'>Unique</span><br/>Clothes.<br/></p>
      </div>
    <div className="hero"></div>
    </div>
    <div className="brand-container container-fluid">
      <div className='img-div'>
        <img class="brand" src="https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg" alt="H and M" />
      </div>
      <div className='img-div'>
        <img class="brand" src={brand1} alt="Obey" />
      </div>
      <div className='img-div'>
        <img class="brand" src= {brand5} alt="Obey" />
      </div>
      <div className='img-div'>
        <img class="brand" src={brand3} alt="Levis" />
      </div>
      <div className='img-div'>
        <img class="brand" src={brand2} alt="Amazon" />
      </div>
      <div className='img-div'>
        <img class="brand" src={brand4} alt="Puma" style={{marginTop : "0.7em"}}/>
      </div>
    </div>
    </>
  )
}

export default Hero