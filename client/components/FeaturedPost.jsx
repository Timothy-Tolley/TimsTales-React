import React from 'react'

const FeaturedPost = () => {
  return (
    <div className = 'featuredPostCont'>
      <img
        src='http://res.cloudinary.com/timstales/image/upload/v1517439287/timstales-blogposts/le-pirate-bali.jpg'
        alt = 'featuredPost'
        className = "featuredImage"/>
      <h3 className = "featuredTitle">
        Le Pirate - Bali
      </h3>
      <p className = "featuredBlurb">
        Chill Vibes and Endless Summer
      </p>
    </div>
  )
}

export default FeaturedPost
