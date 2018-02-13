import React from 'react'
import FixedHeader from './FixedHeader'
import Footer from './Footer'
import {Image, Transformation} from 'cloudinary-react'

const post = (props) => {
  return (
    <div className = 'page'>
      <FixedHeader />
      <div className ='postContainer'>
        <Image cloudName="timstales" publicId="timstales-blogposts/Greece2.jpg"
          className="postPhoto">
          <Transformation crop="scale"/>
        </Image>
        <h1 className='postHeader'>Post Title</h1>
        <p className='postcontent'>Post Content</p>
      </div>
      <Footer />
    </div>
  )
}

export default post
