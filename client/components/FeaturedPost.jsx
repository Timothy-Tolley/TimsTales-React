import React from 'react'
import {Link} from 'react-router-dom'

const FeaturedPost = (props) => {
  return (
    <Link to={`/post/${props.featuredPost[0].id}`}
      className="featuredPostCont"
      key={props.featuredPost[0].id}>
      <img
        src={props.featuredPost[0].img_prim}
        alt = {props.featuredPost[0].title}
        className = "featuredImage"/>
      <h3 className = "featuredTitle">
        {props.featuredPost[0].title}
      </h3>
      <p className = "featuredBlurb">
        {props.featuredPost[0].blurb}
      </p>
    </Link>
  )
}

export default FeaturedPost
