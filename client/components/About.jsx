import React from 'react'

const About = (props) => {
  return (
    <div className = 'about'>
      <h1 className='aboutContactHeader'> ABOUT </h1>
      <img
        src = 'http://res.cloudinary.com/timstales/image/upload/v1517474223/timstales-blogposts/tim-greece.jpg'
        alt = 'Tims Tales Himself'
        className = 'personalImage'/>
      <br/>
      <p className='aboutBlurb'>
        Hi there! I'm Tim and these are my travel tales.
      </p>
      <br/>
      <p className='aboutBlurb'>
        I'm 22 years old and originally from the UK but now, after almost 18 years of calling New Zealand home I think I can safely call myself a Kiwi.  I've been lucky enough to travel to 29 countries in those 22 years and like to think of myself as a bit of a travel fanatic.
      </p>
      <br/>
      <p className='aboutBlurb'>
        For me, travel is a way to grow and a way to live life how its supposed to be lived - in the moment. I've learnt more from travel and the people I have met while travelling that I have ever learnt from an institution and would encourage anyone to give it a go. I hope that this blog, however far it reaches, will inspire at least one person to take a leap and go beyond their comfort zone as its there that you will become your best self.
      </p>
      <br/>
      <p className='aboutBlurb'>
        If anything you read here makes you think, or inspires you to travel or experience new things I would love to hear about it. Contact me through the link below and I'll happily answer anything you have to ask.
      </p >
      <br/>
      <p className='aboutBlurb'>
        Thanks for stopping by,
        <br/>
        Stay inspired,
        <br/>
        TT
      </p>
    </div>
  )
}

export default About
