import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
      <p className = 'foot'>
        <Link to='/home' className="footerLink">
          HOME
        </Link>
      </p>
      <p className = 'foot'>
        <Link to='/about-contact' className="footerLink">
          ABOUT/ CONTACT
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
        <p>
          <a href='https://www.pinterest.nz/tt0l/' className = "footerLink">
            PINTEREST
          </a>
        </p>
      </div>
      <p className = 'foot'>
        <Link to='/login' className="footerLink">
          LOGIN
        </Link>
      </p>
    </div>
  )
}
export default Footer
