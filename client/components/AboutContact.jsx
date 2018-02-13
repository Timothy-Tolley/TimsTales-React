import React from 'react'

import FixedHeader from './FixedHeader'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'

const AboutContact = (props) => {
  return (
    <div className='aboutContactCont'>
      <FixedHeader />
      <div className='aboutContact'>
        <About />
        <Contact />
      </div>
      <br/>
      <br/>
      <Footer />
    </div>
  )
}

export default AboutContact
