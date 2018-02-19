import React from 'react'
import {Link} from 'react-router-dom'
import request from 'superagent'

class Post extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      posts: []
    }
  }
  componentDidMount () {
    request.get('api/v1/posts')
      .then(res => console.log(res))
    // this.setState({
    //   posts: res.body
    // }))
  }
  render () {
    return (
      this.props.posts.map(post => {
        return (
          <Link to={`/post/${post.id}`} className="postCont" key={post.id}>
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
}

export default Post
