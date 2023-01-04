import React from 'react'

function Footer() {
  return (
    <>
    <div className="container-liquid footer-container">
        <div className="social">
            <h3>FASHION</h3>
            <p>Complete your style with awesome <br/>clothes from us.</p>
            <div className="icon">
        <i class='bx bxl-facebook bx-sm icons'></i>
        <i class='bx bxl-instagram bx-sm icons' ></i>
        <i class='bx bxl-twitter bx-sm icons' ></i>
        <i class='bx bxl-linkedin bx-sm icons' ></i>
        </div>
        </div>
    <div className="center">
        <ul className="list">
            <li className="listitem">Home</li>
            <li className="listitem">Cart</li>
            <li className="listitem">Man Fashion</li>
            <li className="listitem">Woman Fashion</li>
            <li className="listitem">Accessories</li>
            <li className="listitem">My Account</li>
            <li className="listitem">Order Tracking</li>
            <li className="listitem">Wishlist</li>
            <li className="listitem">Wishlist</li>
            <li className="listitem">Terms</li>
        </ul>
    </div>
    <div className="contacts">
      <div className="contactitem">
      <i class='bx bxs-map-pin pe-2'></i>
      Lorem ipsum dolor sit amet consectetur adip.
      </div>
      <div className="contactitem">
      <i class='bx bxs-phone pe-2'></i>
      +91 8887626655
      </div>
      <div className="contactitem">
      <i class='bx bx-envelope pe-2' ></i>
      ayushajay52@gmail.com
      </div>
    </div>
    </div>
    </>
  )
}

export default Footer