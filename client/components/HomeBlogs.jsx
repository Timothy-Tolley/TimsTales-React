import React from 'react'
import request from 'superagent'
import {Link} from 'react-router-dom'
import {Image, Transformation} from 'cloudinary-react'

class Post extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      posts: []
    }
  }
  componentDidMount () {
    request.get('api/v1/posts')
      .then(res => {
        this.setState({
          posts: res.body.posts
        })
      })
  }
  render () {
    return (
      this.state.posts.map(post => {
        return (
          <Link to={`/post/${post.id}`} className="postCont" key={post.id}>
            <div className='post'>
              <div className='imageCont'>
                <Image cloudName="timstales" publicId={post.img_prim}
                  className="postImage">
                  <Transformation crop="scale"/>
                </Image>
              </div>
              <h3 className = "postTitle">{post.title}</h3>
              <p className = "blurb">{post.blurb}</p>
            </div>
          </Link>
        )
      }
      ))
  }
}

export default Post
