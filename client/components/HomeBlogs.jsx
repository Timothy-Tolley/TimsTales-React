import React from 'react'
import {Link} from 'react-router-dom'

const Post = (props) => {
  return (
    props.posts.map(post => {
      return (
        <Link to={`/post/${post.id}`} className="postLink" key={post.id}>
          <div className='post'>
            <div className='imageCont'>
              <img
                className = 'postImage' src={post.img_prim}/>
            </div>
            <h3 className = "postTitle">{post.title}</h3>
            <p className = "blurb">{post.blurb}</p>
          </div>
        </Link>
      )
    }
    ))
}

export default Post
