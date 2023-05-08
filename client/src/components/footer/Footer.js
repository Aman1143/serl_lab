import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
      <footer>
        <div class="footer-content">
          <h3>Invisble Developer</h3>
          <p>SERL LAB </p>
          <p>@ copyright &copy; All rights reserve 2023  </p>
          <ul class="socials">
            <li><a href="#" className='icon'><i className="fa fa-facebook "></i></a></li>
            <li><a href="#" className='icon'><i className="fa fa-twitter "></i></a></li>
            <li><a href="#" className='icon'><i className="fa fa-google-plus "></i></a></li>
            <li><a href="#" className='icon'><i className="fa fa-youtube "></i></a></li>
            <li><a href="#" className='icon'><i className="fa fa-linkedin-square "></i></a></li>
          </ul>
        </div>
      </footer>	</>
  )
}

export default Footer