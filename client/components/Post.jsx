import React from 'react'
import FixedHeader from './FixedHeader'
import Footer from './Footer'
import {Image} from 'cloudinary-react'

// import {Link} from 'react-router-dom'


const post = (props) => {
  // currPost={}
  // if (post.id === match) {
  // }
  return (
    <div className = 'page'>
      <FixedHeader />
      <div className ='postContainer'>
        <Image cloudName="timstales" publicId="timstales-blogposts/Greece2.jpg"/>
        <h1 className='postHeader'>{props.}</h1>
        <p className='postcontent'>{props.}</p>
      </div>
      <Footer />
    </div>
  )
}

export default FeaturedPost

// `${post.match}`} alt={`${post.match}`
