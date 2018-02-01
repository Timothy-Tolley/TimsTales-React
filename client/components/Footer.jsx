import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <p className = 'foot'>
        <Link to='/home'>
          HOME
        </Link>
      </p>
      <p className = 'foot'>
        <Link to='/contact'>
          CONTACT
        </Link>
      </p>
      <p className = 'foot'>
        <Link to='/about'>
          ABOUT
        </Link>
      </p>
      <div className = 'socialLinks foot'>
        <p>
          <a href = 'https://www.instagram.com/timstales' className = "footerLink">
            INSTA
          </a>
        </p>
        <p>
          <a href='https://www.linkedin.com/in/timothy-tolley/' className = "footerLink">
            LINKEDIN
          </a>
        </p>
      </div>
    </div>
  )
}
export default Footer
